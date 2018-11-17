const fs = require('fs-extra');
var showdown  = require('showdown');
const path = require('path');
const readDirP = require('readdirp-walk');
const {
    Translate
  } = require('@google-cloud/translate');

var TurndownService = require('turndown')

var turndownService = new TurndownService({'codeBlockStyle': 'fenced', 'headingStyle': 'atx'})

const converter = new showdown.Converter();

const lang = 'pt';
const langFull = 'portuguese';


readDirP({
    root: path.resolve(__dirname, `./english`)
  })
  .on('data', translateChallenge);

async function translateChallenge(file) {
  const {
    name,
    depth,
    path: filePath,
    fullPath,
    fullParentDir,
    stat
  } = file;
  if (stat.isDirectory() || name === '.DS_Store' || file.depth == 1) return null;

  
  const pathIndex = fullPath.indexOf('guide') + 6;
  const outputDir = fullParentDir.substring(0, pathIndex) + `${langFull}/` + fullParentDir.substring(pathIndex + 8);
  const outputPath = fullPath.substring(0, pathIndex) + `${langFull}/` + fullPath.substring(pathIndex + 8);
  if (fs.existsSync(outputPath)) return null;
  fs.ensureDirSync(outputDir);

  const fileString = fs.readFileSync(fullPath).toString();
  var i = fileString.indexOf('---', 4)
  const meta = fileString.substring(0, i+4)
  const title = fileString.split('\n')[1].split(': ')[1];
  var article = fileString.substring(i+4)
  
  var htmlArticle = converter.makeHtml(article);
  htmlArticle = htmlArticle.replace(/\n/g, '<br>')
  htmlArticle = htmlArticle.replace(/        /g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
  htmlArticle = htmlArticle.replace(/    /g, '&nbsp;&nbsp;&nbsp;&nbsp;')
  htmlArticle = htmlArticle.replace(/  /g, '&nbsp;&nbsp;')
  Promise.all([
    translateText(title),
    translateText(htmlArticle)
  ]).then(function(translations) {
    // Replace English with translation
    let translatedTitle = translations[0][0];
    let tempArticle = translations[1][0]
    tempArticle = tempArticle.replace(/<br>/g, '\n')
    tempArticle = tempArticle.replace(/&#39;/g, `'`)
 
    tempArticle = tempArticle.replace(/language-html">/g, 'language-html">\n')
    tempArticle = tempArticle.replace(/<pre> <code/g, '<pre><code')
    tempArticle = tempArticle.replace(/<\/pre> <\/code/g, '</pre></code')
    tempArticle = tempArticle.replace(/&nbsp;/g, ` `)
    let translatedArticle = turndownService.turndown(tempArticle);
    translatedArticle = translatedArticle.replace(/\n\n\`\`\`\n/g, '\n\`\`\`\n')
    let translatedFile = meta.slice(0, i) + `localeTitle: ${translatedTitle}\n` + meta.slice(i) + translatedArticle;

    writeFile(translatedFile, outputPath);
  });

}


const createTranslateText = target => (text) => {
    if (!text) return '';
    const translate = new Translate();
    
    return translate
        .translate(text, target)
        .then(results => {
        let translations = results[0];
        translations = Array.isArray(translations) ?
            translations : [translations];
        return translations;
        })
        .catch(err => {
        console.log(err);
        });
}
    
const translateText = createTranslateText(lang);


function writeFile(fileString, outputPath) {
    fs.writeFile(outputPath, fileString, function(err) {
        if (err) throw err;
        console.log('Saved:' + outputPath);
      });
}