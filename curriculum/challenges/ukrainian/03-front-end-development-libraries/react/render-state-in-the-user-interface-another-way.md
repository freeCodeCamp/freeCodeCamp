---
id: 5a24c314108439a4d4036172
title: Інший спосіб відображення статусу в інтерфейсі користувача
challengeType: 6
forumTopicId: 301408
dashedName: render-state-in-the-user-interface-another-way
---

# --description--

Існує інший спосіб доступу до `state` в компоненті. У методі `render()` можна безпосередньо писати JavaScript перед командою `return`. Наприклад, можна задавати функції, отримувати доступ до даних з `state` чи `props`, виконувати обчислення за цими даними тощо. Потім можна призначити будь-які дані змінним, до яких у вас є доступ в команді `return`.

# --instructions--

У методі візуалізації `MyComponent` визначте `const` під іменем `name` та встановіть значення рівне значенню імені в компоненті `state`. Оскільки можна написати JavaScript безпосередньо в цій частині коду, вам не потрібно ставити це посилання у фігурні дужки.

Далі в операторі повернення відобразіть це значення в теґу `h1`, використовуючи змінну `name`. Пам’ятайте, що в операторі повернення необхідно використовувати синтаксис JSX (фігурні дужки для JavaScript).

# --hints--

`MyComponent` має мати ключі доступу `name` зі значенням `freeCodeCamp`, збереженим у його стані.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` повинен показувати заголовок `h1`, розміщений в одному `div`.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

Відтворений теґ `h1` має містити посилання на `{name}`.

```js
(getUserInput) =>
  assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
```

У заголовку `h1` має бути текст, переданий у стані компонента.

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
