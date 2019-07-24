---
title: Spinal Tap Case
---

# Spinal Tap Case

---
## Problem Explanation

Convert the given string to a lowercase sentence with words joined by dashes.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>String global object</a>
*   <a href='https://guide.freecodecamp.org/javascript/regular-expressions-reference/' target='_blank' rel='nofollow'>JS Regex Resources</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942' target='_blank' rel='nofollow'>JS String Prototype Replace</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948' target='_blank' rel='nofollow'>JS String Prototype ToLowerCase</a>


---
## Hints

### Hint 1

Create a regular expression for all white spaces and underscores.

### Hint 2

You will also have to make everything lowercase.

### Hint 3

The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using `replace()`.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
```

#### Code Explanation

*   **regex** contains the regular expression `/\s+|_+/g`, which will select all white spaces and underscores.
*   The first `replace()` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
*   While returning the string, another `replace()` replaces spaces and underscores with dashes using **regex**.
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");
```

#### Code Explanation

*   Similar to the first solution, the first `replace()` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
*   Instead of using `replace()` here to replace whitespace and underscores with dashes, the string is `split()` on the regular expression `/(?:_| )+/` and `join()`-ed on `-`.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>

</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>


```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
```


#### Code Explanation

*   Split the string at one of the following conditions (_converted to an array_)
    *   a whitespace character [`\s`] is encountered
    *   underscore character [`_`] is encountered
    *   or is followed by an uppercase letter [`(?=[A-Z])`]
*   Join the array using a hyphen (`-`)
*   Lowercase the whole resulting string

#### Relevant Links

*   <a href='http://devdocs.io/javascript/global_objects/string/split' target='_blank' rel='nofollow'>String#split</a>
*   <a href='http://devdocs.io/javascript/global_objects/regexp' target='_blank' rel='nofollow'>RegExp</a>
*   <a href='http://devdocs.io/javascript/global_objects/array/join' target='_blank' rel='nofollow'>Arrray#join</a>
*   <a href='http://devdocs.io/javascript/global_objects/string/tolowercase' target='_blank' rel='nofollow'>String#toLowerCase</a>

</details>
