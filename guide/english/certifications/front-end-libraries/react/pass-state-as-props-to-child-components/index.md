---
title: Pass State as Props to Child Components
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Pass State as Props to Child Components

In this challenge we are going to be passing state, but since state is local to its parent component we must use <strong>props</strong> to pass into the child component. Using props in child components will allow us to keep all the state data in the parent component and we can pass the data in one direction to the children components.

```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         // Here we will call this.state.name in order to pass the value of CamperBot
         // to the NavBar component
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      // Since we passed in the CamperBot state value into the the NavBar component above
      // the h1 element below will render the value passed from state
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
