import fetch from 'node-fetch';

console.log("What's up!!");

let stringForHtml = 'abc';
console.log(stringForHtml);

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data));

// fetch('').then((response) => then.)...
// check recording time: 12:10
