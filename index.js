import fetch from 'node-fetch';

console.log("What's up!!");

const javastuff = 'JavaScript';
const stringForHtml = 'abc';
console.log(stringForHtml);

let htmlFromMemeMainpage;

await fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => (htmlFromMemeMainpage = data));

// fetch('').then((response) => then.)...
// check recording time: 12:10

console.log(javastuff.indexOf('Script'));
console.log(htmlFromMemeMainpage.indexOf('<img src'));
const stuff2 = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);
