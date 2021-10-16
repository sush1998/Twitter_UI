const tweet=document.querySelector("#tweet")
const btnTweet=document.querySelector("#btn-tweet")
const wordLimit=document.querySelector("#word-limit")

let maxLimit=10;

function btnTweetStyle(flag,tweetLength)  //change style of btn
{
    if(flag===true)
    {
        btnTweet.style.backgroundColor = "#1DA1F2"
        btnTweet.disabled=false;
    }
    else if(flag===false)
    {
        btnTweet.style.backgroundColor = "#657786"
        btnTweet.disabled=true
        wordLimit.style.color="red"
    }
    wordLimit.innerHTML=maxLimit-tweetLength    
}

tweet.addEventListener("keyup",()=>
{
    let tweetLength=tweet.value.split("").length;
    console.log(tweetLength)
    
    tweetLength<=maxLimit?btnTweetStyle(true,tweetLength):btnTweetStyle(false,tweetLength) //disbale btn
})

btnTweet.addEventListener("click",()=>
{
    console.log("clicked")
    let tweetContent=tweet.value;
    console.log(tweetContent)
    let tweetArr=tweetContent.split("")
    console.log(tweetArr)
})