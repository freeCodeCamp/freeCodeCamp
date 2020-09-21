---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
forumTopicId: 301430
---

## Description
<section id='description'>
This series of challenges introduces how to use Redux with React. First, here's a review of some of the key principles of each technology. React is a view library that you provide with data, then it renders the view in an efficient, predictable way. Redux is a state management framework that you can use to simplify the management of your application's state. Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.
Although React components can manage their own state locally, when you have a complex app, it's generally better to keep the app state in a single location with Redux. There are exceptions when individual components may have local state specific only to them. Finally, because Redux is not designed to work with React out of the box, you need to use the <code>react-redux</code> package. It provides a way for you to pass Redux <code>state</code> and <code>dispatch</code> to your React components as <code>props</code>.
Over the next few challenges, first, you'll create a simple React component which allows you to input new text messages. These are added to an array that's displayed in the view. This should be a nice review of what you learned in the React lessons. Next, you'll create a Redux store and actions that manage the state of the messages array. Finally, you'll use <code>react-redux</code> to connect the Redux store with your component, thereby extracting the local state into the Redux store.
</section>

## Instructions
<section id='instructions'>
Start with a <code>DisplayMessages</code> component. Add a constructor to this component and initialize it with a state that has two properties: <code>input</code>, that's set to an empty string, and <code>messages</code>, that's set to an empty array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>DisplayMessages</code> component should render an empty <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find('div').text() === '' })());
  - text: The <code>DisplayMessages</code> constructor should be called properly with <code>super</code>, passing in <code>props</code>.
    testString: getUserInput => assert((function() { const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index')); return noWhiteSpace.includes('constructor(props)') && noWhiteSpace.includes('super(props'); })());
  - text: 'The <code>DisplayMessages</code> component should have an initial state equal to <code>{input: "", messages: []}</code>.'
    testString: "assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === 'object' && initialState.input === '' && Array.isArray(initialState.messages) && initialState.messages.length === 0; })());"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line

  // Change code above this line
  render() {
    return <div />
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```

</section>
