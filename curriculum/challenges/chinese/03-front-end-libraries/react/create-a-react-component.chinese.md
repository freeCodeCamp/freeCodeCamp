---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Create a React Component
---

## Description
<section id='description'>
定义 React 组件的另一种方法是使用 ES6 的<code>class</code>语法。在以下示例中，<code>Kitten</code>扩展了<code>React.Component</code>：
<blockquote>class Kitten extends React.Component {<br>&nbsp;&nbsp;constructor(props) {<br>&nbsp;&nbsp;&nbsp;&nbsp;super(props);<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;render() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hi&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;);<br>&nbsp;&nbsp;}<br>}</blockquote>
这将创建一个 ES6 类<code>Kitten</code>，它扩展了<code>React.Component</code>类。因此，<code>Kitten</code>类现在可以访问许多有用的 React 功能，例如本地状态和生命周期钩子。如果你还不熟悉这些术语，请不要担心，在以后的挑战中我们将更详细地介绍它们。
另请注意，<code>Kitten</code>类中定义了一个调用<code>super()</code>方法的<code>constructor</code>。它使用<code>super()</code>调用父类的构造函数，即本例中的<code>React.Component</code>。构造函数是使用<code>class</code>关键字创建的特殊方法，它用在实例初始化之前。最佳做法是在组件的<code>constructor</code>里调用<code>super</code>，并将<code>props</code>传递给它们，这样可以保证组件能够正确地初始化。现在，你只需要知道这是标准的做法。很快你会看到构造函数的其他用途以及<code>props</code>。
</section>

## Instructions
<section id='instructions'>
<code>MyComponent</code>是使用类语法在代码编辑器中定义的。完成<code>render</code>方法的编写，使其返回<code>div</code>元素，其中包含文本内容为<code>Hello React!</code>的<code>h1</code>元素。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 该 React 组件应该返回一个<code>div</code>元素。
    testString: assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div', '该 React 组件应该返回一个<code>div</code>元素。');
  - text: 返回的<code>div</code>中应该渲染一个<code>h1</code>标题。
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()), '返回的<code>div</code>中应该渲染一个<code>h1</code>标题。');
  - text: <code>h1</code>标题中应该包含字符串<code>Hello React!</code>。
    testString: assert(Enzyme.shallow(React.createElement(MyComponent)).html() === '<div><h1>Hello React!</h1></div>', '<code>h1</code>标题中应该包含字符串<code>Hello React!</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>






    <div id='jsx-seed'>
    
```jsx

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line



    // change code above this line
  }
};
    
```
</div>


### After Test
<div id='jsx-teardown'>

```jsx
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
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
```

</section>
              