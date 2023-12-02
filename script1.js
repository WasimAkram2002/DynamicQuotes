const quotes=document.getElementById('quotes');
const author=document.getElementById('author');
const newQ=document.getElementById('newQ');
const TweetMe=document.getElementById('TweetMe');

let realData="";
let quotesdata="";

const TweetNow=()=>
{
    let tweetPost=`https://twitter.com/intent/tweet?text=${quotesdata.text} ${quotesdata.author}`;
    window.open(tweetPost);
}

const getNewQuotes=()=>
{
    const rnum=Math.floor(Math.random()*20);
    // console.log(realData[rnum].author);
   quotesdata=realData[rnum];
    quotes.innerText=`${quotesdata.text}`;
    quotesdata.author==null?author.innerText="Unknown":author.innerText=`${quotesdata.author}`;
    // author.innerText=`${realData[rnum].author}`;
}
//starting 
const getQuotes=async()=>
{
    const api="https://type.fit/api/quotes";
    try{
        const data=await fetch(api);
        realData=await data.json();
        // console.log(realData);
        // console.log(realData[0].text);
        // console.log(realData[0].author);
        // console.log(realData.length);
        getNewQuotes();
    }
    catch(err)
    {

    }
}

TweetMe.addEventListener('click',TweetNow);
newQ.addEventListener("click",getNewQuotes);

getQuotes();

