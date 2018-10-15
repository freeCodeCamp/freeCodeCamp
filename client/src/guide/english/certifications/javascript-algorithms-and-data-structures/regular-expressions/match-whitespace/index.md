
## Match Whitespace

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Problem:

We need to change the regex ```countWhiteSpace``` to look for multiple whitespace characters in a string.

## Solution:

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```
