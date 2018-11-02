---
title: Use Capture Groups to Search and Replace
---
## Use Capture Groups to Search and Replace

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Using `.replace()` with the first parameter set to find the part of the original string to replace, and the second parameter should be the replacement. 

## Hint 1:

Modify the regex so that `fixRegex` detects the part of the string to replace and the variable `replaceText` should be modified to the string that will replace `fixRegex`.

## Spoiler Alert - Solution Ahead!

## Solution

```javascript
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```
