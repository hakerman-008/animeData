const express = require('express');
const app = express();


const characters = [
    {
        image: 'https://i.ibb.co/Yh6knYY/image.jpg',
        traits: 'Male GreyHair',
        tags: 'Adult Anti-Gravity Hair Beastmaster Exotic Eyes Gloves HeadbandMasks NinjaScar',
        fullName: 'kakashi hatake',
        firstName: 'kakashi'
    },
    {
        image: 'https://i.ibb.co/LdhvK4g/deathnote-lightyagami-kira-anime-L.jpg',
        traits: 'Male Black Hair',
        tags: 'Analytical Bare foot Detective Eye Bags Sweet Tooth',
        fullName: 'L',
        firstName: 'L'
    },
  {
      image: 'https://i.ibb.co/6N3fzJH/V-deo-Personagens-de-anime-Naruto-uzumaki-Naruto-mang-colorido.jpg',
      traits: 'Male Blonde Hair',
      tags: 'Beastmaster ',
      fullName: 'naruto uzumaki',
      firstName: 'naruto'
  },
  {
      image: 'https://i.ibb.co/64jgy1Z/Pin-by-Yume-on-Anime-Wallpaper-Anime-Levi-ackerman-Anime-guys.jpg',
      traits: 'male black hair',
      tags: 'adult ruthless sword fighter',
      fullName: 'levi ackerman',
      firstName: 'levi'
  },
  {
      image: 'https://i.ibb.co/hfpXcWW/Kira.jpg',
      traits: 'male brownhair',
      tags: 'analytical manipulative secret identity ruthless',
      fullName: 'light yagami',
      firstName: 'light'
  },
  {
      image: 'https://i.ibb.co/vVB2yX1/edward-elric-icon.jpg',
      traits: 'male blonde hair',
      tags: 'alchemist ponytail ',
      fullName: 'edward elric',
      firstName: 'edward'
  },
  {
      image: 'https://i.ibb.co/KjXRJ25/Itachi-Uchiha.jpg',
      traits: 'male black hair',
      tags: 'combat ullusionist exotix eyes ninja',
      fullName: 'itachi uchiha',
      firstName: 'itachi'
  },
  {
      image: 'https://i.ibb.co/kms09xN/mikasa.jpg',
      traits: 'female blackhair',
      tags: 'scarf dword fighter orphan',
      fullName: 'mikasa ackerman',
      firstName: 'mikasa'
  },
  {
      image: 'https://i.ibb.co/1JvCHYT/Gaara.jpg',
      traits: 'male red hair',
      tags: 'ninja tattoo no eyebrows ',
      fullName: 'gaara',
      firstName: 'gaara'
  },
  {
      image: 'https://i.ibb.co/cxNDLbx/image.jpg',
      traits: 'male blackhair',
      tags: 'shinigami wings sharp teeth apple lover',
      fullName: 'ryuk',
      firstName: 'ryuk'
  },
  {
      image: 'https://i.ibb.co/vYP7W3t/monkey-d-luffy.jpg',
      traits: 'male black hair',
      tags: 'hat pirate scar treasure hunter big eater',
      fullName: 'monkey d luffy',
      firstName: 'luffy'
  },
  {
      image: 'https://i.ibb.co/19VxYdH/85e2f83e786e3b365a7ab8cba501d7e0.jpg',
      traits: 'male pink hair',
      tags: 'big eater elemental powers fire powers scarf orphan',
      fullName: 'natsu dragneel',
      firstName: 'natsu'
  },
  {
      image: 'https://i.ibb.co/dJynzyQ/4b74426441697ad90f274f907900c83e.jpg',
      traits: 'male black hair',
      tags: 'high school std manipulative ruthless',
      fullName: 'lelouch lamperouge',
      firstName: 'lelouch'
  },
  {
      image: 'https://i.ibb.co/QcYxFb2/image.jpg',
      traits: 'male black hair',
      tags: 'adult alchemist gloves elemental powers',
      fullName: 'roy mustang',
      firstName: 'roy'
  },
  {
      image: 'https://i.ibb.co/RH82XhW/Tanjiro.jpg',
      traits: 'male red hair',
      tags: 'demon hunter scar orphan teenager sword fighter',
      fullName: 'tanjiro kamado',
      firstName: 'tanjiro'
  },
  {
      image: 'https://i.ibb.co/6WfbMwf/download-6.jpg',
      traits: 'male black hair',
      tags: 'sword fighter video gamer warrior',
      fullName: 'kirito',
      firstName: 'kirito'
  },
  {
      image: 'https://i.ibb.co/hBJJ64V/Requip-Magic-Erza-Scarlet-The-fearsome-Titania.jpg',
      traits: 'female red hair',
      tags: 'armor bossy sweet tooth sword fighter ',
      fullName: 'erza scarlet',
      firstName: 'erza'
  },
  {
      image: 'https://i.ibb.co/CWcW8dF/download-7.jpg',
      traits: 'female multi coloured hair',
      tags: 'demon orphan',
      fullName: 'nezuko kamado',
      firstName: 'nezuko'
  },
  {
      image: 'https://i.ibb.co/GTJXw4D/676719f9-e769-4b68-ac62-3c3356483a14.jpg',
      traits: 'male black hair',
      tags: 'analytical shadow power lazy ninja ',
      fullName: 'shikamaru nara',
      firstName: 'shikamaru'
  },
  {
      image: 'https://i.ibb.co/6JjWjL6/Pin-on.jpg',
      traits: 'male brown hair',
      tags: 'hot headed titan sword fighter military',
      fullName: 'eren jaeger',
      firstName: 'eren'
  },
  {
      image: 'https://i.ibb.co/qNw4NXM/Sebastian-Michaelis.jpg',
      traits: 'male black hair',
      tags: 'animal lover demon immortal manipulative',
      fullName: 'sebastian michaelis',
      firstName: 'sebastian'
  },
  {
      image: 'https://i.ibb.co/rk4gktz/download-8.jpg',
      traits: 'male green hair',
      tags: 'bandana scar sleepy sowrd fighter pirate no sense of direction',
      fullName: 'roronoa zoro',
      firstName: 'zoro'
  },
  {
      image: 'https://i.ibb.co/R4SV0Qd/Hinata.jpg',
      traits: 'female black hair',
      tags: 'dandere exotic eyes nunja shy',
      fullName: 'hinata hyuga',
      firstName: 'hinata'
  },
  {
      image: 'https://i.ibb.co/y0vtKhW/My-baby.jpg',
      traits: 'male white hair',
      tags: 'analytical assassin child',
      fullName: 'killua zoldyck',
      firstName: 'killua'
  },
  {
      image: 'https://i.ibb.co/m54FvZ6/Alphonse-Elric.jpg',
      traits: 'male blonde hair ',
      tags: 'alchemist animal lover armor',
      fullName: 'alphonse elric',
      firstName: 'elric'
  },
  {
      image: 'https://i.ibb.co/BP2ny01/17b6f8750780f75a193f2cab5ac28a6b.jpg',
      traits: 'female brown hair',
      tags: 'braids cook dword fighter video gamer',
      fullName: 'asuna yuuki',
      firstName: 'yuuki'
  },
  {
      image: 'https://i.ibb.co/3zZ4sVt/image.jpg',
      traits: 'male white hair',
      tags: 'adult beast master flirt ninja pervert ',
      fullName: 'jiraya',
      firstName: 'jiraya'
  },
  {
      image: 'https://i.ibb.co/FbPcmTF/image.jpg',
      traits: 'male orange hair',
      tags: 'shinigami sword fighter high school std',
      fullName: 'ichigo kurosaki',
      firstName: 'ichigo'
  },
  {
      image: 'https://i.ibb.co/VNs7YyB/download-9.jpg',
      traits: 'male multicoloured hair',
      tags: 'shinigami bossy dual wielder',
      fullName: 'death the kid',
      firstName: 'death'
  },
  {
      image: 'https://i.ibb.co/30szh4z/download-10.jpg',
      traits: 'male white hair',
      tags: 'adult blind fold exorcist teacher',
      fullName: 'satoru gojo',
      firstName: 'gojo'
  },
  {
      image: 'https://i.ibb.co/vX7BFHb/download-11.jpg',
      traits: 'male black hair',
      tags: 'elemental powers ninja orphan exotic eyes',
      fullName: 'sasuke uchiha',
      firstName: 'sasuke'
  },
  {
      image: 'https://i.ibb.co/QjD4gw1/download-12.jpg',
      traits: 'male black hair',
      tags: 'elemental powers magic user',
      fullName: 'gray fullbuster',
      firstName: 'gray'
  },
  {
      image: 'https://i.ibb.co/ZJSY5qr/Rin-Okumura-Blue-exorcist.jpg',
      traits: 'male blackhair',
      tags: 'cook demon demon hunter exorcist',
      fullName: 'rin okumura',
      firstName: 'rin'
  },
  {
      image: 'https://i.ibb.co/vLXZFTb/Inosuke-Demon-Slayer-Wallpaper.jpg',
      traits: 'male multi coloured hair',
      tags: 'big eater sword fighter orphan masks',
      fullName: 'inosuke hashibira',
      firstName: 'inosuke'
  },
  {
      image: 'https://i.ibb.co/fMJ9qT9/Izuku-midoriya-1.jpg',
      traits: 'male green hair',
      tags: 'analytical crybaby superpowers',
      fullName: 'izuku midoriya',
      firstName: 'izuku'
  },
  {
      image: 'https://i.ibb.co/5WhJKvD/image.jpg',
      traits: 'male multicoloured hair',
      tags: 'analytical superpowers scar',
      fullName: 'shoto todoroki',
      firstName: 'shoto'
  },
  {
      image: 'https://i.ibb.co/RgHbznG/download-13.jpg',
      traits: 'female brown hair ',
      tags: 'high school student',
      fullName: 'taiga aisaka',
      firstName: 'taiga'
  },
  {
      image: 'https://i.ibb.co/7vnwY1m/Armin-Arlert-Icon.jpg',
      traits: 'male blonde hair',
      tags: 'analytical military sword fighter',
      fullName: 'armin arlelt',
      firstName: 'armin'
  },
  {
      image: 'https://i.ibb.co/JsTw2W8/70cb6a1646a2b1f7fc246c728d2f576c.jpg',
      traits: 'male bald',
      tags: 'adult superpowers gloves cape',
      fullName: 'saitama',
      firstName: 'saitama'
  },
  {
      image: 'https://i.ibb.co/vD3rRSD/Angel-Beats-Tachibana-Kanade.jpg',
      traits: 'female white hair',
      tags: 'armblades student council',
      fullName: 'kanade tachibana',
      firstName: 'kanade'
  },
  {
      image: 'https://i.ibb.co/tC0K2k4/download-14.jpg',
      traits: 'male blonde hair',
      tags: 'hat merchant shinigami sword fighter',
      fullName: 'kisuke urahaha',
      firstName: 'kisuke'
  },
  {
      image: 'https://i.ibb.co/1KBNpgS/kaneki-ken-icons.jpg',
      traits: 'male ',
      tags: 'exotic eyes eyepatch monster orphan',
      fullName: 'ken kaneki',
      firstName: 'ken'
  },
  {
      image: 'https://i.ibb.co/PzNpkp2/Who-is-Maes-Hughes-Everything-You-Need-To-Know.jpg',
      traits: 'male black hair',
      tags: 'adult knife fighter',
      fullName: 'maes hughes',
      firstName: 'maes'
  },
  {
      image: 'https://i.ibb.co/LPFdZFW/download-15.jpg',
      traits: 'male blonde hair',
      tags: 'cook high school student martial artist musician',
      fullName: 'takumi usui',
      firstName: 'takumi'
  },
  {
      image: 'https://i.ibb.co/FgkK2ZV/download-16.jpg',
      traits: 'female brownhair',
      tags: 'abalytical crossdresser host ',
      fullName: 'haruhi fujioka',
      firstName: 'haruhi'
  },
  {
      image: 'https://i.ibb.co/m5d27QS/download-17.jpg',
      traits: 'male orange hair',
      tags: 'high school std twin wealthy host',
      fullName: 'hikaru hitachiin',
      firstName: 'hikaru'
  },
  {
      image: 'https://i.ibb.co/yWCYYTx/image.jpg',
      traits: 'male black hair',
      tags: 'muscular big eater martial artist eternal optimist',
      fullName: 'goku son',
      firstName: 'goku'
  },
  {
      image: 'https://i.ibb.co/5jSyKtF/image.jpg',
      traits: 'male blonde hair',
      tags: 'flirt wealthy high school std host',
      fullName: 'tamaki suoh',
      firstName: 'tamaki'
  },
  {
      image: 'https://i.ibb.co/ZfNGhkn/Lucy-Heartfilia-Fairy-Tail-1.jpg',
      traits: 'female blonde hair',
      tags: 'magic user summoners ',
      fullName: 'lucy heartfilia',
      firstName: 'lucy'
  },
  {
      image: 'https://i.ibb.co/8Pq9gnp/image.jpg',
      traits: 'brown hair female',
      tags: 'adult glasses military sowrd fighter',
      fullName: 'hange zoe',
      firstName: 'hange'
  },
  {
      image: 'https://i.ibb.co/R9kFZWZ/Zenitsu-Icon.jpg',
      traits: 'male multi coloured hair',
      tags: 'demon hunter sword fighter crybaby',
      fullName: 'zenitsu agatsuma',
      firstName: 'zenitsu'
  },
  {
      image: 'https://i.ibb.co/b79NnzR/image.jpg',
      traits: 'female pink hair',
      tags: 'horns ruthless split personality',
      fullName: 'lucy',
      firstName: 'lucy'
  },
  {
      image: 'https://i.ibb.co/T0RnYDJ/download-18.jpg',
      traits: 'male blonde hair',
      tags: 'big ego superpowers selfish',
      fullName: 'katsuki bakugo',
      firstName: 'katsuki'
  },
  {
      image: 'https://i.ibb.co/gD33fq7/image.jpg',
      traits: 'male purple hair',
      tags: 'bandana sword fighter immortal',
      fullName: 'yato',
      firstName: 'yato'
  },
  {
      image: 'https://i.ibb.co/frR8F2m/Sanji-Icon.jpg',
      traits: 'male blonde hair',
      tags: 'cook pervert pirate smoker',
      fullName: 'vinsmoke sanji',
      firstName: 'sanji'
  },
  {
      image: 'https://i.ibb.co/rfLKkb5/Hellsing-Alucard-con.jpg',
      traits: 'male black hair',
      tags: 'gloves elemental powers sunglasses',
      fullName: 'alucard',
      firstName: 'alucard'
  },
  {
      image: 'https://i.ibb.co/X8hYD76/image.jpg',
      traits: 'male black hair',
      tags: 'shinigami sowrd fighter scar no eyebrows',
      fullName: 'kenpachi zaraki',
      firstName: 'kenpachi'
  },
  {
      image: 'https://i.ibb.co/58cfJkx/image.jpg',
      traits: 'male orange hair',
      tags: 'high school std hot headed martial artist',
      fullName: 'kyo sohma',
      firstName: 'kyo'
  },
  {
      image: 'https://i.ibb.co/zGJWRG5/Sasha-Braus-icons.jpg',
      traits: 'female brown hair',
      tags: 'big eater sword fighter military',
      fullName: 'sasha braus',
      firstName: 'sasha'
  },
  {
      image: 'https://i.ibb.co/sqx55jd/download-19.jpg',
      traits: 'female blonde hair',
      tags: 'adult gunslinger sniper military',
      fullName: 'riza hawkeye',
      firstName: 'riza'
  },
  {
      image: 'https://i.ibb.co/stK65Kq/Gon-icons.jpg',
      traits: 'male blackhair',
      tags: 'child eternal optimist spikes hair',
      fullName: 'gon freecss',
      firstName: 'gon'
  },
  {
      image: 'https://i.ibb.co/j4PxfpP/download-20.jpg',
      traits: 'male black hair',
      tags: 'bowl cut ninja spic eyebrows honorable fighter',
      fullName: 'rock lee',
      firstName: 'lee'
  },
  {
      image: 'https://i.ibb.co/yqD30zP/image.jpg',
      traits: 'female black hair',
      tags: 'high school student maid poor waiter ',
      fullName: 'misaki ayuzawa',
      firstName: 'misaki'
  },
  {
      image: 'https://i.ibb.co/WDP5Rv8/Haikyuu.jpg',
      traits: 'male orange hair',
      tags: 'airhead hot headed volleyball player',
      fullName: 'shoyo hinata',
      firstName: 'hinata'
  },
  {
      image: 'https://i.ibb.co/WDP5Rv8/Haikyuu.jpg',
      traits: 'male blonde hair',
      tags: 'ninja teleportation powers beastmaster ',
      fullName: 'minato namikaze',
      firstName: 'minato'
  },
  {
      image: 'https://i.ibb.co/XDjg46Z/Yuno-Gasai.jpg',
      traits: 'female pink hair',
      tags: 'analytical broken record',
      fullName: 'yuno gasai',
      firstName: 'yuno'
  },
  {
      image: 'https://i.ibb.co/QdR24VG/download-21.jpg',
      traits: 'female blackhair',
      tags: 'sword fighter shinigami nobility ice powers',
      fullName: 'rukia kuchiki',
      firstName: 'rukia'
  },
  {
      image: 'https://i.ibb.co/vhqJLbC/toshiro.jpg',
      traits: 'male white hair',
      tags: 'elemental powers sword fighter shinigami',
      fullName: 'toshiro hitsugaya',
      firstName: 'toshiro'
  },
  {
      image: 'https://i.ibb.co/bFpyTJG/Heiwajima-Shizuo-Durarara.jpg',
      traits: 'male blonde hair',
      tags: 'adult sunglasses smoker bow tie',
      fullName: 'shizuo heiwajima',
      firstName: 'shizuo'
  },
  {
      image: 'https://i.ibb.co/jLkb8Rt/image.jpg',
      traits: 'male multicoloured hair',
      tags: 'adult pacifist traveler secret identity magic user',
      fullName: 'howl',
      firstName: 'howl'
  },
  {
      image: 'https://i.ibb.co/fXBvZBs/image.jpg',
      traits: 'male pink hair',
      tags: 'shared body exorcist airhead ',
      fullName: 'yuji itadori',
      firstName: 'yuji'
  },
  {
      image: 'https://i.ibb.co/170ZFH8/Misa-Amane.jpg',
      traits: 'female blonde hair',
      tags: 'hyperactive idol',
      fullName: 'misa amane',
      firstName: 'misa'
  },
  {
      image: 'https://i.ibb.co/qDFW5RZ/image.jpg',
      traits: 'male',
      tags: 'big ego pervert ruthless blood thirsty',
      fullName: 'hisoka morow',
      firstName: 'hisoka'
  },
  {
      image: 'https://i.ibb.co/Wfh9hgD/izaya-hazl-x.jpg',
      traits: 'male black hair',
      tags: 'adult analytical knife fighter',
      fullName: 'izaya orihara',
      firstName: 'izaya'
  },
  {
      image: 'https://i.ibb.co/pZPcq6C/Yoruichi-Shihoin-Bleach.jpg',
      traits: 'female purple hair',
      tags: 'dark skinned martial artist shinigami',
      fullName: 'yoruichi shihouin',
      firstName: 'yoruichi'
  },
  {
      image: 'https://i.ibb.co/5s4pP1N/Daddy.jpg',
      traits: 'male grey hair',
      tags: 'scientist adult scar teacher smoker',
      fullName: 'franken stein',
      firstName: 'franken'
  },
  {
      image: 'https://i.ibb.co/dbtHZ1h/download-22.jpg',
      traits: 'male black hair',
      tags: 'demon hunter sword fighter',
      fullName: 'giyuu tomioka',
      firstName: 'tomioka'
  },
  {
      image: 'https://i.ibb.co/5vtbHpy/image.jpg',
      traits: 'male red hair',
      tags: 'elemental powers sword fighter monster',
      fullName: 'benimaru',
      firstName: 'benimaru'
  },
  {
      image: 'https://i.ibb.co/Bqcqy1p/Neji.jpg',
      traits: 'male black hair',
      tags: 'exotic eyes ninja',
      fullName: 'neji hyuga',
      firstName: 'neji'
  },
  {
      image: 'https://i.ibb.co/FzNLXCc/Vegeta.jpg',
      traits: 'male black hair',
      tags: 'spike hair armor warrior big ego alien',
      fullName: 'vegeta',
      firstName: 'vegeta'
  },
  {
      image: 'https://i.ibb.co/GTV9prW/Kageyama-Tobio-Icon.jpg',
      traits: 'male black hair',
      tags: 'analytical volleyball player',
      fullName: 'tobio kageyama',
      firstName: 'tobio'
  }, 
  {
      image: 'https://i.ibb.co/V3MjzY5/Nami-Icon.jpg',
      traits: 'female orange hair',
      tags: 'bossy pirate treasure hunter orphan tattoo',
      fullName: 'nami',
      firstName: 'nami'
  },
  {
      image: 'https://i.ibb.co/vZrCp8h/download-23.jpg',
      traits: 'male black hair',
      tags: 'glasses host teenager',
      fullName: 'kyoya ootori',
      firstName: 'kyoya'
  },
  {
      image: 'https://i.ibb.co/QNgCZwj/Shiro.jpg',
      traits: 'female multicoloured hair',
      tags: 'analytical child royalty',
      fullName: 'shiro',
      firstName: 'shiro'
  },
  {
      image: 'https://i.ibb.co/6PpSHkL/download-24.jpg',
      traits: 'female blue hair',
      tags: 'waiter monster part time employee',
      fullName: 'touka kirishima',
      firstName: 'touka kirishima'
  },
  {
      image: 'https://i.ibb.co/m8NhTVw/image.jpg',
      traits: 'female blonde hair',
      tags: 'high scl std warrior scythe warrior',
      fullName: 'maka albarn',
      firstName: 'maka'
  },
  {
      image: 'https://i.ibb.co/72tT93D/image.jpg',
      traits: 'female black hair',
      tags: 'adult archaelogist pirate',
      fullName: 'nico robin',
      firstName: 'robin'
  },
  {
      image: 'https://i.ibb.co/5MNFYtG/download-25.jpg',
      traits: 'male grey hair',
      tags: 'shinigami scar hat',
      fullName: 'undertaker',
      firstName: 'undertaker'
  },
  {
      image: 'https://i.ibb.co/2MF2x7Y/Haruhi-Suzumiya.jpg',
      traits: 'female brown hair',
      tags: 'headband selfish lgbt+',
      fullName: 'haruhi suzumiya',
      firstName: 'suzumiya'
  },
  {
      image: 'https://i.ibb.co/fHzksC6/image.jpg',
      traits: 'male black hair',
      tags: 'shinigami sword fighter ',
      fullName: 'byakuya kuchiki',
      firstName: 'byakuya'
  },
  {
      image: 'https://i.ibb.co/gmdMV13/Karma-Akabane.jpg',
      traits: 'male red hair',
      tags: 'analytical middle scl std',
      fullName: 'karma akabane',
      firstName: 'karma'
  },
  {
      image: 'https://i.ibb.co/3BPfj6q/kurisu-makise-steins-gate-anime-anime-girl.jpg',
      traits: 'female red hair',
      tags: 'scientist',
      fullName: 'kurisu makise',
      firstName: 'kurisu'
  },
  {
      image: 'https://i.ibb.co/qmMRfqH/image.jpg',
      traits: 'male black hair',
      tags: 'knife fighter superpowers',
      fullName: 'hei',
      firstName: 'hei'
  },
  {
      image: 'https://i.ibb.co/zNW22yY/Cat-girl-Sakura.jpg',
      traits: 'female pink hair',
      tags: 'ninja headband dustbin trash',
      fullName: 'sakura haruno',
      firstName: 'sakura'
  },
  {
      image: 'https://i.ibb.co/KXtsFYJ/Shota-Aizawa-Mha-Everything-You-Need-To-Know.jpg',
      traits: 'male black hair',
      tags: 'adult superpowers scarf martial artist',
      fullName: 'shota aizawa',
      firstName: 'aizawa'
  },
  {
      image: 'https://i.ibb.co/tq21NS6/443c8d862f3a3be38d7ba3071b69d057.jpg',
      traits: 'female blonde hair',
      tags: 'doctor gambler heavy drinkers ninja beastmaster',
      fullName: 'tsunade senju',
      firstName: 'tsunade'
  },
  {
      image: 'https://i.ibb.co/4WpV6gL/download-27.jpg',
      traits: 'male black hair',
      tags: 'adult big eater hat pirate tatto sleepyhead',
      fullName: 'portgas d ace',
      firstName: 'ace'
  },
  {
      image: 'https://i.ibb.co/rbcXFsN/K-u-r-a-p-i-k-a.jpg',
      traits: 'male blonde hair',
      tags: 'analytical exotic eyes orphan ',
      fullName: 'kurapika',
      firstName: 'kurapika'
  },
  {
      image: 'https://i.ibb.co/W5TCXkv/image.jpg',
      traits: 'male black hair',
      tags: 'darkness powers exorcist sowrd fighter',
      fullName: 'megumi fushiguro',
      firstName: 'megumi'
  },
  {
      image: 'https://i.ibb.co/C9Xzk1K/Rengoku-Kyoujurou.jpg',
      traits: 'male multicoloured hair',
      tags: 'sword fighter hashira fire powers',
      fullName: 'kyoujurou rengoku',
      firstName: 'rengoku'
  },
  {
      image: 'https://i.ibb.co/85TJcRQ/Osamu-Dazai-wallpaper.jpg',
      traits: 'male brown hair',
      tags: 'analytical superpowers mischievious',
      fullName: 'osamu dazai',
      firstName: 'dazai'
  },
  {
      image: 'https://i.ibb.co/TgK7ChJ/image.jpg',
      traits: 'male brown hair ',
      tags: 'deer pirate doctor animal',
      fullName: 'chopper',
      firstName: 'chopper'
  },
  {
      image: 'https://i.ibb.co/BNZPMXv/image.jpg',
      traits: 'male white hair',
      tags: 'lazy adult sword fighter big eater samurai',
      fullName: 'gintoki sakata',
      firstName: 'gintoki'
  },
  {
      image: 'https://i.ibb.co/rHvhHYG/One-Punch-Man-Genos.jpg',
      traits: 'male blonde hair',
      tags: 'cyborg',
      fullName: 'genos',
      firstName: 'genos'
  },
  {
      image: 'https://i.ibb.co/wK9Xg6W/Might-Guy.jpg',
      traits: 'male black hair',
      tags: 'adult beast master epic eyebrows ninja',
      fullName: 'might guy',
      firstName: 'guy'
  },
  {
      image: 'https://i.ibb.co/tcsthn1/image.jpg',
      traits: 'male blue hair',
      tags: 'blood thirsty',
      fullName: 'grimjow',
      firstName: 'grimmjow'
  },
  {
      image: 'https://i.ibb.co/cLGGB6N/Shanks-icon.jpg',
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
