# `react-test-renderer`

This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

Essentially, this package makes it easy to grab a snapshot of the "DOM tree" rendered by a React DOM or React Native component without using a browser or jsdom.

Documentation:

[https://reactjs.org/docs/test-renderer.html](https://reactjs.org/docs/test-renderer.html)

Usage:

```jsx
const ReactTestRenderer = require('react-test-renderer');

const renderer = ReactTestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(renderer.toJSON());
// { type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ] }
```

You can also use Jest's snapshot testing feature to automatically save a copy of the JSON tree to a file and check in your tests that it hasn't changed: https://jestjs.io/blog/2016/07/27/jest-14.html.
