---
title: Render a Class Component to the DOM
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Render a Class Component to the DOM

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use `document.getElementById("id")` to get target node.

> _try to solve the problem now_
 
## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

Your code should end up looking similar to this:

```jsx
class TypesOfVehicles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
          <h1>Types of Vehicles:</h1>
          <Car />
          <Motorcycle />
          </div>
        );
    }
}
ReactDOM.render(<TypesOfVehicles />,'node-id')
```
The ReactDOM.render syntax may be a little tricky, you need to use the triangle brackets when passing in a Class Component. Also the two subcomponents are declared behind the scenes, which may be confusing if you are used to all the variables being defined in the code editor and visible in front of you.

### Relevant Links
* [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
