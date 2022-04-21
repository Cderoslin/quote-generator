/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

  



/*** 
 quotes array of objects for the generator app 
***/

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

/***
 this function uses the the array's index to return a random quote from quotes array of objects.
***/
getRandomQuote = (array) => {
  let randomNumQuote = Math.floor( Math.random() * array.length );
  return array[randomNumQuote];
};

/***
 the printQuote function calls the getRandomQuote function and stores that in a variable
that variable is used in the string that is added to the paragraph element in the html file.
Along with conditonals to concatenate citation and year to be displayed in the browser also.
***/

let finalRandomQuote ='';

let htmlStr = '';

 printQuote = () => {

    finalRandomQuote = getRandomQuote(quotes);
    htmlStr = `
    <p class="quote"> ${finalRandomQuote.quote} </p>
    <p class="source"> ${finalRandomQuote.source}
    `

    if (finalRandomQuote.citation) {
      htmlStr += `<span class="citation">${finalRandomQuote.citation}</span>`;
    }
  
    if (finalRandomQuote.year) {
      htmlStr += `<span class="year">${finalRandomQuote.year}</span>`;
    }

    htmlStr += `</p>`;

    document.getElementById('quote-box').innerHTML = htmlStr;
};
printQuote()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);