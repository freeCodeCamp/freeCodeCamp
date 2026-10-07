string-similarity
=================

Finds degree of similarity between two strings, based on [Dice's Coefficient](http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient), which is mostly better than [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance).

## Usage
Install using:

```shell
npm install string-similarity --save
```

In your code:

```javascript
var stringSimilarity = require('string-similarity');

var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed'); 

var matches = stringSimilarity.findBestMatch('healed', ['edward', 'sealed', 'theatre']);
```
## API

Requiring the module gives an object with two methods:

### compareTwoStrings(string1, string2)

Returns a fraction between 0 and 1, which indicates the degree of similarity between the two strings. 0 indicates completely different strings, 1 indicates identical strings. The comparison is case-insensitive.

##### Arguments
  
1. string1 (string): The first string
2. string2 (string): The second string
  
Order does not make a difference.
  
##### Returns
  
(number): A fraction from 0 to 1, both inclusive. Higher number indicates more similarity.

##### Examples
  
```javascript
stringSimilarity.compareTwoStrings('healed', 'sealed');
// → 0.8

stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.', 
  'For sale: table in very good  condition, olive green in colour.');
// → 0.7073170731707317

stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.', 
  'For sale: green Subaru Impreza, 210,000 miles');
// → 0.3013698630136986

stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.', 
  'Wanted: mountain bike with at least 21 gears.');
// → 0.11267605633802817
```

### findBestMatch(mainString, targetStrings)

Compares `mainString` against each string in `targetStrings`.

##### Arguments

1. mainString (string): The string to match each target string against.
2. targetStrings (Array): Each string in this array will be matched against the main string.

##### Returns
(Object): An object with a `ratings` property, which gives a similarity rating for each target string, and a `bestMatch` property, which specifies which target string was most similar to the main string.

##### Examples
```javascript
stringSimilarity.findBestMatch('Olive-green table for sale, in extremely good condition.', [
  'For sale: green Subaru Impreza, 210,000 miles', 
  'For sale: table in very good condition, olive green in colour.', 
  'Wanted: mountain bike with at least 21 gears.'
]);
// → 
{ ratings:
   [ { target: 'For sale: green Subaru Impreza, 210,000 miles',
       rating: 0.3013698630136986 },
     { target: 'For sale: table in very good condition, olive green in colour.',
       rating: 0.7073170731707317 },
     { target: 'Wanted: mountain bike with at least 21 gears.',
       rating: 0.11267605633802817 } ],
  bestMatch:
   { target: 'For sale: table in very good condition, olive green in colour.',
     rating: 0.7073170731707317 } }
```

![Build status](https://codeship.com/projects/2aa453d0-0959-0134-8a76-4abcb29fe9b4/status?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/aceakash/string-similarity/badge.svg)](https://snyk.io/test/github/aceakash/string-similarity)
