const express = require('express');
const app = express();


const characters = [
    {
        image: 'https://ibb.co/vkbPygg',
        traits: 'Male GreyHair',
        tags: 'Adult Anti-Gravity Hair Beastmaster Exotic Eyes Gloves HeadbandMasks NinjaScar',
        fullName: 'kakashi hatake',
        firstName: 'kakashi'
    },
    {
        image: 'https://ibb.co/Zz1N9yg',
        traits: 'Male Black Hair',
        tags: 'Analytical Bare foot Detective Eye Bags Sweet Tooth',
        fullName: 'L',
        firstName: 'L'
    },
  {
      image: 'https://ibb.co/wY9xVrS',
      traits: 'Male Blonde Hair',
      tags: 'Beastmaster ',
      fullName: 'naruto uzumaki',
      firstName: 'naruto'
  },
  {
      image: 'https://ibb.co/vJ0ZcQB',
      traits: 'male black hair',
      tags: 'adult ruthless sword fighter',
      fullName: 'levi ackerman',
      firstName: 'levi'
  },
  {
      image: 'https://ibb.co/gVsvdTT',
      traits: 'male brownhair',
      tags: 'analytical manipulative secret identity ruthless',
      fullName: 'light yagami',
      firstName: 'light'
  },
  {
      image: 'https://ibb.co/k5yYbmK',
      traits: 'male blonde hair',
      tags: 'alchemist ponytail ',
      fullName: 'edward elric',
      firstName: 'edward'
  },
  {
      image: 'https://ibb.co/HDV1jtK',
      traits: 'male black hair',
      tags: 'combat ullusionist exotix eyes ninja',
      fullName: 'itachi uchiha',
      firstName: 'itachi'
  },
  {
      image: 'https://ibb.co/3R9WM7g',
      traits: 'female blackhair',
      tags: 'scarf dword fighter orphan',
      fullName: 'mikasa ackerman',
      firstName: 'mikasa'
  },
  {
      image: 'https://ibb.co/jZ6C79D',
      traits: 'male red hair',
      tags: 'ninja tattoo no eyebrows ',
      fullName: 'gaara',
      firstName: 'gaara'
  },
  {
      image: 'https://ibb.co/wYKMsJY',
      traits: 'male blackhair',
      tags: 'shinigami wings sharp teeth apple lover',
      fullName: 'ryuk',
      firstName: 'ryuk'
  },
  {
      image: 'https://ibb.co/WtybXkT',
      traits: 'male black hair',
      tags: 'hat pirate scar treasure hunter big eater',
      fullName: 'monkey d luffy',
      firstName: 'luffy'
  },
  {
      image: 'https://ibb.co/8j3VndF',
      traits: 'male pink hair',
      tags: 'big eater elemental powers fire powers scarf orphan',
      fullName: 'natsu dragneel',
      firstName: 'natsu'
  },
  {
      image: 'https://ibb.co/KzHC3H9',
      traits: 'male black hair',
      tags: 'high school std manipulative ruthless',
      fullName: 'lelouch lamperouge',
      firstName: 'lelouch'
  },
  {
      image: 'https://ibb.co/yRgxnfw',
      traits: 'male black hair',
      tags: 'adult alchemist gloves elemental powers',
      fullName: 'roy mustang',
      firstName: 'roy'
  },
  {
      image: 'https://ibb.co/PCkx2T8',
      traits: 'male red hair',
      tags: 'demon hunter scar orphan teenager sword fighter',
      fullName: 'tanjiro kamado',
      firstName: 'tanjiro'
  },
  {
      image: 'https://ibb.co/bK8L0m8',
      traits: 'male black hair',
      tags: 'sword fighter video gamer warrior',
      fullName: 'kirito',
      firstName: 'kirito'
  },
  {
      image: 'https://ibb.co/jyPPNQD',
      traits: 'female red hair',
      tags: 'armor bossy sweet tooth sword fighter ',
      fullName: 'erza scarlet',
      firstName: 'erza'
  },
  {
      image: 'https://ibb.co/0Q7Q2N3',
      traits: 'female multi coloured hair',
      tags: 'demon orphan',
      fullName: 'nezuko kamado',
      firstName: 'nezuko'
  },
  {
      image: 'https://ibb.co/Srx2T4g',
      traits: 'male black hair',
      tags: 'analytical shadow power lazy ninja ',
      fullName: 'shikamaru nara',
      firstName: 'shikamaru'
  },
  {
      image: 'https://ibb.co/KzTrTSC',
      traits: 'male brown hair',
      tags: 'hot headed titan sword fighter military',
      fullName: 'eren jaeger',
      firstName: 'eren'
  },
  {
      image: 'https://ibb.co/Pc8bc3Z',
      traits: 'male black hair',
      tags: 'animal lover demon immortal manipulative',
      fullName: 'sebastian michaelis',
      firstName: 'sebastian'
  },
  {
      image: 'https://ibb.co/fM4bMSy',
      traits: 'male green hair',
      tags: 'bandana scar sleepy sowrd fighter pirate no sense of direction',
      fullName: 'roronoa zoro',
      firstName: 'zoro'
  },
  {
      image: 'https://ibb.co/zH50RPD',
      traits: 'female black hair',
      tags: 'dandere exotic eyes nunja shy',
      fullName: 'hinata hyuga',
      firstName: 'hinata'
  },
  {
      image: 'https://ibb.co/7vMPBg2',
      traits: 'male white hair',
      tags: 'analytical assassin child',
      fullName: 'killua zoldyck',
      firstName: 'killua'
  },
  {
      image: 'https://ibb.co/B2BK4Wq',
      traits: 'male blonde hair ',
      tags: 'alchemist animal lover armor',
      fullName: 'alphonse elric',
      firstName: 'elric'
  },
  {
      image: 'https://ibb.co/MhkBcFX',
      traits: 'female brown hair',
      tags: 'braids cook dword fighter video gamer',
      fullName: 'asuna yuuki',
      firstName: 'yuuki'
  },
  {
      image: 'https://ibb.co/nCJ604h',
      traits: 'male white hair',
      tags: 'adult beast master flirt ninja pervert ',
      fullName: 'jiraya',
      firstName: 'jiraya'
  },
  {
      image: 'https://ibb.co/1fSB7Wk',
      traits: 'male orange hair',
      tags: 'shinigami sword fighter high school std',
      fullName: 'ichigo kurosaki',
      firstName: 'ichigo'
  },
  {
      image: 'https://ibb.co/26TD32K',
      traits: 'male multicoloured hair',
      tags: 'shinigami bossy dual wielder',
      fullName: 'death the kid',
      firstName: 'death'
  },
  {
      image: 'https://ibb.co/559FcGF',
      traits: 'male white hair',
      tags: 'adult blind fold exorcist teacher',
      fullName: 'satoru gojo',
      firstName: 'gojo'
  },
  {
      image: 'https://ibb.co/1zDngL3',
      traits: 'male black hair',
      tags: 'elemental powers ninja orphan exotic eyes',
      fullName: 'sasuke uchiha',
      firstName: 'sasuke'
  },
  {
      image: 'https://ibb.co/Z120jDk',
      traits: 'male black hair',
      tags: 'elemental powers magic user',
      fullName: 'gray fullbuster',
      firstName: 'gray'
  },
  {
      image: 'https://ibb.co/0XKFTHL',
      traits: 'male blackhair',
      tags: 'cook demon demon hunter exorcist',
      fullName: 'rin okumura',
      firstName: 'rin'
  },
  {
      image: 'https://ibb.co/RQjzFs1',
      traits: 'male multi coloured hair',
      tags: 'big eater sword fighter orphan masks',
      fullName: 'inosuke hashibira',
      firstName: 'inosuke'
  },
  {
      image: 'https://ibb.co/gyYdmcd',
      traits: 'male green hair',
      tags: 'analytical crybaby superpowers',
      fullName: 'izuku midoriya',
      firstName: 'izuku'
  },
  {
      image: 'https://ibb.co/VWYkwDy',
      traits: 'male multicoloured hair',
      tags: 'analytical superpowers scar',
      fullName: 'shoto todoroki',
      firstName: 'shoto'
  },
  {
      image: 'https://ibb.co/4FNtPyw',
      traits: 'female brown hair ',
      tags: 'high school student',
      fullName: 'taiga aisaka',
      firstName: 'taiga'
  },
  {
      image: 'https://ibb.co/qBNtyrQ',
      traits: 'male blonde hair',
      tags: 'analytical military sword fighter',
      fullName: 'armin arlelt',
      firstName: 'armin'
  },
  {
      image: 'https://ibb.co/wzqFCZ8',
      traits: 'male bald',
      tags: 'adult superpowers gloves cape',
      fullName: 'saitama',
      firstName: 'saitama'
  },
  {
      image: 'https://ibb.co/4J8D3HJ',
      traits: 'female white hair',
      tags: 'armblades student council',
      fullName: 'kanade tachibana',
      firstName: 'kanade'
  },
  {
      image: 'https://ibb.co/88ysxT0',
      traits: 'male blonde hair',
      tags: 'hat merchant shinigami sword fighter',
      fullName: 'kisuke urahaha',
      firstName: 'kisuke'
  },
  {
      image: 'https://ibb.co/HYRyMSJ',
      traits: 'male ',
      tags: 'exotic eyes eyepatch monster orphan',
      fullName: 'ken kaneki',
      firstName: 'ken'
  },
  {
      image: 'https://ibb.co/G30wmwZ',
      traits: 'male black hair',
      tags: 'adult knife fighter',
      fullName: 'maes hughes',
      firstName: 'maes'
  },
  {
      image: 'https://ibb.co/xskq7k0',
      traits: 'male blonde hair',
      tags: 'cook high school student martial artist musician',
      fullName: 'takumi usui',
      firstName: 'takumi'
  },
  {
      image: 'https://ibb.co/jg9Tm0R',
      traits: 'female brownhair',
      tags: 'abalytical crossdresser host ',
      fullName: 'haruhi fujioka',
      firstName: 'haruhi'
  },
  {
      image: 'https://ibb.co/QvhTGsX',
      traits: 'male orange hair',
      tags: 'high school std twin wealthy host',
      fullName: 'hikaru hitachiin',
      firstName: 'hikaru'
  },
  {
      image: 'https://ibb.co/gz8PP1c',
      traits: 'male black hair',
      tags: 'muscular big eater martial artist eternal optimist',
      fullName: 'goku son',
      firstName: 'goku'
  },
  {
      image: 'https://ibb.co/JpG430Q',
      traits: 'male blonde hair',
      tags: 'flirt wealthy high school std host',
      fullName: 'tamaki suoh',
      firstName: 'tamaki'
  },
  {
      image: 'https://ibb.co/VL3JvP7',
      traits: 'female blonde hair',
      tags: 'magic user summoners ',
      fullName: 'lucy heartfilia',
      firstName: 'lucy'
  },
  {
      image: 'https://ibb.co/0YTrypS',
      traits: 'brown hair female',
      tags: 'adult glasses military sowrd fighter',
      fullName: 'hange zoe',
      firstName: 'hange'
  },
  {
      image: 'https://ibb.co/MsxvWLW',
      traits: 'male multi coloured hair',
      tags: 'demon hunter sword fighter crybaby',
      fullName: 'zenitsu agatsuma',
      firstName: 'zenitsu'
  },
  {
      image: 'https://ibb.co/KmvVHFz',
      traits: 'female pink hair',
      tags: 'horns ruthless split personality',
      fullName: 'lucy',
      firstName: 'lucy'
  },
  {
      image: 'https://ibb.co/4SMDKwC',
      traits: 'male blonde hair',
      tags: 'big ego superpowers selfish',
      fullName: 'katsuki bakugo',
      firstName: 'katsuki'
  },
  {
      image: 'https://ibb.co/4j77Xvf',
      traits: 'male purple hair',
      tags: 'bandana sword fighter immortal',
      fullName: 'yato',
      firstName: 'yato'
  },
  {
      image: 'https://ibb.co/HGvN4Vm',
      traits: 'male blonde hair',
      tags: 'cook pervert pirate smoker',
      fullName: 'vinsmoke sanji',
      firstName: 'sanji'
  },
  {
      image: 'https://ibb.co/bRyj1HN',
      traits: 'male black hair',
      tags: 'gloves elemental powers sunglasses',
      fullName: 'alucard',
      firstName: 'alucard'
  },
  {
      image: 'https://ibb.co/4d6128C',
      traits: 'male black hair',
      tags: 'shinigami sowrd fighter scar no eyebrows',
      fullName: 'kenpachi zaraki',
      firstName: 'kenpachi'
  },
  {
      image: 'https://ibb.co/7Wy60QN',
      traits: 'male orange hair',
      tags: 'high school std hot headed martial artist',
      fullName: 'kyo sohma',
      firstName: 'kyo'
  },
  {
      image: 'https://ibb.co/jgR9Mg5',
      traits: 'female brown hair',
      tags: 'big eater sword fighter military',
      fullName: 'sasha braus',
      firstName: 'sasha'
  },
  {
      image: 'https://ibb.co/hVQXXsJ',
      traits: 'female blonde hair',
      tags: 'adult gunslinger sniper military',
      fullName: 'riza hawkeye',
      firstName: 'riza'
  },
  {
      image: 'https://ibb.co/V3gQHgT',
      traits: 'male blackhair',
      tags: 'child eternal optimist spikes hair',
      fullName: 'gon freecss',
      firstName: 'gon'
  },
  {
      image: 'https://ibb.co/x5tcL4t',
      traits: 'male black hair',
      tags: 'bowl cut ninja spic eyebrows honorable fighter',
      fullName: 'rock lee',
      firstName: 'lee'
  },
  {
      image: 'https://ibb.co/TtZCcQ2',
      traits: 'female black hair',
      tags: 'high school student maid poor waiter ',
      fullName: 'misaki ayuzawa',
      firstName: 'misaki'
  },
  {
      image: 'https://ibb.co/Q8CQxvS',
      traits: 'male orange hair',
      tags: 'airhead hot headed volleyball player',
      fullName: 'shoyo hinata',
      firstName: 'hinata'
  },
  {
      image: 'https://ibb.co/Q8CQxvS',
      traits: 'male blonde hair',
      tags: 'ninja teleportation powers beastmaster ',
      fullName: 'minato namikaze',
      firstName: 'minato'
  },
  {
      image: 'https://ibb.co/FXmMWcb',
      traits: 'female pink hair',
      tags: 'analytical broken record',
      fullName: 'yuno gasai',
      firstName: 'yuno'
  },
  {
      image: 'https://ibb.co/tXt7965',
      traits: 'female blackhair',
      tags: 'sword fighter shinigami nobility ice powers',
      fullName: 'rukia kuchiki',
      firstName: 'rukia'
  },
  {
      image: 'https://ibb.co/ScyKV2D',
      traits: 'male white hair',
      tags: 'elemental powers sword fighter shinigami',
      fullName: 'toshiro hitsugaya',
      firstName: 'toshiro'
  },
  {
      image: 'https://ibb.co/ZSyw5mb',
      traits: 'male blonde hair',
      tags: 'adult sunglasses smoker bow tie',
      fullName: 'shizuo heiwajima',
      firstName: 'shizuo'
  },
  {
      image: 'https://ibb.co/VvYJLm6',
      traits: 'male multicoloured hair',
      tags: 'adult pacifist traveler secret identity magic user',
      fullName: 'howl',
      firstName: 'howl'
  },
  {
      image: 'https://ibb.co/Jc0Q809',
      traits: 'male pink hair',
      tags: 'shared body exorcist airhead ',
      fullName: 'yuji itadori',
      firstName: 'yuji'
  },
  {
      image: 'https://ibb.co/jb8hn7g',
      traits: 'female blonde hair',
      tags: 'hyperactive idol',
      fullName: 'misa amane',
      firstName: 'misa'
  },
  {
      image: 'https://ibb.co/Mg5G6RX',
      traits: 'male',
      tags: 'big ego pervert ruthless blood thirsty',
      fullName: 'hisoka morow',
      firstName: 'hisoka'
  },
  {
      image: 'https://ibb.co/PgLpLwT',
      traits: 'male black hair',
      tags: 'adult analytical knife fighter',
      fullName: 'izaya orihara',
      firstName: 'izaya'
  },
  {
      image: 'https://ibb.co/VDNR60X',
      traits: 'female purple hair',
      tags: 'dark skinned martial artist shinigami',
      fullName: 'yoruichi shihouin',
      firstName: 'yoruichi'
  },
  {
      image: 'https://ibb.co/GCpYqdK',
      traits: 'male grey hair',
      tags: 'scientist adult scar teacher smoker',
      fullName: 'franken stein',
      firstName: 'franken'
  },
  {
      image: 'https://ibb.co/z8Ftdjk',
      traits: 'male black hair',
      tags: 'demon hunter sword fighter',
      fullName: 'giyuu tomioka',
      firstName: 'tomioka'
  },
  {
      image: 'https://ibb.co/82T1Zvp',
      traits: 'male red hair',
      tags: 'elemental powers sword fighter monster',
      fullName: 'benimaru',
      firstName: 'benimaru'
  },
  {
      image: 'https://ibb.co/pJbJfm7',
      traits: 'male black hair',
      tags: 'exotic eyes ninja',
      fullName: 'neji hyuga',
      firstName: 'neji'
  },
  {
      image: 'https://ibb.co/sqkdCzc',
      traits: 'male black hair',
      tags: 'spike hair armor warrior big ego alien',
      fullName: 'vegeta',
      firstName: 'vegeta'
  },
  {
      image: 'https://ibb.co/6B48wqH',
      traits: 'male black hair',
      tags: 'analytical volleyball player',
      fullName: 'tobio kageyama',
      firstName: 'tobio'
  }, 
  {
      image: 'https://ibb.co/TrPv7Md',
      traits: 'female orange hair',
      tags: 'bossy pirate treasure hunter orphan tattoo',
      fullName: 'nami',
      firstName: 'nami'
  },
  {
      image: 'https://ibb.co/XSdf1TD',
      traits: 'male black hair',
      tags: 'glasses host teenager',
      fullName: 'kyoya ootori',
      firstName: 'kyoya'
  },
  {
      image: 'https://ibb.co/2t9sw4Y',
      traits: 'female multicoloured hair',
      tags: 'analytical child royalty',
      fullName: 'shiro',
      firstName: 'shiro'
  },
  {
      image: 'https://ibb.co/k8rT4tv',
      traits: 'female blue hair',
      tags: 'waiter monster part time employee',
      fullName: 'touka kirishima',
      firstName: 'touka kirishima'
  },
  {
      image: 'https://ibb.co/rsd50RS',
      traits: 'female blonde hair',
      tags: 'high scl std warrior scythe warrior',
      fullName: 'maka albarn',
      firstName: 'maka'
  },
  {
      image: 'https://ibb.co/jgkxpCY',
      traits: 'female black hair',
      tags: 'adult archaelogist pirate',
      fullName: 'nico robin',
      firstName: 'robin'
  },
  {
      image: 'https://ibb.co/HFWdN1B',
      traits: 'male grey hair',
      tags: 'shinigami scar hat',
      fullName: 'undertaker',
      firstName: 'undertaker'
  },
  {
      image: 'https://ibb.co/4SFyzZg',
      traits: 'female brown hair',
      tags: 'headband selfish lgbt+',
      fullName: 'haruhi suzumiya',
      firstName: 'suzumiya'
  },
  {
      image: 'https://ibb.co/5LgrP5p',
      traits: 'male black hair',
      tags: 'shinigami sword fighter ',
      fullName: 'byakuya kuchiki',
      firstName: 'byakuya'
  },
  {
      image: 'https://ibb.co/tQzMXf4',
      traits: 'male red hair',
      tags: 'analytical middle scl std',
      fullName: 'karma akabane',
      firstName: 'karma'
  },
  {
      image: 'https://ibb.co/f4T8y65',
      traits: 'female red hair',
      tags: 'scientist',
      fullName: 'kurisu makise',
      firstName: 'kurisu'
  },
  {
      image: 'https://ibb.co/nQsDvdX',
      traits: 'male black hair',
      tags: 'knife fighter superpowers',
      fullName: 'hei',
      firstName: 'hei'
  },
  {
      image: 'https://ibb.co/M9y11Y4',
      traits: 'female pink hair',
      tags: 'ninja headband dustbin trash',
      fullName: 'sakura haruno',
      firstName: 'sakura'
  },
  {
      image: 'https://ibb.co/zr32G1z',
      traits: 'male black hair',
      tags: 'adult superpowers scarf martial artist',
      fullName: 'shota aizawa',
      firstName: 'aizawa'
  },
  {
      image: 'https://ibb.co/LxgsqMy',
      traits: 'female blonde hair',
      tags: 'doctor gambler heavy drinkers ninja beastmaster',
      fullName: 'tsunade senju',
      firstName: 'tsunade'
  },
  {
      image: 'https://ibb.co/2qdkDYr',
      traits: 'male black hair',
      tags: 'adult big eater hat pirate tatto sleepyhead',
      fullName: 'portgas d ace',
      firstName: 'ace'
  },
  {
      image: 'https://ibb.co/28spWNH',
      traits: 'male blonde hair',
      tags: 'analytical exotic eyes orphan ',
      fullName: 'kurapika',
      firstName: 'kurapika'
  },
  {
      image: 'https://ibb.co/28spWNH',
      traits: 'male black hair',
      tags: 'darkness powers exorcist sowrd fighter',
      fullName: 'megumi fushiguro',
      firstName: 'megumi'
  },
  {
      image: 'https://ibb.co/Sm1Phsw',
      traits: 'male multicoloured hair',
      tags: 'sword fighter hashira fire powers',
      fullName: 'kyoujurou rengoku',
      firstName: 'rengoku'
  },
  {
      image: 'https://ibb.co/NjQXSkG',
      traits: 'male brown hair',
      tags: 'analytical superpowers mischievious',
      fullName: 'osamu dazai',
      firstName: 'dazai'
  },
  {
      image: 'https://ibb.co/DRGvqKm',
      traits: 'male brown hair ',
      tags: 'deer pirate doctor animal',
      fullName: 'chopper',
      firstName: 'chopper'
  },
  {
      image: 'https://ibb.co/KwqGvMB',
      traits: 'male white hair',
      tags: 'lazy adult sword fighter big eater samurai',
      fullName: 'gintoki sakata',
      firstName: 'gintoki'
  },
  {
      image: 'https://ibb.co/w4Yq4VN',
      traits: 'male blonde hair',
      tags: 'cyborg',
      fullName: 'genos',
      firstName: 'genos'
  },
  {
      image: 'https://ibb.co/RCxmbH0',
      traits: 'male black hair',
      tags: 'adult beast master epic eyebrows ninja',
      fullName: 'might guy',
      firstName: 'guy'
  },
  {
      image: 'https://ibb.co/P4hnYJV',
      traits: 'male blue hair',
      tags: 'blood thirsty',
      fullName: 'grimmjow',
      firstName: 'grimmjow'
  },
  {
      image: 'https://ibb.co/3zDD3p0',
      traits: 'male red hair',
      tags: 'yonko red hair pirate sword fighter ',
      fullName: 'shanks',
      firstName: 'shanks'
  },
  
  


];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let remainingCharacters = shuffle([...characters]); 


app.get('/kshitiz', (req, res) => {
    if (remainingCharacters.length === 0) {

        remainingCharacters = shuffle([...characters]);
    }

    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    const randomCharacter = remainingCharacters[randomIndex];
    remainingCharacters.splice(randomIndex, 1);
    res.json(randomCharacter);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
