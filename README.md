## freeCodeCamp Curriculum

[![Build Status](https://travis-ci.org/freeCodeCamp/curriculum.svg?branch=master)](https://travis-ci.org/freeCodeCamp/curriculum)

This package contains the "seed" files used in the freeCodeCamp Curriculum.

### Installation

```sh
npm i @freecodecamp/curriculum
# or
yarn add @freecodecamp/curriculum
```

### Usage

```js
import { getChallenges } from '@freecodecamp/curriculum';

getChallenges() // will provide an array of blocks i.e. basic CSS, functional programming

```
#### `block` Structure

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

#### `challenge` Structure

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
