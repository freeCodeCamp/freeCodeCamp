---
title: Escaping Literal Quotes in Strings
---
## Escaping Literal Quotes in Strings

* When you need to use a special character such as `"` inside a string you need to escape it using `\`.
* If you use double quotes `"` for the string, single quotes `'` in the string do not need to be escaped. 
* If you use single quotes `'` for the string, double quotes `"` in the string do not need to be escaped. 

## Solution
```javascript
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
var otherStr = 'I am a \'single quoted\' string inside \'single quotes\'.';
var noEscapeSingle = "There is no need to 'escape' the single quotes.";
var noEscapeDouble = 'There is no need to "escape" the double quotes.';
```
