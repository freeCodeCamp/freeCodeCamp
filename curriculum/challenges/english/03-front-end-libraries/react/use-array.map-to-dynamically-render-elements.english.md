---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
forumTopicId: 301417
---

## Description

<section id='description'>
Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using <code>Array.map()</code> in React illustrates this concept.
For example, you create a simple "To Do List" app. As the programmer, you have no way of knowing how many items a user might have on their list. You need to set up your component to dynamically render the correct number of list elements long before someone using the program decides that today is laundry day.
</section>

## Instructions

<section id='instructions'>
The code editor has most of the <code>MyToDoList</code> component set up. Some of this code should look familiar if you completed the controlled form challenge. You'll notice a <code>textarea</code> and a <code>button</code>, along with a couple of methods that track their states, but nothing is rendered to the page yet.
Inside the <code>constructor</code>, create a <code>this.state</code> object and define two states: <code>userInput</code> should be initialized as an empty string, and <code>toDoList</code> should be initialized as an empty array. Next, delete the comment in the <code>render()</code> method next to the <code>items</code> variable. In its place, map over the <code>toDoList</code> array stored in the component's internal state and dynamically render a <code>li</code> for each item. Try entering the string <code>eat, code, sleep, repeat</code> into the <code>textarea</code>, then click the button and see what happens.
<strong>Note:</strong>&nbsp;You may know that all sibling child elements created by a mapping operation like this do need to be supplied with a unique <code>key</code> attribute. Don't worry, this is the topic of the next challenge.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The MyToDoList component should exist and render to the page.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').length === 1; })());
  - text: The first child of <code>MyToDoList</code> should be a <code>textarea</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(0).type() === 'textarea'; })());
  - text: The second child of <code>MyToDoList</code> should be a <code>br</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'; })());
  - text: The third child of <code>MyToDoList</code> should be a <code>button</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(2).type() === 'button'; })());
  - text: The state of <code>MyToDoList</code> should be initialized with <code>toDoList</code> as an empty array.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return Array.isArray(initialState.toDoList) === true && initialState.toDoList.length === 0; })());
  - text: The state of <code>MyToDoList</code> should be initialized with <code>userInput</code> as an empty string.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return typeof initialState.userInput === 'string' && initialState.userInput.length === 0; })());
  - text: When the <code>Create List</code> button is clicked, the <code>MyToDoList</code> component should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the <code>textarea</code> element.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
      const simulateChange = (el, value) =>
        el.simulate('change', { target: { value } });
      const state_1 = () => {
        return mockedComponent.find('ul').find('li');
      };
      const setInput = () => {
        return simulateChange(
          mockedComponent.find('textarea'),
          'testA, testB, testC'
        );
      };
      const click = () => {
        return mockedComponent.find('button').simulate('click');
      };
      const state_2 = () => {
        const nodes = mockedComponent.find('ul').find('li');
        return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
      };
      const setInput_2 = () => {
        return simulateChange(
          mockedComponent.find('textarea'),
          't1, t2, t3, t4, t5, t6'
        );
      };
      const click_1 = () => {
        return mockedComponent.find('button').simulate('click');
      };
      const state_3 = () => {
        const nodes = mockedComponent.find('ul').find('li');
        return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
      };
      const awaited_state_1 = state_1();
      const awaited_setInput = setInput();
      const awaited_click = click();
      const awaited_state_2 = state_2();
      const awaited_setInput_2 = setInput_2();
      const awaited_click_1 = click_1();
      const awaited_state_3 = state_3();
      assert(
        awaited_state_1.length === 0 &&
          awaited_state_2.nodes.length === 3 &&
          awaited_state_3.nodes.length === 6 &&
          awaited_state_2.text === 'testAtestBtestC' &&
          awaited_state_3.text === 't1t2t3t4t5t6'
      );
    })();
    "

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

</section>
