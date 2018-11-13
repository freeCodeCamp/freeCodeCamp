---
title: Define an HTML Class in JSX
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Define an HTML Class in JSX

- HTML and JSX may seem that they are exactly the same but there are a few differences between them.
- One of these differences is the naming convention.
- HTML attributes and event references in JSX become camelCase(onclick => onClick).
- There may also be some words reserved in JavaScript.For instance the word "class" cant be use to define HTML classes
in JSX.Therefore instead of using "class" you can use "className".

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint

You may want to change "class" to "className".

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```javascript
const JSX = (
  <div className = "myDiv"> 
    <h1>Add a class to this div</h1>
  </div>
);
```
