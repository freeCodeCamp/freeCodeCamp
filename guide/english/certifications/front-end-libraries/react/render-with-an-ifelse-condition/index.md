---
title: Render with an If/Else Condition
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Render with an If/Else Condition

Inside of the render method of the component, write if/else statements that each have its own return method that has different JSX. This gives programmers the ability to render different UI according to various conditions.

First, wrap the current return method inside of an if statement and set the condition to check if the variable 'display' is true. Remember, you access state using `this.state`.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```jsx
if (this.state.display === true) {
  return (
    <div>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
      <h1>Displayed!</h1>
    </div>
  );
}
else {
  return (
    <div>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
    </div>
  );
}
```
