---
title: Reuse Patterns Using Capture Groups
---
## Reuse Patterns Using Capture Group

## Hint 1:
Given code below:
```javascript
let testString = "test test test ";
let reRegex =/(test)\s\1/;
let result = reRegex.test(testString);
```
`result` will match only `test test` because `\1` in this example stands for the same text as most recently matched by the 1st capturing group `(test)`.

If we were to literally translate the regex, it would look something like this:

```js
let re = /(test)\s\1/;
let literalRe = /test\stest/;
```
Both `rea` and `literalRe` would match the same thing.

## Hint 2:
Given the code below:
```javascript
let testString = "test test test ";
let reRegex =/(test)(\s)\1\2\1/;
let result = reRegex.test(testString);
```
will match whole `test test test` because:
`\1` repeats (test)
`\2` repeats (\s)

## Hint 3:
The code below:
```javascript
let testString = "test test test test test test";
let reRegex =/(test)(\s)\1\2\1/g;
let result = reRegex.test(testString);
```
because we used `\g`, our Regex doesn't return after first full match (`test test test`) and matched all repetitions.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
let repeatNum = "42 42 42";
let reRegex =  /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
