---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Composition创建一个Component
---

## Description
<section id="description">现在我们来看看如何组合多个React组件。想象一下，您正在构建一个应用程序并创建了三个组件，一个<code>Navbar</code> ， <code>Dashboard</code>和<code>Footer</code> 。要将这些组件组合在一起，您可以创建一个<code>App</code> <i>父</i>组件，它将这三个组件中的每一个都呈现为<i>子</i>组件。要在React组件中将组件呈现为子组件，请在JSX中包含作为自定义HTML标记编写的组件名称。例如，在<code>render</code>方法中，您可以编写： <blockquote>回来（ <br> &lt;应用&gt; <br> &lt;Navbar /&gt; <br> &lt;仪表板/&gt; <br> &lt;页脚/&gt; <br> &lt;/应用&gt; <br> ） </blockquote>当React遇到引用另一个组件的自定义HTML标记（在此示例中包含在<code>&lt; /&gt;</code>的组件名称）时，它会在标记的位置呈现该组件的标记。这应该说明<code>App</code>组件与<code>Navbar</code> ， <code>Dashboard</code>和<code>Footer</code>之间的父/子关系。 </section>

## Instructions
<section id="instructions">在代码编辑器中，有一个名为<code>ChildComponent</code>的简单功能组件和一个名为<code>ParentComponent</code>的React组件。通过在<code>ParentComponent</code>呈现<code>ChildComponent</code>将两者组合在一起。确保使用正斜杠关闭<code>ChildComponent</code>标记。 <strong>注意：</strong> <code>ChildComponent</code>是使用ES6箭头函数定义的，因为这是使用React时非常常见的做法。但是，要知道这只是一个功能。如果您不熟悉箭头函数语法，请参阅JavaScript部分。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: React组件应返回单个<code>div</code>元素。
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === 'div'; })());
  - text: 该组件应返回两个嵌套元素。
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })());
  - text: 该组件应将ChildComponent作为其第二个子项返回。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find('ParentComponent').find('ChildComponent').length === 1; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
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
