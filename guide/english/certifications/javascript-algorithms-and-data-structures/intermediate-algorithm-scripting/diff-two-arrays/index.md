---
title: Diff Two Arrays
---

# Diff Two Arrays

---
## Problem Explanation

Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

#### Relevant Links

*   <a href='https://devdocs.io/javascript/statements/for' target='_blank' rel='nofollow'>for Loop (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/includes' target='_blank' rel='nofollow'>Array.prototype.includes (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/filter' target='_blank' rel='nofollow'>Array.prototype.filter (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/concat' target='_blank' rel='nofollow'>Array.prototype.concat (Devdocs)</a>


---
## Hints

### Hint 1

Merge the list to make it easy to compare functions.

### Hint 2

Use filter to get the new array, you will need to create a callback function.

### Hint 3

The best way to go about the callback function is to check if the number from the new merged array is not in **both** original arrays and return it.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

(Imperative Solution)
```javascript
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

#### Code Explanation

Read the comments in the code.

#### Relevant Links

*   <a href='https://devdocs.io/javascript/statements/for' target='_blank' rel='nofollow'>for Loop (Devdocs)</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>


(Declarative Solution):
```javascript
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

#### Code Explanation

Explain solution here and add any relevant links

#### Relevant Links

*   <a href='https://devdocs.io/javascript/global_objects/array/concat' target='_blank' rel='nofollow'>Array.prototype.concat (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/filter' target='_blank' rel='nofollow'>Array.prototype.filter (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/includes' target='_blank' rel='nofollow'>Array.prototype.includes (Devdocs)</a>
</details>


<details><summary>Solution 3 (Click to Show/Hide)</summary>

(Declarative Solution)

```javascript
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
```

#### Relevant Links

*   <a href='https://devdocs.io/javascript/global_objects/array/includes' target='_blank' rel='nofollow'>Array.prototype.includes (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/filter' target='_blank' rel='nofollow'>Array.prototype.filter (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/concat' target='_blank' rel='nofollow'>Array.prototype.concat (Devdocs)</a>
</details>

