---
title: Finders Keepers
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")


## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

We need to return the element from an array that passes a function. Both the `function` and the `array` are passed into our function `findElement(arr, func)`.

## Hint: 1
Looking through the array can be done with a `for` loop.
>*try to solve the problem now*

## Hint: 2
`num` is passed to the function. We will need to set it to the elements we want to check with the function.
>*try to solve the problem now*

## Hint: 3
Do not forget, if none of the numbers in the array pass the test, it should return `undefined`.
>*try to solve the problem now*

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

```javascript
function findElement(arr, func) {
  let num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  
  return undefined;
}
```

## Code Explanation

* Challenge asks us to look through array. This is done using a `for` loop.
* The `num` variable is being passed into the function, so we set it to each index in our array.
* The pre-defined function already checks each number for us, so if it is "true", we return that num.
* If none of the numbers in the array pass the function's test, we return undefined.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:")  Intermediate Code Solution:
```javascript
function findElement(arr, func) {
  return arr.find(func);
}
```

#### Relevant Links

*   [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

```javascript
function findElement(arr, func) {
 return arr[(arr.map(func)).indexOf(true)];
}
```

## Code Explanation

1. Look through the array given in the 1st paramater "arr" using the .map() method
2. Use the function in the 2nd parameter as the callback function in arr.map()
3. Acquire the index of the first number that meets the condition in the function.
4. Use that index to display the first available number that meets the condition.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
