---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Створіть складний JSX елемент
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

Останнє завдання було простим прикладом JSX, але JSX може також позначати складніший HTML.

Треба пам'ятати, що вкладений JSX повинен показувати одинарний елемент.

Цей один батьківський елемент містить всі інші рівні вкладених елементів.

Наприклад, декілька елементів JSX, записані як елементи одного рівня, без батьківського оболонкового елементу не будуть компілюватися в код на іншій мові програмування.

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

Визначте нову константу `JSX`, що відображає `div`, котрий містить в собі такі елементи у порядку:

`h1`, `p` і невпорядкований список, який містить в собі три елементи `li`. Ви можете включити будь-який текст, який забажаєте, в кожному з елементів.

**Примітка:** При візуалізації багатозначних елементів як тут, можна взяти їх усі в дужки, однак це не є обов'язковим. Зверніть також увагу на те, що у цьому завданні використовується тег `div` для поєднання всіх дочірніх елементів в межах одинарного батьківського елементу. При видаленні `div`, JSX вже не буде компілюватися. Майте це на увазі, оскільки це саме буде застосовано при поверненні елементів JSX до компонентів React.

# --hints--

Константа `JSX` повинна повертати елемент `div`.

```js
assert(JSX.type === 'div');
```

`div` повинен містити в собі теґ `h1` в якості першого елементу.

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` повинен містити в собі теґ `p` в якості другого елементу.

```js
assert(JSX.props.children[1].type === 'p');
```

`div` повинен містити в собі теґ `ul` в якості третього елементу.

```js
assert(JSX.props.children[2].type === 'ul');
```

`ul` повинен містити в собі три елементи `li`.

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
