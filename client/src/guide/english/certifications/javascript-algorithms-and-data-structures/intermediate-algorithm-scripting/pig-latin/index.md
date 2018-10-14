---
title: Pig Latin
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.

#### Relevant Links

*   <a href='http://en.wikipedia.org/wiki/Pig_Latin' target='_blank' rel='nofollow'>Pig Latin</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941' target='_blank' rel='nofollow'>JS String Prototype Match</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You will probably want to use regular expressions. This will allow you to convert the words easily.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

If the first character is a vowel, then take that whole word and add 'way' at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add 'ay'. This might be confusing but, it is not just the first consonant but all of them before the first vowel.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

You will need to use everything you know about string manipulation to get the last part right. However, it can be done with `substr` alone.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function translatePigLatin(str) {
      // Create variables to be used
      var pigLatin = '';
      var regex = /[aeiou]/gi;

      // Check if the first character is a vowel
      if (str[0].match(regex)) {
        pigLatin = str + 'way';

      } else if(str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + 'ay';
      } else {

        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
      }

      return pigLatin;
    }

    // test here
    translatePigLatin("consonant");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLmt/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Make an empty string to hold your Pig Latin word.
*   Assign your appropriate regular expression to a variable.
*   If the first character is a vowel, just add **way** to end of string and return it.
*   If the first character is not a vowel:
    *   Find number of consonants before first vowel with help of `indexOf()`, `match()` and regex.
    *   Start Pig Latin string with first vowel till the end.
    *   Add letters before first vowel to end of string.
    *   `substr()` is used for string manipulation here.
    *   Add **ay** to end of string and return it.

#### Relevant Links

*   <a>JS Regex Resources</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936' target='_blank' rel='nofollow'>JS String Prototype IndexOf</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945' target='_blank' rel='nofollow'>JS String Prototype Substr</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function translatePigLatin(str) {
      function check(obj) {
          return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
      }

      return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
    }

    // test here
    translatePigLatin("consonant");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLmw/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   This is a declarative as well as recursive approach to this problem.
*   `check()` is a function which checks for first letter of string to be in the array of vowels, `['a','i','u','e','o']`.
*   In case of consonants, `check()` calls itself on the next characters until finding the first vowel.
*   It'll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville's would be 3.
*   Then, letters up until that index are removed from the string and concatenated with either that same chunk of removed string or **w** accordingly, and then **ay** regardless.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932' target='_blank' rel='nofollow'>JS String Prototype CharAt</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935' target='_blank' rel='nofollow'>JS String Prototype Concat</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function translatePigLatin(str) {
        var strArr = [];
        var tmpChar;

        // check if the char is consonant using RegEx
        function isConsonant(char) {
            return !/[aeiou]/.test(char);
        }

        // return initial str + "way" if it starts with vowel
        // if not - convert str to array
        if (!isConsonant(str.charAt(0)))
            return str + "way";
        else
            strArr = str.split("");

        // push all consonats to the end of the array
        while (isConsonant(strArr[0])) {
            tmpChar = strArr.shift();
            strArr.push(tmpChar);
        }
     // convert array to string and concatenate "ay" at the end  
     return strArr.join("")+"ay";
    }

    // test here
    translatePigLatin("consonant");

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLmv/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   `isConsonant()` is used to check if a character is a consonant.
*   If first character is vowel, add **way** to end of string and return it.
*   If first character is not a vowel:
    *   Split string into array using `split()`.
    *   Push all consonants to end of array with help of `shift()` and `push()`.
    *   Convert array to string using `join()` and add **ay** to end of string. Return it.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301' target='_blank' rel='nofollow'>JS Array Prototype Shift</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>

### ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":trophy:") Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
