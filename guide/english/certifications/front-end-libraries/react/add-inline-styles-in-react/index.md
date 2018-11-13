---
title: Add Inline Styles in React
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Add Inline Styles in React
You can declare a component style passing the object directly as a prop 'style'. Just remember that each property of the style object is camelcased. So properties like 'font-size' is declared 'fontSize' to be a valid javascript object property.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
  }
};
```

### Resources
[DOM Elements Style](https://reactjs.org/docs/dom-elements.html#style)
