---
id: 5a24c314108439a4d4036160
title: Визначення HTML-класу в JSX
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

Тепер, коли ви освоїлися з кодуванням у JSX, вам може бути цікаво, чим він відрізняється від HTML.

Поки що може здатися, що HTML та JSX абсолютно однакові.

Однією з ключових відмінностей JSX є те, що ви більше не можете використовувати слово `class` для визначення класів HTML. Це тому, що `class` є зарезервованим словом в JavaScript. Натомість в JSX використовується `className`.

Фактично, умова іменування для всіх атрибутів HTML та посилань на події в JSX стає camelCase. Наприклад, подія кліку миші в JSX - це `onClick` замість `onclick`. Аналогічно, `onchange` стає `onChange`. Хоча це незначна відмінність, про це слід пам'ятати в майбутньому.

# --instructions--

Застосуйте клас `myDiv` до `div`, наданого у коді JSX.

# --hints--

Константа `JSX` має повернути елемент `div`.

```js
assert.strictEqual(JSX.type, 'div');
```

`div` повинен мати клас `myDiv`.

```js
assert.strictEqual(JSX.props.className, 'myDiv');
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
    <h1>Add a class to this div</h1>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```
