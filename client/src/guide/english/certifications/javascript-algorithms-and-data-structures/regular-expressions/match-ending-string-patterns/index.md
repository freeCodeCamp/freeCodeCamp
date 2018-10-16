---	
title: Match Ending String Patterns	
---

## Match Ending String Patterns

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

We need to use the anchor character (```$```) to match the string ```"caboose"``` at the end of the string ```caboose```.

## Solution:

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
