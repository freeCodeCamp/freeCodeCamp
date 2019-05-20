---
title: Repeat a String Repeat a String
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>Global String Object</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You can't edit strings, you will need to create a variable to store the new string.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Create a loop to repeat the code as many times as needed.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Make the variable created store the current value and append the word to it.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function repeatStringNumTimes(str, num) {
      var accumulatedStr = '';

      while (num > 0) {
        accumulatedStr += str;
        num--;
      }

      return accumulatedStr;
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/19' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create an empty string variable to store the repeated word.
*   Use a while loop or for loop to repeat code as many times as needed according to `num`
*   Then we just have to add the string to the variable created on step one, and increase or decrease `num` depending on how you set the loop.
*   At the end of the loop, return the variable for the repeated word.

#### Relevant Links

*   <a>JS while Loop</a>
*   <a href='https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function repeatStringNumTimes(str, num) {
      if (num < 1) {
        return "";
      } else if (num === 1) {
        return str;
      } else {
        return str + repeatStringNumTimes(str, num - 1);
      }
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/21' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   This solution uses recursion.
*   We check if `num` is negative and return an empty string if true.
*   Then we check if it's equal to 1 and in that case we return the string itself.
*   If not, we add the string to a call of our function with `num` being decreased by 1, which will add another `str` and another.. until eventually `num` is 1\. And return that whole process.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion' target='_blank' rel='nofollow'>Functions - Recursion</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
