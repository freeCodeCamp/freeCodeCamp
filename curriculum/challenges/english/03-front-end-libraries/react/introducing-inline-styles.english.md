---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301395
---

## Description
<section id='description'>
There are other complex concepts that add powerful capabilities to your React code. But you may be wondering about the more simple problem of how to style those JSX elements you create in React. You likely know that it won't be exactly the same as working with HTML because of <a target="_blank" href="/learn/front-end-libraries/react/define-an-html-class-in-jsx"> the way you apply classes to JSX elements</a>.
If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the <code>className</code> attribute, and apply styles to the class in your stylesheet. Another option is to apply inline styles, which are very common in ReactJS development.
You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. Here's an example of an inline style in HTML:
<code>&lt;div style="color: yellow; font-size: 16px"&gt;Mellow Yellow&lt;/div&gt;</code>
JSX elements use the <code>style</code> attribute, but because of the way JSX is transpiled, you can't set the value to a <code>string</code>. Instead, you set it equal to a JavaScript <code>object</code>. Here's an example:
<code>&lt;div style={{color: "yellow", fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code>
Notice how we camelCase the "fontSize" property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML.
</section>

## Instructions
<section id='instructions'>
Add a <code>style</code> attribute to the <code>div</code> in the code editor to give the text a color of red and font size of 72px.
Note that you can optionally set the font size to be a number, omitting the units "px", or write it as "72px".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The component should render a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().type() === 'div'; })());
  - text: The <code>div</code> element should have a color of <code>red</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().props().style.color === 'red'; })());
  - text: The <code>div</code> element should have a font size of <code>72px</code>.
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
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

```

</section>
