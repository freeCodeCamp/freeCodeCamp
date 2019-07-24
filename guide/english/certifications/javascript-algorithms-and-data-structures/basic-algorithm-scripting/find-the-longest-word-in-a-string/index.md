---
title: Find the Longest Word in a String
---

# Find the Longest Word in a String

---
## Problem Explanation

You have to go through each word and figure out which one is the longest and return not the word, but how many characters it has.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length' target='_blank' rel='nofollow'>JS String Length</a>


---
## Hints

### Hint 1

You should split the string into an array of words.


### Hint 2

You will need to figure out a way to keep track globally of the greatest current length.


### Hint 3

Remember how to get the length of elements on the array? `Array[index].length`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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


#### Code Explanation

Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length' target='_blank' rel='nofollow'>JS Array.length</a>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

**Using `.reduce()`**

    function findLongestWordLength(s) {
      return s.split(' ')
        .reduce(function(x, y) {
          return Math.max(x, y.length)
        }, 0);
    }


#### Code Explanation

For more information on `reduce` <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce' target='_blank' rel='nofollow'>click here.</a>  

In case you're wondering about that `0` after the callback function, it is used to give an initial value to the `x`, so that `Math.max` will know where to start.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299' target='_blank' rel='nofollow'>JS Reduce</a>
*   <a href='http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687' target='_blank' rel='nofollow'>JS Reduce Made Easy</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-max/14682.md' target='_blank' rel='nofollow'>JS Math Max</a>

</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>

**Using `.map()`**

```javascript
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
```

#### Code Explanation

We provide `Math.max` with the length of each word as argument, and it will simply return the highest of all. 

Let's analyze everything inside the `Math.max` parenthesees to understand how we do that. 

`str.split(" ")` splits the string into an array, taking spaces as separators. It returns this array: \["The","quick,"brown","fox","jumped","over","the","lazy","dog"\].

Then, we will make another array, made from the lengths of each element of the `str.split(" ")` array with `map()`.

`str.split(" ").map(word => word.length)` returns \[3, 5, 5, 3, 6, 4, 3, 4, 3\]

Finally, we pass the array as argument for the Math.max function with the spread operator `...`

For more information on `map` <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map' target='_blank' rel='nofollow'>click here.</a>
</details>

<details><summary>Solution 4 (Click to Show/Hide)</summary>

**Using recursion**

```js
function findLongestWordLength(str) {
  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element,
  //return the length of that element
  if (str.length == 1) {
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if (str[0].length <= str[1].length) {
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1, str.length).join(" "));
  }
}
```

#### Code Explanation

The first line splits the string into individual words. Then we check if `str` only has 1 element left then that is the longest element and we return it. If the first element's length is greater than the second element's (or equal), we remove the second element and recursively call the function `findLongestWord`. However, if the second element's length is greater thant the first element's start, then we call the function past the first element.

#### Relevant Links

*   <a href='https://www.youtube.com/watch?v=R8SjM4DKK80' target='_blank' rel='nofollow'>JS Functions</a>
*   <a href='https://www.youtube.com/watch?v=k7-N8R0-KY4' target='_blank' rel='nofollow'>Recursion Basics</a>

</details>