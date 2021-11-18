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
  
}

const createTweetElement = function(tweet) {
  const tweetDate = new Date(tweet.created_at);
  timeago.format(tweetDate);
  let $tweet = (`
    <article class = "tweets">
      <header>
        <a><i class="fa-brands fa-canadian-maple-leaf"></i>${tweet.user.name}</a>
        <span class = "username">${tweet.user.handle}</span>
      </header>
      <p> ${tweet.content.text}</p>
      <footer>
        <span class = "time-left">${tweet.created_at}</span>
          <div class = "tweet-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
      </footer>
    </article>`);

return $tweet;
}

renderTweets(data);

