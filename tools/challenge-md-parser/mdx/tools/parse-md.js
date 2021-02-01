const { read } = require('to-vfile');
const remark = require('remark');
const html = require('remark-html');

(async () => {
  const path = './example.md';
  const file = await read(path);
  const contents = await remark()
    .use(html)
    .process(file);
  console.log(contents);
})();
