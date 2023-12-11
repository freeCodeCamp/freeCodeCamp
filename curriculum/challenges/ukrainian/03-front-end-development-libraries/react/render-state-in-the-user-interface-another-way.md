---
id: 5a24c314108439a4d4036172
title: Відтворіть стан в UI іншим способом
challengeType: 6
forumTopicId: 301408
dashedName: render-state-in-the-user-interface-another-way
---

# --description--

Існує інший спосіб отримати доступ до стану в компоненті. У методі `render()`, перед інструкцією `return`, можна писати одразу JavaScript. Наприклад, можна оголосити функції, отримати дані зі стану чи пропсів, виконати розрахунки над даними і так далі. Потім ви можете призначити будь-які дані до змінних, до яких отримали доступ в інструкції `return`.

# --instructions--

У методі відтворення `MyComponent` визначте `const` під назвою `name` та встановіть її значення на значення назви в стані компонента. Оскільки в цій частині коду можна писати JavaScript одразу, необов’язково використовувати фігурні дужки.

Потім відтворіть це значення в інструкції повернення в тегу `h1`, використавши змінну `name`. Пам’ятайте, що в інструкції повернення потрібно використовувати синтаксис JSX (фігурні дужки для JavaScript).

# --hints--

`MyComponent` повинен мати ключ `name` зі значенням `freeCodeCamp`, збереженим у стані.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` має відтворити заголовок `h1`, розташований в єдиному `div`.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

Відтворений тег `h1` має містити посилання на `{name}`.

```js
(getUserInput) =>
  assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
```

Відтворений заголовок `h1` повинен містити текст, відтворений зі стану компонента.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  assert(firstValue === '<div><h1>TestName</h1></div>');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line

    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
