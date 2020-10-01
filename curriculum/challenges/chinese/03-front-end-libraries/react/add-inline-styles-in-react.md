---
id: 5a24c314108439a4d4036182
challengeType: 6
forumTopicId: 301378
title: 在 React 中添加内联样式
---

## Description
<section id='description'>
在上一次挑战中，你可能已经注意到，除了设置为 JavaScript 对象的<code>style</code>属性之外，与 HTML 内联样式相比，React 的内联样式还有其他几个语法差异。首先，某些 CSS 样式属性的名称使用驼峰式命名。例如，最后一个挑战用<code>fontSize</code>而不是<code>font-size</code>来设置字体的大小。对于 JavaScript 对象属性来说，像<code>font-size</code>这样的连字符命名是无效的语法，所以 React 使用驼峰式命名。通常，任何连字符的 style 属性在 JSX 中都是使用驼峰式命名的。
除非另有规定，否则所有属性值是长度的（如<code>height</code>、<code>width</code>和<code>fontSize</code>）其单位都假定为<code>px</code>。例如，如果要使用<code>em</code>，可以用引号将值和单位括起来，例如<code>{fontSize: "4em"}</code>。除了默认为<code>px</code>的长度值之外，所有其他属性值都应该用引号括起来。
</section>

## Instructions
<section id='instructions'>
如果你有大量样式，你可以将 style<code>对象</code>分配给一个常量，以保持代码的组织有序。取消对<code>styles</code>常量的注释，并声明具有三个样式属性及对应值的<code>对象</code>。使<code>div</code>的文字颜色为<code>"purple"</code>、字号为<code>40</code>、边框为<code>"2px solid purple"</code>。然后设置<code>style</code>属性，使其等于<code>styles</code>常量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>styles</code>变量应该是具有三个属性的<code>对象</code>。
    testString: assert(Object.keys(styles).length === 3);
  - text: <code>styles</code>变量的<code>color</code>属性应该设置为<code>purple</code>。
    testString: assert(styles.color === 'purple');
  - text: <code>styles</code>变量应该将<code>fontSize</code>属性设置为<code>40</code>。
    testString: assert(styles.fontSize === 40);
  - text: <code>styles</code>变量的<code>border</code>属性应该设置为<code>2px solid purple</code>。
    testString: assert(styles.border === "2px solid purple");
  - text: 组件应该渲染一个<code>div</code>元素。
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
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
  // change code above this line
    );
  }
};

```

</section>
