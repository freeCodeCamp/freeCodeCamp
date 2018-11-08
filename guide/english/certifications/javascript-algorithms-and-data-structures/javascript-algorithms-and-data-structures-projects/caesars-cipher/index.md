---
title: Caesars Cipher
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

*   You need to write a function, which will take a string encoded with _Caesar cipher_ as a parameter and decode it.
*   The one used here is ROT13 where the value of the letter is shifted by 13 places. e.g. 'A' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ":left_right_arrow:") 'N', 'T' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ":left_right_arrow:") 'G'.
*   You have to shift it back 13 positions, such that 'N' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ":left_right_arrow:") 'A'.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933' target='_blank' rel='nofollow'>String.prototype.charCodeAt</a>
*   <a>String.fromCharCode</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Use _String.charCodeAt()_ to convert the English character to ASCII.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use _String.fromCharCode()_ to convert ASCII to English character.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Leave anything that doesn't come between A-Z as it is.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function rot13(str) {
      // Split str into a character array
      return str.split('')
      // Iterate over each character in the array
        .map.call(str, function(char) {
          // Convert char to a character code
          x = char.charCodeAt(0);
          // Checks if character lies between A-Z
          if (x < 65 || x > 90) {
            return String.fromCharCode(x);  // Return un-converted character
          }
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places
          else if (x < 78) {
            return String.fromCharCode(x + 13);
          }
          // Otherwise shift the character 13 places backward
          return String.fromCharCode(x - 13);
        }).join('');  // Rejoin the array into a string
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/38' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   A string variable `nstr` is declared and initialized to store the decoded string.
*   The for loop is used to loop through each character of the input string.
*   If the character is not uppercase English alphabets(i.e. its ascii doesn't lie between 65 and 91 ), we'll leave it as it is and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue' target='_blank' rel='nofollow'>continue</a> with next iteration.
*   If it's the uppercase English alphabet, we'll subtract 13 from its ascii code.
*   If the ascii code is less than 78, it'll get out of range when subtracted by 13 so we'll add 26 (number of letters in English alphabets) to it so that after A it'll go back to Z. e.g. M(77) ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ":left_right_arrow:") 77-13 = 64(Not an English alphabet) +26 = 90 ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ":left_right_arrow:") Z(90).

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294' target='_blank' rel='nofollow'>Array.prototype.map</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>String.prototype.split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>Array.prototype.join</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
```javascript
    // Solution with Regular expression and Array of ASCII character codes
    function rot13(str) {
      var rotCharArray = [];
      var regEx = /[A-Z]/ ;
      str = str.split("");
      for (var x in str) {
        if (regEx.test(str[x])) {
          // A more general approach
          // possible because of modular arithmetic
          // and cyclic nature of rot13 transform
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
          rotCharArray.push(str[x].charCodeAt());
        }
      }
      str = String.fromCharCode.apply(String, rotCharArray);
      return str;
    }

    // Change the inputs below to test
    rot13("LBH QVQ VG!");
```
### Code Explanation:

*   An empty array is created in a variable called `rotCharArray` to store the character codes.
*   The `regEx` variable stores a regular expression for all uppercase letters from A to Z.
*   We split `str` into a character array and then use a for loop to loop through each character in the array.
*   Using an if statement, we test to see if the string only contains uppercase letters from A to Z.
*   If it returns true, we use the `charCodeAt()` function and rot13 transformation to return the correct value, otherwise we return the initial value.
*   We then return the string with the character codes from the `rotCharArray` variable.

### Algorithm Explanation:

    ALPHA	KEY	BASE 	 	 	 ROTATED	ROT13
    -------------------------------------------------------------
    [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N]
    [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O]
    [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P]
    [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q]
    [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R]
    [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S]
    [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T]
    [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U]
    [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V]
    [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W]
    [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X]
    [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y]
    [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z]
    [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A]
    [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B]
    [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C]
    [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D]
    [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E]
    [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F]
    [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G]
    [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H]
    [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I]
    [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J]
    [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K]
    [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L]
    [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M]

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply' target='_blank' rel='nofollow'>Function.apply</a>
*   <a href='https://forum.freecodecamp.com/t/regular-expressions-resources/15931' target='_blank' rel='nofollow'>Regex</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test' target='_blank' rel='nofollow'>Regex.test</a>

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/39' target='_blank' rel='nofollow'>Run Code</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function rot13(str) { // LBH QVQ VG!
      return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
    }

### Algorithm Explanation:

Understanding modulo operator (_sometimes called modulus operator_) symbolically represented as `%` in JavaScript is key to understanding the algorithm.  
This is an interesting operator which shows up in various places of Engineering e.g. in cryptography.

Basically, operated on a number, it divides the number by the given divisor and gives the remainder of the division.  
For Example,

*   `0 % 5 = 0` because `0 / 5 = 0` and the remainder is `0`.
*   `2 % 5 = 2` because `2 / 5 = 0` and the remainder is `2`
*   `4 % 5 = 4` because `4 / 5 = 0` and the remainder is `4`  

*   `5 % 5 = 0` because `5 / 5 = 1` and the remainder is `0`
*   `7 % 5 = 2` because `7 / 5 = 1` and the remainder is `2`
*   `9 % 5 = 4` because `9 / 5 = 1` and the remainder is `4`  

*   `10 % 5 = 0` because `10 / 5 = 2` and the remainder is `0`

But you must have noticed a pattern here.  
As you might have noticed, the amazing modulo operator wraps over the LHS value when it just reaches multiples of the RHS value.  
e.g. in our case, when `LHS = 5`, it wrapped over to `0`  
OR  
when `LHS = 10`, it wrapped over to `0` again.

Hence, we see the following pattern emerging  

     0 ⇔ 0
     1 ⇔ 1
     2 ⇔ 2
     3 ⇔ 3
     4 ⇔ 4
     5 ⇔ 0
     6 ⇔ 1
     7 ⇔ 2
     8 ⇔ 3
     9 ⇔ 4
    10 ⇔ 0

Hence, we conclude that using modulo operator, one can map a range of values to a range between [`0` to `DIVISOR - 1`]. In our case, we mapped [`5 - 9`] between [`0 - 4`] or mapped [`6 - 10`] between [`0 - 4`].

Did you understand till this?

Now let us consider mapping a range of `26` numbers i.e. between [`65 - 90`] which represents uppercase [**English alphabets**] in <a href='http://unicode-table.com/en/alphabets/' target='_blank' rel='nofollow'>Unicode character set</a> to a range of numbers between [`0 - 25`].

    [A]  65 % 26 ⇔ 13
    [B]  66 % 26 ⇔ 14
    [C]  67 % 26 ⇔ 15
    [D]  68 % 26 ⇔ 16
    [E]  69 % 26 ⇔ 17
    [F]  70 % 26 ⇔ 18
    [G]  71 % 26 ⇔ 19
    [H]  72 % 26 ⇔ 20
    [I]  73 % 26 ⇔ 21
    [J]  74 % 26 ⇔ 22
    [K]  75 % 26 ⇔ 23
    [L]  76 % 26 ⇔ 24
    [M]  77 % 26 ⇔ 25
    [N]  78 % 26 ⇔  0
    [O]  79 % 26 ⇔  1
    [P]  80 % 26 ⇔  2
    [Q]  81 % 26 ⇔  3
    [R]  82 % 26 ⇔  4
    [S]  83 % 26 ⇔  5
    [T]  84 % 26 ⇔  6
    [U]  85 % 26 ⇔  7
    [V]  86 % 26 ⇔  8
    [W]  87 % 26 ⇔  9
    [X]  88 % 26 ⇔ 10
    [Y]  89 % 26 ⇔ 11
    [Z]  90 % 26 ⇔ 12

As you can notice, each number in the range of [`65 - 90`] maps to a unique number between [`0 - 25`].  
You might have also noticed that each given number (e.g. `65`) maps to another number (e.g. `13`) which can be used as an offset value (i.e. `65 + OFFSET`) to get the ROT13 of the given number.

E.g. `65` maps to `13` which can be taken as an offset value and added to `65` to give `78`.

    [A]  65 % 26 ⇔ 13 + 65 =  78 [N]
    [B]  66 % 26 ⇔ 14 + 65 =  79 [O]
    [C]  67 % 26 ⇔ 15 + 65 =  80 [P]
    [D]  68 % 26 ⇔ 16 + 65 =  81 [Q]
    [E]  69 % 26 ⇔ 17 + 65 =  82 [R]
    [F]  70 % 26 ⇔ 18 + 65 =  83 [S]
    [G]  71 % 26 ⇔ 19 + 65 =  84 [T]
    [H]  72 % 26 ⇔ 20 + 65 =  85 [U]
    [I]  73 % 26 ⇔ 21 + 65 =  86 [V]
    [J]  74 % 26 ⇔ 22 + 65 =  87 [W]
    [K]  75 % 26 ⇔ 23 + 65 =  88 [X]
    [L]  76 % 26 ⇔ 24 + 65 =  89 [Y]
    [M]  77 % 26 ⇔ 25 + 65 =  90 [Z]
    [N]  78 % 26 ⇔  0 + 65 =  65 [A]
    [O]  79 % 26 ⇔  1 + 65 =  66 [B]
    [P]  80 % 26 ⇔  2 + 65 =  67 [C]
    [Q]  81 % 26 ⇔  3 + 65 =  68 [D]
    [R]  82 % 26 ⇔  4 + 65 =  69 [E]
    [S]  83 % 26 ⇔  5 + 65 =  70 [F]
    [T]  84 % 26 ⇔  6 + 65 =  71 [G]
    [U]  85 % 26 ⇔  7 + 65 =  72 [H]
    [V]  86 % 26 ⇔  8 + 65 =  73 [I]
    [W]  87 % 26 ⇔  9 + 65 =  74 [J]
    [X]  88 % 26 ⇔ 10 + 65 =  75 [K]
    [Y]  89 % 26 ⇔ 11 + 65 =  76 [L]
    [Z]  90 % 26 ⇔ 12 + 65 =  77 [M]

### Code Explanation:

*   `String.prototype.replace` <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942' target='_blank' rel='nofollow'>function</a> lets you transform a `String` based on some pattern match (defined by a regular expression), and the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter' target='_blank' rel='nofollow'>transformation function</a> (which is applied to each of the pattern matches).
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>Arrow function</a> syntax is used to write the function parameter to `replace()`.
*   `L` represents a single unit, from every pattern match with `/[A-Z]/g` - which is every uppercase letter in the alphabet, from `A` to `Z`, present in the string.
*   The arrow function applies the `rot13` transform on every uppercase letter from English alphabet present in the given string.

#### Relevant Links

*   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">String.prototype.replace()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTE TO CONTRIBUTORS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
