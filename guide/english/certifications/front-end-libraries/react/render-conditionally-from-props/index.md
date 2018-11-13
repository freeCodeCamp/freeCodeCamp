---
title: Render Conditionally from Props
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Render Conditionally from Props
This is a bit tricky challenge but easy though.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

Change `handleClick()` with proper increament statement.

```react.js
handleClick() {
  this.setState({
    counter: this.state.counter + 1
  });
}
```
In `render()` method use `Math.random()` as mentioned in the challenge description and write a ternary expression to pass `props` in the **Results** component.
```react.js
 let expression = Math.random() > .5;
    
{(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }

```

Then render the `fiftyFifty` props in the Results component.
```react.js
  <h1>
  {
    this.props.fiftyFifty
  }
  </h1>
```
