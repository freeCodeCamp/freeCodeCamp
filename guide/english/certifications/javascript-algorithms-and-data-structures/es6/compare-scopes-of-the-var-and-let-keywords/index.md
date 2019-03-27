---
title: Compare Scopes of the var and let Keywords
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Problem Explanation:

Change the code so that the variable `i` declared in the if block is separately scoped than the variable `i` declared at the beginning of the function.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*  _Be certain not to use the `var` keyword anywhere in your code._

> _try to solve the problem now_

*   _Remember that `let`'s scope is limited to the block, function or statement in which you declare it._
> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function checkScope() {
      "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
    console.log("Function scope i is: ", i);
    return i;
    }
```


## Code Explanation:

By using `let` you can declare variables in relation to their scope.

### Resources
- ["let" - *MDN Javascript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
 - [Rauschmayer, Axel. "Variables and scoping in ECMAScript 6". *2ality.com*, 2015-02-07.](http://2ality.com/2015/02/es6-scoping.html) Accessed 11 Dec 2018. 
  - [Bos, Wes. "Quick Tip: Use let with for Loops in JavaScript". *wesbos.com*, 16 Aug 2016.](https://wesbos.com/for-of-es6/) Accessed 11 Dec 2018. 

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
