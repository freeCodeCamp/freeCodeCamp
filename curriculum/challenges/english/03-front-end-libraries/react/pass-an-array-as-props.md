---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
forumTopicId: 301401
---

## Description
<section id='description'>
The last challenge demonstrated how to pass information from a parent component to a child component as <code>props</code> or properties. This challenge looks at how arrays can be passed as <code>props</code>.  To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

The child component then has access to the array property <code>colors</code>.  Array methods such as <code>join()</code> can be used when accessing the property.
<code>const ChildComponent = (props) => &lt;p&gt{props.colors.join(', ')}&lt;/p&gt</code>
This will join all <code>colors</code> array items into a comma separated string and produce:
 <code> &lt;p&gt;green, blue, red&lt;/p&gt;</code>
Later, we will learn about other common methods to render arrays of data in React.
</section>

## Instructions
<section id='instructions'>
There are <code>List</code> and <code>ToDo</code> components in the code editor. When rendering each <code>List</code> from the <code>ToDo</code> component, pass in a <code>tasks</code> property assigned to an array of to-do tasks, for example <code>["walk dog", "workout"]</code>. Then access this <code>tasks</code> array in the <code>List</code> component, showing its value within the <code>p</code> element.  Use <code>join(", ")</code> to display the <code>props.tasks</code>array in the <code>p</code> element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ToDo</code> component should return a single outer <code>div</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === 'div'; })());
  - text: The third child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === 'List'; })());
  - text: The fifth child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === 'List'; })());
  - text: Both instances of the <code>List</code> component should have a property called <code>tasks</code> and <code>tasks</code> should be of type array.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find('List').get(0).props.tasks) && Array.isArray(mockedComponent.find('List').get(1).props.tasks); })());
  - text: The first <code>List</code> component representing the tasks for today should have 2 or more items.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(0).props.tasks.length >= 2; })());
  - text: The second <code>List</code> component representing the tasks for tomorrow should have 3 or more items.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(1).props.tasks.length >= 3; })());
  - text: The <code>List</code> component should render the value from the <code>tasks</code> prop in the <code>p</code> tag.
    testString: |
      assert((function() {
        const mockedComponent = Enzyme.mount(React.createElement(ToDo));
        return (
          mockedComponent.find('p').get(0).props.children.replace(/\s*,\s*/g,',') === mockedComponent.find('List').get(0).props.tasks.join(',').replace(/\s*,\s*/g,',') &&
          mockedComponent.find('p').get(1).props.children.replace(/\s*,\s*/g,',') === mockedComponent.find('List').get(1).props.tasks.join(',').replace(/\s*,\s*/g,',')
        );
      })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


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

</section>
