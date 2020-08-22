---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 为兄弟元素提供唯一的键属性
---

## Description
<section id="description">最后一项挑战展示了如何使用<code>map</code>方法根据用户输入动态呈现多个元素。但是，这个例子中缺少一个重要的部分。创建元素数组时，每个元素都需要将<code>key</code>属性设置为唯一值。 React使用这些键来跟踪添加，更改或删除的项目。当以任何方式修改列表时，这有助于使重新呈现过程更有效。请注意，键只需要在兄弟元素之间是唯一的，它们在您的应用程序中不需要是全局唯一的。 </section>

## Instructions
<section id="instructions">代码编辑器有一个包含一些前端框架的数组和一个名为<code>Frameworks()</code>的无状态功能组件。 <code>Frameworks()</code>需要将数组映射到无序列表，就像上一次挑战一样。完成编写<code>map</code>回调以返回<code>frontEndFrameworks</code>数组中每个框架的<code>li</code>元素。这一次，请确保为每个<code>li</code>一个<code>key</code>属性，设置为唯一值。通常，您希望使键成为唯一标识要呈现的元素的键。作为最后的手段，可以使用数组索引，但通常您应该尝试使用唯一标识。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Frameworks</code>组件应该存在并呈现给页面。
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("Frameworks").length === 1, "The <code>Frameworks</code> component should exist and render to the page.");'
  - text: <code>Frameworks</code>应该呈现<code>h1</code>元素。
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("h1").length === 1, "<code>Frameworks</code> should render an <code>h1</code> element.");'
  - text: <code>Frameworks</code>应该呈现<code>ul</code>元素。
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").length === 1, "<code>Frameworks</code> should render a <code>ul</code> element.");'
  - text: <code>ul</code>标记应呈现6个子<code>li</code>元素。
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").children().length === 6 && Enzyme.mount(React.createElement(Frameworks)).find("ul").childAt(0).name() === "li" && Enzyme.mount(React.createElement(Frameworks)).find("li").length === 6, "The <code>ul</code> tag should render 6 child <code>li</code> elements.");'
  - text: 每个列表项元素都应具有唯一的<code>key</code>属性。
    testString: 'assert((() => { const ul = Enzyme.mount(React.createElement(Frameworks)).find("ul"); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key(), ul.childAt(4).key(), ul.childAt(5).key(), ]); return keys.size === 6; })(), "Each list item element should have a unique <code>key</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
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
