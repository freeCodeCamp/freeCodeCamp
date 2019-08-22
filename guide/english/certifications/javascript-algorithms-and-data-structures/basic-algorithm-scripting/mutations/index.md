---
title: Mutations
---

# Mutations

---
## Problem Explanation

*   Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array..

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936' target='_blank' rel='nofollow'>String.indexOf()</a>


---
## Hints

### Hint 1

*   If everything is lowercase it will be easier to compare.


### Hint 2

*   Our strings might be easier to work with if they were arrays of characters.


### Hint 3

*   A loop might help. Use `indexOf()` to check if the letter of the second word is on the first.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

**Procedural**

```js
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
```

#### Code Explanation

First we make the two strings in the array lowercase. `test` will hold what we are looking for in `target`.  
Then we loop through our test characters and if any of them is not found we `return false`.

If they are _all_ found, the loop will finish without returning anything and we get to `return true`.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948' target='_blank' rel='nofollow'>String.toLowerCase()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>For loops</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

**Declarative**

```js
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
```

#### Code Explanation

Grab the second string, lowercase and turn it into an array; then make sure _every_ one of its _letters_ is a part of the lowercased first string.

`Every` will basically give you letter by letter to compare, which we do by using `indexOf` on the first string. `indexOf` will give you -1 if the current `letter` is missing. We check that not to be the case, for if this happens even once `every` will be false.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>Array.split()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287' target='_blank' rel='nofollow'>Array.every()</a>

</details>


<details><summary>Solution 3 (Click to Show/Hide)</summary>

**Declarative**

```js
function mutation(arr) {
  for (var el of arr[1]){
    let re = new RegExp(el,"i");
    if (re.test(arr[0]) == false){
      return false;
    }
  }
  return true;
}
```

#### Code Explanation

*   For every letter of the second Array we want to check if it's in the first array using the test() Method.
*   The RegExp(el,"i") function will create a Regular Expression for every letter. For example RegExp("Hey",i) will create /H/i, then /e/i, then /y/i.
*   If there is one letter that return false, than we return false. If arr[0] contains all letters than we return true.

#### Relevant Links

*   <a href='https://www.w3schools.com/jsref/jsref_regexp_test.asp'>RegExp.test()</a>

</details>
