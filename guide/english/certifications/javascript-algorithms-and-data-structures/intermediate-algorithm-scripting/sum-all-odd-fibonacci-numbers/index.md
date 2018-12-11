---
title: Sum All Odd Fibonacci Numbers
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You will need to gather all the **Fibonacci** numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Fibonacci_number' target='_blank' rel='nofollow'>Fibonacci number</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

To check if a number is even all you have to check is if `number % 2 == 0`.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

As you get the next odd one, don't forget to add it to a global variable that can be returned at the end. `result += currNumber;` will do the trick.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function sumFibs(num) {
        var prevNumber = 0;
        var currNumber = 1;
        var result = 0;
        while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
                result += currNumber;
            }

            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
        }

        return result;
    }

    // test here
    sumFibs(4);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnV/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create a variable to keep record of the current and previous numbers along with the result that will be returned.
*   Use a while loop to make sure we do not go over the number given as parameter.
*   We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
*   Complete the Fibonacci circle by rotating getting the next number and swapping values after.
*   Return the result.

#### Relevant Links

*   <a>JS while Loop</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function sumFibs(num) {
        // Perform checks for the validity of the input
        if (num < 0) return -1;
        if (num === 0 || num === 1) return 1;

        // Create an array of fib numbers till num
        const arrFib = [1, 1];
        let nextFib = 0;
        
        // We put the new Fibonacci numbers to the front so we
        // don't need to calculate the length of the array on each
        // iteration
        while((nextFib = arrFib[0] + arrFib[1]) <= num) {
            arrFib.unshift(nextFib);
        }

        // Sum only the odd numbers and return the value
        // First, reverse the array to avoid starting acc with the first/greater number when it's even
        return arrFib.reverse().reduce((acc, curr) => {
            return acc + curr * (curr % 2);
        });
    }

    // test here
    sumFibs(4);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/@kr3at0/SumAllOddFibonacciNumbers' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create an array of fibonacci numbers till **num**.
*   Use `reduce()` method to find the sum of odd members of array.
*   Return the sum.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299' target='_blank' rel='nofollow'>JS Array Prototype Reduce</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
