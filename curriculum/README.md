![freeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

# freeCodeCamp Curriculum

[![Build Status](https://travis-ci.org/freeCodeCamp/curriculum.svg?branch=master)](https://travis-ci.org/freeCodeCamp/curriculum) [![npm (scoped)](https://img.shields.io/npm/v/@freecodecamp/curriculum.svg)](https://www.npmjs.com/package/@freecodecamp/curriculum)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)

> This package contains the "challenge" files used in the freeCodeCamp Curriculum.

## Installation

```sh
npm i @freecodecamp/curriculum
# or
yarn add @freecodecamp/curriculum
```

## Usage

```js
import { getChallenges } from '@freecodecamp/curriculum';

// fetch an array of blocks
// i.e. basic CSS, functional programming, etc.
getChallenges()
```

### `block` Structure

```js
{
  "name": "ES6",
  "order": 2,
  "time": "5 hours",
  "helpRoom": "Help",
  "challenges": [/*<challenge>*/],
  "fileName": "02-javascript-algorithms-and-data-structures/es6.json",
  "superBlock": "javascript-algorithms-and-data-structures",
  "superOrder": 2
}
```

### `challenge` Structure

```js
{
  "id": "ObjectId()",
  "title": "Declare a Read-Only Variable with the const Keyword",
  "description": [
    "A Description of the challenge and what is required to pass"
  ],
  "tests": [
    {
      "text": "should return \"foo\"",
      "testString": "a stringified function using Chai asserts"
    }
  ],
  "challengeType": 1,
  "translations": {},
  "files": {
    "indexjs": {
      "key": "indexjs",
      "ext": "js",
      "name": "index",
      "contents": [
        "Initial editor seed"
      ],
      "head": [
        "A place for test set up",
        "Can be thought of as mocha's beforeEach()"
      ],
      "tail": [
        "A place for test tear down",
        "Can be thought of as mocha's afterEach()"
        ]
    }
  }
},
```

## Contributing

1. 🍴 Fork this repo
2. 👀️ Follow the contributing guidelines outlined in [Contributing Guidelines](docs/CONTRIBUTING.md).
3. 🔧 Make some awesome changes!
4. 👉 [Make a pull request](https://github.com/freeCodeCamp/learn/compare)
5. 🎉 Get your pull request approved - success!

## License

Copyright (c) 2018 freeCodeCamp.

The curricular content in this repo is licensed under the [CC-BY-SA-4.0](LICENSE.md)
