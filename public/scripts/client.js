$(document).ready(function() {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const loadtweets = () => {
    $.ajax('/tweets/', { method: 'GET'})
      .then(function(response) {
        renderTweets(response);
      });
  };

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  const createTweetElement = function(tweet) {
    const tweetDate = new Date(tweet.created_at);
    timeago.format(tweetDate);
    let $tweet = (`
      <article class = "tweets">
        <header>
          <a><i class="fa-brands fa-canadian-maple-leaf"></i>${escape(tweet.user.name)}</a>
          <span class = "username">${escape(tweet.user.handle)}</span>
        </header>
        <p> ${escape(tweet.content.text)}</p>
        <footer>
          <span class = "time-left">${moment(tweet.created_at).fromNow()}</span>
            <div class = "tweet-icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
        </footer>
      </article>`);

    return $tweet;
  };

  loadtweets();

  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    const formData = ($(this).serialize());
    const tweetText = $("#tweet-text").val();
    if (tweetText.length > 140 || tweetText.length === 0) {
      alert("Invalid tweet");
    } else {
      $.ajax('/tweets/', { method: 'POST', data: formData })
        .then(function(tweet) {
          loadtweets();
        });
    }

  });

  
});