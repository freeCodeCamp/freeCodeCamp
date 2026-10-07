# react-lifecycles-compat

## What is this project?

React version 17 will deprecate several of the class component API lifecycles: `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate`. (Read the [Update on Async rendering blog post](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) to learn more about why.) A couple of new lifecycles are also being added to better support [async rendering mode](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html).

Typically, this type of change would require third party libraries to release a new major version in order to adhere to semver. However, the `react-lifecycles-compat` polyfill offers a way to use the new lifecycles with older versions of React as well (0.14.9+) so no breaking release is required. This enables shared libraries to support both older and newer versions of React simultaneously.

## How can I use the polyfill

First, install the polyfill from NPM:
```sh
# Yarn
yarn add react-lifecycles-compat

# NPM
npm install react-lifecycles-compat --save
```

Next, update your component and replace any of the deprecated lifecycles with new ones introduced with React 16.3. (Refer to the React docs for [examples of how to use the new lifecycles](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html).)

Lastly, use the polyfill to make the new lifecycles work with older versions of React:
```js
import React from 'react';
import {polyfill} from 'react-lifecycles-compat';

class ExampleComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // Normally this method would only work for React 16.3 and newer,
    // But the polyfill will make it work for older versions also!
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Normally this method would only work for React 16.3 and newer,
    // But the polyfill will make it work for older versions also!
  }

  // render() and other methods ...
}

// Polyfill your component so the new lifecycles will work with older versions of React:
polyfill(ExampleComponent);

export default ExampleComponent;
```

## Which lifecycles are supported?

Currently, this polyfill supports [static `getDerivedStateFromProps`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) and [`getSnapshotBeforeUpdate`](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)- both introduced in version 16.3.

## Validation

Note that in order for the polyfill to work, none of the following lifecycles can be defined by your component: `componentWillMount`, `componentWillReceiveProps`, or `componentWillUpdate`.

Note also that if your component contains `getSnapshotBeforeUpdate`, `componentDidUpdate` must be defined as well.

An error will be thrown if any of the above conditions are not met.