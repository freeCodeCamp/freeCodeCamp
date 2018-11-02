---
title: Factorialize a Number
---
![Recursion](//discourse-user-assets.s3.amazonaws.com/original/2X/d/dcf927a2e8c3beb7a9c28770153821982398bd99.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

This one starts easily since `0! = 1`, so you can go ahead and simply `return 1` there.

We can use that as an `if` in order to break the loop we're going to create using a **recursive function**. It will check if the number you gave the function is 0 (which would be the end of your factorial chain). Functions "end" when they return anything. In fact, **all** functions without an explicit `return` statement will return `undefined`.

This is also why **instead** of having _"finished"_, a function is always said to _"have returned"_. And now this...

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

**Understanding recursion**

Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the _num_ parameter is `num-1` (which initially translates to 4). The very function is going to **run inside itself** interesting, eh?

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

**Understanding the flow**

The first **returned** value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:

### During the first execution of the function:

[**num** = 5]

Is 5 _equal_ to 1 or 0? **No** ---> Oki doki, let's continue...

**Returns:**

(**5** _(_second execution_: **4** _(_third execution_: **3** _(_fourth execution_: **2** __fifth execution_: **1**))))

What it returns can be viewed as `(5*(4*(3*(2*1))))` or just `5 * 4 * 3 * 2 * 1`, and the function will return the result of that operation: `120`. Now, let's check what the rest of the executions do:

### During the rest of the executions:

**Second Execution**: _num_ = 5-1 = **4** -> is _num_ 0 or 1? No  

--> return the multiplication between 4 and the next result when _num_ is now 4-1.

**Third Execution**: _num_ = 4 - 1 = **3** -> is _num_ 0 or 1? No  

--> return the multiplication between 3 and the next result when _num_ is now 3-1.

**Fourth Execution**: _num_ = 3-1 = **2** -> is _num_ 0 or 1? No  

--> return the multiplication between 2 and the next result when _num_ is now 2-1.

**Fifth Execution**: _num_ = 2-1 = **1** -> is _num_ 0 or 1? Yep  

--> return **1**. And this is where the recursion stops because there are no more executions.

Got it? ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ":wink:")

> _try to solve the problem now_

#### Relevant Links

*   <a href='https://www.youtube.com/watch?v=R8SjM4DKK80' target='_blank' rel='nofollow'>JS Functions</a>
*   <a href='https://www.youtube.com/watch?v=k7-N8R0-KY4' target='_blank' rel='nofollow'>Recursion in JS</a>

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Code Solution:

    function factorialize(num) {
      if (num === 0) { return 1; }
      return num * factorialize(num-1);
    }

    factorialize(5);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLjU/1' target='_blank' rel='nofollow'>Run Code</a>

## Code Explanation:

Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. If `num == 0`, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a <a href='https://en.wikipedia.org/wiki/Stack_overflow' target='_blank' rel='nofollow'>Stack Overflow</a>.

### Relevant Links

*   <a href='https://www.codecademy.com/en/courses/javascript-lesson-205/0/1' target='_blank' rel='nofollow'>Recursion</a>
*   <a href='https://en.wikipedia.org/wiki/Factorial' target='_blank' rel='nofollow'>Factorialization</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators' target='_blank' rel='nofollow'>Arithmetic Operators</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
