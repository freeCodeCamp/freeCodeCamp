const fs = require('fs-extra');
const unified = require('unified');
const parse = require('remark-parse');
const parse2 = require('rehype-parse');
const rehype = require('remark-rehype');
const stringify = require('rehype-stringify');
const stringify2 = require('remark-stringify');
const remark = require('rehype-remark');
const path = require('path');
const readDirP = require('readdirp-walk');
const { Translate } = require('@google-cloud/translate');

const lang = 'es';
const langFull = 'spanish';

const mdProcessor = unified()
  .use(parse)
  .use(rehype, { allowDangerousHTML: true })
  .use(stringify);

const htmlProcessor = unified()
  .use(parse2)
  .use(remark)
  .use(stringify2);

readDirP({
  root: path.resolve(__dirname, './test')
}).on('data', translateChallenge);

async function translateChallenge(file) {
  const { name, fullPath, fullParentDir, stat } = file;
  if (stat.isDirectory() || name === '.DS_Store' || file.depth === 1) {
    return null;
  }

  const pathIndex = fullPath.indexOf('guide') + 6;
  const outputDir =
    fullParentDir.substring(0, pathIndex) +
    `${langFull}/` +
    fullParentDir.substring(pathIndex + 5);
  const outputPath =
    fullPath.substring(0, pathIndex) +
    `${langFull}/` +
    fullPath.substring(pathIndex + 5);
  if (fs.existsSync(outputPath)) {
    return null;
  }
  fs.ensureDirSync(outputDir);

  const fileString = fs.readFileSync(fullPath).toString();
  var i = fileString.indexOf('---', 4);
  const meta = fileString.substring(0, i + 4);
  const title = fileString.split('\n')[1].split(': ')[1];
  var article = fileString.substring(i + 4);

  return mdToHtml(article).then(htmlArticle => {
    htmlArticle = htmlArticle.replace(/\n/g, '<br>');
    htmlArticle = htmlArticle.replace(
      / {8}/g,
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    );
    htmlArticle = htmlArticle.replace(/ {4}/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    htmlArticle = htmlArticle.replace(/ {2}/g, '&nbsp;&nbsp;');
    translate(htmlArticle, title, meta, outputPath);
  });
}

function translate(htmlArticle, title, meta, outputPath) {
  Promise.all([translateText(title), translateText(htmlArticle)]).then(function(
    translations
  ) {
    // Replace English with translation
    let translatedTitle = translations[0][0];
    let tempArticle = translations[1][0];
    tempArticle = tempArticle.replace(/<br>/g, '\n');
    tempArticle = tempArticle.replace(/&#39;/g, "'");

    // tempArticle = tempArticle.replace(/language-html">/g,'language-html">\n')
    // tempArticle = tempArticle.replace(/<pre> <code/g, '<pre><code')
    // tempArticle = tempArticle.replace(/<\/code> <\/pre/g, '</code></pre')
    tempArticle = tempArticle.replace(/&nbsp;/g, ' ');

    htmlToMd(tempArticle).then(translatedArticle => {
      const i = meta.indexOf('---', 4);
      let translatedFile =
        meta.slice(0, i) +
        `localeTitle: ${translatedTitle}\n` +
        meta.slice(i) +
        translatedArticle;
      writeFile(translatedFile, outputPath);
    });
  });
}

const createTranslateText = target => text => {
  if (!text) {
    return '';
  }
  const translate = new Translate();

  return translate
    .translate(text, target)
    .then(results => {
      let translations = results[0];
      translations = Array.isArray(translations)
        ? translations
        : [translations];
      return translations;
    })
    .catch(err => {
      console.log(err);
    });
};

const translateText = createTranslateText(lang);

function writeFile(fileString, outputPath) {
  fs.writeFile(outputPath, fileString, function(err) {
    if (err) {
      throw err;
    }
    console.log('Saved:' + outputPath);
  });
}

function mdToHtml(file) {
  return new Promise((resolve, reject) =>
    mdProcessor.process(file, function(err, file) {
      if (err) {
        reject(err);
      }
      return resolve(file.contents);
    })
  );
}

function htmlToMd(file) {
  return new Promise((resolve, reject) =>
    htmlProcessor.process(file, function(err, file) {
      if (err) {
        reject(err);
      }
      return resolve(file.contents);
    })
  );
}
