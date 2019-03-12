---
title: Missing Letters
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>String global object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933' target='_blank' rel='nofollow'>JS String Prototype CharCodeAt</a>
*   <a>String.fromCharCode</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You will need to convert from character to ASCII code using the two methods provided in the description.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function fearNotLetter(str) {
      let firstChar = str.charAt(0);
      let lastChar = str.charAt(str.length - 1);

      let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split("");

      let myRange = alphabetArr.slice(alphabetArr.indexOf(firstChar), alphabetArr.indexOf(lastChar) + 1);
      let differentLetters = myRange.filter(item => str.indexOf(item) === -1).join("");
      return (differentLetters === "") ? undefined : differentLetters;
    }
    
    // test here
    fearNotLetter("abce");
    
    
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnD/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   get first letter of the input `str` and save in `firstChar`
*   get last letter of the input `str` and save in `lastChar` (remember the index of the last letter is the length of string - 1)

*   split string of alphabet into array (if we didn't split the alphabet string, we would later have to split the myRange (which would be still be a string in order to use filter: myRange.split("").filter(...))

*   myRange is an array sliced from alphabetArr (remember slice(from, until) works with arrays and strings and to include the last letter we have to do (until + 1))
*   if (str === "abce"), myRange === ['a','b','c','d','e'] and myRange.join("") === "abcde"

*   filter(): for every letter in myRange, if letter is not found in string (indexOf(item) === -1), push it to new array that will be returned
*   join the filtered array

*   if `str` has every letters in the range, `differentLetters` will be ""
*   using ternary operator, return `undefined` if no letters, otherwise return the string of different letters

#### Relevant Links

*   <a href='https://guide.freecodecamp.org/javascript/standard-objects/string/string-prototype-charat/' target='_blank' rel='nofollow'>charAt()</a>
*   <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method/' target='_blank' rel='nofollow'>split()</a>
*   <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof/' target='_blank' rel='nofollow'>indexOf()</a>
*   <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method/' target='_blank' rel='nofollow'>slice()</a>
*   <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array/' target='_blank' rel='nofollow'>filter()</a>
*   <a href='https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-join/' target='_blank' rel='nofollow'>join()</a>
*   <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-the-conditional-ternary-operator/' target='_blank' rel='nofollow'>Ternary Operator</a>


## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function fearNotLetter(str) {

      for(var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);

        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {

          /* if current character has escaped one character find previous char and return */
          return String.fromCharCode(code - 1);
        }  
      }
      return undefined;
    }

    // test here
    fearNotLetter("abce");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnD/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   This solutions makes use of a `for` loop.
*   Code of encountered character is stored in **code**.
*   It is checked if code of current character is the expected one (no characters are skipped) by using the logic - `code of current character = code of first character + number of iterations`.
*   If a character is missing, the missing character is found and the final string is returned.
*   `undefined` is returned if there is no missing character in the string.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a>String.length</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    // Adding this solution for the sake of avoiding using 'for' and 'while' loops.
    // See the explanation for reference as to why. It's worth the effort.

    function fearNotLetter(str) {
      var compare = str.charCodeAt(0), missing;

      str.split('').map(function(letter,index) {
        if (str.charCodeAt(index) == compare) {
          ++compare;
        } else {
          missing = String.fromCharCode(compare);
        }
      });

      return missing;
    }

    // test here
    fearNotLetter("abce");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnE/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
*   We turn the string to an array in order to map through it instead of using `for` and `while` loops.
*   As we `map` through our letters' character codes, we go comparing with the one that should be in that position.
*   If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
*   If not, the missing letter will be assigned to the `missing` variable, which will be returned after the map is finished.
*   If there are no missing characters, return `undefined`.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294' target='_blank' rel='nofollow'>JS Array Prototype Map</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Simplified Advanced Code Solution:

    function fearNotLetter(str) {
      for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
          return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
      }
    }

### Code Explanation:

* Loop over the string
* Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
* Return the missing character ( +1 from where the gap was detected)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function fearNotLetter(str) {
      var allChars = '';
      var notChars = new RegExp('[^'+str+']','g');

      for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

      return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
    }

    // test here
    fearNotLetter("abce");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnG/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   A new string **allChars** is created.
*   Create a regular expression **notChars** which selects everything except **str**.
*   The `for` loop is used to add all the letters in the range to **allChars**.
*   `match()` is used to strip off the **str** letters from the newly created string and it is returned.
*   If there are no missing characters, return `undefined`.

#### Relevant Links

*   <a>JS Regex Resources</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-ternary-operator/15973' target='_blank' rel='nofollow'>JS Ternary</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941' target='_blank' rel='nofollow'>JS String Prototype Match</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
