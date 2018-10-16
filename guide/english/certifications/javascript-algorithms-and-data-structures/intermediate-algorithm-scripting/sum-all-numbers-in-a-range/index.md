---
title: Sum All Numbers in a Range
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as `1+2+3` and not just `3+1`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Use `Math.max()` to find the maximum value of two numbers.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use `Math.min()` to find the minimum value of two numbers.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Remember to that you must add all the numbers in between so this would require a way to get those numbers.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function sumAll(arr) {
        var max = Math.max(arr[0], arr[1]);
        var min = Math.min(arr[0], arr[1]);
        var temp = 0;
        for (var i=min; i <= max; i++){
            temp += i;
        }
      return(temp);
    }

    sumAll([1, 4]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLm6/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First create a variable to store the max number between two.
*   The same as before for the Smallest number.
*   We create a temporary variable to add the numbers.

Since the numbers might not be always in order, using `max()` and `min()` will help organize.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-math-max/14682' target='_blank' rel='nofollow'>Math.max()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-min/14684' target='_blank' rel='nofollow'>Math.min()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666' target='_blank' rel='nofollow'>For Loops</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function sumAll(arr) {
      // Buckle up everything to one!

      // Using ES6 arrow function (one-liner)
      var sortedArr = arr.sort((a,b) => a-b);
      var firstNum = arr[0];
      var lastNum = arr[1];
      // Using Arithmetic Progression summing formula

      var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
      return sum;
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLm7/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Firstly, we create a variable called `sortedArr` which sorts it from the lowest to the highest value.
*   `firstNum` is equal to the first number and `lastNum` is equal to the second number.
*   Next, using the Arithmetic Progression summing formula we let `sum` equal `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2`.
*   Finally, we return `sum`.

The line `var sortedArr = arr.sort((a,b) => a-b);` is probably what will have you more confused. This would be the same as creating a function that returns `a-b` for the `sort()` which is the standard way to sort numbers from smallest to largest. Instead using arrow or fat arrow function, we are able to do all that in one single line thus allowing us to write less.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306' target='_blank' rel='nofollow'>Array.sort()</a>
*   <a href='https://en.wikipedia.org/wiki/Arithmetic_progression#Sum' target='_blank' rel='nofollow'>Arithmetic Progression summing formula</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>ES6 arrow function</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function sumAll(arr) {
        var sum = 0;
        for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
            sum += i;
        }
      return sum;
    }

    sumAll([1, 4]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLm8/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Creating a variable sum to store the sum of the elements.
*   Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
*   Using a spread operator (...arr) allows passing the actual array to the function instead of one-by-one elements.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator' target='_blank' rel='nofollow'>Spread Operator</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max' target='_blank' rel='nofollow'>Using Spread Operator in Math.max()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
