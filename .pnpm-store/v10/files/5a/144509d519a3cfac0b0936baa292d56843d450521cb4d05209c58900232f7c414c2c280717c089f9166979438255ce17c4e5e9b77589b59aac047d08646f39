{
  "name": "colorette",
  "version": "2.0.20",
  "type": "module",
  "main": "index.cjs",
  "module": "index.js",
  "types": "index.d.ts",
  "description": "🌈Easily set your terminal text color & styles.",
  "repository": "jorgebucaran/colorette",
  "license": "MIT",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "require": "./index.cjs",
      "import": "./index.js",
      "types": "./index.d.ts"
    }
  },
  "files": [
    "*.*(c)[tj]s*"
  ],
  "author": "Jorge Bucaran",
  "keywords": [
    "terminal",
    "styles",
    "color",
    "ansi"
  ],
  "scripts": {
    "test": "c8 twist tests/*.js",
    "build": "npx rollup --format cjs --input index.js --file index.cjs",
    "deploy": "npm test && git commit --all --message $tag && git tag --sign $tag --message $tag && git push && git push --tags",
    "release": "tag=$npm_package_version npm run deploy && npm publish --access public",
    "prepare": "npm run build"
  },
  "devDependencies": {
    "c8": "*",
    "twist": "*"
  }
}
