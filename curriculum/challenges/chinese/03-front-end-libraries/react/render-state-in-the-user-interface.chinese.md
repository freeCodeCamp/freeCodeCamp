---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在用户界面中渲染状态
---

## Description
<section id="description">定义组件的初始状态后，可以在呈现的UI中显示它的任何部分。如果组件是有状态的，它将始终可以访问其<code>render()</code>方法中的<code>state</code>数据。您可以使用<code>this.state</code>访问数据。如果要在render方法的<code>return</code>中访问状态值，则必须将值括在花括号中。 <code>State</code>是React中组件最强大的功能之一。它允许您跟踪应用程序中的重要数据并呈现UI以响应此数据中的更改。如果您的数据发生变化，您的UI将会发生变化React使用所谓的虚拟DOM来跟踪幕后的变化。当状态数据更新时，它会触发使用该数据重新呈现组件 - 包括作为道具接收数据的子组件。 React更新实际的DOM，但仅在必要时更新。这意味着您不必担心更改DOM。您只需声明UI应该是什么样子。请注意，如果使组件有状态，则其他组件不会知道其<code>state</code> 。它的<code>state</code>是完全封装的，或者是该组件的本地状态，除非您将状态数据作为<code>props</code>传递给子组件。这种封装<code>state</code>概念非常重要，因为它允许您编写某些逻辑，然后在代码中的某个位置包含和隔离该逻辑。 </section>

## Instructions
<section id="instructions">在代码编辑器中， <code>MyComponent</code>已经是有状态的。在组件的render方法中定义<code>h1</code>标记，该方法从组件的状态呈现<code>name</code>的值。 <strong>注意：</strong> <code>h1</code>应该只从<code>state</code>呈现值而不是其他内容。在JSX中，您使用花括号<code>{ }</code>编写的任何代码都将被视为JavaScript。因此，要从<code>state</code>访问值，只需将引用括在花括号中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该有一个键<code>name</code> ，其<code>freeCodeCamp</code>值存储在其状态中。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code>应该渲染一个包含在单个<code>div</code>的<code>h1</code>标头。
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: 渲染的<code>h1</code>标头应包含从组件状态呈现的文本。
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
