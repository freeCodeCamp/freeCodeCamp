---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将状态作为道具传递给子组件
---

## Description
<section id="description">您看到了许多在先前的挑战中将道具传递给子JSX元素和子React组件的示例。您可能想知道这些道具来自哪里。一种常见的模式是让一个有状态的组件包含对您的应用程序很重要的<code>state</code> ，然后呈现子组件。您希望这些组件可以访问该<code>state</code>某些部分，这些部分作为props传递。例如，您可能有一个<code>App</code>组件可以呈现<code>Navbar</code>以及其他组件。在您的<code>App</code> ，您的<code>state</code>包含大量用户信息，但<code>Navbar</code>只需要访问用户的用户名，以便显示它。您将该<code>state</code>作为prop传递给<code>Navbar</code>组件。这种模式说明了React中的一些重要范例。第一种是<em>单向数据流</em> 。状态沿着应用程序组件树的一个方向流动，从有状态父组件到子组件。子组件仅接收所需的状态数据。第二，复杂的有状态应用程序可以分解为几个或者一个有状态的组件。其余组件只是从父级接收状态作为props，并从该状态呈现UI。它开始创建一个分离，其中状态管理在代码的一部分中处理，而UI在另一部分中呈现。将状态逻辑与UI逻辑分离的原则是React的关键原则之一。当它被正确使用时，它使复杂的有状态应用程序的设计更容易管理。 </section>

## Instructions
<section id="instructions"> <code>MyApp</code>组件是有状态的，并将<code>Navbar</code>组件呈现为子组件。将<code>name</code>属性的<code>state</code>向下传递给子组件，然后在<code>h1</code>标记中显示该<code>name</code> ，该<code>name</code>是<code>Navbar</code> render方法的一部分。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyApp</code>组件应该使用内部的<code>Navbar</code>组件进行渲染。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1 && mockedComponent.find('Navbar').length === 1; })());
  - text: <code>Navbar</code>组件应该将<code>MyApp</code>状态属性<code>name</code>作为props接收。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').props() )}; const navProps = await setState(); assert(navProps.name === ''TestName''); }; '
  - text: <code>Navbar</code>的<code>h1</code>元素应该呈现<code>name</code> prop。
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
         <Navbar /* your code here */ />
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
      <h1>Hello, my name is: /* your code here */ </h1>
    </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
