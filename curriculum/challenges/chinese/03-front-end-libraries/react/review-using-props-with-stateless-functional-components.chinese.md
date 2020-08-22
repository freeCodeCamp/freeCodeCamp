---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 查看使用无状态功能组件的道具
---

## Description
<section id="description">除了最后的挑战，你已经将道具传递给无状态功能组件。这些组件就像纯函数一样。他们接受道具作为输入，并在每次传递相同的道具时返回相同的视图。您可能想知道状态是什么，下一个挑战将更详细地介绍它。在此之前，这里是对组件术语的回顾。 <em>无状态功能组件</em>是您编写的任何接受道具并返回JSX的函数。另一方面， <em>无状态组件</em>是扩展<code>React.Component</code>的类，但不使用内部状态（在下一个挑战中涵盖）。最后，有<em>状态组件</em>是保持其自身内部状态的任何组件。您可能会看到有状态组件简称为组件或React组件。一种常见的模式是尽可能地减少有状态并创建无状态功能组件。这有助于将状态管理包含到应用程序的特定区域。反过来，通过更容易地了解状态更改如何影响其行为，这可以改善应用程序的开发和维护。 </section>

## Instructions
<section id="instructions">代码编辑器有一个<code>CampSite</code>组件，它将<code>Camper</code>组件呈现为子组件。定义<code>Camper</code>组件并为其指定<code>{ name: &#39;CamperBot&#39; }</code>默认道具。在<code>Camper</code>组件内部，渲染您想要的任何代码，但要确保有一个<code>p</code>元素仅包含作为<code>prop</code>传递的<code>name</code>值。最后，在<code>Camper</code>组件上定义<code>propTypes</code> ，要求将<code>name</code>作为prop提供，并验证它是<code>string</code>类型。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>CampSite</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('CampSite').length === 1; })());
  - text: <code>Camper</code>组件应呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('Camper').length === 1; })());
  - text: <code>Camper</code>组件应该包含默认道具，它将字符串<code>CamperBot</code>分配给键<code>name</code> 。
    testString: assert(/Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(code.replace(/\s/g, '')));
  - text: <code>Camper</code>组件应包含要求<code>name</code> prop为<code>string</code>类型的prop类型。
    testString: assert(/Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(code.replace(/\s/g, '')));
  - text: <code>Camper</code>组件应包含一个<code>p</code>元素，其中只包含<code>name</code> prop的文本。
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
