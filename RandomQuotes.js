// Varibales 
let btn1 = document.getElementById('generate')
let btn2 = document.getElementById('arabicQuotes')
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const eQuotes = [
    {quote: `“Be yourself; everyone else is already taken.”`,
    person: `Oscar Wilde`},
    {quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: `Albert Einstein`},
    {quote: `“A room without books is like a body without a soul.”`,
    person: `Marcus tullius Cicero`},
    {quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person: `Bernard M. Baruch`},
    {quote: `“It always seems impossible until it's done.”`,
    person: `Nelson Mandela`},
    {quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`},
    {quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`},
    {quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`},
    {quote: `"You must be the change you wish to see in the world."`,
    person: `Mahatma Gandhi`},
    {quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`},
    {quote: `"The only thing we have to fear is fear itself."`,
    person: `Franklin D. Roosevelt`},
    

];

const aQuotes = [
    {quote: `"كن أنت التغيير الذي تتمنى أن تراه في العالم."`,
    person: `المهاتما غاندي`},
    {quote: `"الحياة إما أن تكون مغامرة جريئة أو لا شيء."`,
    person: `هيلين كيلر`},
    {quote: `"أن يكرهك الناس على ما فيك، أفضل من أن يحبوك على ما ليس فيك."`,
    person:`اندريه جايد`},
    {quote: `"الطرق الوحيدة التي تستحق أن نسلكها هي تلك التي تؤدي إلى أعماقنا."`,
    person: `غيوم ميسو`},
    {quote: `"من أُذاق ظُلمة الجهل أدرك أن العلم نور"`,
    person: `مصطفى نور الدين`},
    {quote: `"ليس لدى المرء دائماً الوقت الكافي لتلبية رغباته الاخيرة."`,
    person: `جوزيه ساراماغو`},
    {quote: `"دراما الواقع أقوى ألف مرة وأكثر جموحاً من خيال أي كاتب."`,
    person: `احمد خالد توفيق`},
    {quote: `"لو أن الناس كلما استصعبوا أمرا تركوه ماقام للناس دنيا ولادين."`,
    person: `عمر بن عبدالعزيز`},
    {quote: `"ذو العقل يشقى في النعيم بعقله ... وأخو الجهالة في الشقاوة ينعمُ."`,
    person: `ابو الطيب المتنبي`},
    {quote: `"قد يتحول كل شي ضدك و يبقى الله معك ، فكن مع الله يكن كل شي معك."`,
    person: `صلاح الدين الايوبي`},
    {quote: `"من أحب الله رأى كل شئ جميلا."`,
    person: `الإمام محمد الغزالي`},
    {quote: `"لا تعبدوا الله ليعطي، بل اعبدوه ليرضى، فإن رضي أدهشكم بعطائه."`,
    person: `الإمام محمد متولي الشعراوي`},
    
];

btn1.addEventListener('click', function(){
    let random = Math.floor(Math.random() * eQuotes.length );
    quote.innerText = eQuotes[random].quote;
    person.innerText = eQuotes[random].person;
});

btn2.addEventListener('click', function(){
    let random = Math.floor(Math.random() * aQuotes.length );
    quote.innerText = aQuotes[random].quote;
    person.innerText = aQuotes[random].person;
});
