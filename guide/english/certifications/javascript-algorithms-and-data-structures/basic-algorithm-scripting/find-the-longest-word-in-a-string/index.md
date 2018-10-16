---
title: Find the Longest Word in a String
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

You have to go through each word and figure out which one is the longest and return not the word, but how many characters it has.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length' target='_blank' rel='nofollow'>JS String Length</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You should split the string into an array of words.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You will need to figure out a way to keep track globally of the greatest current length.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Remember how to get the length of elements on the array? `Array[index].length`.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function findLongestWordLength(str) {
      var words = str.split(' ');
      var maxLength = 0;

      for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
        }
      }

      return maxLength;
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/5' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length' target='_blank' rel='nofollow'>JS Array.length</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

**Using `.reduce()`**

    function findLongestWordLength(s) {
      return s.split(' ')
        .reduce(function(x, y) {
          return Math.max(x, y.length)
        }, 0);
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/6' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

For more information on `reduce` <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce' target='_blank' rel='nofollow'>click here.</a>  

In case you're wondering about that `0` after the callback function, it is used to give an initial value to the `x`, so that `Math.max` will know where to start.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299' target='_blank' rel='nofollow'>JS Reduce</a>
*   <a href='http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687' target='_blank' rel='nofollow'>JS Reduce Made Easy</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-max/14682.md' target='_blank' rel='nofollow'>JS Math Max</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

**Using recursiveness**

    function findLongestWordLength(str) {

      //split the string into individual words 
      //(important!!, you'll see why later)
      str = str.split(" ");

      //str only has 1 element left that is the longest element, 
      //return the length of that element
      if(str.length == 1){
        return str[0].length;
      }

      //if the first element's length is greater than the second element's (or equal) 
      //remove the second element and recursively call the function)
      if(str[0].length >= str[1].length){
        str.splice(1,1);
        return findLongestWordLength(str.join(" "));
      }

      //if the second element's length is greater thant the first element's start 
      //call the function past the first element 
      if(str[0].length <= str[1].length){
        // from the first element to the last element inclusive.
        return findLongestWordLength(str.slice(1,str.length).join(" "));
      }
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/7' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

The first line splits the string into individual words. Then we check if `str` only has 1 element left then that is the longest element and we return it. If the first element's length is greater than the second element's (or equal), we remove the second element and recursively call the function `findLongestWord`. However, if the second element's length is greater thant the first element's start, then we call the function past the first element.

#### Relevant Links

*   <a href='https://www.youtube.com/watch?v=R8SjM4DKK80' target='_blank' rel='nofollow'>JS Functions</a>
*   <a href='https://www.youtube.com/watch?v=k7-N8R0-KY4' target='_blank' rel='nofollow'>Recursion Basics</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
