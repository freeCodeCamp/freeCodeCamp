---
title: Introducing Inline Styles
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Introducing Inline Styles

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{ color: 'red', fontSize: '72'}}>
        Big Red
      </div>
    );
  }
};
```

#### NOTE
Notice how the JSX attribute is **camelCase**. This is another important difference to remember about JSX.
Additionally, you probably noticed that there is no unit. In JSX, when setting the fontSize attribute the **unit is optional** and will automatically be set to px if not set manually. 
