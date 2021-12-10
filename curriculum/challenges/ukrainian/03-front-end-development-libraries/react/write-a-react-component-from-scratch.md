---
id: 5a24c314108439a4d4036168
title: Написання компонента React з нуля
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

Тепер, коли ви вивчили основи компонентів JSX і React, прийшов час написати компонент самостійно. Компоненти React є основними складовими елементами додатків React, тому важливо добре ознайомитися з їх написанням. Пам'ятайте, типовий компонент React – це ES6 `class`, який розширює `React.Component`. Він має метод візуалізації, що повертає HTML (від JSX) або `null`. Це основна форма компонента React. Як тільки ви це добре засвоїте, ви будете готові почати розробку більш складних проектів React.

# --instructions--

Визначте клас `MyComponent`, який розширює `React.Component`. Його метод візуалізації повинен повертатися як `div`, який містить теґ `h1` з текстом у ньому: `My First React Component!`. Використовуйте саме цей текст, регістр та пунктуація мають значення. Не забудьте також викликати конструктор для вашого компонента.

Надайте цей документ до DOM, використавши `ReactDOM.render()`. Можна скористатися `div` з `id='challenge-node'`.

# --hints--

Можна побачити компонент React під назвою `MyComponent`.

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` має містити теґ `h1` з текстом `My First React Component!`. Регістр та пунктуація мають значення.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```

`MyComponent` має бути переданим до DOM.

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` має мати конструктор під назвою `super` з `props`.

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
