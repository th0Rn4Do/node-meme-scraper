// import fetch from 'node-fetch';
import { existsSync, mkdirSync } from 'fs';

// This creates a new folder named memes and in case it already exists it gives an error message
try {
  if (existsSync('memes')) {
    console.log('directory already exists.');
  }
  mkdirSync('memes');
} catch (error) {
  console.log('error occured:', error);
}

// this creates an array for the 10 URLs. Later the array will be used to access all 10 images and copy them to to folder memes.
const allTenUrlsArray = [];

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

// This adds the first URL to the array
/* async function addImageToArray() {
  await fetch(finalfirstImagesUrl).then((response) =>
    /* response.text())
    .then((data) => */ // allTenImagesArray.push(response),
/*  );
  return;
} */

/* async function addUrlToArray(imageUrl) {
  allTenUrlsArray.push(imageUrl);
  return;
}
*/

allTenUrlsArray.push(finalfirstImagesUrl);

// This looks for the 2st substring <img src
const positionOf2ndImageUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf1stImageUrl + 1,
);
console.log('2nd URL');
// console.log(positionOf2ndImageUrl);

// This finds the first substring containing the 2nd URL
const secondImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf2ndImageUrl,
  positionOf2ndImageUrl + 80,
);
// console.log(secondImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary2ndImagesUrl = secondImagesExtendedUrl.slice(10, 72);
// console.log(temporary2ndImagesUrl);

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

allTenUrlsArray.push(final2ndImagesUrl);

// This looks for the 3rd substring <img src

const positionOf3rdImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf2ndImageUrl + 1,
);
console.log('3rd URL');
// console.log(positionOf3rdImagesUrl);

// This finds the first substring containing the 3rd URL
const thirdImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf3rdImagesUrl,
  positionOf3rdImagesUrl + 80,
);
// console.log(thirdImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary3rdImagesUrl = thirdImagesExtendedUrl.slice(10, 72);
// console.log(temporaryfirstImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf3rdHttpInImageUrl = temporary3rdImagesUrl.indexOf('https');
const positionOf3rdSpaceInImageUrl = temporary3rdImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final3rdImagesUrl = temporary3rdImagesUrl.slice(
  positionOf3rdHttpInImageUrl,
  positionOf3rdSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final3rdImagesUrl);

allTenUrlsArray.push(final3rdImagesUrl);

// console.log(allTenUrlsArray.length);

// This looks for the 4th substring <img src

const positionOf4thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf3rdImagesUrl + 1,
);
console.log('4th URL');
// console.log(positionOf4thImagesUrl);

// This finds the first substring containing the 4th URL
const fourthImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf4thImagesUrl,
  positionOf4thImagesUrl + 80,
);
// console.log(thirdImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary4thImagesUrl = fourthImagesExtendedUrl.slice(10, 72);
// console.log(temporaryfirstImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf4thHttpInImageUrl = temporary4thImagesUrl.indexOf('https');
const positionOf4thSpaceInImageUrl = temporary4thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final4thImagesUrl = temporary4thImagesUrl.slice(
  positionOf4thHttpInImageUrl,
  positionOf4thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final4thImagesUrl);

allTenUrlsArray.push(final4thImagesUrl);

// This looks for the 5th substring <img src

const positionOf5thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf4thImagesUrl + 1,
);
console.log('5th URL');
// console.log(positionOf5thImagesUrl);

// This finds the first substring containing the 5th URL
const fifthImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf5thImagesUrl,
  positionOf5thImagesUrl + 80,
);
// console.log(fifthImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary5thImagesUrl = fifthImagesExtendedUrl.slice(10, 72);
// console.log(temporaryfifthImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf5thHttpInImageUrl = temporary5thImagesUrl.indexOf('https');
const positionOf5thSpaceInImageUrl = temporary5thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final5thImagesUrl = temporary5thImagesUrl.slice(
  positionOf5thHttpInImageUrl,
  positionOf5thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final5thImagesUrl);

allTenUrlsArray.push(final5thImagesUrl);

// This looks for the 6th substring <img src

const positionOf6thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf5thImagesUrl + 1,
);
console.log('6th URL');
// console.log(positionOf6thImagesUrl);

// This finds the first substring containing the 6th URL
const sixthImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf6thImagesUrl,
  positionOf6thImagesUrl + 80,
);
// console.log(sixthImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary6thImagesUrl = sixthImagesExtendedUrl.slice(10, 72);
// console.log(temporaryfifthImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf6thHttpInImageUrl = temporary6thImagesUrl.indexOf('https');
const positionOf6thSpaceInImageUrl = temporary6thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final6thImagesUrl = temporary6thImagesUrl.slice(
  positionOf6thHttpInImageUrl,
  positionOf6thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final6thImagesUrl);

allTenUrlsArray.push(final6thImagesUrl);

// This looks for the 7th substring <img src

const positionOf7thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf6thImagesUrl + 1,
);
console.log('7th URL');
// console.log(positionOf7thImagesUrl);

// This finds the first substring containing the 6th URL
const seventhImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf7thImagesUrl,
  positionOf7thImagesUrl + 80,
);
// console.log(seventhImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary7thImagesUrl = seventhImagesExtendedUrl.slice(10, 72);
// console.log(temporaryseventhImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf7thHttpInImageUrl = temporary7thImagesUrl.indexOf('https');
const positionOf7thSpaceInImageUrl = temporary7thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final7thImagesUrl = temporary7thImagesUrl.slice(
  positionOf7thHttpInImageUrl,
  positionOf7thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final7thImagesUrl);

allTenUrlsArray.push(final7thImagesUrl);

// This looks for the 8th substring <img src

const positionOf8thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf7thImagesUrl + 1,
);
console.log('8th URL');
// console.log(positionOf8thImagesUrl);

// This finds the first substring containing the 6th URL
const eighthImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf8thImagesUrl,
  positionOf8thImagesUrl + 80,
);
// console.log(eighthImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary8thImagesUrl = eighthImagesExtendedUrl.slice(10, 72);
// console.log(temporaryeighthImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf8thHttpInImageUrl = temporary8thImagesUrl.indexOf('https');
const positionOf8thSpaceInImageUrl = temporary8thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final8thImagesUrl = temporary8thImagesUrl.slice(
  positionOf8thHttpInImageUrl,
  positionOf8thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final8thImagesUrl);

allTenUrlsArray.push(final8thImagesUrl);

// This looks for the 9th substring <img src

const positionOf9thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf8thImagesUrl + 1,
);
console.log('9th URL');
// console.log(positionOf9thImagesUrl);

// This finds the first substring containing the 9th URL
const ninethImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf9thImagesUrl,
  positionOf9thImagesUrl + 80,
);
// console.log(ninethImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary9thImagesUrl = ninethImagesExtendedUrl.slice(10, 72);
// console.log(temporaryninethImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf9thHttpInImageUrl = temporary9thImagesUrl.indexOf('https');
const positionOf9thSpaceInImageUrl = temporary9thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final9thImagesUrl = temporary9thImagesUrl.slice(
  positionOf9thHttpInImageUrl,
  positionOf9thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final9thImagesUrl);

allTenUrlsArray.push(final9thImagesUrl);

// This looks for the 10th substring <img src

const positionOf10thImagesUrl = htmlFromMemeMainpage.indexOf(
  '<img src',
  positionOf9thImagesUrl + 1,
);
console.log('10th URL');
// console.log(positionOf10thImagesUrl);

// This finds the first substring containing the 9th URL
const tenthImagesExtendedUrl = htmlFromMemeMainpage.slice(
  positionOf10thImagesUrl,
  positionOf10thImagesUrl + 80,
);
// console.log(tenthImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary10thImagesUrl = tenthImagesExtendedUrl.slice(10, 72);
// console.log(temporarytenthImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf10thHttpInImageUrl = temporary10thImagesUrl.indexOf('https');
const positionOf10thSpaceInImageUrl = temporary10thImagesUrl.indexOf(' ');

// This slices the exact starting from http until the first space ' '.
const final10thImagesUrl = temporary10thImagesUrl.slice(
  positionOf10thHttpInImageUrl,
  positionOf10thSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final10thImagesUrl);

allTenUrlsArray.push(final10thImagesUrl);

// console.log(allTenUrlsArray.length);

// eighth item in array is on index 7
// console.log(allTenUrlsArray[7]);
// eighth URL
// console.log(final8thImagesUrl);

// loop to copy all 10 items to folder
/*
for (i = 0, i < 10, i++) {
  let new file named '0' + i + '.jpg';
  fetch(allTenUrlsArray[i]) and save it to newly created file in folder memes
}

//
//
//
//

/*
const secondImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);

const firstImagesUrl = htmlFromMemeMainpage.substring(7990, 8100);
console.log(stuff2);
*/
