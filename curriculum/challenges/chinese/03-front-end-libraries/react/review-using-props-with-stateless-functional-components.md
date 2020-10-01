---
id: 5a24c314108439a4d403616f
challengeType: 6
forumTopicId: 301411
title: 复习如何使用 Props 和无状态函数组件
---

## Description
<section id='description'>
除了上一个挑战，你一直在将 props 传递给无状态的函数组件。这些组件就像纯函数，它们接收 props 作为输入，并在每次传递相同 props 时返回相同的视图。你可能会想知道什么是状态，下一个挑战将会更详细地讲述它。在此之前，我们先来回顾一下组件的术语。
<em>无状态函数组件</em>是一个函数，它接收 props 作为输入并返回 JSX。另一方面，<em>无状态组件</em>是一个类，它扩展了<code>React.Component</code>，但是不使用内部状态（下一个挑战中讨论）。最后，<em>状态组件</em>是指维护其自身内部状态的组件，它简称组件或 React 组件。
一种常见的应用模式是尽可能减少状态组件并创建无状态的函数组件。这有助于将状态管理包含到应用程序的特定区域。反过来，通过更容易地跟踪状态变化如何影响其行为，可以改进应用程序的开发和维护。
</section>

## Instructions
<section id='instructions'>
在代码编辑器中有一个<code>CampSite</code>组件，它把<code>Camper</code>组件渲染为自己的子组件。定义<code>Camper</code>组件，并为其分配默认 props<code>{ name: 'CamperBot' }</code>。你可以在<code>Camper</code>组件内部渲染任何你想要的代码，但是要确保有一个<code>p</code>元素，它只包含作为<code>prop</code>传递的<code>name</code>值。最后，在<code>Camper</code>组件上定义<code>propTypes</code>，要求提供<code>name</code>作为 prop，并验证它是<code>string</code>类型。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该渲染<code>CampSite</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('CampSite').length === 1; })());
  - text: 应该渲染<code>Camper</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('Camper').length === 1; })());
  - text: <code>Camper</code>组件应该包含默认 props，它将字符串<code>CamperBot</code>赋值给关键字<code>name</code>。
    testString: assert(/Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(code.replace(/\s/g, '')));
  - text: <code>Camper</code>组件应该包含<code>string</code>类型的<code>name</code>prop。
    testString: assert(/Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(code.replace(/\s/g, '')));
  - text: <code>Camper</code>组件应该包含一个<code>p</code>元素，元素内是来自prop<code>name</code>的唯一文本。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('p').text() === mockedComponent.find('Camper').props().name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

</div>

### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};

```

</section>
