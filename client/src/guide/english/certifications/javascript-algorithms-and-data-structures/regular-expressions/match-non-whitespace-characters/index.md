
## Match Non-Whitespace Characters

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Problem:

We need to change the regex ```countNonWhiteSpace``` to look for multiple non-whitespace characters in a string.

## Solution:

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

## Explanation:

We use ```\S```, and this pattern will not match any of: whitespace, carriage return, tab, form feed, and new line characters. So we find all matching non-whitespace characters.
