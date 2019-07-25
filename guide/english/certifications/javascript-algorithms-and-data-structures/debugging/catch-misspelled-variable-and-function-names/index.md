---
title: Catch Misspelled Variable and Function Names
---
# Catch Misspelled Variable and Function Names


---
## Hints

### Hint 1
Check the spelling of the first two variables against when it is used. Also, reading a text backwards can help with detecting spelling errors. Make sure to check for these common spelling mistakes in English:

* vowel confusion (a instead of e, i instead of a)
* i before e
* ous vs os
* double letters if certain one-syllable words adding a suffix (like "big" to "bigger")


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// 'i' and 'e' swapped in "receivables" and missing 's' in "payables"

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

```
</details>
