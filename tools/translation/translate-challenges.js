var fs = require('fs');

var lang = 'es';
var langFull = 'spanish';

var dir1 = fs.readdirSync('../../curriculum/challenges/english')[5];
var dir2 = fs.readdirSync('../../curriculum/challenges/english/' + dir1)[3];
var dir = dir1 + '/' + dir2;
fs.readdirSync('../../curriculum/challenges/english/' + dir).forEach(file => {
  if (file.includes('.md') && dir) {
    let originalFileName =
      '../../curriculum/challenges/' +
      langFull +
      '/' +
      dir +
      '/' +
      file.slice(0, -10) +
      langFull +
      '.md';

    fs.exists(originalFileName, function(exists) {
      if (!exists) {
        console.log(originalFileName);
        getFile(file, dir);
      }
    });
  }
});

// TEST
// var dir1 = fs.readdirSync('../../curriculum/challenges/english')[4];
// var dir2 = fs.readdirSync('../../curriculum/challenges/english/' + dir1)[0];
// var dir = dir1 + '/' + dir2;
// getFile('exercise-tracker.english.md', dir);

// Load in full text, description, instructions, and title
function getFile(file, dir) {
  let originalFileName =
    '../../curriculum/challenges/english/' + dir + '/' + file;
  let fileString = fs.readFileSync(originalFileName).toString();

  // Add 'notranslate' class to code so Google Translate API
  // will not translate code segments.
  fileString = fileString.replace(/<code>/g, '<code class="notranslate">');
  fileString = fileString.replace(
    /<blockquote>/g,
    '<blockquote class="notranslate">'
  );
  fileString = fileString.replace(/^.*videoUrl.*$/gm, "videoUrl: ''");
  fileString = fileString.replace(
    /https:\/\/www\.freecodecamp\.org/,
    'https://' + langFull + '.freecodecamp.org'
  );
  let description = fileString.match(
    /<section id='description'>(.|\n)*?<\/section>/
  )[0];
  description = description.replace(/\r?\n/g, '<code>0</code>');
  let instructions = fileString.match(
    /<section id='instructions'>(.|\n)*?<\/section>/
  )[0];
  instructions = instructions.replace(/\r?\n/g, '<code>0</code>');
  let tests = fileString.match(/<section id='tests'>(.|\n)*?<\/section>/)[0];
  let title = fileString.split('\n')[2].split(': ')[1];
  processFile(fileString, description, instructions, tests, title, file, dir);
}

// Get translatins from Google Translate API and insert into file
function processFile(
  fileString,
  description,
  instructions,
  tests,
  title,
  file,
  dir
) {
  const translateText = (text, target) => {
    return new Promise((resolve, reject) => {
      if (typeof text === 'object' && Object.keys(text).length === 0) {
        resolve(['']);
      } else {
        // Imports the Google Cloud client library
        const { Translate } = require('@google-cloud/translate');

        // Creates a client
        const translate = new Translate();

        translate
          .translate(text, target)
          .then(results => {
            let translations = results[0];
            translations = Array.isArray(translations)
              ? translations
              : [translations];
            resolve(translations);
          })
          .catch(err => {
            reject(console.log('!!!!!', err));
          });
      }
    });
  };

  // FOR TESTING ONLY
  // const translateText = (text, target) => {
  //     return new Promise((resolve, reject) => {
  //         resolve(['translated', 'translated', 'translated', 'translated']);
  //     });
  // };

  const translateTests = () => {
    return new Promise((resolve, reject) => {
      let testsArray = tests.split('\n');
      let testsToTranslate = [];

      testsArray.forEach(test => {
        if (test.includes('- text: ')) {
          testsToTranslate.push(test.slice(10));
        }
      });
      translateText(testsToTranslate, lang)
        .then(translation => {
          let transIndex = 0;
          testsArray.forEach((test, index) => {
            if (test.includes('- text')) {
              testsArray[index] = '  - text: ' + translation[transIndex];
              transIndex++;
            }
          });
          resolve(testsArray.join('\n'));
        })
        .catch(reject);
    });
  };

  Promise.all([
    translateText(description, lang),
    translateText(instructions, lang),
    translateText(title, lang),
    translateTests(tests, lang)
  ]).then(function(translations) {
    // Replace English with translation
    fileString = fileString.replace(
      /<section id='description'>(.|\n)*?<\/section>/,
      translations[0][0].replace(/<code>0<\/code> /g, '\n')
    );
    fileString = fileString.replace(
      /<section id='instructions'>(.|\n)*?<\/section>/,
      translations[1][0].replace(/<code>0<\/code> /g, '\n')
    );
    fileString = fileString.replace(
      title,
      title + '\nlocaleTitle: ' + translations[2]
    );
    fileString = fileString.replace(
      /<section id='tests'>(.|\n)*?<\/section>/,
      translations[3]
    );
    fileString = fileString.replace(/ class=\"notranslate\"/g, '');
    writeFile(fileString, file, dir);
  });
}

function writeFile(fileString, file, dir) {
  let fullFileName =
    '../../curriculum/challenges/' +
    langFull +
    '/' +
    dir +
    '/' +
    file.slice(0, -10) +
    langFull +
    '.md';
  fs.writeFile(fullFileName, fileString, function(err) {
    if (err) {
      throw err;
    }
    console.log('Saved!');
  });
}
