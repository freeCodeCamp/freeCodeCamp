---
title: Escape Sequences in Strings
---
## Escape Sequences in Strings

* Escape sequences allow you to use characters you might not otherwise be able to type out, such as a word boundary.
* By following this diagram with character combinations you will be able to assign escape sequences to the string.
* ’	single quote
* "	double quote
* \	backslash
* \n	new line
* \r	carriage return
* \t	tab
* \b	word boundary
* \f	form feed
* The challenge requires that you don't use space between characters.

## Solution
```javascript
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
