// import fetch from 'node-fetch';

// This output just a test output to check wether the program is running at all.
// console.log("What's up!!");

// This const is a test string to test wether the substring can be found later in the program
// const testSubstringForIndexOf = 'JavaScript';

// This const is a test to know that stringForHtml was initialised with abc
// const stringForHtml = 'abc';
// console.log(stringForHtml);

// This initialises the htmlFromMemeMainpage in order to assign the retured html-string later
let htmlFromMemeMainpage = 'no return html';

// This is a fetch-method wich is built in JavaScript and it fetches the https protocol from a website and converts them to a text and assigns it to htmlFromMemeMainpage
await fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => (htmlFromMemeMainpage = data));

// This is the initail note I made what the fetch-method looks like that I need for this project
// fetch('').then((response) => then.)...
// check recording time: 12:10

// This looks for the substring 'Script' as a test
// console.log(testSubstringForIndexOf.indexOf('Script'));

// This looks for the 1st substring "<img src" in the text
const positionOf1stImageUrl = htmlFromMemeMainpage.indexOf('<img src');

// This just prints the the number of the URL and the position of it in the big html file
console.log('1st URL');
// console.log(positionOf1stImageUrl);

// This finds the first substring containing the 1st URL
const firstImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf1stImageUrl,
  positionOf1stImageUrl + 80,
);
// console.log(firstImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporaryfirstImagesUrl = firstImagesExtendedUrl.slice(10, 72);
// console.log(temporaryfirstImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf1stHttpInImageUrl = temporaryfirstImagesUrl.indexOf('https');
const positionOf1stSpaceInImageUrl = temporaryfirstImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const finalfirstImagesUrl = temporaryfirstImagesUrl.slice(
  positionOf1stHttpInImageUrl,
  positionOf1stSpaceInImageUrl,
);
// console.log('this should be it');
console.log(finalfirstImagesUrl);

// This looks for the 2st substring <img src
const positionOf2ndImageUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf1stImageUrl + 1,
);
console.log('2nd URL');
// console.log(positionOf2ndImageUrl);

// This finds the first substring containing the 1st URL
const secondImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf2ndImageUrl,
  positionOf2ndImageUrl + 80,
);
// console.log(firstImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary2ndImagesUrl = secondImagesExtendedUrl.slice(10, 72);
// console.log(temporaryfirstImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf2ndHttpInImageUrl = temporaryfirstImagesUrl.indexOf('https');
const positionOf2ndSpaceInImageUrl = temporaryfirstImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final2ndImagesUrl = temporary2ndImagesUrl.slice(
  positionOf2ndHttpInImageUrl,
  positionOf2ndSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final2ndImagesUrl);

// This looks for the 3rd substring <img src
const positionOf3rdImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf2ndImageUrl + 1,
);
console.log('3rd URL');
console.log(positionOf3rdImagesUrl);

// This looks for the 4th substring <img src
const positionOf4thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf3rdImagesUrl + 1,
);
console.log('4th URL');
console.log(positionOf4thImagesUrl);

// This looks for the 5th substring <img src
const positionOf5thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf4thImagesUrl + 1,
);
console.log('5th URL');
console.log(positionOf5thImagesUrl);

// This looks for the 6th substring <img src
const positionOf6thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf5thImagesUrl + 1,
);
console.log('6th URL');
console.log(positionOf6thImagesUrl);

// This looks for the 7th substring <img src
const positionOf7thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf6thImagesUrl + 1,
);
console.log('7th URL');
console.log(positionOf7thImagesUrl);

// This looks for the 8th substring <img src
const positionOf8thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf7thImagesUrl + 1,
);
console.log('8th URL');
console.log(positionOf8thImagesUrl);

// This looks for the 9th substring <img src
const positionOf9thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf8thImagesUrl + 1,
);
console.log('9th URL');
console.log(positionOf9thImagesUrl);

// This looks for the 10th substring <img src
const positionOf10thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf9thImagesUrl + 1,
);
console.log('10th URL');
console.log(positionOf10thImagesUrl);

/*
const secondImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);

const firstImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);
*/
