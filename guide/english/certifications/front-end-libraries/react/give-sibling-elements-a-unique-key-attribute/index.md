---
title: Give Sibling Elements a Unique Key Attribute
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Give Sibling Elements a Unique Key Attribute

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint

It is just almost same as previous [challenge](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements). Just you need to add `key` attribute.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

Just add `key` attribute to the `<li>` tag to make unique 

```jsx
const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={item+1}>{item}</li>
);
```
