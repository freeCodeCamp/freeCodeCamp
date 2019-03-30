---
title: Arguments Optional
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:

*   It has to add two numbers passed as parameters and return the sum.
*   It has to check if any of the numbers are actual numbers, otherwise return **undefined** and stop the program right there.
*   It has to check if it has one or two arguments passed. More are ignored.
*   If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

### Relevant Links

*   [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   [Typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Every time you deal with an argument, you have to check if it is a number or not. For this a function that handles this task will save you repeated code.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

When working on the case that it needs to return the function, it is wise to check if the first and only argument is a number again and base the code on that.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

In the case that only one argument was passed, do not worry about how to prompt input for the second one, just make the function definition properly and things will work out the way they should.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function addTogether() {
      // Function to check if a number is actually a number
      // and return undefined otherwise.
      var checkNum = function(num) {
        if (typeof num !== 'number') {
          return undefined;
        } else
          return num;
      };

      // Check if we have two parameters, check if they are numbers
      // handle the case where one is not
      // returns the addition.
      if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
          return undefined;
        } else {
          return a + b;
        }
      } else {
        // If only one parameter was found, returns a new function that expects two
        // Store first argument before entering the new function scope
        var c = arguments[0];

        // Check the number again, must be outside the function to about returning an object
        // instead of undefined.
        if (checkNum(c)) {
          // Return function that expect a second argument.
          return function(arg2) {
            // Check for non-numbers
            if (c === undefined || checkNum(arg2) === undefined) {
              return undefined;
            } else {
              // if numbers then add them.
              return c + arg2;
            }
          };
        }
      }
    }

    // test here
    addTogether(2,3);
```

### Code Explanation:

*   First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses **typeof** to check.
*   Check if we have two parameters, if so, then check if they are numbers or not using the **checkNum** function I created.
*   If they are not **undefined** then add them and return the addition. If they any of them is undefined then return undefined.
*   In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
*   Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
*   Now inside the function we are returning, we have to check for non numbers again just as at the beginning using **checkNum** if undefined then return that, otherwise if numbers add them and return the addition.

#### Relevant Links

*   [Typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
```javascript
function addTogether(first, second) {
  if (typeof first !== 'number') {
    return undefined;
  }
  const sum = second => (typeof second === 'number' ? first + second : undefined);
  return typeof second === 'undefined' ? second => sum(second) : sum(second);
}
// test here
addTogether(2,3);
```

### Code Explanation:

*   Return `undefined` if first argument is not a `number` or second argument is defined, but not a `number`.
*   Return sum of the arguments if both are provided otherwise return a sum function.

#### Relevant Links

*   [Typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:
```javascript
    //jshint esversion: 6
    function addTogether() {
      var args = Array.from(arguments);
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
    }

    // test here
    addTogether(2,3);
```

### Code Explanation:

*   First I iterate through the arguments and check for arguments that are not a number and return undefined
*   If it's not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
*   Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined

#### Relevant Links

*   [Array.prototype.reduce](https://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Array.prototype.some](https://forum.freecodecamp.com/t/javascript-array-prototype-some/14304)
*   [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)


## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
