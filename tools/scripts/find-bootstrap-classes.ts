import fs, { readFileSync } from 'fs';
import path from 'path';
import { glob } from 'glob';

const BOOTSTRAP_FILE = path.resolve(
  __dirname,
  '../../client/static/css/bootstrap.min.css'
);
const CLIENT_DIR = path.resolve(__dirname, '../../client/src');
const BOOTSTRAP_USAGES = path.resolve(__dirname, './bootstrap-usages.md');

const getBootstrapClasses = () => {
  const fileContent = readFileSync(BOOTSTRAP_FILE, 'utf-8').toString();
  return fileContent.match(/\..+(?={)/g);
};

const bsClasses = getBootstrapClasses();

const getFilesUsingBootstrapClasses = async () => {
  fs.unlinkSync(BOOTSTRAP_USAGES);

  const tsxAndMDFiles = await glob([
    `${CLIENT_DIR}/**/*.tsx`,
    `${CLIENT_DIR}/**/*.md`
  ]);

  tsxAndMDFiles.forEach(file => {
    const content = readFileSync(file, 'utf-8').toString();
    // Grab anything between `className='` and `'`
    const classes = content.match(
      /(?<=className=').+?(?=')|((?<=class=("|')).+?(?=("|')))/g
    );
    const bsClassesUsed = classes?.filter(cls =>
      bsClasses.filter(bsc => bsc.includes(cls))
    );

    if (bsClassesUsed?.length) {
      fs.appendFileSync(
        BOOTSTRAP_USAGES,
        `
  ${file.slice(28)}:
  ${bsClassesUsed.join(' ')}
  `
      );
    }
  });
};

getFilesUsingBootstrapClasses();
