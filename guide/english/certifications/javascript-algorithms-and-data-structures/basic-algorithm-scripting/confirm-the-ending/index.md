---
title: Confirm the Ending
---
## Confirm the Ending
:triangular_flag_on_post: Remember to use Read-Search-Ask if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
# 🌻 Intermediate Code Solution:
 (Declarative approach)

```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
```

#### 🚀 [Run Code](https://repl.it/repls/SardonicRoundAfkgaming)

# Code Explanation:
 - First we use the `slice` method copy the string.
 - In order to get the last characters in `str` equivalent to the `target`'s length we use the `slice` method.
 - The first parameter inside the `slice` method is the starting index and the second parameter would be the ending index.
 - For example `str.slice(10, 17)` would return `give me`.
 - In this case we only include one parameter which it will copy everything from the starting index.
 - We substract the length of `str` and the length of `target`, that way, we shall get the last remaining characters equivalent to the `target`'s length.
 - Finally we compare the return result of slice to `target` and check if they have the same characters.

### Relevant Links
 - [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
# 🌻 Intermediate Code Solution:
 (Regular Expression approach)

```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let regexp = new RegExp(target+"$");
  return regexp.test(str);
}

confirmEnding("Bastian", "n");
```

#### 🚀 [Run Code](https://repl.it/repls/SardonicRoundAfkgaming)

# Code Explanation:
 *   Create a new regular expression using the constructor function of the RegExp object. Using the constructor allows us to pass in the parameter: target. Since we only want our expression to match the end of a given string, we add a "$".
 *   Test the regular expression we just created against the str argument of our function

### Relevant Links
 * [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)


 :clipboard: NOTES FOR CONTRIBUTIONS:
:warning: DO NOT add solutions that are similar to any existing solutions. If you think it is similar but better, then try to merge (or replace) the existing similar solution.
Add an explanation of your solution.
Categorize the solution in one of the following categories — Basic, Intermediate and Advanced. :traffic_light:
Please add your username only if you have added any relevant main contents. (:warning: DO NOT remove any existing usernames)
See :point_right: Wiki Challenge Solution Template for reference.
