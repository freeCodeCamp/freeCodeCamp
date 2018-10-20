---
title: React Props and State
---

## Props & State

There are two types of data that control a component: props and state. Props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

### Props
Most components can be customized with different parameters when they are created. These creation parameters are called `props`.

Your own components can also use props. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place. Refer to `this.props` in your render function:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

const element = <Welcome name="neel" />;
```

The line `<Welcome name="neel" />` creates a property name with value `"neel"`.

the property is passed to the component, similar to how an argument is passed to a function. In fact, we could even rewrite the component to be simpler:

```
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

We can make the name property optional by adding defaultProps to the Welcome class:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

Welcome.defaultProps = {
  name: "world",
};
```

If Welcome is called without a name it will simply render `<h1> Hello world</h1>`.

So `props` can come from the parent, or can be set by the component itself.

You used to be able to change props with setProps and replaceProps but these have been **deprecated**. During a component’s life cycle props should not change (consider them immutable).

Since props are passed in, and they cannot change, you can think of any React component that only uses props (and not state) as “pure,” that is, it will always render the same output given the same input. This makes them really easy to test.



### State 
Like `props`, `state` holds information about the component. However, the kind of information and how it is handled is different.

By default, a component has no state. The `Welcome` component from above is stateless:

```
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

```

When a component needs to keep track of information between renderings the component itself can create, update, and use state.

We’ll be working with a fairly simple component to see `state` working in action. We’ve got a button that keeps track of how many times you’ve clicked it.

here’s the code:

```
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    return (<button
              onClick={() => this.updateCount()}
            >
              Clicked {this.state.count} times
            </button>);
  }
}
```

### state is created in the component
Let’s look at the `constructor` method:

```
constructor() {
  super();
  this.state = {
    count: 0,
  };
}
```

This is where state gets it’s initial data. The inital data can be hard coded (as above), but it can also come from `props`.

### `state` is changeable
Here’s `updateCount` method:

```
updateCount() {
  this.setState((prevState, props) => {
    return { count: prevState.count + 1 }
  });
}
```

We change the state to keep track of the total number of clicks. The important bit is setState. First off, notice that setState takes a function, that’s becuase setState can run asynchronously. It needs to take a callback function rather than updating the state directly. You can see we have access to prevState within the callback, this will contain the previous state, even if the state has already been updated somewhere else.

React goes one step better, setState updates the `state` object **and** re-renders the component automagically.

### `state` warnings 

> It is tempting to write `this.state.count = this.state.count + 1`. 

**Don't do this** React cannot listen to the state getting updated in this way, so your component will not re-render. Always use `setState`.

It might also be tempting to write something like this:

```
// DO NOT USE
this.setState({
  count: this.state.count + 1
});
```

Although this might look reasonable, doesn’t throw errors, and you might find examples that use this syntax online, it is wrong. This does not take into account the asychronous nature that `setState` can use and might cause errors with out of sync state data.

### Program Continue !!!

And finally, `render`

```
render() {
  return (<button
            onClick={() => this.updateCount()}
          >
            Clicked {this.state.count} times
          </button>);
}
```

`onClick={() => this.updateCount()}` means that when the button is clicked the updateCount method will be called. We need to use **ES6’s arrow function** so updateCount will have access to this instance’s state.

The text rendered in the button is `Clicked {this.state.count} times`, which will use whatever this.state.count is at the time of rendering.

More Info about: <a href='https://reactjs.org/docs/components-and-props.html' target='_blank' rel='nofollow'>**React props**</a> and <a href='https://reactjs.org/docs/state-and-lifecycle.html' target='_blank' rel='nofollow'>**state**</a>
