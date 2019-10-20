---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
isRequired: false
forumTopicId: 301378
localeTitle: Добавить встроенные стили в действии
---

## Description
<section id='description'>
Возможно, вы заметили в последнем случае, что в дополнение к атрибуту <code>style</code> установленному для объекта JavaScript, было несколько других различий синтаксиса из встроенных стилей HTML. Во-первых, имена некоторых свойств стиля CSS используют случай верблюда. Например, последний вызов задает размер шрифта с <code>fontSize</code> вместо <code>font-size</code> . Переплетенные слова, такие как <code>font-size</code> являются недопустимым синтаксисом для свойств объекта JavaScript, поэтому React использует случай верблюда. Как правило, любые свойства дефисного стиля записываются с использованием верблюжьего случая в JSX. Предполагается, что все единицы длины значения свойства (например, <code>height</code> , <code>width</code> и <code>fontSize</code> ) находятся в <code>px</code> если не указано иное. Если вы хотите использовать <code>em</code> , например, вы переносите значение и единицы в кавычки, например <code>{fontSize: &quot;4em&quot;}</code> . Помимо значений длины, которые по умолчанию <code>px</code> , все остальные значения свойств должны быть заключены в кавычки.
</section>

## Instructions
<section id='instructions'>
If you have a large set of styles, you can assign a style <code>object</code> to a constant to keep your code organized. Uncomment the <code>styles</code> constant and declare an <code>object</code> with three style properties and their values. Give the <code>div</code> a color of <code>"purple"</code>, a font-size of <code>40</code>, and a border of <code>"2px solid purple"</code>. Then set the <code>style</code> attribute equal to the <code>styles</code> constant.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>styles</code> variable should be an <code>object</code> with three properties.
    testString: assert(Object.keys(styles).length === 3);
  - text: The <code>styles</code> variable should have a <code>color</code> property set to a value of <code>purple</code>.
    testString: assert(styles.color === 'purple');
  - text: The <code>styles</code> variable should have a <code>fontSize</code> property set to a value of <code>40</code>.
    testString: assert(styles.fontSize === 40);
  - text: The <code>styles</code> variable should have a <code>border</code> property set to a value of <code>2px solid purple</code>.
    testString: assert(styles.border === "2px solid purple");
  - text: The component should render a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === 'div'; })());
  - text: The <code>div</code> element should have its styles defined by the <code>styles</code> object.
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
