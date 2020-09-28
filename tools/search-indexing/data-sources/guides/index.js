const path = require('path');
const fs = require('fs-extra');
const { Observable } = require('rxjs');
const { map, filter } = require('rxjs/operators');
const readdirp = require('readdirp-walk');
const matter = require('gray-matter');

const { chunkDocument, stripHTML, stripURLs } = require('../../utils');

const { LOCALE: lang = 'english' } = process.env;

const selectedGuideDir = `../../../guide/${lang}`;
const guideRoot = path.resolve(__dirname, selectedGuideDir);

function fileStream(root) {
  return Observable.create(observer =>
    readdirp({ root, fileFilter: '*.md' })
      .on('data', file => (file.stat.isFile() ? observer.next(file) : null))
      .on('error', e => observer.error(e))
      .on('end', () => observer.complete())
  );
}

function parseFile(file) {
  const fileContents = fs.readFileSync(file.fullPath);
  return { ...file, ...matter(fileContents) };
}

function buildArticle(file) {
  const {
    path,
    content,
    data: { title }
  } = file;
  const url = path.replace(/\/index.md$/, '');
  const article = {
    content: stripURLs(stripHTML(content)),
    category: url.split('/').filter(Boolean)[0],
    title,
    url: `/${url}`,
    id: url.replace('/', '-')
  };
  return chunkDocument(article, ['title', 'url', 'id', 'category'], 'content');
}

function filterStubs(articleChunks) {
  return !articleChunks.some(chunk =>
    chunk.content.includes('This is a stub. Help our community expand it')
  );
}

exports.getGuideArticleData = () =>
  fileStream(guideRoot).pipe(
    map(file => parseFile(file)),
    map(file => buildArticle(file)),
    filter(article => filterStubs(article))
  );
