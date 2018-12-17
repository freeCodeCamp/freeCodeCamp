---
title: Fragments
---

# Fragments

Fragments are a way to return multiple elements from the render method without using an additional wrapping DOM element.

When attempting to render multiple sibling elements without an enclosing tag in JSX, you will see the error message of `Adjacent JSX elements must be wrapped in an enclosing tag`.

In the past, a frequent solution was to use either a wrapping div or span element, which was not elegant as it would increase the size of DOM tree and this is because of the way JSX works as multiple elements should be wrapped in a div. However, version 16.0 of React introduced the addition of `Fragment`, which makes this no longer necessary.

`Fragment` acts a wrapper without adding unnecessary divs or spans elements to the DOM.  You can use it directly from the React import:

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


`Fragments` only accept the key attribute.

Or you can additionally deconstruct it for use:
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


React version 16.2 simplified this process further, allowing for empty JSX tags `<></>` to be interpreted as Fragments:

```jsx
return (
  <>
    <div>I am an element!</div>
    <button>I am another element</button>
  </>
);
```

Empty JSX tags cannot be used with attributes, including key.

#### More Information:
* [React.Fragment (Official Documentation)](https://reactjs.org/docs/react-api.html#reactfragment)
* [React v16.2.0: Improved Support for Fragments](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
