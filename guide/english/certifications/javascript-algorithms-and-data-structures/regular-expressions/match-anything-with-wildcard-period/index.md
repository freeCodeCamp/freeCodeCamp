---
title: Match Anything with Wildcard Period
---
## Match Anything with Wildcard Period
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Hint 1:
The dot `.` is the key in this challenge.

## Hint 2:
You should put the dot on the right position.

## Solution
```javascript
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
## Explaination
The period `.` will be any one character so the strings "run", "sun", "fun" and "pun" have the same un charaters.

