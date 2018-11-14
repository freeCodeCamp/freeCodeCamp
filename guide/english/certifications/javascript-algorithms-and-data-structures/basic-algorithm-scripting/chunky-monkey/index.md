---
title: Chunky Monkey
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/aadd6bead83ab7d79a795c326f005a89e6ad81f5.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Our goal for this Algorithm is to split `arr` (first argument) into smaller chunks of arrays with the length provided by `size` (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

1.  `(['a', 'b', 'c', 'd'], 2)` is expected to be `[['a', 'b'], ['c', 'd']]`
2.  `([0, 1, 2, 3, 4, 5], 3)` is expected to be `[[0, 1, 2], [3, 4, 5]]`
3.  `([0, 1, 2, 3, 4, 5], 2)` is expected to be `[[0, 1], [2, 3], [4, 5]]`
4.  `([0, 1, 2, 3, 4, 5], 4)` is expected to be `[[0, 1, 2, 3], [4, 5]]`

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' rel='nofollow'>Array.push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank' rel='nofollow'>Array.slice()</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

The links above suggest to use `Array.push()`, so let's start by first creating a new array to store the smaller arrays we will soon have like this:
```javascript
    var newArray = [];
```
> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:")</a> Hint: 2

Next we'll need a `for loop` to loop through `arr`.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Finally, we need a method to do the actual splitting and we can use `Array.slice()` to do that. The key to this Algorithm is understanding how a `for loop`, `size`, `Array.slice()` and `Array.push()` all work together.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function chunkArrayInGroups(arr, size) {

      var temp = [];
      var result = [];

      for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
          temp.push(arr[a]);
        else {
          temp.push(arr[a]);
          result.push(temp);
          temp = [];
        }
      }

      if (temp.length !== 0)
        result.push(temp);
      return result;
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/24' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Firstly, we create two empty arrays called `temp` and `result`, which we will eventually return.
*   Our **for loop** loops until `a` is equal to or more than the length of the array in our test.
*   Inside our loop, we push to `temp` using `temp.push(arr[a]);` if the remainder of `a / size` is not equal to `size - 1`.
*   Otherwise, we push to `temp`, push `temp` to the `result` variable and reset `temp` to an empty array.
*   Next, if `temp` isn't an empty array, we push it to `result`.
*   Finally, we return the value of `result`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' rel='nofollow'>Array.push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for' target='_blank' rel='nofollow'>For Loops</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:
```javascript
    function chunkArrayInGroups(arr, size) {
      // Break it up.
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
    	arr2.push(arr.slice(i , i+size));
      }
      return arr2;
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/Cj9x/3' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   First, we create an empty array `arr2` where we will store our 'chunks'.
*   The for loop starts at zero, increments by `size` each time through the loop, and stops when it reaches `arr.length`.
*   Note that this for loop does not loop through `arr`. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
*   Inside our loop, we create each chunk using `arr.slice(i, i+size)`, and add this value to `arr2` with `arr2.push()`.
*   Finally, we return the value of `arr2`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' target='_blank' rel='nofollow'>Array.push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank' rel='nofollow'>Array.slice()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for' target='_blank' rel='nofollow'>For Loops</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:
```javascript
    function chunkArrayInGroups(arr, size) {
      // Break it up.
      var newArr = [];
      var i = 0;

      while (i < arr.length) {
        newArr.push(arr.slice(i, i+size));
        i += size;
      }
      return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/26' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Firstly, we create two variables. `newArr` is an empty array which we will push to. We also have the `i` variable set to zero, for use in our while loop.
*   Our while loop loops until `i` is equal to or more than the length of the array in our test.
*   Inside our loop, we push to the `newArr` array using `arr.slice(i, i+size)`. For the first time it loops, it will look something like:

    newArr.push(arr.slice(1, 1+2))

*   After we push to `newArr`, we add the variable of `size` onto `i`.
*   Finally, we return the value of `newArr`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' target='_blank' rel='nofollow'>Array.push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank' rel='nofollow'>Array.slice()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while' target='_blank' rel='nofollow'>While Loops</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution 2:
```javascript
    function chunkArrayInGroups(arr, size) {
      var newArr = [];
      while (arr.length) {
        newArr.push(arr.splice(0,size));
      }
      return newArr;
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/579' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

*   Firstly, we create a variable. `newArr` is an empty array which we will push to.
*   Our `while` loop loops until the length of the array in our test is not 0.
*   Inside our loop, we push to the `newArr` array using `arr.splice(0, size)`.
*   For each iteration of `while` loop, it deletes `size` number of elements from the front of `arr` and push them as an array to `newArr`.
*   Finally, we return the value of `newArr`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' target='_blank' rel='nofollow'>Array.push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank' rel='nofollow'>Array.splice()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while' target='_blank' rel='nofollow'>While Loops</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution 3:
```javascript
    function chunkArrayInGroups(arr, size) {
      if (arr.length <= size){
        return [arr];
      }
      else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
      }
    }
```
![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/579' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* Array smaller than size is returned nested.
* For any array larger than size, it is split in two. First segment is nested and concatenated with second segment which makes a recursive call.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion' target='_blank' rel='nofollow'>Recursion</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank' rel='nofollow'>Array.splice()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
