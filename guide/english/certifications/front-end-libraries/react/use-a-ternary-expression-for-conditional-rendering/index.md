---
title: Use a Ternary Expression for Conditional Rendering
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Use a Ternary Expression for Conditional Rendering
This challenge is to use Ternary Expression only instead of using `If/Else` in code,

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint

Ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:
`
condition ? expressionIfTrue : expressionIfFalse
`

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

Here is sample solution of using ternary expression.
First you need declare state in constructor like this

```jsx
constructor(props) {
    super(props);
      this.state = {
        input: '',
        userAge: ''
      }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
```
Then the ternary operator 
```jsx
{
    /* change code here */
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree

}
```
