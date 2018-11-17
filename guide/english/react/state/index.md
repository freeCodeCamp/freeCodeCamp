---
title: State
---

# State

State in React is an object with observable properties that determines how a component behaves and renders.  

State is a feature that is only available to classes, and should be considered private data.  State is only available within a component, and can be passed to child components using [`props`](../props)

Example of a Stateful Class Component:

```js
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
      
    // We declare state below
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

Another example using class properties and ES6 destructring:

#### Note: This example uses class fields which is a stage 3 proposal and is not a standard feature yet.

```javascript
import React from 'react';
class App extends React.Component {
  state = {
    fruits: ['apple', 'banana', 'strawberry', 'watermelon']
  }

  render() {

    // Destructure `fruits` property from this.state
    const { fruits } = this.state
    return (
      <ul>
        {
          fruits.map(fruit => (
            <li key={fruit}>
            {fruit}
            </li> 
          ))
        }
      </ul>
    );
  }
}

export default App;
```

## Updating State
You should never try to modify your `state` object directly.  Instead, use the `setState` method to update state on your component.

```js
this.setState({value: 1});
```

Keep in mind that `setState` may be asynchronous, so you should be careful when using the current state to set a new state. A good example of this would be if you want to increment a value in your state:

#### The Wrong Way
```js
this.setState({value: this.state.value + 1});
```

This may lead to unexpected behavior if the code above is called multiple times in the same update cycle. To avoid this, you can pass an `updater` callback function to `setState` instead of an object.  The updater callback has two parameters - `state` and `props`, both of which are guaranteed to be up-to-date.

#### The Correct Way
```js
this.setState(prevState => ({value: prevState.value + 1}));
```

#### Using ES6 Destructuring
When only a limited number of properties in the state object are required, object destructing can improve readability.
```
this.setState(({ value }) => ({ value: value + 1 }));
```

When only a limited number of fields in the state object are required, object destructing can be used for cleaner code.

#### The "Functional Way"

The functional way declares state changes separately from the component classes. Hence,
```javascript
//  outside your component class
function increment(state,props){
  return { score: state.value +1 }
}
...
//  inside your component class
this.setState(increment)
```

Importing state via changes via functions helps keep each module as short as possible and can be used for cleaner code.

#### More Information

- [React - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [React Native - State Up](https://facebook.github.io/react-native/docs/state.html)
- [Functional setState is the future of React](https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b)
