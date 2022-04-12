/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

  

let quotes = [
  {
    quote:"The journey of a thousand miles begins with one step.",
    source: "- Lao Tzu"
  },
  {
    quote:"You must be the change you wish to see in the world.",
    source: "- Mahatma Gandhi"
  },
  {
    quote:"If you’re going through hell, keep going.",
    source: "- Winston Churchill"
  },
  {
    quote:"Life is like a box of chocolates. You never know what you’re going to get.",
    source: "- Forrest Gump",
    year: 1994,
    citation: "Forrest Gump"
  },
  {
    quote:"It always seems impossible until it’s done.",
    source: "- Nelson Mandela",
    year: 2001
  },
  {
    quote:"It is never too late to be what you might have been.",
    source: "- George Eliot",
    year: 1881
  },
  {
    quote:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    source: "- Bil Keane",
    year: 1994
  },

];

function getRandomQuote(quotes) {
  let randomNumQuote = Math.floor( Math.random() * quotes.length ) + 1;
  console.log(5);
};

// for (let i = 1; i <= 10; i++){
   
// }

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);