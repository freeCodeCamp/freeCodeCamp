---
title: Fragments
---

# Fragments

Fragments are way to render multiple elements without using a wrapper element. When attempting to render elements without an enclosing tag in JSX, you will see the error message `Adjacent JSX elements must be wrapped in an enclosing tag`.  This is because when JSX transpiles, it's creating elements with their corresponding tag names, and doesn't know what tag name to use if multiple elements are found.  In the past, a frequent solution to this was to use a wrapper div to solve this problem. However, version 16 of React brought the addition of `Fragment`, which makes this no longer necessary.

`Fragment` acts a wrapper without adding unnecessary divs to the DOM.  You can use it directly from the React import, or deconstruct it:

```jsx
import React from 'react';

class MyComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div>I am an element!</div>
        <button>I am another element</button>
      </React.Fragment>
    );
  }
}

export default MyComponent;
```


```jsx
// Deconstructed
import React, { Component, Fragment } from 'react';

class MyComponent extends Component {
  render(){
    return (
      <Fragment>
        <div>I am an element!</div>
        <button>I am another element</button>
      </Fragment>
    );
  }
}

export default MyComponent;
```

React version 16.2 simplified this process further, allowing for empty JSX tags to interpretted as Fragments:

```jsx
return (
  <>
    <div>I am an element!</div>
    <button>I am another element</button>
  </>
);
```

#### More Information:
* [React.Fragment (Official Documentation)](https://reactjs.org/docs/react-api.html#reactfragment)
* [React v16.2.0: Improved Support for Fragments](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
