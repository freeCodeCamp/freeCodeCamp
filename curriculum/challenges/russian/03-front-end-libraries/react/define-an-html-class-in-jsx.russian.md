---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
isRequired: false
forumTopicId: 301393
localeTitle: Определить класс HTML в JSX
---

## Description
<section id='description'>
Теперь, когда вам удобнее писать JSX, вам может быть интересно, как он отличается от HTML. До сих пор может показаться, что HTML и JSX точно такие же. Одно из ключевых различий в JSX заключается в том, что вы больше не можете использовать <code>class</code> слов для определения классов HTML. Это потому, что <code>class</code> является зарезервированным словом в JavaScript. Вместо этого JSX использует <code>className</code> . Фактически, соглашение об именах для всех атрибутов HTML и ссылок на события в JSX становится camelCase. Например, событие click в JSX - <code>onClick</code> , а не <code>onclick</code> . Аналогично, <code>onchange</code> становится <code>onChange</code> . Хотя это тонкая разница, важно помнить о продвижении вперед.
</section>

## Instructions
<section id='instructions'>
Примените класс <code>myDiv</code> к <code>div</code> предоставленному в коде JSX.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert.strictEqual(JSX.type, 'div');
  - text: The <code>div</code> has a class of <code>myDiv</code>.
    testString: assert.strictEqual(JSX.props.className, 'myDiv');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(JSX, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```

</section>
