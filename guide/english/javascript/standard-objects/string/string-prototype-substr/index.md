---
title: String.prototype.substr
---
## String.prototype.substr
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

#### Syntax
```JavaScript
  string.substr(start, length);
```

#### Parameter Values
| Parameter     | Description   | 
| :-------------| :-------------|
| start         | **Required.** The position where to start the extraction. First character is at index 0.<br>If *start* is positive and greater than, or equal, to the length of the string, substr() returns an empty string.<br>If *start* is negative, substr() uses it as a character index from the end of the string.<br>If *start* is negative or larger than the length of the string, start is set to 0|
| length        | **Optional**. The number of characters to extract. If omitted, it extracts the rest of the string|

#### Examples:
```JavaScript
let str = "Hello world!";
let res = str.substr(1, 4);
```
The result of res will be:
```
ello
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://www.w3schools.com/jsref/jsref_substr.asp'>JavaScript String substr() Method</a>.


