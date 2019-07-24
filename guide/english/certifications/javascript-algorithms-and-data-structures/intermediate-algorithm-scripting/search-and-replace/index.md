---
title: Search and Replace
---

# Search and Replace

---
## Problem Explanation

You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>String global object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942' target='_blank' rel='nofollow'>JS String Prototype Replace</a>


---
## Hints

### Hint 1

*   Find the index where `before` is in the string.

### Hint 2

*   Check first letter case.

### Hint 3

*   Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```


#### Code Explanation

*   Use `indexOf()` to find location of **before** in string.
*   If first letter of **before** is capitalized, change first letter of **after** to uppercase.
*   Replace **before** in the string with **after**.
*   Return the new string.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936' target='_blank' rel='nofollow'>JS String Prototype IndexOf</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950' target='_blank' rel='nofollow'>JS String Prototype ToUpperCase</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932' target='_blank' rel='nofollow'>JS String Prototype CharAt</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943' target='_blank' rel='nofollow'>JS String Prototype Slice</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function myReplace(str, before, after) {
  //Create a regular expression object
  var re = new RegExp(before, "gi");
  //Check whether the first letter is uppercase or not
  if (/[A-Z]/.test(before[0])) {
    //Change the word to be capitalized
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  //Replace the original word with new one
  var newStr = str.replace(re, after);

  return newStr;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

#### Code Explanation

*   In this solution, regular expression `[A-Z]` is used to check if character is uppercase.
*   Create a new regular expression object, **re**.
*   If first letter of **before** is capitalized, change the first letter of **after** to uppercase.
*   Replace **before** with **after** in the string.
*   Return the new string.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions' target='_blank' rel='nofollow'>JS Regex Resources</a>
</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>

```javascript
function myReplace(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split("");
    var sourceArr = source.split("");
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return targetArr.join("");
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```


#### Code Explanation

*   Both the **before** and **after** are passed as arguments to `applyCasing()`.
*   The function `applyCasing()` is used to change the case of respective characters in **targetArr** i.e., **after** in accordance with that of characters in **sourceArr** i.e., **before**.
*   `replace()` is used to replace **before** with **after**, whose casing is same as **before**.

</details>

<details><summary>Solution 4 (Click to Show/Hide)</summary>

```javascript
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =
  String.prototype.capitalize ||
  function() {
    return this[0].toUpperCase() + this.slice(1);
  };

const Util = (function() {
  // Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.

    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }

    function setCase(str, tCase) {
      switch (tCase) {
        case "uppercase":
          return str.toUpperCase();
        case "lowercase":
          return str.toLowerCase();
        case "capitalized":
          return str.capitalize();
        default:
          return str;
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) {
        return "uppercase";
      }
      if (str === str.toLowerCase()) {
        return "lowercase";
      }
      if (str === str.capitalize()) {
        return "capitalized";
      }
      return "normal";
    }
  }

  return {
    textCase
  };
})();

function myReplace(str, before, after) {
  const { textCase } = Util;
  const regex = new RegExp(before, "gi");
  const replacingStr = textCase(after, textCase(before));

  return str.replace(regex, replacingStr);
}
```
</details>

<details><summary>Solution 5 (Click to Show/Hide)</summary>

```javascript
function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter(item => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}

// test:
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-min/14684' target='_blank' rel='nofollow'>JS Math Min</a>
*   <a>String.length</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948' target='_blank' rel='nofollow'>JS String Prototype ToLowerCase</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>
</details>

