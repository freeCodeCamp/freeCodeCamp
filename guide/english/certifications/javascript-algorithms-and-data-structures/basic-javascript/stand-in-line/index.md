---
title: Stand in Line
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

In Computer Science a _queue_ is an abstract **data structure** where items are kept in order. New items can be added at the back of the **queue** and old items are taken off from the front of the **queue**.

Write a function `nextInLine` which takes an array (**arr**) and a number (**item**) as arguments. Add the number to the end of the array, then remove the first element of array. The `nextInLine` function should then return the element that was removed.

*   Change the code below `//Your Code here` and up to `//Change this line`.
*   Ensure that you are editing the inside of the `nextInLine` function.
*   Use an array function you learned to add the **item** to the end of the array **arr**.
*   Use an array function you learned to remove the first element from array **arr**.
*   Return the element removed.

#### Relevant Links

*   <a href='http://www.freecodecamp.com/challenges/manipulate-arrays-with-push' target='_blank' rel='nofollow'>Challenge: Manipulate Arrays With push()</a>
*   <a href='http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift' target='_blank' rel='nofollow'>Challenge: Manipulate Arrays With shift()</a>
*   <a href='http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments' target='_blank' rel='nofollow'>Challenge: Passing Values to Functions with Arguments</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

The `push()` method adds an item to the end of an array.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

The `shift()` method removes the first element of an array. It also returns the element removed.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

The function `nextInLine` uses **arr** and **item**. Those are what the tests will use to pass the array elements they will test with. It allows the function to be reusable. Do not hardcode any of the tests inside the function.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function nextInLine(arr, item) {
      // Your code here
      arr.push(item);
      var removed = arr.shift();
      return removed;  // Change this line
    }

### Code Explanation:

*   Push **item** at the end of **arr**.
*   Call the `shift()` method on **arr** to get the first item and store it in **removed**.
*   Return **removed**.

**Example Run**

*   Test `nextInLine([2,1]);` runs.
*   The `nextInLine` function is called. **arr** becomes [2]. **item** becomes 1.
*   `arr.push(item);` Pushes 1 to [2]. So **arr** is now [2,1].
*   `var removed = arr.shift();` removes the first element. So **arr** is now [1]. 2 has been removed and is stored in **removed**.
*   `return removed;` 2 is returned.

**_Note_**: You don't actually need the variable **removed**. The element removed can be returned directly using `return arr.shift();`.


