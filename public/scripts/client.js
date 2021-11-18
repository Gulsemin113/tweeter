/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
let $tweet = `
<article >
  <header>
    <a><i class="fa-brands fa-canadian-maple-leaf"></i>${tweetData.user.name}</a>
    <span class = "username">${tweetData.user.handle}</span>
  </header>
  <p> ${tweetData.content.text}</p>
  <footer>
    <span class = "time-left">${tweetData.created_at}</span>
      <div class = "tweet-icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
  </footer>
</article>`

return $tweet;
}

renderTweets(data);

