---
id: 5a24c314108439a4d403616a
title: Passare un Array come proprietà
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

L'ultima sfida ha mostrato come trasferire le informazioni da un componente genitore a un componente figlio come `props` o proprietà. Questa sfida mostra come gli array possono essere passati come `props`. Per passare un array a un elemento JSX, esso deve essere trattato come JavaScript e avvolto in parentesi graffe.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

Il componente figlio ha quindi accesso alla proprietà array `colors`. I metodi sugli array come `join()` possono essere utilizzati quando si accede alla proprietà.

```jsx
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
```

This will join all `colors` array items into a comma separated string and produce: `<p>green, blue, red</p>`. Later, we will learn about other common methods to render arrays of data in React.

# --instructions--

There are `List` and `ToDo` components in the code editor. When rendering each `List` from the `ToDo` component, pass in a `tasks` property assigned to an array of to-do tasks, for example `["walk dog", "workout"]`. Then access this `tasks` array in the `List` component, showing its value within the `p` element. Use `join(", ")` to display the `props.tasks` array in the `p` element as a comma-separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

# --hints--

The `ToDo` component should return a single outer `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

The third child of the `ToDo` component should be an instance of the `List` component.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

The fifth child of the `ToDo` component should be an instance of the `List` component.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

Both instances of the `List` component should have a property called `tasks` and `tasks` should be of type array.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

The first `List` component representing the tasks for today should have 2 or more items.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

The second `List` component representing the tasks for tomorrow should have 3 or more items.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

The `List` component should render the value from the `tasks` prop in the `p` tag.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
