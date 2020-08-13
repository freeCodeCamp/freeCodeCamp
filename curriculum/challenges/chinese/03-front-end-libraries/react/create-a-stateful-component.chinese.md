---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建一个有状态组件
---

## Description
<section id="description"> React最重要的主题之一是<code>state</code> 。 State包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。您希望应用程序响应状态更改并在必要时显示更新的UI。 React为现代Web应用程序的状态管理提供了一个很好的解决方案。您可以通过在<code>constructor</code>声明组件类的<code>state</code>属性来在React组件中创建状态。这与初始化该组件<code>state</code>被创建时。 <code>state</code>属性必须设置为JavaScript <code>object</code> 。声明它看起来像这样： <blockquote> this.state = { <br> //在这里描述你的州<br>您可以在组件的整个生命周期内访问<code>state</code>对象。您可以更新它，在UI中呈现它，并将其作为道具传递给子组件。 <code>state</code>对象可以像您需要的那样复杂或简单。请注意，您必须通过扩展<code>React.Component</code>来创建类组件，以便创建这样的<code>state</code> 。 </blockquote></section>

## Instructions
<section id="instructions">代码编辑器中有一个组件试图从其<code>state</code>呈现<code>name</code>属性。但是，没有定义<code>state</code> 。初始化与组件<code>state</code>的<code>constructor</code> ，并指定你的名字的属性<code>name</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>StatefulComponent</code>应该存在并呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('StatefulComponent').length === 1; })());
  - text: <code>StatefulComponent</code>应该呈现<code>div</code>和<code>h1</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1; })());
  - text: 应使用设置为字符串的属性<code>name</code>初始化<code>StatefulComponent</code> 。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === 'object' && typeof initialState.name === 'string'); })());
  - text: <code>StatefulComponent</code>的属性<code>name</code>应在<code>h1</code>元素中呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find('h1').text() === initialState.name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
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
