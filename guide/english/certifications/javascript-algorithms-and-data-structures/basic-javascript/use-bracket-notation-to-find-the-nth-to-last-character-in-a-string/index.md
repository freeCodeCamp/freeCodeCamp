---
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
---
# Use Bracket Notation to Find the Nth-to-Last Character in a String


---
## Hints

### Hint 1
Remember that the position of any character, is the <strong>length of the string, minus one, minus the number of characters after it</strong>. For example, if you are trying to find the third-to-last character of the following string:

```javascript
var str = "Programming";
var secondToLastChar = str[str.length - 2]; // This is 'i'
```
    
As you can see, there is one extra character after 'n' (and that is 'g').
