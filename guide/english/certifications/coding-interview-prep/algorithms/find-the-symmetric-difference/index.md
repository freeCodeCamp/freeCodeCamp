---
title: Find the Symmetric Difference
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/" rel="help">**`Read-Search-Ask`**</a> if you get stuck. Try to pair program![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation: ###

Symmetric difference (commonly denoted by &Delta;) of two sets is the set of elements which are in either of the two sets, but not in both.

For example, `sym([1, 2, 3], [5, 2, 1, 4])` should yield `[3, 4, 5]`.

Following above definition, symmetric difference of three sets *A*, *B*, and *C* can be expressed as `(A &Delta; B) &Delta; C`.

#### Relevant Links ####

* <a href="https://en.wikipedia.org/wiki/Symmetric_difference" target="_blank" rel="nofollow">Symmetric difference - Wikipedia</a>
* <a href="https://www.youtube.com/watch?v=PxffSUQRkG4" target="_blank" rel="nofollow">Symmetric difference - YouTube</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank"
 rel="nofollow">JavaScript Array.prototype.reduce()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1 ##

The *arguments* object is *Array*-like object that only inherits `Array.length` property. Hence consider converting it to an actual *Array*.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2 ##

Deem writing a helper function that returns the symmetric difference of two arrays on each call instead of attempting to difference all sets simultaneously.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3 ##

Apply helper function against the created arguments array reducing its elements pairwise recursively to form the expected output.

**Note**
In the event of *odd number of sets* the symmetric difference will include identical elements present in all given sets. For instance;

    A = {1, 2, 3}
    B = {2, 3, 4}
    C = {3, 4, 5}

    (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5}
    A &Intersection; B = {1, 3, 5}

> _try to solve the problem now_

## Spoiler Alert! ##

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif ":warning:")

**Solution Ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution: ##

```javascript
    function sym() {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
            result.push(item);
          }
        });

        arrayTwo.forEach(function(item) {
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
            result.push(item);
          }
        });

        return result;
      }

      // Apply reduce method to args array, using the symDiff function
      return args.reduce(symDiff);
    }
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/C4II/0" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation: ###

* `push()` is used to break down the *arguments* object to an array, *args*.
* The `symDiff` function finds the symmetric difference between two sets. It is used as a callback function for the `reduce()` method called on *args*.
* `arrayOne.forEach()` pushes the elements to *result* which are present only in *arrayOne* as well as not already a part of *result*.
* `arrayTwo.forEach()` pushes the elements to *result* which are present only in *arrayTwo* as well as not already a part of *result*.
* The *result*, which is the symmetric difference is returned. This solution works for any number of sets.

#### Relevant Links ####

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for" target="_blank" rel="nofollow">JavaScript for</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length" target="_blank" rel="nofollow">JavaScript Array.length</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank" rel="nofollow">JavaScript Array.prototype.push()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" rel="nofollow">JavaScript Array.prototype.forEach()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank" rel="nofollow">JavaScript Array.prototype.indexOf()</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution: ##

```javascript
    function sym() {

      // Convert the argument object into a proper array
      var args = Array.prototype.slice.call(arguments);

      // Return the symmetric difference of 2 arrays
      var getDiff = function(arr1, arr2) {

        // Returns items in arr1 that don't exist in arr2
        function filterFunction(arr1, arr2) {
          return arr1.filter(function(item) {
            return arr2.indexOf(item) === -1;
          });
        }

        // Run filter function on each array against the other
        return filterFunction(arr1, arr2)
          .concat(filterFunction(arr2, arr1));
      };

      // Reduce all arguments getting the difference of them
      var summary = args.reduce(getDiff, []);

      // Run filter function to get the unique values
      var unique = summary.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
        });
      return unique;
    }

    // test here
    sym([1, 2, 3], [5, 2, 1, 4]);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/CLoc/0" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation: ###

* The `slice()` method is used to break down the *arguments* object to an array, *args*.
* The `getDiff` function finds the symmetric difference between two sets, *arr1* and *arr2*. It is used as a callback function for the `reduce()` method called on *args*.
* The first `filterFunction()` returns elements in *arr1* that don't exist in *arr2*.
* The next `filterFunction()` is run on each array against the other to check the inverse of the first check for uniqueness and concatenate it.
* *summary* consists of the reduced arguments.
* `filter()` is used on *summary* to keep only the unique values and *unique* is returned.

#### Relevant Links ####

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank" rel="nofollow">JavaScript Array.prototype.slice()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="nofollow">JavaScript Array.prototype.filter()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank" rel="nofollow">JavaScript Array.prototype.concat()</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution: ##

```javascript
    function sym() {
      let argv = Array.from(arguments).reduce(diffArray);
      return argv.filter((element, index, array) => index === array.indexOf(element));//remove duplicates
    }

    function diffArray(arr1, arr2) {
      return arr1
        .filter(element => !arr2.includes(element))
        .concat(arr2.filter(element => !arr1.includes(element)));
    }

    // test here
    sym([1, 2, 3], [5, 2, 1, 4]);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/@ashenm/Symmetric-Difference" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation: ###

* The main function *sym()* creates an array from *arguments* and reduces its elements utilising helper function *diffArray()* to a single array.

* The function *diffArray()* returns the symmetric difference of two arrays by picking out unique elements in parameterised arrays; *arr1* and *arr2*. 

#### Relevant Links ####

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank" rel="nofollow">JavaScript Array.from()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="nofollow">JavaScript Array.prototype.filter()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS: ##

* ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
* Add an explanation of your solution.
* Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
* Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272" target="_blank" rel="nofollow">**`Wiki Challenge Solution Template`**</a> for reference.
