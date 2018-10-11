---
title: Slice and Splice
---
## Slice and Splice

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

We need to copy each element from the first array into the second array starting at the index n. We've also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice' target='_blank' rel='nofollow'>str.slice()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank' rel='nofollow'>str.splice()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Create a copy of the second array inside of the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Increment the index after performing the splice. 

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function frankenSplice(arr1, arr2, n) {
      // It's alive. It's alive!
      let localArray = arr2.slice();
      for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
      }
      return localArray;
    }

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* Our goal is to take all of the elements from `arr1` and insert them into `arr2` starting with index position `n`. At the same time we must ensurethat neither `arr` or `arr2` have been mutated. 

* Using the `slice()` function we can create an exact replica of `arr2` and assign the result of the operation to a variable, `localArray`. 

* Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the `splice()` function to insert the item into index `n` of `localArray`.

* We increment the index `n` by one. This will ensure that every item from the `arr1` is inserted into `localArray` in the proper index position. 

* Finally, we return the `localArray` and end the function. 

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
