---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Додайте коментарі в JSX
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX — це синтаксис, який компілюється в дійсний JavaScript. Іноді вам доведеться додати коментарі до коду заради читабельності. Як і більшість мов програмування, JSX має власний спосіб для цього.

Щоб написати коментарі всередині JSX, використайте синтаксис `{/* */}` навколо тексту коментаря.

# --instructions--

Редактор коду має елемент JSX, схожий до того, який ви створили в попередньому завданні. Додайте коментар будь-де в межах наданого елементу `div`, не змінюючи наявних елементів `h1` чи `p`.

# --hints--

Константа `JSX` має повернути елемент `div`.

```js
assert(JSX.type === 'div');
```

`div` має містити тег `h1` як перший елемент.

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` має містити тег `p` як другий елемент.

```js
assert(JSX.props.children[1].type === 'p');
```

Не змінюйте наявні елементи `h1` та `p`.

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

`JSX` має використати дійсний синтаксис коментаря.

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
