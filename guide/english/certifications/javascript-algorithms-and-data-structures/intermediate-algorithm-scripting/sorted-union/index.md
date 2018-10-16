---
title: Sorted Union
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and there shouldn't be any duplicates.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283' target='_blank' rel='nofollow'>JS Arguments</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Since you have no idea how many parameters were passed, it would be best to loop through the **arguments** before looping through the arrays.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

It isn't necessary to use loops. You can use functions such as `map()`, `reduce()` or others if you want.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

You will have to check if the current value is already on the array to be returned for every value.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function uniteUnique(arr1, arr2, arr3) {
      // Creates an empty array to store our final result.
      var finalArray = [];

      // Loop through the arguments object to truly made the program work with two or more arrays
      // instead of 3.
      for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];

        // Loops through the array at hand
        for (var j = 0; j < arrayArguments.length; j++) {
          var indexValue = arrayArguments[j];

          // Checks if the value is already on the final array.
          if (finalArray.indexOf(indexValue) < 0) {
            finalArray.push(indexValue);
          }
        }
      }

      return finalArray;
    }

    // test here
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnM/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Create empty array **finalResult** to store the final result.
*   Loop through the **arguments** object in the outer loop and store it in **arrayArguments**.
*   The inner loop is used to loop through individual array elements.
*   If the element doesn't already exist in **finalArray**, add it.
*   Return **finalArray**.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length' target='_blank' rel='nofollow'>array.length</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936' target='_blank' rel='nofollow'>JS String Prototype IndexOf</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>

## Alternative basic code solution

```javascript

function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for(var i = 0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

    function uniteUnique(arr1, arr2, arr3) {
     var newArr;
     //Convert the arguments object into an array
      var args = Array.prototype.slice.call(arguments);
      //Use reduce function to flatten the array
      newArr = args.reduce(function(arrA,arrB){
      //Apply filter to remove the duplicate elements in the array
        return arrA.concat(arrB.filter(function(i){
          return arrA.indexOf(i) === -1;
        }));
      });

       return newArr;                    
    }

    // test here
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnO/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   **arguments** object is converted into an array using `slice()`.
*   `reduce()` function is used to flatten the array i.e., for every element that is in the array (or nested arrays), extract it's elements into one-dimensional array.
*   After flattening the array, `filter()` is used to remove duplicate elements from **newArr**.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302' target='_blank' rel='nofollow'>JS Array Prototype Slice</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299' target='_blank' rel='nofollow'>JS Array Prototype Reduce</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286' target='_blank' rel='nofollow'>JS Array Prototype Concat</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>JS Array Prototype Filter</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

    function uniteUnique() {
      var concatArr = [];
      var i = 0;
      while (arguments[i]){
        concatArr = concatArr.concat(arguments[i]); i++;
      }
      uniqueArray = concatArr.filter(function(item, pos) {
        return concatArr.indexOf(item) == pos;
      });
      return uniqueArray;
    }

    // test here
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLnN/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Number of arguments can change dynamically, so we don't need to bother providing our function `uniteUnique()` with arguments at all.
*   We use a `while` loop to concatenate all the arguments into one array called **concatArr**.
*   We use `filter()` to remove the duplicate elements by checking the index of each element and removing same elements with different positions.
*   Ordering will be preserved here.

#### Relevant Links

*   <a>JS While Loop</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Alternative Code Solution using ES2015

    //jshint esversion:6

    function uniteUnique(...arrays) {

      //make an array out of the given arrays and flatten it (using the spread operator)
      const flatArray = [].concat(...arrays);

      // create a Set which clears any duplicates since it's a regulat set and not a multiset
      return [...new Set(flatArray)];
    }

    // test here
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CcWk/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   We first use `concat()` with an empty array `<a href='http://exploringjs.com/es6/ch_maps-sets.html#_set' target='_blank' rel='nofollow'>]` as a starting point and the spread operator `...` to create an array out of the Arguments object and to flatten it at the same time
*   then we use the new ES2015 **Set** object to store only unique values
*   (to learn more about Sets, read [here</a>)

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286' target='_blank' rel='nofollow'>Array.prototype.concat</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>Arguments</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set' target='_blank' rel='nofollow'>Set</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
