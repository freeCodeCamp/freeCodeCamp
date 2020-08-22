---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建一个React组件
---

## Description
<section id="description">定义React组件的另一种方法是使用ES6 <code>class</code>语法。在以下示例中， <code>Kitten</code>扩展了<code>React.Component</code> ： <blockquote> class Kitten扩展了React.Component { <br>构造函数（道具）{ <br>超级（道具）; <br> } <br><br> render（）{ <br>回来（ <br> &lt;H1&gt;，您好&lt;/ H1&gt; <br> ）; <br> } <br> } </blockquote>这将创建一个扩展<code>React.Component</code>类的ES6类<code>Kitten</code> 。因此， <code>Kitten</code>类现在可以访问许多有用的React功能，例如本地状态和生命周期钩子。如果您还不熟悉这些术语，请不要担心，在以后的挑战中将更详细地介绍它们。另请注意， <code>Kitten</code>类在其中定义了一个调用<code>super()</code>的<code>constructor</code>函数。它使用<code>super()</code>来调用父类的构造函数，在本例中为<code>React.Component</code> 。构造函数是在使用<code>class</code>关键字创建的对象初始化期间使用的特殊方法。最好用<code>super</code>调用组件的<code>constructor</code> ，并将<code>props</code>传递给它们。这可确保组件正确初始化。现在，请知道包含此代码是标准的。很快你会看到构造函数和<code>props</code>其他用途。 </section>

## Instructions
<section id="instructions"> <code>MyComponent</code>是使用类语法在代码编辑器中定义的。完成编写<code>render</code>方法，以便返回包含带有文本<code>Hello React!</code>的<code>h1</code>的<code>div</code>元素<code>Hello React!</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: React组件应返回<code>div</code>元素。
    testString: assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
  - text: 返回的<code>div</code>应该在其中呈现一个<code>h1</code>头。
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()));
  - text: <code>h1</code>标头应该包含字符串<code>Hello React!</code> 。
    testString: assert(Enzyme.shallow(React.createElement(MyComponent)).html() === '<div><h1>Hello React!</h1></div>');

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
