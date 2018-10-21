---
title: Palindrome Checker
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/c/ca86619bb0ec05531dbb02be3c0b7b8383e67f01.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Our goal for solving this problem is tidying up the string passed in, and checking whether it is in fact a palindrome.

*   If you are unsure of what a palindrome is, it is a word or phrase that when reversed spells the same thing forwards or backwards. A simple example is `mom`, when you reverse the letters, it spells the same thing! Another example of a palindrome is `race car`. When we take out anything that is not a character it becomes `racecar` which is the same spelled forwards or backwards!

Once we have determined whether it is a palindrome or not we want to return either `true` or `false` based on our findings.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942' target='_blank' rel='nofollow'>String.prototype.replace</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948' target='_blank' rel='nofollow'>String.prototype.toLowerCase</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Regular expressions, `RegEx`, can be used to remove unwanted characters from the string.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

The `Array.prototype.split` and `Array.prototype.join` methods can be of use here. `For` and `while` loops are another alternative, or why not even `map`!

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

`String.prototype.toLowerCase` can be used to make a string lowercase.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function palindrome(str) {
      return str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/2' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or `null`), which essentially removes them from the string.

*   Next we _chain_ `.toLowerCase()` to remove any capital letters because `A` is a different character than `a`. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

*   Our next step is to take our string and `.split()` it, `.reverse()` it, and finally `.join()` it back together.

*   Last step is to check that the string is the same forwards and backwards and return our result!

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>String.prototype.split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reverse/14300' target='_blank' rel='nofollow'>Array.prototype.reverse</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>Array.prototype.join</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
```javascript
    function palindrome(str) {
      str = str.toLowerCase().replace(/[\W_]/g, '');
      for(var i = 0, len = str.length - 1; i < len/2; i++) {
        if(str[i] !== str[len-i]) {
          return false;
        }
      }
      return true;
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/3' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   We start by using the same methods of replacing characters we don't want in the string using `RegEx`'s, regular expressions, and then make our string lowercase.

*   Next we set up our `for` loop and declare an index `i` to keep track of the loop. We set our escape sequence to when `i` is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string. And finally we set `i` to increment after every loop.

*   Inside of each loop we want to check that the letter in element `[i]` is equal to the letter in the length of the string minus i, `[str.length - i]`. Each loop, the element that is checked on both sides of the string moves closer to the center until we have checked all of the letters. If at any point the letters do not match, we return `false`. If the loop completes successfully, it means we have a palindrome and therefore we return `true`!

#### Relevant Links

*   <a>Regex</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution (most performant):
```javascript
    //this solution performs at minimum 7x better, at maximum infinitely better.
    //read the explanation for the reason why. I just failed this in an interview.
    function palindrome(str) {
      //assign a front and a back pointer
      let front = 0
      let back = str.length - 1

      //back and front pointers won't always meet in the middle, so use (back > front)
      while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
          front++
          continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
          back--
          continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back--
      }

      //if the whole string has been compared without returning false, it's a palindrome!
      return true

    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/4' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   I was given this problem in an interview (spoiler: I wasn't hired ![:frowning:](https://forum.freecodecamp.com/images/emoji/emoji_one/frowning.png?v=3 ":frowning:") ) I quickly arrived at the basic solution, and the interviewer told me to make it better. The algorithm would take way too long if he passed the Bible as the string. He wanted it to be instant.

*   The simpler solutions perform very poorly on long strings because they operate on the whole string multiple times (toLowerCase(), replace(), split(), reverse(), join()) before comparing the **whole** string twice.

*   The beauty of this solution is it never **needs** to read through the whole string, even once, to know that it's not a palindrome. Why read through the whole string if you can tell that it's not a palindrome just by looking at two letters?

*   Uses a while loop instead of a for loop as a best practice - because we are using two variables, one is the index starting from the beginning of the string, and the other starts at the end of the string.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Cyclomatic_complexity' target='_blank' rel='nofollow'>Cyclomatic Complexity</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
