---
title: Seek and Destroy
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two **or more** but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283' target='_blank' rel='nofollow'>Arguments object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>Array.filter()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You need to work with `arguments` as if it was a regular array. The best way is to convert it into one.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You need to filter, this also means you need to create a callback function. You can use various methods like: `indexOf()`, `includes()`. If you need another approach, `reduce()` might also be of use; keep reading those docs!

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

To convert `arguments` into an array use this code `var args = Array.prototype.slice.call(arguments);`

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function destroyer(arr) {
      var args = Array.prototype.slice.call(arguments);

      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
          if (arr[i] === args[j]) {
            delete arr[i];
          }
        }
      }
      return arr.filter(Boolean);
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/95' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

1.  Create an array of `arguments` using `Array.prototype.slice.call()` and store it in the variable `args`. We'll use this to check against `arr`.

2.  Start a basic `for` loop to iterate through `arr`. Nest another `for` loop inside the first, changing the integer variable `j` and arr to args. This second loop will iterate through `args` .

    *   Within the second loop create an `if` statement, checking strictly `===` that the current val of `arr[i]` is equal to `args[j]`.

    *   If the value at the current index _is_ equal in both arrays, use `delete` to remove it from `arr`.

3.  Outside of the nested loops: return the modified array using the `Boolean` object as a filter for any `null`'s created by the `delete` operator.

#### Relevant Links

*   [arguments</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>Array.filter()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete' target='_blank' rel='nofollow'>delete</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-boolean/14311' target='_blank' rel='nofollow'>Boolean</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function destroyer(arr) {
      var args = Array.from(arguments).slice(1);
      return arr.filter(function(val) {
        return !args.includes(val);
      });
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/Ck2m/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

1.  Declare a variable named `args` and set it equal to a new `Array` object `from()` the `arguments` passed into the function. On the same or next line, use the `slice()` method on `args` starting from the second index, 1\. This separates the arguments used for filtering into their own array of `args`.

2.  Return the filtered array, using `includes()` in the callback function to check if `val` is _not_ in `args`; returning `true` to keep the value in the original array or `false` to remove it.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283' target='_blank' rel='nofollow'>arguments</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302' target='_blank' rel='nofollow'>Array.slice()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes' target='_blank' rel='nofollow'>Array.includes()</a>

## Advanced Code Solution:

```javascript
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
```

### Code Explanation:

*  Code using ES6 syntax to declare function using arrow functions.
*  Using spread operator to retrieve the arguments.
*  Return the filtered array, using `includes()`.

#### Relevant Links
* [Spread Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
