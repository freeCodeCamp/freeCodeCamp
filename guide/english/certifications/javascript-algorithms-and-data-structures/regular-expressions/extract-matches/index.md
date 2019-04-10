---
title: Extract Matches
---
## Extract Matches

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Using the `match()` method, you can extract parts of a string that match with your regular expression. In this challenge, you are extracting the word "coding" from the string provided.

## Hint 1:

Change your regex to detect the word "coding".

## Hint 2:

Did you call the `match()` method on the string?

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
```
