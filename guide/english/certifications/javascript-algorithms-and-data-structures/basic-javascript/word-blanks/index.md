---
title: Word Blanks
---

# Word Blanks

---
## Problem Explanation

We have provided a framework for testing your results with different words. The tests will run your function with several different inputs to make sure all of the provided words appear in the output, as well as your extra strings.

*   Change the code below `//Your Code here` and up to `//Change this line`.
*   Take note that you are editing the inside of the `wordBlanks()` function.
*   You will have basically created a sentence with the provided string variables.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank' rel='nofollow'>Mad Libs</a>
*   <a href='http://www.freecodecamp.com/challenges/constructing-strings-with-variables' target='_blank' rel='nofollow'>Challenge: Constructing Strings with Variables</a>
*   <a href='http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator' target='_blank' rel='nofollow'>Challenge: Concatenating Strings with Plus Operator</a>
*   <a href='http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator' target='_blank' rel='nofollow'>Challenge: Concatenating Strings with the Plus Equals Operator</a>


---
## Hints

### Hint 1

`+` can be used for _concatenating_ strings.

### Hint 2

Just as you can chain strings by concatenating, you can assign them to an existing variable instead of a new one.

### Hint 3

`+=` will allow you to use an existing variable, a string type in this case. Remember to add your own **non-letters** in between each variable.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result +=
    "My " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " very " +
    myAdverb +
    ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
```

**Example Run**

*   Test `wordBlanks("dog", "big", "ran", "quickly");` runs.
*   Variable **result** is declared with an empty string `""`.
*   **result** will be changed with a new string composed of the concatenated strings "dog", "big", "ran", "quickly" through the variables **myNoun**, **myAdjective**, **myVerb**, **myAdverb** respectively; the order is changed and whitespace added.
*   **result** is returned.

#### Code Explanation

*   Use **result** to concatenate the given variables.
*   Separate words with whitespace and appropriate words to form the full sentence.

</details>
