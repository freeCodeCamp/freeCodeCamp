---
title: State
---

# State

State is the place where the data comes from. 

We should always try to make our state as simple as possible and minimize the number of stateful components. If we have, for example, ten components that need data from the state, we should create one container component that will keep the state for all of them.

State is basically like a global object that is available everywhere in a component.

Example of a Stateful Class Component:

```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
      
    // We declare the state as shown below
    
    this.state = {                           
      x: "This is x from state",    
      y: "This is y from state"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
        <h2>{this.state.y}</h2>
      </div>
    );
  }
}
export default App;
```

Another Example:

```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // We declare the state as shown below
    this.state = {                           
      x: "This is x from state",    
      y: "This is y from state"
    }
  }

  render() {
    let x1 = this.state.x;
    let y1 = this.state.y;

    return (
      <div>
        <h1>{x1}</h1>
        <h2>{y1}</h2>
      </div>
    );
  }
}
export default App;
```

## Updating State
You can change the data stored in the state of your application using the `setState` method on your component.

```js
this.setState({ value: 1 });
```

Keep in mind that `setState` is asynchronous so you should be careful when using the current state to set a new state. A good example of this would be if you want to increment a value in your state. 

#### The Wrong Way
```js
this.setState({ value: this.state.value + 1 });
```

This can lead to unexpected behavior in your app if the code above is called multiple times in the same update cycle. To avoid this you can pass an updater callback function to `setState` instead of an object. 

#### The Right Way
```js
this.setState(prevState => ({ value: prevState.value + 1 }));
```

## Updating State
You can change the data stored in the state of your application using the `setState` method on your component.

```js
this.setState({value: 1});
```

Keep in mind that `setState` may be asynchronous so you should be careful when using the current state to set a new state. A good example of this would be if you want to increment a value in your state. 

##### The Wrong Way
```js
this.setState({value: this.state.value + 1});
```

This can lead to unexpected behavior in your app if the code above is called multiple times in the same update cycle. To avoid this you can pass an updater callback function to `setState` instead of an object. 

##### The Right Way
```js
this.setState(prevState => ({value: prevState.value + 1}));
```

##### The Cleaner Way
```
this.setState(({ value }) => ({ value: value + 1 }));
```

When only a limited number of fields in the state object is required, object destructing can be used for cleaner code.

### More Information

- [React - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [React Native - State Up](https://facebook.github.io/react-native/docs/state.html)
