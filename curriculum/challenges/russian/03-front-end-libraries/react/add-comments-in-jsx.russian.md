---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
isRequired: false
forumTopicId: 301376
localeTitle: Добавить комментарии в JSX
---

## Description
<section id='description'>
JSX - это синтаксис, который компилируется в действительный JavaScript. Иногда для удобства чтения вам может потребоваться добавить комментарии к вашему коду. Как и большинство языков программирования, JSX имеет свой собственный способ сделать это. Чтобы помещать комментарии в JSX, вы используете синтаксис <code>{/* */}</code> чтобы обернуть текст комментария.
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет элемент JSX, похожий на то, что вы создали в последнем вызове. Добавьте комментарий где-нибудь внутри предоставленного элемента <code>div</code> , не изменяя существующие элементы <code>h1</code> или <code>p</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert(JSX.type === 'div');
  - text: The <code>div</code> should contain an <code>h1</code> tag as the first element.
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: The <code>div</code> should contain a <code>p</code> tag as the second element.
    testString: assert(JSX.props.children[1].type === 'p');
  - text: The existing <code>h1</code> and <code>p</code> elements should not be modified.
    testString: assert(JSX.props.children[0].props.children === 'This is a block of JSX' && JSX.props.children[1].props.children === 'Here\'s a subtitle');
  - text: The <code>JSX</code> should use valid comment syntax.
    testString: assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
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
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```

</section>
