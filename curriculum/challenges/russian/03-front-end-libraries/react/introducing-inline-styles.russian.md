---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
isRequired: false
forumTopicId: 301395
localeTitle: Представление встроенных стилей
---

## Description
<section id='description'>
Существуют и другие сложные концепции, которые добавляют мощные возможности для вашего кода React. Но вам может быть интересно узнать о более простой проблеме того, как стилизовать те элементы JSX, которые вы создаете в React. Вероятно, вы знаете, что это будет не то же самое, что работать с HTML из-за <a target="_blank" href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">того, как вы применяете классы к элементам JSX</a> . Если вы импортируете стили из таблицы стилей, это совсем не так. Вы применяете класс к своему элементу JSX, используя атрибут <code>className</code> , и применяете стили к классу в таблице стилей. Другой вариант - применить <strong><em>встроенные</em></strong> стили, которые очень распространены в разработке ReactJS. Вы применяете встроенные стили к элементам JSX, подобным тому, как это делается в HTML, но с несколькими отличиями JSX. Ниже приведен пример встроенного стиля в HTML: <code>&lt;div style=&quot;color: yellow; font-size: 16px&quot;&gt;Mellow Yellow&lt;/div&gt;</code> Элементы JSX используют атрибут <code>style</code> , но из-за того, что JSX переполнен, вы можете &#39;t установить значение в <code>string</code> . Вместо этого вы устанавливаете его равным <code>object</code> JavaScript. Вот пример: <code>&lt;div style={{color: &quot;yellow&quot;, fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code> Обратите внимание, как мы camelCase свойство fontSize? Это связано с тем, что React не будет принимать ключи кебаба в объекте стиля. React применит правильное имя свойства для нас в HTML.
</section>

## Instructions
<section id='instructions'>
Добавьте атрибут <code>style</code> в <code>div</code> в редакторе кода, чтобы придать тексту цвет красного и размер шрифта 72px. Обратите внимание, что вы можете указать размер шрифта как число, опустив единицы «px» или записать его как «72px».
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

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```

</section>
