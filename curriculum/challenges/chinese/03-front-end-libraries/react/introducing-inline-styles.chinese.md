---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 介绍内联样式
---

## Description
<section id="description">还有其他复杂的概念可以为您的React代码添加强大的功能。但是你可能想知道如何设置你在React中创建的那些JSX元素的更简单的问题。您可能知道它与使用HTML完全不同，因为<a target="_blank" href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">您将类应用于JSX元素的方式</a> 。如果从样式表导入样式，它就没有太大的不同。使用<code>className</code>属性将类应用于JSX元素，并将样式应用于样式表中的类。另一种选择是应用<strong><em>内联</em></strong>样式，这在ReactJS开发中非常常见。您将内联样式应用于JSX元素，类似于您在HTML中的操作方式，但有一些JSX差异。以下是HTML中内联样式的示例： <code>&lt;div style=&quot;color: yellow; font-size: 16px&quot;&gt;Mellow Yellow&lt;/div&gt;</code> JSX元素使用<code>style</code>属性，但由于JSX的转换方式，您可以不要将值设置为<code>string</code> 。相反，您将其设置为等于JavaScript <code>object</code> 。这是一个例子： <code>&lt;div style={{color: &quot;yellow&quot;, fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code>注意我们如何使用“fontSize”属性？这是因为React不接受样式对象中的kebab-case键。 React将在HTML中为我们应用正确的属性名称。 </section>

## Instructions
<section id="instructions">在代码编辑器中为<code>div</code>添加<code>style</code>属性，为文本提供红色和字体大小为72px的颜色。请注意，您可以选择将字体大小设置为数字，省略单位“px”，或将其写为“72px”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 该组件应呈现<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>div</code>元素应该是<code>red</code> 。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().props().style.color === 'red'; })());
  - text: <code>div</code>元素的字体大小应为<code>72px</code>。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return (mockedComponent.children().props().style.fontSize === 72 || mockedComponent.children().props().style.fontSize === '72' || mockedComponent.children().props().style.fontSize === '72px'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
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
