---
title: Catch Mixed Usage of Single and Double Quotes
---
## Catch Mixed Usage of Single and Double Quotes

- Remember whether you choose to use single or double quotes, simply adding  a `\` before the character will allow the character to fit in the string without closing either single or double quotes. 
- The test cases will only be passed by using double quotes.

## Solution:
```javascript
//Solution1:
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
