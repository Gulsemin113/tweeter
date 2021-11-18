/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
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
};

$('#submit-tweet').submit(function (event) {
  event.preventDefault();
  const formData = ($(this).serialize());
  const tweetText = $("#tweet-text").val(); 
  if (tweetText.length > 140 || tweetText.length === 0) {
    alert("Invalid tweet");
  } else {
  $.ajax('/tweets/', { method: 'POST', data: formData })
  .then(function(response) {
    console.log('Response: ', response);
  })
}

});

const loadtweets = () => {
  $.ajax('/tweets/', { method: 'GET'})
  .then(function(response) {
    renderTweets(response);
  }) ;
};