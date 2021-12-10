---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Додавання коментарів у JSX
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX це синтаксис, який компілюється у дійсний JavaScript. Деколи, задля читабельності, вам, можливо, доведеться додавати коментарі до вашого коду. Як і більшість мов програмування, JSX має власний спосіб це зробити.

Щоб розмістити коментарі у JSX, використовуйте синтаксис `{/* */}` для обрамлення навколо тексту коментаря.

# --instructions--

Редактор коду містить JSX елемент, схожий до того, який ви створили в останньому завданні. Додайте коментар будь-де в межах наданого `div` елементу, не змінюючи існуючих елементів `h1` або `p`.

# --hints--

Константа `JSX` має повернути `div` елемент.

```js
assert(JSX.type === 'div');
```

`div` повинен містити в собі тег `h1` в якості першого елементу.

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` повинен містити в собі тег `p` в якості другого елементу.

```js
assert(JSX.props.children[1].type === 'p');
```

Існуючі елементи `h1` та `p` не повинні змінюватися.

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

`JSX` повинен використовувати відповідний синтаксис коментаря.

```js
assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```
