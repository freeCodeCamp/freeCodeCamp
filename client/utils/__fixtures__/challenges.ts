import { ChallengeFile } from '../../src/redux/prop-types';

export const challengeFiles: ChallengeFile[] = [
  {
    contents: 'some ts',
    error: null,
    ext: 'ts',
    history: ['index.ts'],
    fileKey: 'indexts',
    name: 'index',
    seed: 'some ts',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'index.ts'
  },
  {
    contents: 'some css',
    error: null,
    ext: 'css',
    history: ['styles.css'],
    fileKey: 'stylescss',
    name: 'styles',
    seed: 'some css',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'styles.css'
  },
  {
    contents: 'some html',
    error: null,
    ext: 'html',
    history: ['index.html'],
    fileKey: 'indexhtml',
    name: 'index',
    seed: 'some html',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'index.html'
  },
  {
    contents: 'some js',
    error: null,
    ext: 'js',
    history: ['script.js'],
    fileKey: 'scriptjs',
    name: 'script',
    seed: 'some js',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'script.js'
  },
  {
    contents: 'some jsx',
    error: null,
    ext: 'jsx',
    history: ['index.jsx'],
    fileKey: 'indexjsx',
    name: 'index',
    seed: 'some jsx',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'index.jsx'
  },
  {
    contents: 'some tsx',
    error: null,
    ext: 'tsx',
    history: ['index.tsx'],
    fileKey: 'indextsx',
    name: 'index',
    seed: 'some tsx',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'index.tsx'
  },
  {
    contents: '{\n  "compilerOptions": {}\n}',
    error: null,
    ext: 'json',
    history: ['tsconfig.json'],
    fileKey: 'tsconfigjson',
    name: 'tsconfig',
    seed: '{\n  "compilerOptions": {}\n}',
    editableRegionBoundaries: [],
    usesMultifileEditor: true,
    path: 'tsconfig.json'
  }
];
