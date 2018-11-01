---
title: Match Whitespace
---
## Match Whitespace
---
title: Match Literal Strings
---
## Match Literal Strings

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
This challenge is not any different from the previous; in this case though, you learn the shortcut for whitespace, which is \s.


## Hint 1:

Don't forget to include a -g global flag.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```
