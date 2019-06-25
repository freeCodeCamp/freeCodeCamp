---
title: Falsy Bouncer
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55dedad40d9f3f662c70d1eac4effc00c7d26bd9.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Remove all <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>falsy</a> values from an array.

#### Relevant Links

*   <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>Falsy Values</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values...

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Then we need to add a `filter()` with the falsy values function...

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

```js
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i])
      newArray.push(arr[i]);
  }
  return newArray;
}
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/repls/WarmPlainWebportal' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:
We create a new empty array.
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>truthy</a> or <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>falsy</a>.
If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
We return the new array (newArray).

#### Relevant Links

* [Boolean](https://forum.freecodecamp.com/t/javascript-boolean/14311)
* [Truthy value](https://forum.freecodecamp.com/t/javascript-truthy-value/15975)
* [Falsey values](https://www.freecodecamp.org/forum/t/javascript-falsy-values/14664)
* [Array.prototype.push](https://www.freecodecamp.org/forum/t/javascript-array-prototype-push/14298)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:
```js
    function bouncer(arr) {
      return arr.filter(Boolean);
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/32' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>truthy</a> value or `false` for <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>falsy</a> value. Hence we pass the built-in `Boolean` function.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-boolean/14311' target='_blank' rel='nofollow'>Boolean</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>Truthy</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>Array.prototype.filter()</a>

## ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":trophy:") Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:


## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
