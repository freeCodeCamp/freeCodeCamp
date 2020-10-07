---
id: 5a24c314108439a4d4036172
challengeType: 6
forumTopicId: 301408
title: 以另一种方式在用户界面中渲染状态
---

## Description
<section id='description'>
还有另一种方法可以访问组件中的<code>state</code>。在<code>render()</code>方法中，在<code>return</code>语句之前，你可以直接编写 JavaScript。例如，你可以声明函数、从<code>state</code>或<code>props</code>访问数据、对此数据执行计算等。然后，你可以将任何数据赋值给你在<code>return</code>语句中可以访问的变量。
</section>

## Instructions
<section id='instructions'>
在<code>MyComponent</code>的 render 方法中，定义一个名为<code>name</code>的<code>常量</code>，并将其设置为组件<code>state</code>中的 name 值。因为可以直接在代码部分编写 JavaScript，所以不需要用大括号括起来。
接下来，在 return 语句中，在<code>h1</code>标签中渲染变量<code>name</code>的值。记住，在 return 语句中需要使用 JSX 语法（用到 JavaScript 的花括号）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该有一个键<code>name</code>，其值<code>freeCodeCamp</code>存储在其 state 中。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code>应该在<code>div</code>中渲染一个<code>h1</code>标题。
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: 渲染的<code>h1</code>标签应该包含<code>{name}</code>的引用。
    testString: getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
  - text: 渲染的<code>h1</code>标题中应该包含一段文本，这段文本是从组件的 state 中渲染出来的。
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
