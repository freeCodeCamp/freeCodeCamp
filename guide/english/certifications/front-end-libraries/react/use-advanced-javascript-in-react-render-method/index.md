---
title: Use Advanced JavaScript in React Render Method
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Use Advanced JavaScript in React Render Method

### Method
While you are inside the render method and not inside the return method, you can write JavaScript **without** wrapping it inside curly braces.

First, you will have to set the constant 'answer' to a value. Access the 'possibleAnswers' array using the value of 'randomIndex', which is located within the state of your component. Remember, you access state using `this.state`.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```js
const answer = possibleAnswers[this.state.randomIndex];
```

Next, insert your const 'answer' into the p-tags. Make sure to wrap it with curly braces `{ }`.
```jsx
<p>
  {answer}          
</p>
```
