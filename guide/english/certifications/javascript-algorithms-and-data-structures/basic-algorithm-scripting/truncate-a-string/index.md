---
title: Truncate a String
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

We need to reduce the length of the string or **truncate** it if it is longer than the given maximum lengths specified and add `...` to the end. If it is not that long then we keep it as is.

#### Relevant Links

*   <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice' target='_blank' rel='nofollow'>String.prototype.slice()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You will need to use the slice() method and specify where to start and where to stop.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Do not forget that when we truncate the word, we also must count the length added by `...`

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function truncateString(str, num) {
      // Clear out that junk in your trunk
      if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
      } else {
        return str;
      }

    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/55' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First we start off with a simple `if` statement to determine one of three outcomes...
*   If our string length is greater than the `num` we want to truncate at, and our truncate point is at least three characters or more into the string, we return a slice of our string starting at character 0, and ending at `num - 3`. We then append our `'...'` to the end of the string.
*   However, if our string length is greater than the `num` but `num` is within the first three characters, we don't have to count our dots as characters. Therefore, we return the same string as above, with one difference: The endpoint of our slice is now just `num`.
*   Finally, if none of the above situations are true, it means our string length is less than our truncation `num`. Therefore, we can just return the string.

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function truncateString(str, num) {
      if (str.length <= num) {
        return str;
      } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
      }
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/54' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First we need an if-statement to test if the length of the full string passed in as the first argument already fits within the size limit passed in as the second argument. If so we can just return the string that was passed in.

    if (str.length <= num)
      return str;

*   If our `if` statement above fails, we move to the `else`, where we are going to return a "slice" of the string. The slice method extracts a section of a string and returns a new string. Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary operator: `num > 3 ? num - 3 : num`. In our ternary, if `num` is larger than 3, we must factor in the three dots to our total length, and thus we end our slice at `num-3`. If num is less than or equal to 3, our slice gets an end variable of just `num`. Finally, the `'...'` is appended to the end of our new string and is returned.

    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
      }

*   **NOTE** In order to understand the above code, you need to understand how a Ternary Operator works. The Ternary Operator is frequently used as a shortcut for the `if` statement and follows this format: `condition ? expr1 : expr2`. If the `condition` evaluates to true, the operator returns the value of `expr1`. Otherwise, it returns the value of `expr2`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>Conditional (ternary) Operator</a>
*   <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice' target='_blank' rel='nofollow'>String.prototype.slice()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
