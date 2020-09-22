---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
forumTopicId: 301403
---

## Description
<section id='description'>
You saw a lot of examples that passed props to child JSX elements and child React components in previous challenges. You may be wondering where those props come from. A common pattern is to have a stateful component containing the <code>state</code> important to your app, that then renders child components. You want these components to have access to some pieces of that <code>state</code>, which are passed in as props.
For example, maybe you have an <code>App</code> component that renders a <code>Navbar</code>, among other components. In your <code>App</code>, you have <code>state</code> that contains a lot of user information, but the <code>Navbar</code> only needs access to the user's username so it can display it. You pass that piece of <code>state</code> to the <code>Navbar</code> component as a prop.
This pattern illustrates some important paradigms in React. The first is <em>unidirectional data flow</em>. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage.
</section>

## Instructions
<section id='instructions'>
The <code>MyApp</code> component is stateful and renders a <code>Navbar</code> component as a child. Pass the <code>name</code> property in its <code>state</code> down to the child component, then show the <code>name</code> in the <code>h1</code> tag that's part of the <code>Navbar</code> render method. <code>name</code> should appear after the text <code>Hello, my name is: </code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>MyApp</code> component should render with a <code>Navbar</code> component inside.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1 && mockedComponent.find('Navbar').length === 1; })());
  - text: The <code>Navbar</code> component should receive the <code>MyApp</code> state property <code>name</code> as props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').props() )}; const navProps = await setState(); assert(navProps.name === ''TestName''); }; '
  - text: The <code>h1</code> element in <code>Navbar</code> should render the <code>name</code> prop.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const navH1Before = mockedComponent.find(''Navbar'').find(''h1'').text(); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').find(''h1'').text() )}; const navH1After = await setState(); assert(new RegExp(''TestName'').test(navH1After) && navH1After !== navH1Before); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```

</section>
