---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301408
---

## Description
<section id='description'>
There is another way to access <code>state</code> in a component. In the <code>render()</code> method, before the <code>return</code> statement, you can write JavaScript directly. For example, you could declare functions, access data from <code>state</code> or <code>props</code>, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the <code>return</code> statement.
</section>

## Instructions
<section id='instructions'>
In the <code>MyComponent</code> render method, define a <code>const</code> called <code>name</code> and set it equal to the name value in the component's <code>state</code>. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.
Next, in the return statement, render this value in an <code>h1</code> tag using the variable <code>name</code>. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: The rendered <code>h1</code> tag should include a reference to <code>{name}</code>.
    testString: getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
  - text: The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === ''<div><h1>TestName</h1></div>''); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line

    // change code above this line
    return (
      <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
        <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
