---
title: Use the Conditional (Ternary) Operator
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Use the Conditional (Ternary) Operator

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

* You need to write a function named `checkEqual`, which checks if the two parameters are equal.
* If the parameters are equal, `Equal` is to be returned else `Not Equal` should be returned.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint

Use ternary operator to check for equality.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```javascript
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

### Code Explanation:

* A function `checkEqual` is declared, it accepts two parameters in variables `a` and `b`.
* The `return` statement would return the value of the evaluated ternary expression.
* The ternary expression checks if `a` and `b` are equal or not and returns `Equal` or `Not Equal` respectively.
