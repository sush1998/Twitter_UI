const tweet=document.querySelector("#tweet")
const btnTweet=document.querySelector("#btn-tweet")

let maxLimit=10;

function btnTweetStyle(flag)  //change style of btn
{
    if(flag===true)
    {
        btnTweet.style.backgroundColor = 'green'
        return btnTweet.disabled=false;
    }
    else if(flag===false)
    {
        btnTweet.style.backgroundColor = 'red'
        btnTweet.disabled=true
        return
    }
}

tweet.addEventListener("keyup",()=>
{
    let tweetLength=tweet.value.split("").length;
    console.log(tweetLength)
    
    tweetLength<=maxLimit?btnTweetStyle(true):btnTweetStyle(false) //disbale btn
})

btnTweet.addEventListener("click",()=>
{
    console.log("clicked")
    let tweetContent=tweet.value;
    console.log(tweetContent)
    let tweetArr=tweetContent.split("")
    console.log(tweetArr)
})