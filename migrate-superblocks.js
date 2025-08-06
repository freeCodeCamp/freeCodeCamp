#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CURRICULUM_ROOT = path.join(__dirname, 'curriculum');
const IGNORED_DIRS = ['00-certifications', 'blocks', 'certifications'];

const LANGUAGE = process.argv[2] || 'english';

/**
 * Get all directories in a given path
 */
function getDirectories(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

/**
 * Get all files in a given path
 */
function getFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);
}

/**
 * Move a directory from source to destination
 */
function moveDirectory(sourcePath, destPath) {
  try {
    // Check if destination already exists
    if (fs.existsSync(destPath)) {
      console.warn(
        `Warning: ${path.basename(destPath)} already exists in blocks directory. Skipping.`
      );
      return false;
    }

    // Move the directory
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved: ${sourcePath} -> ${destPath}`);
    return true;
  } catch (error) {
    console.error(`Error moving ${sourcePath} to ${destPath}:`, error.message);
    return false;
  }
}

const getChallengesPath = language => {
  const challengesPath =
    language === 'english'
      ? 'challenges'
      : 'i18n-curriculum/curriculum/challenges/';

  return path.join(CURRICULUM_ROOT, challengesPath, language);
};

/**
 * Main migration function
 */
function moveBlocks(language) {
  console.log('Starting block migration...');

  const fullChallengesPath = getChallengesPath(language);

  const blocksDir = path.join(fullChallengesPath, 'blocks');

  // Ensure blocks directory exists
  if (!fs.existsSync(blocksDir)) {
    fs.mkdirSync(blocksDir, { recursive: true });
    console.log('Created blocks directory');
  }

  console.log(`Source: ${fullChallengesPath}`);
  console.log(`Destination: ${blocksDir}`);
  console.log(`Ignoring: ${IGNORED_DIRS.join(', ')}`);
  console.log('');

  const superblockDirs = getDirectories(fullChallengesPath);
  let totalMoved = 0;
  let totalSkipped = 0;

  for (const superblockDir of superblockDirs) {
    // Skip ignored directories
    if (IGNORED_DIRS.includes(superblockDir)) {
      console.log(`Skipping ignored directory: ${superblockDir}`);
      continue;
    }

    const superblockPath = path.join(fullChallengesPath, superblockDir);
    const blockDirs = getDirectories(superblockPath);

    if (blockDirs.length === 0) {
      console.log(`No blocks found in: ${superblockDir}`);
      continue;
    }

    console.log(
      `Processing superblock: ${superblockDir} (${blockDirs.length} blocks)`
    );

    for (const blockDir of blockDirs) {
      const sourcePath = path.join(superblockPath, blockDir);
      const destPath = path.join(blocksDir, blockDir);

      if (moveDirectory(sourcePath, destPath)) {
        totalMoved++;
      } else {
        totalSkipped++;
      }
    }

    console.log('');
  }

  console.log('Migration completed!');
  console.log(`Total blocks moved: ${totalMoved}`);
  console.log(`Total blocks skipped: ${totalSkipped}`);

  // Check if any superblock directories are now empty
  console.log('\nChecking for empty superblock directories...');
  for (const superblockDir of superblockDirs) {
    if (IGNORED_DIRS.includes(superblockDir)) {
      continue;
    }

    const superblockPath = path.join(fullChallengesPath, superblockDir);
    const remainingDirs = getDirectories(superblockPath);
    const remainingFiles = getFiles(superblockPath);

    if (remainingDirs.length === 0 && remainingFiles.length === 0) {
      console.log(`Empty superblock directory: ${superblockDir}`);
      fs.rmdirSync(superblockPath);
    } else {
      console.error(
        `Superblock ${superblockDir} still contains directories: ${remainingDirs.join(', ')} and files: ${remainingFiles.join(', ')}`
      );
    }
  }
}

function moveCertificates(language) {
  const fullChallengesPath = getChallengesPath(language);
  const baseCertPath = path.join(fullChallengesPath, '00-certifications');
  const destPath = path.join(fullChallengesPath, 'certifications');

  fs.mkdirSync(destPath, { recursive: true });

  const certificationDirs = getDirectories(baseCertPath);

  for (const cert of certificationDirs) {
    console.log('Moving certification: ' + cert);
    const files = getFiles(path.join(baseCertPath, cert));

    for (const file of files) {
      const source = path.join(baseCertPath, cert, file);
      const updatedFile = file
        .replace('-certification', '')
        .replace('-certifcation', '');
      const dest = path.join(destPath, updatedFile);
      fs.renameSync(source, dest);
    }
  }
}

moveBlocks(LANGUAGE);
moveCertificates(LANGUAGE);
