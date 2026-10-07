{
  "name": "smart-buffer",
  "version": "4.2.0",
  "description": "smart-buffer is a Buffer wrapper that adds automatic read & write offset tracking, string operations, data insertions, and more.",
  "main": "build/smartbuffer.js",
  "contributors": ["syvita"],
  "homepage": "https://github.com/JoshGlazebrook/smart-buffer/",
  "repository": {
    "type": "git",
    "url": "https://github.com/JoshGlazebrook/smart-buffer.git"
  },
  "bugs": {
    "url": "https://github.com/JoshGlazebrook/smart-buffer/issues"
  },
  "keywords": [
    "buffer",
    "smart",
    "packet",
    "serialize",
    "network",
    "cursor",
    "simple"
  ],
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "author": "Josh Glazebrook",
  "license": "MIT",
  "readmeFilename": "README.md",
  "devDependencies": {
    "@types/chai": "4.1.7",
    "@types/mocha": "5.2.7",
    "@types/node": "^12.0.0",
    "chai": "4.2.0",
    "coveralls": "3.0.5",
    "istanbul": "^0.4.5",
    "mocha": "6.2.0",
    "mocha-lcov-reporter": "^1.3.0",
    "nyc": "14.1.1",
    "source-map-support": "0.5.12",
    "ts-node": "8.3.0",
    "tslint": "5.18.0",
    "typescript": "^3.2.1"
  },
  "typings": "typings/smartbuffer.d.ts",
  "dependencies": {},
  "scripts": {
    "prepublish": "npm install -g typescript && npm run build",
    "test": "NODE_ENV=test mocha --recursive --require ts-node/register test/**/*.ts",
    "coverage": "NODE_ENV=test nyc npm test",
    "coveralls": "NODE_ENV=test nyc npm test && nyc report --reporter=text-lcov | coveralls",
    "lint": "tslint --type-check --project tsconfig.json 'src/**/*.ts'",
    "build": "tsc -p ./"
  },
  "nyc": {
    "extension": [
      ".ts",
      ".tsx"
    ],
    "include": [
      "src/*.ts",
      "src/**/*.ts"
    ],
    "exclude": [
      "**.*.d.ts",
      "node_modules",
      "typings"
    ],
    "require": [
      "ts-node/register"
    ],
    "reporter": [
      "json",
      "html"
    ],
    "all": true
  }
}
