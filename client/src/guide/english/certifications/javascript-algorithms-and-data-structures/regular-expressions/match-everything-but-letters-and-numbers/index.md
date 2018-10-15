
## Match Everything But Letters and Numbers
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Problem:

We need to use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

## Solution:

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
