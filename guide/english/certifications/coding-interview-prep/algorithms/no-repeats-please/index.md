---
title: No Repeats Please
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

This task requires us to return the number of total permutations of the provided string that don't have repeated consecutive letters. It is to be assumed that all characters in the provided string are each unique. For example, `aab` should return 2 because it has 6 total permutations (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`), but only 2 of them (`aba` and `aba`) don't have the same letter (in this case `a`) repeating.

To achieve that, we'll have to look at each possible permutation of a string. There are several ways to do that. A common interview question is building a function that collects all permutations of a string. There are several tutorials available on the internet on how to do that.

#### Potential Methods Used As Solution

##### Recursive Method

This task can be daunting even after watching a tutorial. To write a recursive solution, you will want to send each new use of the function three inputs:

1.  A new string (or character array) that is being built.
2.  A position in your new string that's going to be filled next.
3.  An idea of what characters (more specifically positions) from the original string have yet to be used.

The pseudo code will look something like this:

    var str = ???;
    permAlone(current position in original string, characters used already in original string, created string) {
      if (current string is finished) {
        print current string;
      } else {
        for (var i = 0; i < str.length; i++) {
          if (str[i] has not been used) {
            put str[i] into the current position of new string;
            mark str[i] as used;
            permAlone(current position in original string, characters used already in original string, created string);
            remove str[i] as used because another branch in the tree for i + 1 will likely use it;
          }
        }
      }
    }
    permAlone(0, nothing used yet, empty new string (or array the same size as str));

Another way to think about this problem is to start from an empty space. Introduce the first letter to the space. This space will now contain the first sub-permutation. Here's a diagram illustrating the idea:

![diagram](//discourse-user-assets.s3.amazonaws.com/original/2X/6/69896bacc8bd3b2e347beb4b304a7f97caa6d9ab.png)

##### Non-Recursive Method

    // An approach to introduce a new character to a permutation
    var ch = '?';
    var source = ['?', '?', '?'];     // Current sub-permutation
    var temp, dest = [];

    for (var i = 0; i <= source.length; ++i) {
      temp = source.slice(0);         // Copy the array
      temp.splice(i, 0, ch);          // Insert the new character
      dest.push(temp);                // Store the new sub-permutation
    }

Finding each permutation could then be done non-recursively by including the above in a function taking a source array and returning a destination array. For each letter of the input string, pass that character, as well as the array returned from the previous call of the function.

A way to visualize this is by considering a tree that starts with the first character of your string:

![Permutation Tree](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8187f2b06cdc02cf62286c18ce15bfcdc99bc68c.png)

#### Relevant Links

*   <a href='https://www.mathsisfun.com/combinatorics/combinations-permutations.html' target='_blank' rel='nofollow'>Permutations</a>
*   <a href='https://en.wikipedia.org/wiki/Heap%27s_algorithm' target='_blank' rel='nofollow'>Heap's algorithm</a>
*   <a>JS Regex Resources</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>JS String object</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   The easiest way is to use Heap's algorithm to recursively get a list of all the permutations.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   Once you have the list then just create a regular expression to catch the repeating characters.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   You will want to have the permutations as an array of joined strings instead of separated characters.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function permAlone(str) {

      // Create a regex to match repeated consecutive characters.
      var regex = /(.)\1+/g;

      // Split the string into an array of characters.
      var arr = str.split('');
      var permutations = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>];
      var tmp;

      // Return 0 if str contains same character.
      if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

      // Function to swap variables' content.
      function swap(index1, index2) {
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
      }

      // Generate arrays of permutations using the algorithm.
      function generate(int) {
        if (int === 1) {
          // Make sure to join the characters as we create  the permutation arrays
          permutations.push(arr.join(''));
        } else {
          for (var i = 0; i != int; ++i) {
            generate(int - 1);
            swap(int % 2 ? 0 : i, int - 1);
          }
        }
      }

      generate(arr.length);

      // Filter the array of repeated permutations.
      var filtered = permutations.filter(function(string) {
        return !string.match(regex);
      });

      // Return how many have no repetitions.
      return filtered.length;
    }

    // Test here.
    permAlone('aab');

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLop/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   **regex** contains the regular expression to match repeated consecutive characters.
*   The string **str** is split into an array of characters, **arr**.
*   0 is returned if **str** contains same characters.
*   The function `swap()` is used for the purpose of swapping the contents of two variable's contents.
*   The next block of code uses Heap's algorithm to generate arrays of permutations in **permutations**.
*   The **filtered** variable filters **permutations** to include only non-repeated permutations.
*   `filtered.length` returns the number of total permutations of the provided string that don't have repeated consecutive letters.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944' target='_blank' rel='nofollow'>JS String Prototype Split</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941' target='_blank' rel='nofollow'>JS String Prototype Match</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292' target='_blank' rel='nofollow'>JS Array Prototype Join</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length' target='_blank' rel='nofollow'>array.length</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>JS Array Prototype Filter</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
