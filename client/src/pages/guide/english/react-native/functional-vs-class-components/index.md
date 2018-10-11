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
        <h1>Page One</h1>
    );
}
```

### Summary

Class components are used as container components to handle state management and wrap child components. Functional components generally are just used for display purposes - these components call functions from parent components to handle user interactions or state updates.
