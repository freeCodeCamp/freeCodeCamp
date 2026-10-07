# `react-shallow-renderer`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/NMinhNguyen/react-shallow-renderer/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-shallow-renderer)](https://www.npmjs.com/package/react-shallow-renderer)
[![CircleCI](https://img.shields.io/circleci/build/github/NMinhNguyen/react-shallow-renderer)](https://circleci.com/gh/NMinhNguyen/react-shallow-renderer/tree/master)

When writing unit tests for React, shallow rendering can be helpful. Shallow rendering lets you render a component "one level deep" and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.

## Installation

```sh
# npm
npm install react-shallow-renderer --save-dev

# Yarn
yarn add react-shallow-renderer --dev
```

## Usage

For example, if you have the following component:

```jsx
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
      <Subcomponent foo="bar" />
    </div>
  );
}
```

Then you can assert:

```jsx
import ShallowRenderer from 'react-shallow-renderer';
// in your test:
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);
const result = renderer.getRenderOutput();
expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
  <Subcomponent foo="bar" />,
]);
```

Shallow testing currently has some limitations, namely not supporting refs.

> Note:
>
> We also recommend checking out Enzyme's [Shallow Rendering API](https://airbnb.io/enzyme/docs/api/shallow.html). It provides a nicer higher-level API over the same functionality.

## Reference

### `shallowRenderer.render()`

You can think of the shallowRenderer as a "place" to render the component you're testing, and from which you can extract the component's output.

`shallowRenderer.render()` is similar to [`ReactDOM.render()`](https://reactjs.org/docs/react-dom.html#render) but it doesn't require DOM and only renders a single level deep. This means you can test components isolated from how their children are implemented.

### `shallowRenderer.getRenderOutput()`

After `shallowRenderer.render()` has been called, you can use `shallowRenderer.getRenderOutput()` to get the shallowly rendered output.

You can then begin to assert facts about the output.
