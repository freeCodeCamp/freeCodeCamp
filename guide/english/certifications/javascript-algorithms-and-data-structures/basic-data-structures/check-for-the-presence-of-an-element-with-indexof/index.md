---
title: Check For The Presence of an Element With indexOf()
---
## Check For The Presence of an Element With indexOf()

- A simple `if-statement` can be used to check whether or not the value returned by the `indexOf()` function is less than 0.
- Once the value is discovered then you can return either `true` or `false`.
- `Solution-1` demonstrates how a simple `if-statement` can return the correct result.

## Solution-1:
```javascript
function quickCheck(arr, elem) {
  if(arr.indexOf(elem)>=0) {
    return true;
  }
  return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```
- `Solution-2` demonstrates how the problem can be solved using the `? : (conditional)` operator.

## Solution-2:
```javascript
function quickCheck(arr, elem) {
return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```
- `Solution-3` demonstrates how the problem can be solved by directly returning result of the comparison.

## Solution-3:
```javascript
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```
