var fs = require('fs');

var lang = 'es';
var langFull = 'spanish';

// Get list of .md files in current directory
// fs.readdirSync(dir).forEach(file => {
//   if (file.includes('.md')) {getFile(file)}
// });

fs.readdirSync('./english').forEach(file1 => {
  if (file1 != '.DS_Store') {
    fs.readdirSync('./english/' + file1).forEach(file2 => {
      if (file2 != '.DS_Store') {
        var dir = '/' + file1 + '/' + file2;
        fs.readdirSync('./english' + dir).forEach(file => {
          if (file.includes('.md') && dir) {
            getFile(file, dir);
          }
        });
      }
    });
  }
});

// Load in full text, description, instructions, and title
function getFile(file, dir) {
  let originalFileName = './english/' + dir + '/' + file;
  let fileString = fs.readFileSync(originalFileName).toString();

  // Add 'notranslate' class to code so Google Translate API will not translate code segments.
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
  // const translateText = (text, target) => {
  //     return new Promise((resolve, reject) => {
  //       // Imports the Google Cloud client library
  //       const {Translate} = require('@google-cloud/translate');

  //       // Creates a client
  //       const translate = new Translate();

  //       translate
  //         .translate(text, target)
  //         .then(results => {
  //           let translations = results[0];
  //           translations = Array.isArray(translations)
  //             ? translations
  //             : [translations];
  //           resolve(translations);
  //         })
  //         .catch(err => {
  //             reject(console.log("Error"));
  //             if (err) {}
  //         });
  //   });
  // };

  const translateText = (text, target) => {
    return new Promise((resolve, reject) => {
      resolve(['translated', 'translated', 'translated', 'translated']);
    });
  };

  const translateTests = () => {
    return new Promise((resolve, reject) => {
      let testsArray = tests.split('\n');
      let testsToTranslate = [];

      testsArray.forEach((test, index) => {
        if (test.includes('- text: ')) {
          testsToTranslate.push(test.slice(8));
        }
      });
      translateText(testsToTranslate, lang).then(translation => {
        let transIndex = 0;
        testsArray.forEach((test, index) => {
          if (test.includes('- text')) {
            testsArray[index] = '- text' + translation[transIndex];
            transIndex++;
          }
        });
        resolve(testsArray.join('\n'));
      });
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
    fileString = fileString.replace(/ class=\"notranslate\"/g, ''); // remove 'notranslate' class
    writeFile(fileString, file, dir);
  });
}

function writeFile(fileString, file, dir) {
  let fullFileName =
    '.' + '/' + langFull + dir + '/' + file.slice(0, -10) + langFull + '.md';
  fs.writeFile(fullFileName, fileString, function(err) {
    if (err) throw err;
    console.log('Saved!');
  });
}
