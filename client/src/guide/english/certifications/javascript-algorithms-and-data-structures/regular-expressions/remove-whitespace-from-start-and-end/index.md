---
title: Remove Whitespace from Start and End
---
## Remove Whitespace from Start and End

To solve this challenge you simply have to create a regex string that matches any spaces at the beginning or at the end of the string. 

## Hint 1:
Think of how you can select substrings at the beginning or end of a string.

## Hint 2:
Think of how you can select whitespace

## Spoiler Alert - Solution Ahead!

## Solution:
```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
```
