// Part 1: 小一基礎難度 (1~35題) - 含有注音輔助
const part1 = [
    {word:'蘋果',bopo:'ㄆㄧㄥˊ ㄍㄨㄛˇ',emoji:'🍎'},{word:'香蕉',bopo:'ㄒㄧㄢ ㄐㄧㄠ',emoji:'🍌'},{word:'西瓜',bopo:'ㄒㄧ ㄍㄨㄚ',emoji:'🍉'},{word:'草莓',bopo:'ㄘㄠˇ ㄇㄟˊ',emoji:'🍓'},{word:'葡萄',bopo:'ㄆㄨˊ ㄊㄠˊ',emoji:'🍇'},
    {word:'獅子',bopo:'ㄕ ㄗ˙',emoji:'🦁'},{word:'老虎',bopo:'ㄌㄠˇ ㄏㄨˇ',emoji:'🐯'},{word:'大象',bopo:'ㄉㄚˋ ㄒㄧㄤˋ',emoji:'🐘'},{word:'貓咪',bopo:'ㄇㄠ ㄇㄧ',emoji:'🐱'},{word:'小狗',bopo:'ㄒㄧㄠˇ ㄍㄡˇ',emoji:'🐶'},
    {word:'兔子',bopo:'ㄊㄨˋ ㄗ˙',emoji:'🐰'},{word:'小魚',bopo:'ㄒㄧㄠˇ ㄩˊ',emoji:'🐟'},{word:'青蛙',bopo:'ㄑㄧㄥ ㄨㄚ',emoji:'🐸'},{word:'蝴蝶',bopo:'ㄏㄨˊ ㄉㄧㄝˊ',emoji:'🦋'},{word:'小鳥',bopo:'ㄒㄧㄠˇ ㄋㄧㄠˇ',emoji:'🐦'},
    {word:'太陽',bopo:'ㄊㄞˋ ㄧㄤˊ',emoji:'☀️'},{word:'月亮',bopo:'ㄩㄝˋ ㄌㄧㄤˋ',emoji:'🌙'},{word:'星星',bopo:'ㄒㄧㄥ ㄒㄧㄥ',emoji:'⭐'},{word:'白雲',bopo:'ㄅㄞˊ ㄩㄣˊ',emoji:'☁️'},{word:'大樹',bopo:'ㄉㄚˋ ㄕㄨˋ',emoji:'🌳'},
    {word:'紅花',bopo:'ㄏㄨㄥˊ ㄏㄨㄚ',emoji:'🌸'},{word:'眼睛',bopo:'ㄧㄢˇ ㄐㄧㄥ',emoji:'👀'},{word:'耳朵',bopo:'ㄦˇ ㄉㄨㄛ˙',emoji:'👂'},{word:'雙手',bopo:'ㄕㄨㄢ ㄕㄡˇ',emoji:'✋'},{word:'雙腳',bopo:'ㄕㄨㄢ ㄐㄧㄠˇ',emoji:'🦶'},
    {word:'汽車',bopo:'ㄑㄧˋ ㄔㄜ',emoji:'🚗'},{word:'飛機',bopo:'ㄈㄟ ㄐㄧ',emoji:'✈️'},{word:'書本',bopo:'ㄕㄨ ㄅㄣˇ',emoji:'📖'},{word:'鉛筆',bopo:'ㄑㄧㄢ ㄅㄧˇ',emoji:'✏️'},{word:'書包',bopo:'ㄕㄨ ㄅㄠ',emoji:'🎒'},
    {word:'氣球',bopo:'ㄑㄧˋ ㄑㄧㄡˊ',emoji:'🎈'},{word:'牛奶',bopo:'ㄋㄧㄡˊ ㄋㄞˇ',emoji:'🥛'},{word:'麵包',bopo:'ㄇㄧㄢˋ ㄅㄠ',emoji:'🍞'},{word:'時鐘',bopo:'ㄕˊ ㄓㄨㄥ',emoji:'⏰'},{word:'雨傘',bopo:'ㄩˇ ㄙㄢˇ',emoji:'☂️'}
];

// Part 2: 小二中等難度 (36~70題) - 移除注音，加入形容詞與雙字詞
const part2 = [
    {word:'快樂',bopo:'(二年級挑戰：無注音)',emoji:'😄'},{word:'生氣',bopo:'(二年級挑戰：無注音)',emoji:'😡'},{word:'溫暖',bopo:'(二年級挑戰：無注音)',emoji:'♨️'},{word:'美麗',bopo:'(二年級挑戰：無注音)',emoji:'🦋'},{word:'勇敢',bopo:'(二年級挑戰：無注音)',emoji:'🦁'},
    {word:'彩虹',bopo:'(二年級挑戰：無注音)',emoji:'🌈'},{word:'海洋',bopo:'(二年級挑戰：無注音)',emoji:'🌊'},{word:'森林',bopo:'(二年級挑戰：無注音)',emoji:'🌲'},{word:'地震',bopo:'(二年級挑戰：無注音)',emoji:'🫨'},{word:'閃電',bopo:'(二年級挑戰：無注音)',emoji:'⚡'},
    {word:'松鼠',bopo:'(二年級挑戰：無注音)',emoji:'🐿️'},{word:'海豚',bopo:'(二年級挑戰：無注音)',emoji:'🐬'},{word:'老鷹',bopo:'(二年級挑戰：無注音)',emoji:'🦅'},{word:'恐龍',bopo:'(二年級挑戰：無注音)',emoji:'🦖'},{word:'蜜蜂',bopo:'(二年級挑戰：無注音)',emoji:'🐝'},
    {word:'鋼琴',bopo:'(二年級挑戰：無注音)',emoji:'🎹'},{word:'吉他',bopo:'(二年級挑戰：無注音)',emoji:'🎸'},{word:'相機',bopo:'(二年級挑戰：無注音)',emoji:'📷'},{word:'手錶',bopo:'(二年級挑戰：無注音)',emoji:'⌚'},{word:'眼鏡',bopo:'(二年級挑戰：無注音)',emoji:'👓'},
    {word:'腳踏車',bopo:'(二年級挑戰：無注音)',emoji:'🚲'},{word:'冰淇淋',bopo:'(二年級挑戰：無注音)',emoji:'🍦'},{word:'漢堡',bopo:'(二年級挑戰：無注音)',emoji:'🍔'},{word:'蛋糕',bopo:'(二年級挑戰：無注音)',emoji:'🍰'},{word:'甜甜圈',bopo:'(二年級挑戰：無注音)',emoji:'🍩'},
    {word:'醫生',bopo:'(二年級挑戰：無注音)',emoji:'👨‍⚕️'},{word:'警察',bopo:'(二年級挑戰：無注音)',emoji:'👮'},{word:'老師',bopo:'(二年級挑戰：無注音)',emoji:'👩‍🏫'},{word:'廚師',bopo:'(二年級挑戰：無注音)',emoji:'👨‍🍳'},{word:'太空人',bopo:'(二年級挑戰：無注音)',emoji:'👨‍🚀'},
    {word:'圖書館',bopo:'(二年級挑戰：無注音)',emoji:'🏛️'},{word:'遊樂園',bopo:'(二年級挑戰：無注音)',emoji:'🎡'},{word:'城堡',bopo:'(二年級挑戰：無注音)',emoji:'🏰'},{word:'游泳池',bopo:'(二年級挑戰：無注音)',emoji:'🏊'},{word:'火車站',bopo:'(二年級挑戰：無注音)',emoji:'🚉'}
];

// Part 3: 小三進階難度 (71~100題) - 移除注音，挑戰四字成語與長詞組
const part3 = [
    {word:'春暖花開',bopo:'(三年級挑戰：四字成語)',emoji:'🌸'},{word:'風和日麗',bopo:'(三年級挑戰：四字成語)',emoji:'☀️'},{word:'大雨滂沱',bopo:'(三年級挑戰：四字成語)',emoji:'🌧️'},{word:'得意洋洋',bopo:'(三年級挑戰：四字成語)',emoji:'😎'},{word:'七上八下',bopo:'(三年級挑戰：四字成語)',emoji:'💓'},
    {word:'五顏六色',bopo:'(三年級挑戰：四字成語)',emoji:'🎨'},{word:'一馬當先',bopo:'(三年級挑戰：四字成語)',emoji:'🐎'},{word:'九牛一毛',bopo:'(三年級挑戰：四字成語)',emoji:'🐂'},{word:'守株待兔',bopo:'(三年級挑戰：四字成語)',emoji:'🐰'},{word:'井底之蛙',bopo:'(三年級挑戰：四字成語)',emoji:'🐸'},
    {word:'自由自在',bopo:'(三年級挑戰：四字成語)',emoji:'🕊️'},{word:'一心一意',bopo:'(三年級挑戰：四字成語)',emoji:'🎯'},{word:'大名鼎鼎',bopo:'(三年級挑戰：四字成語)',emoji:'🌟'},{word:'歡天喜地',bopo:'(三年級挑戰：四字成語)',emoji:'🎉'},{word:'千變萬化',bopo:'(三年級挑戰：四字成語)',emoji:'🪄'},
    {word:'科學實驗',bopo:'(三年級挑戰：語文進階)',emoji:'🧪'},{word:'環境保護',bopo:'(三年級挑戰：語文進階)',emoji:'🌱'},{word:'網際網路',bopo:'(三年級挑戰：語文進階)',emoji:'🌐'},{word:'人工智慧',bopo:'(三年級挑戰：語文進階)',emoji:'🤖'},{word:'世界地圖',bopo:'(三年級挑戰：語文進階)',emoji:'🗺️'},
    {word:'文化遺產',bopo:'(三年級挑戰：語文進階)',emoji:'🏛️'},{word:'奧林匹克',bopo:'(三年級挑戰：語文進階)',emoji:'🏅'},{word:'熱帶雨林',bopo:'(三年級挑戰：語文進階)',emoji:'🌴'},{word:'身體健康',bopo:'(三年級挑戰：語文進階)',emoji:'💪'},{word:'互相幫忙',bopo:'(三年級挑戰：語文進階)',emoji:'🤝'},
    {word:'聚精會神',bopo:'(三年級挑戰：四字成語)',emoji:'🧘'},{word:'恍然大悟',bopo:'(三年級挑戰：四字成語)',emoji:'💡'},{word:'廢物利用',bopo:'(三年級挑戰：語文進階)',emoji:'♻️'},{word:'精益求精',bopo:'(三年級挑戰：四字成語)',emoji:'📈'},{word:'滿載而歸',bopo:'(三年級挑戰：四字成語)',emoji:'🏆'}
];

window.wordList = [...part1, ...part2, ...part3];
