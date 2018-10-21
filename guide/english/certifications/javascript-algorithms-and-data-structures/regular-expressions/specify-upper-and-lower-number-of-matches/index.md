---
title: Specify Upper and Lower Number of Matches
---
## Specify Upper and Lower Number of Matches

Remember `/a{2,4}/` will return `true` as long as there are between two to four a's together. It will return `true` for any string that has more than four a's together as well.

All these strings will return `true`:
```javascript
let threeAs = "aaa";
let fourAs = "aaaa";
let sevenAs = "aaaaaaa";

let myRegex = /a{2,4}/;
myRegex.test(threeAs) ; // true
myRegex.test(fourAs) ; // true
myRegex.test(sevenAs) ; // true
```
## Spolier Alert!

Remember to use `\s` after `Oh{3,6}` to include a white space, followed by `no` to pass all test cases. All test cases are written using a capital O, however the testcases could also be passed by using `ignore-case` : `/oh{3,6}\sno/i`

## Solution:
```javascript
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
```
