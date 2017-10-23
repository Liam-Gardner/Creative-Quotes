/*jslint browser: true*/
/*global $, jQuery, alert*/
var response = '';
    //Call JSON file
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    'use strict';
    if (this.readyState === 4 && this.status === 200) {
        response = JSON.parse(xhttp.responseText);
    }
};
var jsonAddressHTTP = "http://www.crafthousecreations.com/json/index.php?f=quotes";
xhttp.open("GET", jsonAddressHTTP, true);
xhttp.send();

//get random number and store in var randomNum
var currentQuote = "";
var currentAuthor = "";

function randomQuote(min, max) {
    'use strict';
    min = response.quotes.length - response.quotes.length;
    max = response.quotes.length;
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomNum = [Math.floor(Math.random() * (max - min)) + min];
        //return a random quote with the correct author and also html tags 
    currentQuote = response.quotes[randomNum].quote; 
    currentAuthor = response.quotes[randomNum].author;
    return currentQuote + "<strong>" + "<br>" + "<p style='float:right'>" + currentAuthor;
}


/*

--SEARCH--

Find by tag ->
function tag(tags){
var newArrTag = [];
for (i=0;i<response.quotes.length;i++){
if(response.quotes[i].tags == tags){
newArrTag.push(response.quotes[i].quote); console.log(newArrTag)}
}
}
Create tag buttons eg, feminism, god, etc
onClick the above code will run and then it will push them to a new array which will then be randomised for display only
*/


//TWITTER API
window.twttr = (function (d, s, id) {
    'use strict';
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id))
    return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

//Tweet function
var tweetBaseURL = "https://twitter.com/intent/tweet?text=";
function tweetMe() {
    'use strict';
    window.open(tweetBaseURL + currentQuote + currentAuthor);
}

//jQuery
$(function () {
    'use strict';
    $('.button#getQuote').click(function () {
        document.getElementById('quoteSpace').innerHTML = randomQuote();
    });
    $('#tweet').click(function () {
        tweetMe();
    });
});

    
 
    /*
    currentQuote = response.quotes[randomNum].quote + "<strong>" + " " + response.quotes[randomNum].author + "</strong>" + "<br/><br/>";
    
    currentQuote = response.quotes[randomNum].quote + response.quotes[randomNum].author;
    
    
    $('#tweet').on('click', function() {
    $this.attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote))
    
    
    $.each($('#tweet'), function() { //Add tweet href to Twitter buttons on page load
			var $birdName = $(this).attr('data-bird'),
				$birdImage = $(this).attr('data-birdimage'),
				$birdText = $(this).attr('data-twitter');
			$(this).attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($birdText) + '+BirdsTellUs.org+%23COP21+' + $birdImage);
		});
    


*/


 
  
  

   
    