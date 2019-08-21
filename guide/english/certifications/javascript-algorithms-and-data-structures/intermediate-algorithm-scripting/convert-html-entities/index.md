---
title: Convert HTML Entities
---

# Convert HTML Entities

---
## Problem Explanation

*   You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.


---
## Hints

### Hint 1

*   You can use regular Expressions however I didn't in this case.

### Hint 2

*   You will benefit from a chart with all the html entities so you know which ones are the right ones to put.

### Hint 3

*   You should separate the string and work with each character to convert the right ones and then join everything back up.


---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");
```
#### Code Explanation

*   Assign **temp** to `str.split('')`, which creates an array containing each individual character in the passed in string.
*   Pass each character in the newly created array into a `switch()` statement.
*   Replace the HTML entities with their corresponding HTML entity string (i.e. `'&'` becomes `'&amp;'` in line 51)
*   `temp.join('')` converts the array of characters into a string to be returned.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank' rel='nofollow'>str.split()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank' rel='nofollow'>arr.join()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch' target='_blank' rel='nofollow'>switch statement</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");
```

#### Code Explanation
*   Create an object to use the Lookup functionality and easily find the characters.
*   Use `replace()` to replace characters with regex. 
*   The first argument for `replace()` is a regex that catches all the target characters and puts them into a capturing group.
*   The second arguments for `replace()` is a function with the matched character as a parameter. It returns the correspondant entity from `htmlEntities`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace' target='_blank' rel='nofollow'>str.replace()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp' target='_blank' rel='nofollow'>Regular Expressions</a>

</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>

```javascript
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
```

#### Code Explanation

*   Create an object to use the Lookup functionality and easily find the characters.
*   Split the original string by characters and use map to check for the changed html entity or use the same one.
*   The a function is added which is what returns the converted entity or the original one if there is no conversion.
*   Lastly we join all the characters once again.

**Note** that if you went the regex route then you don't need to join anything, just make sure you return the whole operation or save it to a variable and then return it.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank' rel='nofollow'>str.split()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map' target='_blank' rel='nofollow'>arr.map()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank' rel='nofollow'>arr.join()</a>

</details>
