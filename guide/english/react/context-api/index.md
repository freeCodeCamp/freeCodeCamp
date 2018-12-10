---
title: Context API
---

# Context API

The Context API has been implemented in the 16.3 version of React.

It existed before, but was in beta, and thus, unadvised to work with.

The goal of Context API is to allow developers to have an easy communication between components, without needing them to be closely related (Parent/Children components).
This also reduce the need for prop drilling (passing down the props through several components), which allows for a cleaner code, easier to maintain and update.

This get to its full potential when we want to share data that will be accessed by multiple components.

This is based around two things : a Provider and a Consumer.

## Provider

On a file created exclusively to provide data, TimeProvider.js, let’s say we want to share some time between components.

```javascript
// Import createContext
import React, { createContext, Component } from 'react';

// Initialize a context with a time value to it
export const TimeContext = createContext({
  time: '',
});

// Create the TimeProvider class to be used by index.js as a provider and initialize a default value
class TimeProvider extends Component {
  state = {
    time: '17:00',
  };

  // Passing the state that we just set as value to be used by our consumer and returning its children
  render() {
    return (
      <TimeContext.Provider value={this.state}>
        {this.props.children}
      </TimeContext.Provider>
    );
  }
}

export default TimeProvider;
```
We need to tweak a bit the component that will call the child which needs to consume our context (<ShowTime /> in this case).

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { ShowTime} from "./ShowTime";

// Importing our provider
import TimeProvider from "./utils/timeProvider";

// Calling our Hello component inside our provider
function App() {
  return (
      <TimeProvider>
        <ShowTime />
      </TimeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Consumer
In the ShowTime.js file, let's call the time value using the consumer :

```javascript
// on ShowTime.js
import React from “react”;

import { TimeContext } from “./utils/TimeProvider”;

export default () => (
  <TimeContext.Consumer>
    {value => <p> It’s {value.time} ! </p>}
  </TimeContext.Consumer>
);
```

This should show :
```javascript
<p> It’s 17:00 ! </p>
```

### Modify the context dynamically
In order to change the time that we’ll provide to the ShowTime component, we need to give our context a function, that can be used by the consumer to update a value.

Let’s just add it to our Provider
```javascript
// utils.TimeProvider.js
...
// This time we initialize a function to set the time
export const TimeContext = createContext({
  time: "",
  setTime: () => {}
});

// We define the setTime function to store the time we’ll give it
class TimeProvider extends Component {
  state = {
    time : "17:00",
    setTime: time => this.setState({ time : time })
  };

  render() {
    return (
      <TimeContext.Provider value={this.state}>
        {this.props.children}
      </TimeContext.Provider>
    );
  }
}

export default TimeProvider;
```

And back on our Consumer :

```javascript
// on ShowTime.js
import React from “react”;

import { TimeContext } from “./utils/TimeProvider”;

export default () => (
  <TimeContext.Consumer>
    {value => <p> It’s {value.time} ! </p>}
    <input type="text" value={time} onChange={e => setTime(e.target.value)} />
  </TimeContext.Consumer>
);
```

This will give us an input to modify the time that’ll be displayed.

We need to remember using three things :
- Create a Provider that will manage our data shared (also called a Store)
- Create a Consumer that will communicate with the store
- Surrounding our Consumer Component with the Provider created so it can use its data

### More Information

- [React - Context Official Documentation ](https://reactjs.org/docs/context.html)
