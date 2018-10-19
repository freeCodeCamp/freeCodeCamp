---
title: Binary Agents
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Problem Explanation:

This problem is very straight forward, you will get a string that will represent a sentence in binary code, and you need to translate that into words. There is not direct way to do this so you will have to translate twice.

### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933' target='_blank' rel='nofollow'>String.prototype.charCodeAt</a>
*   <a>String.fromCharCode</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You should first convert from **binary** to **decimal** before translating those values into characters.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Things are easier when focusing on smaller parts, divide the input to focus on one letter at the time.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Make sure that each time you transcode a character from binary to decimal, you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function binaryAgent(str) {
      biString = str.split(' ');
      uniString = [];

    /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

      for(i=0;i < biString.length;i++){
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
      }

      // we then simply join the string
      return uniString.join('');
    }

    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnm/0' target='_blank' rel='nofollow'>Run Code</a>

# Code Explanation:

*   Separate the string into an array of strings separated by whitespace.
*   Create some variables that will be needed along the way, the names are self explanatory for the most part.
*   Iterate through each binary string in the new array.
*   Convert to decimal by using parseInt(_binary_, 2) (with the second parameter we tell in which base our numbers currently are)
*   At the end, we return out converted message.

## Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>String.prototype.split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-parseint/14686' target='_blank' rel='nofollow'>parseInt</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
```javascript
    function binaryAgent(str) {
      // Separate the binary code by space.
      str = str.split(' ');
      var power;
      var decValue = 0;
      var sentence = '';

      // Check each binary number from the array.
      for (var s = 0; s < str.length; s++) {
        // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
          // This only takes into consideration the active ones.
          if (str[s][t] == 1) {
            // This is quivalent to 2 ** position
            power = Math.pow(2, +str[s].length - t - 1);
            decValue += power;

            // Record the decimal value by adding the number to the previous one.
          }
        }

        // After the binary number is converted to decimal, convert it to string and store
        sentence += (String.fromCharCode(decValue));

        // Reset decimal value for next binary number.
        decValue = 0;
      }

      return sentence;
    }

    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLno/0' target='_blank' rel='nofollow'>Run Code</a>

# Code Explanation

*   For each of these binary strings, check for the ones and ignore the zeroes.
*   For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
*   Store the power into the **power** variable by adding it to any previous ones on the variable **decValue**. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
*   Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to **sentence** along with any other text string already converted and stored.
*   Reset the variable **decValue** to avoid getting wrong decimals before continuing to the outer loop.

## Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-math-pow/14685' target='_blank' rel='nofollow'>Math.pow</a>
*   <a>String.length</a>
*   <a href='http://example.com' target='_blank' rel='nofollow'>Link Title 3</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:
```javascript
    function binaryAgent(str) {
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
    }

    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnp/0' target='_blank' rel='nofollow'>Run Code</a>

# Code Explanation

*   First we use `split()` to be able to work on each character as an Array element
*   Then use `map()` to process each element from binary to decimal using `pareseInt()`
*   Last we can use `String.fromCharCode()` to convert each ASCII number into the corresponding character
*   However `fromCharCode()` expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator' target='_blank' rel='nofollow'>Spread Operator</a>

## Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294' target='_blank' rel='nofollow'>Array.prototype.map</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
