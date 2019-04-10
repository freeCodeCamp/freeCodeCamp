---
title: Match a Literal String with Different Possibilities
---
## Match a Literal String with Different Possibilities

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Suppose you want to match many different words with your regular expression; using the `|` symbol, that becomes possible. In this challenge, you are using that symbol to identify four different pets hidden within strings!

## Hint 1:

Inside the string literal, place the pet names, each seperated by the `|` symbol.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascriot
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```
