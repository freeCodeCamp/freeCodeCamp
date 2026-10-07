{
  "name": "@nodelib/fs.scandir",
  "version": "2.1.5",
  "description": "List files and directories inside the specified directory",
  "license": "MIT",
  "repository": "https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.scandir",
  "keywords": [
    "NodeLib",
    "fs",
    "FileSystem",
    "file system",
    "scandir",
    "readdir",
    "dirent"
  ],
  "engines": {
    "node": ">= 8"
  },
  "files": [
    "out/**",
    "!out/**/*.map",
    "!out/**/*.spec.*"
  ],
  "main": "out/index.js",
  "typings": "out/index.d.ts",
  "scripts": {
    "clean": "rimraf {tsconfig.tsbuildinfo,out}",
    "lint": "eslint \"src/**/*.ts\" --cache",
    "compile": "tsc -b .",
    "compile:watch": "tsc -p . --watch --sourceMap",
    "test": "mocha \"out/**/*.spec.js\" -s 0",
    "build": "npm run clean && npm run compile && npm run lint && npm test",
    "watch": "npm run clean && npm run compile:watch"
  },
  "dependencies": {
    "@nodelib/fs.stat": "2.0.5",
    "run-parallel": "^1.1.9"
  },
  "devDependencies": {
    "@nodelib/fs.macchiato": "1.0.4",
    "@types/run-parallel": "^1.1.0"
  },
  "gitHead": "d6a7960d5281d3dd5f8e2efba49bb552d090f562"
}
