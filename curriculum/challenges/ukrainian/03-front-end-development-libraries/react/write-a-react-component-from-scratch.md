---
id: 5a24c314108439a4d4036168
title: Напишіть компонент React з нуля
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

Ви вивчили основи компонентів JSX та React, а отже прийшов час написати компонент самостійно. Компоненти React є основними блоками застосунків React, тому важливо ознайомитися з їх написанням. Пам’ятайте, що типовим компонентом React є `class` з ES6, який розширює `React.Component`. Він має метод відтворення, який повертає HTML (від JSX) або `null`. Це основна форма компонента React. Як тільки ви оволодієте цим, ви зможете створювати складніші проєкти React.

# --instructions--

Визначте клас `MyComponent`, який розширює `React.Component`. Метод відтворення має повернути `div`, який містить тег `h1` з текстом `My First React Component!`. Використайте саме цей текст, зважайте на регістр та пунктуацію. Не забудьте викликати конструктор для компонента.

Відтворіть цей компонент в DOM, використавши `ReactDOM.render()`. Ви також можете використати `div` з `id='challenge-node'`.

# --hints--

Ви повинні мати компонент React під назвою `MyComponent`.

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` має містити тег `h1` з текстом `My First React Component!`. Регістр та пунктуація важливі.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```

`MyComponent` має відтворюватись в DOM.

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` повинен мати конструктор, який викликає `super` з `props`.

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// Change code below this line
```

# --solutions--

```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```
