---
title: Set Default Parameters for Your Functions
---
## Set Default Parameters for Your Functions


:triangular_flag_on_post: Remember to use Read-Search-Ask if you get stuck. Try to pair program  :busts_in_silhouette: and write your own code :pencil: 


### :checkered_flag: Problem Explanation:
```javascript
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN
```

We'll be modifying the increment function so that the **number** parameter is incremented by 1 by default, by setting **value** to 1 if a value for **value** is not passed to the increment function.

### :speech_balloon: Hint: 1

Let's identify where the parameter **value** is in JS function

try to solve the problem now

### :speech_balloon: Hint: 2

Set **value** equal to something so that it is that value by default

try to solve the problem now

### Spoiler Alert!
![spoiler](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

Solution ahead!

## :beginner: Basic Code Solution:
```javascript
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN
```
:rocket: [Run Code](https://repl.it/@RyanPisuena/PleasingFumblingThings)

## Code Explanation

* This section is pretty straightforward. Pass this section by setting the **value** parameter equal to 1. When the function comes across test cases where **value** has not been passed anything, then **value** will be assigned one by default. 

Relevant Links: 

[Javascript default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

# :clipboard: NOTES FOR CONTRIBUTIONS:

* :warning: DO NOT add solutions that are similar to any existing solutions. If you think it is similar but better, then try to merge (or replace) the existing similar solution.
* Add an explanation of your solution.
* Categorize the solution in one of the following categories — Basic, Intermediate and Advanced.  :traffic_light:
* Please add your username only if you have added any relevant main contents. (  :warning: DO NOT remove any existing usernames)

See  :point_right: [Wiki Challenge Solution Template](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-template-guide/14272) for reference.
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
