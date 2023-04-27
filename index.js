import fetch from 'node-fetch';

// This output just a test output to check wether the program is running at all.
console.log("What's up!!");

// This const is a test string to test wether the substring can be found later in the program
const testSubstringForIndexOf = 'JavaScript';

// This const is a test to know that stringForHtml was initialised with abc
const stringForHtml = 'abc';
console.log(stringForHtml);

// This initialises the htmlFromMemeMainpage in order to assign the retured html-string later
let htmlFromMemeMainpage = 'no return html';

// This is a fetch-method wich is built in JavaScript and it fetches the https protocol from a website and converts them to a text and assigns it to htmlFromMemeMainpage
await fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => (htmlFromMemeMainpage = data));

// This is the initail note I made what the fetch-method looks like that I need for this project
// fetch('').then((response) => then.)...
// check recording time: 12:10

console.log(testSubstringForIndexOf.indexOf('Script'));
const positionOfFirstImagesUrl = htmlFromMemeMainpage.indexOf('<img src');
console.log(positionOfFirstImagesUrl);

/*
const positionOfFirstImagesUrl =
const firstImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);

const secondImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);

const firstImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);
*/
