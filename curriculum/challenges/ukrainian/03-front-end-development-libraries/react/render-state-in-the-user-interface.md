---
id: 5a24c314108439a4d4036171
title: Відтворіть стан в UI
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

Як тільки ви визначили початковий стан компонента, його будь-яку частину можна показати у відтвореному UI. Якщо компонент має стан, він завжди матиме доступ до даних в `state` у методі `render()`. Дані можна отримати за допомогою `this.state`.

Якщо ви хочете отримати значення стану в `return` методу відтворення, значення потрібно взяти у фігурні дужки.

Стан (`state`) — одна з найпотужніших функцій компонентів у React. Він дозволяє відстежувати важливі дані в застосунку та відтворювати UI відповідно до змін цих даних. Якщо зміняться дані, то зміниться інтерфейс. React використовує віртуальну DOM, щоб відстежувати зміни за лаштунками. Коли оновлюється стан даних, він запускає повторне відтворення тих компонентів, які використовують ті дані (включно з дочірніми компонентами, які отримали дані як пропси). React оновлює DOM, але тільки за необхідності. Це означає, що не треба перейматися щодо зміни DOM. Ви просто оголошуєте, як має виглядати UI.

Зверніть увагу: якщо ви надаєте компоненту стан, жоден інший компонент не знатиме про його стан (`state`). Його стан буде повністю інкапсульованим, або локальним для того компонента, якщо ви не передасте стан даних дочірньому компоненту як пропс. Цей запис інкапсульованого стану дуже важливий, оскільки він дозволяє писати певну логіку, яка згодом буде розташована та ізольована в одному місці коду.

# --instructions--

`MyComponent` в редакторі коду вже має стан. Визначте тег `h1` у методі відтворення компонента, який відтворює значення `name` зі стану компонента.

**Примітка:** `h1` має відтворювати лише значення зі `state` та нічого більше. Будь-який код у фігурних дужках `{ }` в JSX сприйматиметься як JavaScript. Тому, щоб отримати доступ до значення зі `state`, просто візьміть посилання у фігурні дужки.

# --hints--

`MyComponent` повинен мати ключ `name` зі значенням `freeCodeCamp`, збережним у стані.

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

Відтворений заголовок `h1` повинен містити лише текст, відтворений зі стану компонента.

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
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
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
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
