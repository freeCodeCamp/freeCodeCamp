---
title: Steamroller
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-isarray/14284' target='_blank' rel='nofollow'>Array.isArray()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You need to check if an element is an array or not.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:"' target='_blank' rel='nofollow'>[4]] then instead of returning [4] you need to return 4\. If you get [[[4]]] then the same, you want the 4\. You can access it with arr[index1][index2] to go a level deeper.

> _try to solve the problem now_

## ![:speech_balloon:</a> Hint: 3

You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function steamrollArray(arr) {
      var flattenedArray = [];

      // Create function that adds an element if it is not an array.
      // If it is an array, then loops through it and uses recursion on that array.
      var flatten = function(arg) {
        if (!Array.isArray(arg)) {
          flattenedArray.push(arg);
        } else {
          for (var a in arg) {
            flatten(arg[a]);
          }
        }
      };

      // Call the function for each element in the array
      arr.forEach(flatten);
      return flattenedArray;
    }

    // test here
    steamrollArray([1, [2], [3, [[4]]]]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnh/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create a new variable to keep flattened arrays.
*   Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
*   It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
*   Invoke the function, the first time you will always pass it an array, so it always fall in to the isArray branch
*   Return the flattened array.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>Array.push()</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290' target='_blank' rel='nofollow'>Array.forEach()</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function steamrollArray(arr) {
      let flat = [].concat(...arr);
      return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
    }

    flattenArray([1, [2], [3, [[4]]]]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLni/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Use spread operator to concatenate each element of `arr` with an empty array
*   Use `Array.some()` method to find out if the new array contains an array still
*   If it does, use recursion call `steamrollArray` again, passing in the new array to repeat the process on the arrays that were deeply nested
*   If it does not, return the flattened array

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some' target='_blank' rel='nofollow'>Array.some</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286' target='_blank' rel='nofollow'>Array.concat</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator' target='_blank' rel='nofollow'>Spread operator</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>Ternary Operator (`condition ? a : b`)</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function steamrollArray(arr) {
      return arr.toString()
        .replace(',,', ',')       // "1,2,,3" => "1,2,3"
        .split(',')               // ['1','2','3']
        .map(function(v) {
          if (v == '[object Object]') { // bring back empty objects
            return {};
          } else if (isNaN(v)) {        // if not a number (string)
            return v;
          } else {
            return parseInt(v);         // if a number in a string, convert it
          }
        });
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CpDy/4' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First we turn the array to a string, which will give us a string of numbers seperated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix it later in our if statement.
*   We replace the double comma with one, then split it back into an array.
*   map through the array and fix object values and convert string numbers to regular numbers.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
