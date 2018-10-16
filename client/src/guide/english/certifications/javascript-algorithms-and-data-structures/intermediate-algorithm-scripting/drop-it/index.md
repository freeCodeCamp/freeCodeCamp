---
title: Drop it
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/236dcca68bf55be37bf7cbb9646f6e0156b4a3c3.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as the first argument.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283' target='_blank' rel='nofollow'>Arguments object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301' target='_blank' rel='nofollow'>Array.shift()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302' target='_blank' rel='nofollow'>Array.slice()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You can use `Array.prototype.shift()` or filter that you should be more familiar with to solve this problem in a few lines of code.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Shift returns the element that was removed which we don't really need, all we need is the modified array that is left.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

If you still can't figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar with it, then you can make the code with shift.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function dropElements(arr, func) {
      // drop them elements.
      var times = arr.length;
      for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
          break;
        } else {
          arr.shift();
        }
      }
      return arr;
    }

    // test here
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;})

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLna/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create a for loop to check each element.
*   Then check for the function given if true then stop, otherwise remove that element.
*   return the array.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666' target='_blank' rel='nofollow'>For Loops</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>More about for loops</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function dropElements(arr, func) {
      return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
    }

    // test here
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnc/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Use ES6 `findIndex()` function to find the index of the element that passes the condition
*   Slice the array from the found index until the end
*   There is one edge case! if the condition is not met against any of the elements 'findIndex' will return `-1` which messes up the input to `slice()`. In this case use a simple conditional operator to return `false` instead of `-1`. And the ternary operator (?![:slight_smile:](https://forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=3 ":slight_smile:") returns the found index of required elements when the condition is `true`, and the length of the array otherwise so that the return value is an empty array as is instructed.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex' target='_blank' rel='nofollow'>findIndex()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>Conditional Operator</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function dropElements(arr, func) {
      while(arr.length > 0 && !func(arr[0])) {
        arr.shift();
      }
      return arr;
    }

    // test here
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnf/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation

*   Use a while loop with `Array.prototype.shift()` to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
*   Return the filtered array.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while' target='_blank' rel='nofollow' >While loops</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
