---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Добавить встроенные стили в действии
---

## Description
<section id="description"> Возможно, вы заметили в последнем случае, что в дополнение к атрибуту <code>style</code> установленному для объекта JavaScript, было несколько других различий синтаксиса из встроенных стилей HTML. Во-первых, имена некоторых свойств стиля CSS используют случай верблюда. Например, последний вызов задает размер шрифта с <code>fontSize</code> вместо <code>font-size</code> . Переплетенные слова, такие как <code>font-size</code> являются недопустимым синтаксисом для свойств объекта JavaScript, поэтому React использует случай верблюда. Как правило, любые свойства дефисного стиля записываются с использованием верблюжьего случая в JSX. Предполагается, что все единицы длины значения свойства (например, <code>height</code> , <code>width</code> и <code>fontSize</code> ) находятся в <code>px</code> если не указано иное. Если вы хотите использовать <code>em</code> , например, вы переносите значение и единицы в кавычки, например <code>{fontSize: &quot;4em&quot;}</code> . Помимо значений длины, которые по умолчанию <code>px</code> , все остальные значения свойств должны быть заключены в кавычки. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(Object.keys(styles).length === 3, "The <code>styles</code> variable should be an <code>object</code> with three properties.");'
  - text: ''
    testString: 'assert(styles.color === "purple", "The <code>styles</code> variable should have a <code>color</code> property set to a value of <code>purple</code>.");'
  - text: ''
    testString: 'assert(styles.fontSize === 40, "The <code>styles</code> variable should have a <code>fontSize</code> property set to a value of <code>40</code>.");'
  - text: ''
    testString: 'assert(styles.border === "2px solid purple", "The <code>styles</code> variable should have a <code>border</code> property set to a value of <code>2px solid purple</code>.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === "div"; })(), "The component should render a <code>div</code> element.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return (mockedComponent.props().style.color === "purple" && mockedComponent.props().style.fontSize === 40 && mockedComponent.props().style.border === "2px solid purple"); })(), "The <code>div</code> element should have its styles defined by the <code>styles</code> object.");'

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
</section>
