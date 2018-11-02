---
title: Functional vs Class Components
---
## React Native - Functional vs Class Components

In React Native, there are two main types of components that make up an application - *functional components* and *class components*. These are structured the same as they would be in a regular React app for the web.

### Class Components

Class components are JavaScript ES2015 classes that extend a base class from React called `Component`.

```js
class App extends Component {
  render () {
    return (
      <Text>Hello World!</Text>
    )
  }
}
```

This gives the class `App` access to the React lifecycle methods like `render` as well state/props functionality from the parent.

### Functional Components

Functional components are simpler. They don't manage their own state or have access to the lifecycle methods provided by React Native. They are literally plain old JavaScript functions. They are also known as stateless components. 

```js
const PageOne = () => {
  return (
    <Text>Page One</Text>
  );
}
```

Note that its immediate parent doesn't necessarily have to be a Class component. It could just be another stateless one, which allows for better componentization. Here's an example.

```js
const SecondComponent = () => {
  return <Text>Hello World</Text>
}

const FirstComponent = () => {
  return (
    <View>
      <SecondComponent />
    </View>
  )
}

class App extends Component {
  render () {
    return <FirstComponent />
  }
}
```

We're not doing all that much here. `App` is a class component that renders `FirstComponent`, which is just a functional component that returns `SecondComponent` inside of a `View`. 

Obviously, if the goal was just to render a `Text` component that said "Hello World", you wouldn't need `FirstComponent` nor `SecondComponent`. But the purpose of this example is to show how one might go about nesting functional components.

Sometimes, a functional component may contain a lot of markup for its configuration. For example, the `TextInput` component can be customized with many attributes, so you may want to create custom components for different fields like email, password, username and so on. That is a powerful concept, as you're now able to reuse these custom components throughout your application.

### Summary

Class components are used as container components to handle state management and wrap child components. Functional components generally are just used for display purposes - these components call functions from parent components to handle user interactions or state updates.
