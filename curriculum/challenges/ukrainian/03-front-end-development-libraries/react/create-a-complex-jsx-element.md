---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Створіть складний елемент JSX
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

Попереднє завдання було простим прикладом JSX, але JSX може відтворити і складніший HTML.

Важливо пам’ятати, що вкладений JSX має повертати єдиний елемент.

Цей єдиний батьківський елемент огортатиме всі інші рівні вкладених елементів.

Наприклад, декілька братських елементів JSX, написаних без батьківського елемента-обгортки, не будуть транспільовані.

Наприклад:

**Дійсний JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Недійсний JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

Визначте нову константу `JSX`, яка відтворює `div`, що містить такі елементи за порядком:

`h1`, `p` та невпорядкований список, який містить три елементи `li`. До кожного елемента можна додати будь-який текст.

**Примітка:** якщо ви відтворюєте декілька елементів, їх можна взяти в дужки, але це необов’язково. Також зауважте, що це завдання використовує тег `div`, щоб обернути всі дочірні елементи в один батьківський елемент. Якщо видалити `div`, то JSX не буде транспілюватись. Майте це на увазі, оскільки це стосується і повернення елементів JSX у компонентах React.

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

`div` має містити тег `ul` як третій елемент.

```js
assert(JSX.props.children[2].type === 'ul');
```

`ul` має містити три елементи `li`.

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
