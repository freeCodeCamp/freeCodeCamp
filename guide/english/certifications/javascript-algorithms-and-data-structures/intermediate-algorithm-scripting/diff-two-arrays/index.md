---
title: Diff Two Arrays
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

#### Relevant Links

*   <a href='https://devdocs.io/javascript/statements/for' target='_blank' rel='nofollow'>for Loop (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/includes' target='_blank' rel='nofollow'>Array.prototype.includes (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/filter' target='_blank' rel='nofollow'>Array.prototype.filter (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/concat' target='_blank' rel='nofollow'>Array.prototype.concat (Devdocs)</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Merge the list to make it easy to compare functions.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use filter to get the new array, you will need to create a callback function.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

The best way to go about the callback function is to check if the number from the new merged array is not in **both** original arrays and return it.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution (Imperative Solution):
```javascript
    function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/CLme/0">Run Code</a>

### Code Explanation:

Read the comments in the code.

#### Relevant Links

*   <a href='https://devdocs.io/javascript/statements/for' target='_blank' rel='nofollow'>for Loop (Devdocs)</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution (Declarative Solution):
```javascript
    function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/CNYb/0">Run Code</a>

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

*   <a href='https://devdocs.io/javascript/global_objects/array/concat' target='_blank' rel='nofollow'>Array.prototype.concat (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/filter' target='_blank' rel='nofollow'>Array.prototype.filter (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/includes' target='_blank' rel='nofollow'>Array.prototype.includes (Devdocs)</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution (Declarative Solution):

    function diffArray(arr1, arr2) {
        return arr1
          .filter(el => !arr2.includes(el))
          .concat(
            arr2.filter(el => !arr1.includes(el))
          )
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/CNYU/0">Run Code</a>

### Code Explanation:

Explain solution here and add any relevant links

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution Alternative (Declarative Solution):
    function diffArray(arr1, arr2) {
      return [
        ...diff(arr1, arr2),
        ...diff(arr2, arr1)
      ]
      
      function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
      }
    }

#### Relevant Links

*   <a href='https://devdocs.io/javascript/global_objects/array/includes' target='_blank' rel='nofollow'>Array.prototype.includes (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/filter' target='_blank' rel='nofollow'>Array.prototype.filter (Devdocs)</a>
*   <a href='https://devdocs.io/javascript/global_objects/array/concat' target='_blank' rel='nofollow'>Array.prototype.concat (Devdocs)</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
