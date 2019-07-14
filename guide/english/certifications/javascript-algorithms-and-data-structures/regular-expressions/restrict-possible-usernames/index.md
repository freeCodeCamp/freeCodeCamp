---
title: Restrict Possible Usernames
---
## Restrict Possible Usernames

## Solution:
```javascript
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
## Explain:
1. `^` - start of input
2. `[a-z]` - first character is a letter
3. `[0-9]{2,0}` - ends with two or more numbers
4. `|` - or
5. `[a-z]+` - has one or more letters next
6. `\d*` - and ends with zero or more numbers
7. `$` - end of input
8. `i` - ignore case of input
