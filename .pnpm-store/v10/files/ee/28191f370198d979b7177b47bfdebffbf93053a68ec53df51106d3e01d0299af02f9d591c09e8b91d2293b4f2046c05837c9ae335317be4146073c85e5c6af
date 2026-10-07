// @flow
import path from 'path';
import type {FileSystem} from '@parcel/fs';
import {fuzzySearch} from './schema';
import {relativePath} from './path';
import {resolveConfig} from './config';

export async function findAlternativeNodeModules(
  fs: FileSystem,
  moduleName: string,
  dir: string,
): Promise<Array<string>> {
  let potentialModules: Array<string> = [];
  let root = path.parse(dir).root;
  let isOrganisationModule = moduleName.startsWith('@');

  while (dir !== root) {
    // Skip node_modules directories
    if (path.basename(dir) === 'node_modules') {
      dir = path.dirname(dir);
    }

    try {
      let modulesDir = path.join(dir, 'node_modules');
      let stats = await fs.stat(modulesDir);
      if (stats.isDirectory()) {
        let dirContent = (await fs.readdir(modulesDir)).sort();

        // Filter out the modules that interest us
        let modules = dirContent.filter(i =>
          isOrganisationModule ? i.startsWith('@') : !i.startsWith('@'),
        );

        // If it's an organisation module, loop through all the modules of that organisation
        if (isOrganisationModule) {
          await Promise.all(
            modules.map(async item => {
              let orgDirPath = path.join(modulesDir, item);
              let orgDirContent = (await fs.readdir(orgDirPath)).sort();

              // Add all org packages
              potentialModules.push(...orgDirContent.map(i => `${item}/${i}`));
            }),
          );
        }
      }
    } catch (err) {
      // ignore
    }

    // Move up a directory
    dir = path.dirname(dir);
  }

  return fuzzySearch(potentialModules.sort(), moduleName).slice(0, 2);
}

async function findAllFilesUp({
  fs,
  dir,
  root,
  basedir,
  maxlength,
  collected,
  leadingDotSlash = true,
  includeDirectories = true,
}: {|
  fs: FileSystem,
  dir: string,
  root: string,
  basedir: string,
  maxlength: number,
  collected: Array<string>,
  leadingDotSlash?: boolean,
  includeDirectories?: boolean,
|}): Promise<mixed> {
  let dirContent = (await fs.readdir(dir)).sort();
  return Promise.all(
    dirContent.map(async item => {
      let fullPath = path.join(dir, item);
      let relativeFilePath = relativePath(basedir, fullPath, leadingDotSlash);
      if (relativeFilePath.length < maxlength) {
        let stats = await fs.stat(fullPath);
        let isDir = stats.isDirectory();
        if ((isDir && includeDirectories) || stats.isFile()) {
          collected.push(relativeFilePath);
        }

        // If it's a directory, run over each item within said directory...
        if (isDir) {
          return findAllFilesUp({
            fs,
            dir: fullPath,
            root,
            basedir,
            maxlength,
            collected,
          });
        }
      }
    }),
  );
}

export async function findAlternativeFiles(
  fs: FileSystem,
  fileSpecifier: string,
  dir: string,
  projectRoot: string,
  leadingDotSlash?: boolean = true,
  includeDirectories?: boolean = true,
  includeExtension?: boolean = false,
): Promise<Array<string>> {
  let potentialFiles: Array<string> = [];
  // Find our root, we won't recommend files above the package root as that's bad practise
  let pkg = await resolveConfig(
    fs,
    path.join(dir, 'index'),
    ['package.json'],
    projectRoot,
  );

  let pkgRoot = pkg ? path.dirname(pkg) : projectRoot;
  await findAllFilesUp({
    fs,
    dir: pkgRoot,
    root: pkgRoot,
    basedir: dir,
    maxlength: fileSpecifier.length + 10,
    collected: potentialFiles,
    leadingDotSlash,
    includeDirectories,
  });

  if (path.extname(fileSpecifier) === '' && !includeExtension) {
    potentialFiles = potentialFiles.map(p => {
      let ext = path.extname(p);
      return ext.length > 0 ? p.slice(0, -ext.length) : p;
    });
  }

  return fuzzySearch(potentialFiles, fileSpecifier).slice(0, 2);
}
