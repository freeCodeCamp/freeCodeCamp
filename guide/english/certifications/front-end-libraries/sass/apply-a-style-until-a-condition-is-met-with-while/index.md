---
title: Apply a Style Until a Condition is Met with @while
---

## Apply a Style Until a Condition is Met with @while

![](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3c8584a085a0deaea66b3400e6321eeadab552a2.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### Problem Explanation:

This program is very simple, the trick is to remember how while looping works.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 0

*   **Make sure your zoom settings are at `100%` or `default` otherwise tests sometimes fail. **

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   You will initialise the loop first with x as: `$x: 1`

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   See the example for `@while` syntax, `@while $x < 11`

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   to set class properties inside a loop we reference them enclosed by #{}, hence ere it will become: `.text-#{$x}`

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:


```css
$x: 1;
@while $x < 11 {
  .text-#{$x} { 
    font-size: 5px * $x;
  }
  $x: $x + 1;
}
```

#### Relevant Links

*   <a href='https://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_' target='_blank' rel='nofollow'>Interpolation</a>
*   <a href='https://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_' target='_blank' rel='nofollow'>Variables</a>
*   <a href='https://sass-lang.com/documentation/file.SASS_REFERENCE.html#while' target='_blank' rel='nofollow'>while loops</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
