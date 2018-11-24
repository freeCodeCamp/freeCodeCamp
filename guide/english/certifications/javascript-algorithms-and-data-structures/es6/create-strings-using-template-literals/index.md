---
title: Create Strings Using Template Literals
---

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Instead of using string concatenation, ES6 offers template literals to create strings. In this challenge, you have to use template literals to create an array of text warnings.

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program and write your own code.

### Problem Explanation:

It's required to use template literals to return a list as every element in the array as the element will be wrapped in a `<li></li>` tag.

## Hint: 1

*   Use `map()` function to apply the template literals on all of the `arr` elements 

> _try to solve the problem now_

## Hint: 2

*   Inside the `map()` use an arrow function which has `element` as a parameter and returns `<li></li>` that has the text-warning class and containing the `element` inside it

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);```

## No map() solution
Despite being a less flexible solution, if you know the number of elements in advance, you can enumerate them as in

```const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
  `<li class="text-warning">${arr[1]}</li>`
  ,`<li class="text-warning">${arr[2]}</li>`];```
