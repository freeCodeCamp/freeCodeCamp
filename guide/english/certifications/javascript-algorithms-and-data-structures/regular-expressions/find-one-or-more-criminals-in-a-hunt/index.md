---
title: Find One or More Criminals in a Hunt
---
## Find One or More Criminals in a Hunt

## The Problem 

A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

### Hint 1: 
Are you surrounding your regexp in slashes? 
```javascript
let regexp = /t.[a-z]*t/;
```

### Hint 2:
Are you using the '+' flag in your regexp?
```javascript
let regexp = /E+/; // returns E, EE, EEE patterns
```

### Spoiler Warning - Solution Ahead

## Solution
```javascript
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```
