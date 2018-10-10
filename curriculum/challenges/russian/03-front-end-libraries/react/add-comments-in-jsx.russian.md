---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Добавить комментарии в JSX
---

## Description
<section id="description"> JSX - это синтаксис, который компилируется в действительный JavaScript. Иногда для удобства чтения вам может потребоваться добавить комментарии к вашему коду. Как и большинство языков программирования, JSX имеет свой собственный способ сделать это. Чтобы помещать комментарии в JSX, вы используете синтаксис <code>{/* */}</code> чтобы обернуть текст комментария. </section>

## Instructions
<section id="instructions"> Редактор кода имеет элемент JSX, похожий на то, что вы создали в последнем вызове. Добавьте комментарий где-нибудь внутри предоставленного элемента <code>div</code> , не изменяя существующие элементы <code>h1</code> или <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Постоянный <code>JSX</code> должен возвращать элемент <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: <code>div</code> должен содержать тег <code>h1</code> как первый элемент.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: В <code>div</code> должен быть тег <code>p</code> как второй элемент.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: <code>JSX</code> должен содержать комментарий.
    testString: 'getUserInput => assert(getUserInput("index").includes("/*") && getUserInput("index").includes("*/"), "The <code>JSX</code> should include a comment.");'

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
