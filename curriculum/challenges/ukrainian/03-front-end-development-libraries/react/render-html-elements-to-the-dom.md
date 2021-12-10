---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Візуалізація елементів HTML в DOM
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

Отже, ви вже дізналися, що JSX є зручним інструментом, щоб писати читабельний HTML всередині JavaScript. За допомогою React, ми можемо візуалізувати JSX прямо до HTML DOM, використовуючи React's rendering API, відомий як ReactDOM.

ReactDOM пропонує простий метод, щоб візуалізувати React елементи в DOM, який виглядає так: `ReactDOM.render(componentToRender, targetNode)`, де першим аргументом є React елемент або компонент, який ви хочете візуалізувати, а другий аргумент - це DOM вузол, який ви хочете перетворити компонент.

Як ви і очікуєте, `ReactDOM.render()` має бути названий після оголошення елементів JSX, так само, як ви повинні створювати змінні перед тим, як їх використанням.

# --instructions--

Редактор коду має простий компонент JSX. Використовуйте метод `ReactDOM.render()`, для того щоб візуалізувати цей компонент на сторінку. Ви можете передавати визначені JSX елементи безпосередньо як перший аргумент і використовувати `document.getElementById()` для того, щоб вибрати DOM вузол для їх відображення. Також є `div` with `id='challenge-node'` який доступний вам для використання. Переконайтеся, що ви не змінили сталу `JSX`.

# --hints--

Стала `JSX` має повертати елемент `div`.

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

Наданий елемент JSX має відображатися в DOM вузла за допомогою id `challenge-node`.

```js
assert(
  document.getElementById('challenge-node').childNodes[0].innerHTML ===
    '<h1>Hello World</h1><p>Lets render this to the DOM</p>'
);
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
