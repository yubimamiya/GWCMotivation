//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

var quoteList = ["It's ok to struggle, but it's not ok to give.", "If you believed in Santa for 8 years, you can believe in yourself for 8 minutes.", "Injustice anywhere is a threat to justice everywhere.", "You don't get to tell me when to quit.", "He told me that I run a girl, and I said, if he got a lot better, maybe he could too.", "I solemnly swear I am up to no good.", "Surely the world we live is but the world that lives in us.", "We'll burn that bridge when we get to it."];

var button = document.getElementById("motivation");
var quote = document.getElementById("quote");
var count = 0;

button.addEventListener("click", displayQuote);

function displayQuote() {
  quote.innerHTML = quoteList[count];
  incrementCount();
}

function incrementCount() {
  if (count == quoteList.length - 1) {
    count = 0;
  } else {
    count++;
  }
}