---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Відтворіть елементи HTML в DOM
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

Ви вже дізналися, що JSX є зручним інструментом, щоб писати читабельний HTML в JavaScript. За допомогою React можна відтворити JSX одразу в HTML DOM, використавши API для відтворення від React, відомого як ReactDOM.

ReactDOM пропонує простий метод для відтворення елементів React в DOM, який має такий вигляд: `ReactDOM.render(componentToRender, targetNode)`, де першим аргументом є елемент чи компонент React для відтворення, а другим аргументом є вузол DOM, де ви хочете відтворити компонент.

Як ви догадались, `ReactDOM.render()` потрібно викликати після оголошення елементу JSX, так само, як ви повинні оголошувати змінні перед їх використанням.

# --instructions--

Редактор коду має простий компонент JSX. Використайте метод `ReactDOM.render()`, щоб відтворити цей компонент на сторінці. Ви можете передати визначені елементи JSX як перший аргумент та використати `document.getElementById()`, щоб вибрати вузол DOM. Ви також можете використати `div` з `id='challenge-node'`. Не змінюйте константу `JSX`.

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

Наданий елемент JSX має відтворитись у вузлі DOM з id зі значенням `challenge-node`.

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
// Add your code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Add your code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
