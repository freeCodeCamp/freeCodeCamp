---
title: Pass a Callback as Props
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Pass a Callback as Props

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Description
- Add the `GetInput` component to the render method in MyApp, then pass it a prop called `inpu`t assigned to `inputValue` from MyApp's state. Also create a prop called `handleChange` and pass the input handler `handleChange` to it.
- Add `RenderInput` to the render method in MyApp, then create a prop called `input` and pass the `inputValue` from state to it.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint

`state` is a property of `Myapp` class, so use 'this.state' to get the object value.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        }
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/>
        }
       </div>
    );
  }
};
```

#### Extra Links

To learn more about state and props, read [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) and [Components and Props](https://reactjs.org/docs/components-and-props.html).
