---
title: Title Case a Sentence
---

# Title Case a Sentence

---
## Problem Explanation

We have to return a sentence with title case. This means that the first letter will always be in uppercase and the rest will be in lowercase.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>Global String Object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948' target='_blank' rel='nofollow'>JS String Prototype ToLowerCase</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950' target='_blank' rel='nofollow'>JS String Prototype ToUpperCase</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942' target='_blank' rel='nofollow'>JS String Prototype Replace</a>


---
## Hints

### Hint 1

*   You should start by splitting the string into an array of words.
*   Split the sentence.


### Hint 2

*   You should make the word lowercase before making the first letter uppercase.
*   Use replace method on each word to capitalize the first letter of each word.


### Hint 3

*   You will need to create a new string with pieces of the previous one and at the end merge everything into a single string again.
*   In replace method, give first argument as the position of the first letter using charAt. For second argument write a function to return the capitalized letter as the replacement.


---
## Solutions 

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}
```

#### Code Explanation

We are modifying the `replaceAt` function using prototype to facilitate the use of the program.

Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945' target='_blank' rel='nofollow'>JS String Prototype Substr</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```js
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
```

#### Code Explanation

We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using `join` method.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294' target='_blank' rel='nofollow'>JS Array Prototype Map</a>

</details>

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
```

#### Code Explanation

The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.  
- Lowercase the whole string using `str.toLowerCase()`.  
- Replace every word' first character to uppercase using `.replace`.  
- Search for character at the beginning of each word i.e. matching any character following a `space` or matching the first character of the whole string, by using the following pattern.  
- Regex explanation:

*   Find all non-whitespace characters `(\S`)
*   At the beginning of string `(^)`
*   Or after any whitespace character `(\s)`
    *   The `g` modifier searches for other such word pattern in the whole string and replaces them.

    *   This solution works with national symbols and accented letters as illustrated by following examples  
        `international characters:` 'бабушка курит трубку' // -> 'Бабушка Курит Трубку'  
        `accented characters:` 'località àtilacol' // -> 'Località Àtilacol'

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions' target='_blank' rel='nofollow'>JS Regex Resources</a>

</details>