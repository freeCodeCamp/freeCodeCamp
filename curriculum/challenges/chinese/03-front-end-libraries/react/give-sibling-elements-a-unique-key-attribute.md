---
id: 5a24c314108439a4d403618b
challengeType: 6
forumTopicId: 301394
title: 给同级元素一个唯一的键属性
---

## Description
<section id='description'>
上一个挑战展示了如何使用<code>map</code>方法根据用户输入动态渲染多个元素。然而，这个例子中缺少一个重要的部分。创建元素数组时，每个元素都需要一个设置为唯一值的<code>key</code>属性。React 使用这些键来跟踪哪些项目被添加、更改或删除。这有助于在以任何方式修改列表时提高重新渲染过程的效率。请注意，键只需要在同级元素之间是唯一的，它们不需要在应用程序中是全局唯一的。
</section>

## Instructions
<section id='instructions'>
代码编辑器有一个数组，它包含一些前端框架和一个名为<code>Frameworks()</code>的无状态函数组件。<code>Frameworks()</code>需要将数组映射到无序列表，就像上一个挑战一样。完成<code>map</code>回调，为<code>frontEndFrameworks</code>数组中的每个框架返回一个<code>li</code>元素。这次，确保给每个<code>li</code>的<code>key</code>属性设置一个唯一的值。
通常，你希望使 key 能唯一标识要渲染的元素。作为最后的手段，可以使用数组索引，但通常你应该尝试使用唯一标识。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Frameworks</code> 组件应该存在并渲染到页面。
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('Frameworks').length === 1);
  - text: <code>Frameworks</code>应该渲染一个<code>h1</code>元素。
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('h1').length === 1);
  - text: <code>Frameworks</code>应该渲染一个<code>ul</code>元素。
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').length === 1);
  - text: <code>ul</code>标签应该渲染 6 个<code>li</code>子元素。
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').children().length === 6 && Enzyme.mount(React.createElement(Frameworks)).find('ul').childAt(0).name() === 'li' && Enzyme.mount(React.createElement(Frameworks)).find('li').length === 6);
  - text: 每个列表项元素都应该有一个唯一的<code>key</code>属性。
    testString: assert((() => { const ul = Enzyme.mount(React.createElement(Frameworks)).find('ul'); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key(), ul.childAt(4).key(), ul.childAt(5).key(), ]); return keys.size === 6; })());
  - text: 每个列表元素都应该包含 <code>frontEndFrameworks</code> 里的文本。
    testString: assert((() => {const li = Enzyme.mount(React.createElement(Frameworks)).find('ul').children(); return [...Array(5)].every((_, i) => frontEndFrameworks.includes(li.at(i).text()))})()); 

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
ReactDOM.render(<Frameworks />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
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

</section>
