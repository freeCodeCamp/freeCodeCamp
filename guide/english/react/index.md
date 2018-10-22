---
title: React
---

# React

React is a JavaScript library. Applications built with React usually run on the client-side in a web browser as a Single Page Application. Applications of this kind only communicate with the server when necessary, which makes them very fast compared to traditional websites that force the user to wait for the server to render an entire page and send it back to the browser for changes.

React is used for building user interfaces - what the user sees on their screen and how they interact with your application. Instead of having one large template you break it up into smaller pieces known as components. This approach is called Modularity, which benefits the reusability and testability of your components.

- It's declarative: React uses a declarative paradigm that makes it more readable.
- It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date.
- It's flexible: React allows the user to render one or many components to the browser.
- And it's compatible: React works well with many popular libraries and frameworks.

## Why learn React?

1. React involves Composition. Many components wrapping up the functionalities into an encapsulated container. Many popular websites use React as the View layer when implementing the MVC architectural pattern. Popular websites such as Facebook, Instagram, Khan Academy, Airbnb.

Example:
```jsx
const Component2 = () => {
  return <div />;
};
const Component3 = () => {
  return <div />;
};
const Component1 = () => {
  return (
    <div>
      <Component2 />
      <Component3 />
    </div>
  );
};

ReactDOM.render(<Component1 />, document.getElementById('app'));
```

2. React is Declarative. Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow. Declarative programming comes with certain advantages such as reduced side effects (occurs when we modify any state or mutating something or making an API request), minimizing mutability (mostly abstracted), enhanced readability, and less bugs.

3. Unidirectional dataflow. User interface in React is controlled by the state, ss the state updates it also updates the user interface as well. So our user interface progresses as the state changes.

### Virtual DOM

React's magic comes from it's interpretation of the DOM and it's strategy for creating UIs.

React uses the virtual DOM to render an HTML tree virtually first, and then, every time a state changes and we get a new HTML tree that needs to be taken to the browser’s DOM, instead of writing the whole new tree React will only write the difference between the new tree and the previous tree (since React has both trees in memory). This process is known as Tree Reconciliation.

### Reconciliation

React has a smart diffing algorithm that it uses to only regenerate in its DOM node what actually needs to be regenerated while it keeps everything else as is. This diffing process is possible because of React’s virtual DOM.

Using the virtual DOM, React keeps the last DOM version in memory and when it has a new DOM version to take to the browser, that new DOM version will also be in memory, so React can compute the difference between the new and the old versions.

React will then instruct the browser to update only the computed diff and not the whole DOM node. No matter how many times we regenerate our interface, React will take to the browser only the new “partial” updates.

### More Information:

- [React Official Site](https://reactjs.org/)
- [React challenges on freeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/react)
- [React Github](https://github.com/facebook/react)
- [Awesome React](https://github.com/enaqx/awesome-react)
