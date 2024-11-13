const fs = require('fs');
const path = require('path');

const baseDir = path.join(
  __dirname,
  'challenges/english/25-front-end-development'
);

function isMongoId(str) {
  return /^[a-f\d]{24}$/i.test(str);
}

function processFile(filePath, id) {
  const content = fs.readFileSync(filePath, 'utf8');
  const modifiedContent = content.replace(
    /^\s*dashedName:\s*.+/gm,
    `dashedName: ${id}`
  );

  fs.writeFileSync(filePath, modifiedContent, 'utf8');
}

function processFolders() {
  console.log('Processing files...');

  const folders = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());

  folders.forEach(folder => {
    const folderPath = path.join(baseDir, folder.name);
    const files = fs
      .readdirSync(folderPath)
      .filter(file => file.endsWith('.md'));

    files.forEach(file => {
      const id = file.replace('.md', '');
      const filePath = path.join(folderPath, file);

      if (!isMongoId(id)) {
        console.log(`${filePath} is not a valid Mongo ID.`);
      } else {
        processFile(filePath, id);
      }
    });
  });

  console.log('All files processed.');
}

processFolders();
