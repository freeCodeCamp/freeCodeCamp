---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在React中添加内联样式
---

## Description
<section id="description">您可能已经注意到，在上一个挑战中，除了设置为JavaScript对象的<code>style</code>属性之外，还有HTML内联样式的其他几种语法差异。首先，某些CSS样式属性的名称使用驼峰大小写。例如，最后一个挑战使用<code>fontSize</code>而不是<code>font-size</code>设置<code>font-size</code> 。像<code>font-size</code>这样的连字符是JavaScript对象属性的无效语法，因此React使用驼峰大小写。通常，任何带连字符的样式属性都是使用JSX中的camel case编写的。除非另有说明，否则假定所有属性值长度单位（如<code>height</code> ， <code>width</code>和<code>fontSize</code> ）均为<code>px</code> 。例如，如果要使用<code>em</code> ，则将值和单位用引号括起来，如<code>{fontSize: &quot;4em&quot;}</code> 。除了默认为<code>px</code>的长度值之外，所有其他属性值都应该用引号括起来。 </section>

## Instructions
<section id="instructions">如果您有大量样式，则可以将样式<code>object</code>分配给常量以保持代码的有序性。取消注释<code>styles</code>常量并声明具有三个样式属性及其值的<code>object</code> 。给<code>div</code>一个颜色为<code>&quot;purple&quot;</code> ，字体大小为<code>40</code> ，边框为<code>&quot;2px solid purple&quot;</code> 。然后将<code>style</code>属性设置为等于<code>styles</code>常量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>styles</code>变量应该是具有三个属性的<code>object</code> 。
    testString: assert(Object.keys(styles).length === 3);
  - text: <code>styles</code>变量的<code>color</code>属性应设置为<code>purple</code>的值。
    testString: assert(styles.color === 'purple');
  - text: <code>styles</code>变量应该将<code>fontSize</code>属性设置为值<code>40</code> 。
    testString: assert(styles.fontSize === 40);
  - text: <code>styles</code>变量应该将<code>border</code>属性设置为<code>2px solid purple</code>的值。
    testString: assert(styles.border === "2px solid purple");
  - text: 该组件应呈现<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === 'div'; })());
  - text: <code>div</code>元素的样式应该由<code>styles</code>对象定义。
    testString: assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return (mockedComponent.props().style.color === "purple" && mockedComponent.props().style.fontSize === 40 && mockedComponent.props().style.border === "2px solid purple"); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// const styles =
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
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
