import { existsSync, mkdirSync, writeFileSync } from 'fs';

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

// This initialises the htmlFromMemeMainpage in order to assign the retured html-string later
const htmlFromMemeMainpage = 'this is the string from the declaration';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();

const positionOf1stImageUrl = data.indexOf('<img src');

// console.log('index of <img is: ' + positionOf1stImageUrl);

// This just prints the the number of the URL and the position of it in the big html file
console.log('1st URL');

// This finds the first substring containing the 1st URL
const firstImagesExtendedUrl = data.slice(
  positionOf1stImageUrl,
  positionOf1stImageUrl + 200,
);

// console.log('the firstImagesExtendedUrl is: ' + firstImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporaryfirstImagesUrl = firstImagesExtendedUrl.slice(22, 200);

// console.log('the temporaryfirstImagesUrl is: ' + temporaryfirstImagesUrl);

// console.log(temporaryfirstImagesUrl);

// This findes the exact position of the http and the first space ' '.
const positionOf1stHttpInImageUrl = temporaryfirstImagesUrl.indexOf('http');
const positionOf1stSpaceInImageUrl = temporaryfirstImagesUrl.indexOf(
  '"',
  positionOf1stHttpInImageUrl,
);

// console.log(
//  'the is positionOf1stHttpInImageUrl is: ' + positionOf1stHttpInImageUrl,
// );

// console.log(
//  'the is positionOf1stSpaceInImageUrl is: ' + positionOf1stSpaceInImageUrl,
// );

// This slices the exact starting from http until the first space ' '.

const finalfirstImagesUrl = [];

const positionOfLastsymbolInImageUrl = positionOf1stSpaceInImageUrl - 2;

const thisIsIs = temporaryfirstImagesUrl.slice(
  positionOf1stHttpInImageUrl,
  positionOf1stSpaceInImageUrl,
);

// console.log('This is it for real: ' + thisIsIs);

finalfirstImagesUrl.push(thisIsIs);

// console.log('this should be it');
// console.log(finalfirstImagesUrl[1]);
console.log(finalfirstImagesUrl[0]);
// console.log(finalfirstImagesUrl[1]);

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
const positionOf2ndImageUrl = data.indexOf('<img', positionOf1stImageUrl + 1);
// console.log('index of <img is: ' + positionOf2ndImageUrl);

console.log('2nd URL');
// console.log(positionOf2ndImageUrl);

// This finds the first substring containing the 2nd URL
const secondImagesExtendedUrl = data.slice(
  positionOf2ndImageUrl,
  positionOf2ndImageUrl + 200,
);
// console.log(secondImagesExtendedUrl);
// console.log('the secondImagesExtendedUrl is: ' + secondImagesExtendedUrl);

// This removes the "<img src" and keeps the rest after the URL
const temporary2ndImagesUrl = secondImagesExtendedUrl.slice(22, 200);
// console.log(temporary2ndImagesUrl);
// console.log('the temporary2ndImagesUrl is: ' + temporary2ndImagesUrl);
// This findes the exact position of the http and the first space ' '.
const positionOf2ndHttpInImageUrl = temporary2ndImagesUrl.indexOf('http');
const positionOf2ndSpaceInImageUrl = temporary2ndImagesUrl.indexOf('"');

// This slices the exact starting from http until the first space ' '.
const final2ndImagesUrl = temporary2ndImagesUrl.slice(
  positionOf2ndHttpInImageUrl,
  positionOf2ndSpaceInImageUrl,
);
// console.log('this should be it');
console.log(final2ndImagesUrl);

allTenUrlsArray.push(final2ndImagesUrl);

/*
for (i = 0, i < 10, i++) {
  let new file named '0' + i + '.jpg';
  fetch(allTenUrlsArray[i]) and save it to newly created file in folder memes
}

const file = fs.createWriteStream("file.jpg");
const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
   response.pipe(file);

*/
