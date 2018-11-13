---
title: Use && for a More Concise Conditional
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Use && for a More Concise Conditional

The example given is 
```
{condition && <p>markup</p>} 
```
which is demonstrated below using the condition of the this.state.dinnerCooked boolean.
If the boolean is true the markup included in the {} with the condition will display, if not it will not display

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinnerCooked: true
    }   
  }
  render() {  
    return (
       <div>       
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed
       </div>
    );
  }
};
````

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

As you can see, you don't have to write the full ```if/then``` statement. We only need to check the condition and see if it returns ```true``` or ```false```. In this case, we are checking the value of ```display```. If the value is ```true```, then you return the value to the right of ```&&```, which is ```<h1>Displayed!</h1>```. If the condition is ```false```, it returns nothing.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinnerCooked: false
    }   
  }
  render() {  
    return (
       <div>       
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will NOT be displayed
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

### Reference
* [ReactJS.org documentation](https://reactjs.org/docs/conditional-rendering.html)
