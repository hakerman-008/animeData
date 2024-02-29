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
      image: '',
      traits: 'Male Blonde Hair',
      tags: 'Beastmaster ',
      fullName: 'naruto uzumaki',
      firstName: 'naruto'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult ruthless sword fighter',
      fullName: 'levi ackerman',
      firstName: 'levi'
  },
  {
      image: '',
      traits: 'male brownhair',
      tags: 'analytical manipulative secret identity ruthless',
      fullName: 'light yagami',
      firstName: 'light'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'alchemist ponytail ',
      fullName: 'edward elric',
      firstName: 'edward'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'combat ullusionist exotix eyes ninja',
      fullName: 'itachi uchiha',
      firstName: 'itachi'
  },
  {
      image: '',
      traits: 'female blackhair',
      tags: 'scarf dword fighter orphan',
      fullName: 'mikasa ackerman',
      firstName: 'mikasa'
  },
  {
      image: '',
      traits: 'male red hair',
      tags: 'ninja tattoo no eyebrows ',
      fullName: 'gaara',
      firstName: 'gaara'
  },
  {
      image: '',
      traits: 'male blackhair',
      tags: 'shinigami wings sharp teeth apple lover',
      fullName: 'ryuk',
      firstName: 'ryuk'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'hat pirate scar treasure hunter big eater',
      fullName: 'monkey d luffy',
      firstName: 'luffy'
  },
  {
      image: '',
      traits: 'male pink hair',
      tags: 'big eater elemental powers fire powers scarf orphan',
      fullName: 'natsu dragneel',
      firstName: 'natsu'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'high school std manipulative ruthless',
      fullName: 'lelouch lamperouge',
      firstName: 'lelouch'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult alchemist gloves elemental powers',
      fullName: 'roy mustang',
      firstName: 'roy'
  },
  {
      image: '',
      traits: 'male red hair',
      tags: 'demon hunter scar orphan teenager sword fighter',
      fullName: 'tanjiro kamado',
      firstName: 'tanjiro'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'sword fighter video gamer warrior',
      fullName: 'kirito',
      firstName: 'kirito'
  },
  {
      image: '',
      traits: 'female red hair',
      tags: 'armor bossy sweet tooth sword fighter ',
      fullName: 'erza scarlet',
      firstName: 'erza'
  },
  {
      image: '',
      traits: 'female multi coloured hair',
      tags: 'demon orphan',
      fullName: 'nezuko kamado',
      firstName: 'nezuko'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'analytical shadow power lazy ninja ',
      fullName: 'shikamaru nara',
      firstName: 'shikamaru'
  },
  {
      image: '',
      traits: 'male brown hair',
      tags: 'hot headed titan sword fighter military',
      fullName: 'eren jaeger',
      firstName: 'eren'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'animal lover demon immortal manipulative',
      fullName: 'sebastian michaelis',
      firstName: 'sebastian'
  },
  {
      image: '',
      traits: 'male green hair',
      tags: 'bandana scar sleepy sowrd fighter pirate no sense of direction',
      fullName: 'roronoa zoro',
      firstName: 'zoro'
  },
  {
      image: '',
      traits: 'female black hair',
      tags: 'dandere exotic eyes nunja shy',
      fullName: 'hinata hyuga',
      firstName: 'hinata'
  },
  {
      image: '',
      traits: 'male white hair',
      tags: 'analytical assassin child',
      fullName: 'killua zoldyck',
      firstName: 'killua'
  },
  {
      image: '',
      traits: 'male blonde hair ',
      tags: 'alchemist animal lover armor',
      fullName: 'alphonse elric',
      firstName: 'elric'
  },
  {
      image: '',
      traits: 'female brown hair',
      tags: 'braids cook dword fighter video gamer',
      fullName: 'asuna yuuki',
      firstName: 'yuuki'
  },
  {
      image: '',
      traits: 'male white hair',
      tags: 'adult beast master flirt ninja pervert ',
      fullName: 'jiraya',
      firstName: 'jiraya'
  },
  {
      image: '',
      traits: 'male orange hair',
      tags: 'shinigami sword fighter high school std',
      fullName: 'ichigo kurosaki',
      firstName: 'ichigo'
  },
  {
      image: '',
      traits: 'male multicoloured hair',
      tags: 'shinigami bossy dual wielder',
      fullName: 'death the kid',
      firstName: 'death'
  },
  {
      image: '',
      traits: 'male white hair',
      tags: 'adult blind fold exorcist teacher',
      fullName: 'satoru gojo',
      firstName: 'gojo'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'elemental powers ninja orphan exotic eyes',
      fullName: 'sasuke uchiha',
      firstName: 'sasuke'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'elemental powers magic user',
      fullName: 'gray fullbuster',
      firstName: 'gray'
  },
  {
      image: '',
      traits: 'male blackhair',
      tags: 'cook demon demon hunter exorcist',
      fullName: 'rin okumura',
      firstName: 'rin'
  },
  {
      image: '',
      traits: 'male multi coloured hair',
      tags: 'big eater sword fighter orphan masks',
      fullName: 'inosuke hashibira',
      firstName: 'inosuke'
  },
  {
      image: '',
      traits: 'male green hair',
      tags: 'analytical crybaby superpowers',
      fullName: 'izuku midoriya',
      firstName: 'izuku'
  },
  {
      image: '',
      traits: 'male multicoloured hair',
      tags: 'analytical superpowers scar',
      fullName: 'shoto todoroki',
      firstName: 'shoto'
  },
  {
      image: '',
      traits: 'female brown hair ',
      tags: 'high school student',
      fullName: 'taiga aisaka',
      firstName: 'taiga'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'analytical military sword fighter',
      fullName: 'armin arlelt',
      firstName: 'armin'
  },
  {
      image: '',
      traits: 'male bald',
      tags: 'adult superpowers gloves cape',
      fullName: 'saitama',
      firstName: 'saitama'
  },
  {
      image: '',
      traits: 'female white hair',
      tags: 'armblades student council',
      fullName: 'kanade tachibana',
      firstName: 'kanade'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'hat merchant shinigami sword fighter',
      fullName: 'kisuke urahaha',
      firstName: 'kisuke'
  },
  {
      image: '',
      traits: 'male ',
      tags: 'exotic eyes eyepatch monster orphan',
      fullName: 'ken kaneki',
      firstName: 'ken'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult knife fighter',
      fullName: 'maes hughes',
      firstName: 'maes'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'cook high school student martial artist musician',
      fullName: 'takumi usui',
      firstName: 'takumi'
  },
  {
      image: '',
      traits: 'female brownhair',
      tags: 'abalytical crossdresser host ',
      fullName: 'haruhi fujioka',
      firstName: 'haruhi'
  },
  {
      image: '',
      traits: 'male orange hair',
      tags: 'high school std twin wealthy host',
      fullName: 'hikaru hitachiin',
      firstName: 'hikaru'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'muscular big eater martial artist eternal optimist',
      fullName: 'goku son',
      firstName: 'goku'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'flirt wealthy high school std host',
      fullName: 'tamaki suoh',
      firstName: 'tamaki'
  },
  {
      image: '',
      traits: 'female blonde hair',
      tags: 'magic user summoners ',
      fullName: 'lucy heartfilia',
      firstName: 'lucy'
  },
  {
      image: '',
      traits: 'brown hair female',
      tags: 'adult glasses military sowrd fighter',
      fullName: 'hange zoe',
      firstName: 'hange'
  },
  {
      image: '',
      traits: 'male multi coloured hair',
      tags: 'demon hunter sword fighter crybaby',
      fullName: 'zenitsu agatsuma',
      firstName: 'zenitsu'
  },
  {
      image: '',
      traits: 'female pink hair',
      tags: 'horns ruthless split personality',
      fullName: 'lucy',
      firstName: 'lucy'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'big ego superpowers selfish',
      fullName: 'katsuki bakugo',
      firstName: 'katsuki'
  },
  {
      image: '',
      traits: 'male purple hair',
      tags: 'bandana sword fighter immortal',
      fullName: 'yato',
      firstName: 'yato'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'cook pervert pirate smoker',
      fullName: 'vinsmoke sanji',
      firstName: 'sanji'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'gloves elemental powers sunglasses',
      fullName: 'alucard',
      firstName: 'alucard'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'shinigami sowrd fighter scar no eyebrows',
      fullName: 'kenpachi zaraki',
      firstName: 'kenpachi'
  },
  {
      image: '',
      traits: 'male orange hair',
      tags: 'high school std hot headed martial artist',
      fullName: 'kyo sohma',
      firstName: 'kyo'
  },
  {
      image: '',
      traits: 'female brown hair',
      tags: 'big eater sword fighter military',
      fullName: 'sasha braus',
      firstName: 'sasha'
  },
  {
      image: '',
      traits: 'female blonde hair',
      tags: 'adult gunslinger sniper military',
      fullName: 'riza hawkeye',
      firstName: 'riza'
  },
  {
      image: '',
      traits: 'male blackhair',
      tags: 'child eternal optimist spikes hair',
      fullName: 'gon freecss',
      firstName: 'gon'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'bowl cut ninja spic eyebrows honorable fighter',
      fullName: 'rock lee',
      firstName: 'lee'
  },
  {
      image: '',
      traits: 'female black hair',
      tags: 'high school student maid poor waiter ',
      fullName: 'misaki ayuzawa',
      firstName: 'misaki'
  },
  {
      image: '',
      traits: 'male orange hair',
      tags: 'airhead hot headed volleyball player',
      fullName: 'shoyo hinata',
      firstName: 'hinata'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'ninja teleportation powers beastmaster ',
      fullName: 'minato namikaze',
      firstName: 'minato'
  },
  {
      image: '',
      traits: 'female pink hair',
      tags: 'analytical broken record',
      fullName: 'yuno gasai',
      firstName: 'yuno'
  },
  {
      image: '',
      traits: 'female blackhair',
      tags: 'sword fighter shinigami nobility ice powers',
      fullName: 'rukia kuchiki',
      firstName: 'rukia'
  },
  {
      image: '',
      traits: 'male white hair',
      tags: 'elemental powers sword fighter shinigami',
      fullName: 'toshiro hitsugaya',
      firstName: 'toshiro'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'adult sunglasses smoker bow tie',
      fullName: 'shizuo heiwajima',
      firstName: 'shizuo'
  },
  {
      image: '',
      traits: 'male multicoloured hair',
      tags: 'adult pacifist traveler secret identity magic user',
      fullName: 'howl',
      firstName: 'howl'
  },
  {
      image: '',
      traits: 'male pink hair',
      tags: 'shared body exorcist airhead ',
      fullName: 'yuji itadori',
      firstName: 'yuji'
  },
  {
      image: '',
      traits: 'female blonde hair',
      tags: 'hyperactive idol',
      fullName: 'misa amane',
      firstName: 'misa'
  },
  {
      image: '',
      traits: 'male',
      tags: 'big ego pervert ruthless blood thirsty',
      fullName: 'hisoka morow',
      firstName: 'hisoka'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult analytical knife fighter',
      fullName: 'izaya orihara',
      firstName: 'izaya'
  },
  {
      image: '',
      traits: 'female purple hair',
      tags: 'dark skinned martial artist shinigami',
      fullName: 'yoruichi shihouin',
      firstName: 'yoruichi'
  },
  {
      image: '',
      traits: 'male grey hair',
      tags: 'scientist adult scar teacher smoker',
      fullName: 'franken stein',
      firstName: 'franken'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'demon hunter sword fighter',
      fullName: 'giyuu tomioka',
      firstName: 'tomioka'
  },
  {
      image: '',
      traits: 'male red hair',
      tags: 'elemental powers sword fighter monster',
      fullName: 'benimaru',
      firstName: 'benimaru'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'exotic eyes ninja',
      fullName: 'neji hyuga',
      firstName: 'neji'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'spike hair armor warrior big ego alien',
      fullName: 'vegeta',
      firstName: 'vegeta'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'analytical volleyball player',
      fullName: 'tobio kageyama',
      firstName: 'tobio'
  }, 
  {
      image: '',
      traits: 'female orange hair',
      tags: 'bossy pirate treasure hunter orphan tattoo',
      fullName: 'nami',
      firstName: 'nami'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'glasses host teenager',
      fullName: 'kyoya ootori',
      firstName: 'kyoya'
  },
  {
      image: '',
      traits: 'female multicoloured hair',
      tags: 'analytical child royalty',
      fullName: 'shiro',
      firstName: 'shiro'
  },
  {
      image: '',
      traits: 'female blue hair',
      tags: 'waiter monster part time employee',
      fullName: 'touka kirishima',
      firstName: 'touka kirishima'
  },
  {
      image: '',
      traits: 'female blonde hair',
      tags: 'high scl std warrior scythe warrior',
      fullName: 'maka albarn',
      firstName: 'maka'
  },
  {
      image: '',
      traits: 'female black hair',
      tags: 'adult archaelogist pirate',
      fullName: 'nico robin',
      firstName: 'robin'
  },
  {
      image: '',
      traits: 'male grey hair',
      tags: 'shinigami scar hat',
      fullName: 'undertaker',
      firstName: 'undertaker'
  },
  {
      image: '',
      traits: 'female brown hair',
      tags: 'headband selfish lgbt+',
      fullName: 'haruhi suzumiya',
      firstName: 'suzumiya'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'shinigami sword fighter ',
      fullName: 'byakuya kuchiki',
      firstName: 'byakuya'
  },
  {
      image: '',
      traits: 'male red hair',
      tags: 'analytical middle scl std',
      fullName: 'karma akabane',
      firstName: 'karma'
  },
  {
      image: '',
      traits: 'female red hair',
      tags: 'scientist',
      fullName: 'kurisu makise',
      firstName: 'kurisu'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'knife fighter superpowers',
      fullName: 'hei',
      firstName: 'hei'
  },
  {
      image: '',
      traits: 'female pink hair',
      tags: 'ninja headband dustbin trash',
      fullName: 'sakura haruno',
      firstName: 'sakura'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult superpowers scarf martial artist',
      fullName: 'shota aizawa',
      firstName: 'aizawa'
  },
  {
      image: '',
      traits: 'female blonde hair',
      tags: 'doctor gambler heavy drinkers ninja beastmaster',
      fullName: 'tsunade senju',
      firstName: 'tsunade'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult big eater hat pirate tatto sleepyhead',
      fullName: 'portgas d ace',
      firstName: 'ace'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'analytical exotic eyes orphan ',
      fullName: 'kurapika',
      firstName: 'kurapika'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'darkness powers exorcist sowrd fighter',
      fullName: 'megumi fushiguro',
      firstName: 'megumi'
  },
  {
      image: '',
      traits: 'male multicoloured hair',
      tags: 'sword fighter hashira fire powers',
      fullName: 'kyoujurou rengoku',
      firstName: 'rengoku'
  },
  {
      image: '',
      traits: 'male brown hair',
      tags: 'analytical superpowers mischievious',
      fullName: 'osamu dazai',
      firstName: 'dazai'
  },
  {
      image: '',
      traits: 'male brown hair ',
      tags: 'deer pirate doctor animal',
      fullName: 'chopper',
      firstName: 'chopper'
  },
  {
      image: '',
      traits: 'male white hair',
      tags: 'lazy adult sword fighter big eater samurai',
      fullName: 'gintoki sakata',
      firstName: 'gintoki'
  },
  {
      image: '',
      traits: 'male blonde hair',
      tags: 'cyborg',
      fullName: 'genos',
      firstName: 'genos'
  },
  {
      image: '',
      traits: 'male black hair',
      tags: 'adult beast master epic eyebrows ninja',
      fullName: 'might guy',
      firstName: 'guy'
  },
  {
      image: '',
      traits: 'male blue hair',
      tags: 'blood thirsty',
      fullName: 'grimmjow',
      firstName: 'grimmjow'
  },
  {
      image: '',
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
