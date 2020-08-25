---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 用户界面中的渲染状态另一种方式
---

## Description
<section id="description">还有另一种访问组件中<code>state</code>方法。在<code>render()</code>方法中，在<code>return</code>语句之前，您可以直接编写JavaScript。例如，您可以声明函数，从<code>state</code>或<code>props</code>访问数据，对此数据执行计算，等等。然后，您可以将任何数据分配给您可以在<code>return</code>语句中访问的变量。 </section>

## Instructions
<section id="instructions">在<code>MyComponent</code> render方法中，定义一个名为<code>name</code>的<code>const</code> ，并将其设置为等于组件<code>state</code>的name值。因为您可以直接在代码的这一部分编写JavaScript，所以您不必将此引用括在花括号中。接下来，在return语句中，使用变量<code>name</code>在<code>h1</code>标记中呈现此值。请记住，您需要在return语句中使用JSX语法（JavaScript的大括号）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该有一个键<code>name</code> ，其<code>freeCodeCamp</code>值存储在其状态中。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code>应该渲染一个包含在单个<code>div</code>的<code>h1</code>标头。
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: '渲染的<code>h1</code>标记应包含对<code>{name}</code>的引用。'
    testString: getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
  - text: 渲染的<code>h1</code>标头应包含从组件状态呈现的文本。
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
