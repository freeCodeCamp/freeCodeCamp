// Copies non-English client translation files from the i18n-curriculum
// submodule into client/i18n/locales/<locale>/ so that all translations
// resolve from a single base path regardless of locale. English files
// already live in client/i18n/locales/english/ and are skipped.
//
// This script expects client/config/env.json to exist (created by
// create-env.ts) and reads clientLocale from it.

import * as fs from 'fs';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../config/env.json');
const env = JSON.parse(fs.readFileSync(envPath, 'utf8')) as {
  clientLocale: string;
};
const { clientLocale } = env;

if (clientLocale === 'english') {
  // If the locale is english the files already exist.
  process.exit(0);
}

const filesToCopy = [
  'translations.json',
  'intro.json',
  'meta-tags.json',
  'motivation.json'
];

const srcDir = path.resolve(
  __dirname,
  `../../curriculum/i18n-curriculum/client/${clientLocale}`
);
const destDir = path.resolve(__dirname, `../i18n/locales/${clientLocale}`);

if (!fs.existsSync(srcDir)) {
  console.error(
    `Source directory not found: ${srcDir}\n` +
      'Has the i18n-curriculum submodule been initialized? ' +
      'Run: git submodule update --init'
  );
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

for (const file of filesToCopy) {
  const src = path.join(srcDir, file);
  if (!fs.existsSync(src)) {
    console.error(`Source file not found: ${src}`);
    process.exit(1);
  }
  fs.copyFileSync(src, path.join(destDir, file));
}
