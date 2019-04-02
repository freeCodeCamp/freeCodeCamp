---
title: Match All Letters and Numbers
---
## The Problem

Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.


## Solution

```let quoteSample = "The five boxing wizards jump quickly.";  
let alphabetRegexV2 = /\w/gi; // Change this line  
let result = quoteSample.match(alphabetRegexV2).length;  
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
