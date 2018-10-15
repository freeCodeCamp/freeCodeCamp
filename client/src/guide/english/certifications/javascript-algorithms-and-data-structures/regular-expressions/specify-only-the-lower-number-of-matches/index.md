
## Specify Only the Lower Number of Matches

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## The Problem:

Change the regex ```haRegex``` to match the word ```"Hazzah"``` only when it has four or more letter ```z```'s.

## Solution:

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

## Explanation:

we specify the lower and upper number of patterns with ```quantity specifiers``` using curly brackets - lower is ```4``` and unlimited upper number.
