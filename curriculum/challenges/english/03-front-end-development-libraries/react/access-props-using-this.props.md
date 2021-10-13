---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write `{this.props.data}` in JSX.

# --instructions--

Render an instance of the `ReturnTempPassword` component in the parent component `ResetPassword`. Here, give `ReturnTempPassword` a prop of `tempPassword` and assign it a value of a string that is at least 8 characters long. Within the child, `ReturnTempPassword`, access the `tempPassword` prop within the `strong` tags to make sure the user sees the temporary password.

# --hints--

The `App` component should return a single `div` element.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

The child of `App` should be the `Welcome` component.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

The `App` component should have a prop called `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('App').props().name;
  })()
);
```

The `name` prop of `Welcome` should be equal to a string of at least 2 characters.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    const name = mockedComponent.find('Welcome').props()
      .name;
    return typeof name === 'string' && name.length >= 2;
  })()
);
```

The `Welcome` component should display the password you create as the `name` prop within `strong` tags.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```
