---
id: 5a24c314108439a4d4036171
challengeType: 6
forumTopicId: 301409
title: 在用户界面中渲染状态
---

## Description
<section id='description'>
一旦定义了组件的初始 state，你就可以在要渲染的 UI 中显示它的任何部分。如果组件是有状态的，它将始终可以访问<code>render()</code>方法中<code>state</code>的数据。你就可以使用<code>this.state</code>访问数据。
如果你想在 render 方法的<code>return</code>中访问 state 值，你必须把这个值用花括号括起来。
<code>state</code>是 React 组件中最强大的特性之一，它允许你跟踪应用程序中的重要数据，并根据数据的变化渲染 UI。如果你的数据发生变化，你的 UI 也会随之改变。React 使用所谓的虚拟 DOM 来跟踪幕后的变化。当 state 数据更新时，它会使用该数据触发组件的重新渲染--包括接收 prop 数据的子组件。React 只在必要的时候更新实际的DOM，这意味着你不必担心 DOM 的变更，只需声明 UI 的外观即可。
注意，如果组件有状态，则没有其他组件知道它的<code>state</code>。它的<code>state</code>是完全封装的，或者是局限于组件本身的，除非你将 state 数据作为<code>props</code>传递给子组件。封装<code>state</code>的概念非常重要，因为它允许你编写特定的逻辑，然后将该逻辑包含并隔离在代码中的某个位置。
</section>

## Instructions
<section id='instructions'>
在代码编辑器中，<code>MyComponent</code>是一个有状态组件，在组件的 render 方法中定义一个<code>h1</code>标签，该方法从组件的 state 渲染<code>name</code>的值。
<strong>注意：</strong>&nbsp;<code>h1</code>应该只渲染来自<code>state</code>的值。在 JSX 中，使用花括号<code>{ }</code>编写的任何代码都将被视为 JavaScript。因此，要访问<code>state</code>中的值，只需将引用括在花括号中即可。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该有一个键<code>name</code>，其值<code>freeCodeCamp</code>存储在其 state 中。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code>应该在<code>div</code>中渲染一个<code>h1</code>标题。
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: 渲染的<code>h1</code>标题中应该包含一段文本，这段文本是从组件的 state 中渲染出来的。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === ''<div><h1>TestName</h1></div>'');};'

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
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
