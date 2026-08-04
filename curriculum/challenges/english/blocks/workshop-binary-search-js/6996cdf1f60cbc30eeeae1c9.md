---
id: 6996cdf1f60cbc30eeeae1c9
title: Step 12
challengeType: 1
dashedName: step-12
---

# --description--

If the condition in the `else if` is true, update the value of the `low` variable by adding `1` to the `mid` variable.

This will extend the search to the right half of the current search areas in the list, because if the `value` is greater than `valueAtMiddle`, it means the `value` must be in the right half of the current search area.

# --hints--

You should update the `low` variable to `mid + 1`.

```js
const explorer = await __helpers.Explorer(code);
const { binarySearch } = explorer.allFunctions;
const codeWithoutComments = __helpers.removeJSComments(binarySearch?.toString());
// Match the following variations:
// "else if (ANYTHING) {ANYTHING; low = mid + 1; ANYTHING}"
// "else if (ANYTHING) {ANYTHING; low = 1 + mid; ANYTHING}"
assert.match(
  codeWithoutComments,
  /else\s+if\s*\([^)]*\)\s*\{[\s\S]*?low\s*=\s*(?:mid\s*\+\s*1|1\s*\+\s*mid)[\s\S]*?\}/
);
```

# --seed--

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let pathToTarget = [];
  let low = 0;
  let high = searchList.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let valueAtMiddle = searchList[mid];
    pathToTarget.push(valueAtMiddle);
    
    if (value === valueAtMiddle) {
      return pathToTarget;
    } else if (value > valueAtMiddle) {
--fcc-editable-region--
      
--fcc-editable-region--
    }
    break;
  }
  return [];
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
```
