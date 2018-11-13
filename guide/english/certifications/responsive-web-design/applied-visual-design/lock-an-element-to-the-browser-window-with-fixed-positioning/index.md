---
title: Lock an Element to the Browser Window with Fixed Positioning
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Lock an Element to the Browser Window with Fixed Positioning

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Use `position: fixed;`.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use the `left` and `top` properties.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```css
#navbar {
  position: fixed;
  top: 0px;
  left: 0px;    
  width: 100%;
  background-color: #767676;
}
```

### Code Explanation:

*  `#navbar{}` selects all the elements with the ID of `navbar`.
*  `position: fixed;` positions the element with respect to the viewport i.e. the output screen in this case.
*  `top: 0px;` and `right: 0px;` offsets the element by `0px` to the top and left respectively and it is placed in the top-left corner of the screen.
