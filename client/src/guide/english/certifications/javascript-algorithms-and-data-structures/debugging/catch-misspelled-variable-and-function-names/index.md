---
title: Catch Misspelled Variable and Function Names
---
## Catch Misspelled Variable and Function Names

### Problem explanation:
Fix the two spelling errors in the code so the netWorkingCapital calculation works.

### Hint
Check the spelling of the first two variables against when it is used. 

## Spoiler alert!

**Solution ahead!**

```javascript
// 'i' and 'e' swapped in "receivables" and missing 's' in "payables"

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

```
