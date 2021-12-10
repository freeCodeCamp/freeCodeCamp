---
id: 5a24c314108439a4d4036171
title: Статус відображення в інтерфейсі користувача
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

Визначивши початковий стан компонента, можна відобразити будь-яку його частину у візуалізованому інтерфейсі. Якщо компонент збережено, він завжди матиме доступ до даних у `state` в методі `render()`. Можна дістатися до даних за допомогою `this.state`.

Якщо ви хочете дістатися значення стану в межах `return` метода виконання, ви маєте взяти значення в фігурні дужки.

`state`- це одна з найпотужніших особливостей компонентів у React. Дозволяє відстежувати важливі дані у вашому додатку і відобразити інтерфейс в результаті змін у них. Якщо змінюються дані, зміниться і інтерфейс. React користується таким собі віртуальним DOM- ом щоб відстежувати зміни за лаштунками. При оновленні даних стану програма запускає повторне відображення компонентів, що використовують ці дані, включно з дочірніми компонентами, що отримали дані як підтримку. React оновлює DOM, але тільки за необхідності. Це означає, що не треба перейматися через зміну DOM. Ви просто вказуєте як має виглядати інтерфейс.

Зауважте, що якщо ви зберігаєте елемент, жоден інший компонент не знатиме його `state`. Його `state` буде повністю інкапсульованим, або локальним до того компонента доти, доки ви не передасте збереження дочірньому компоненту як `props`. Цей клас інкапсульованого `state` дуже важливий, бо дозволяє прописати певну логіку, а потім вмістити і ізолювати в одній з частин вашого коду.

# --instructions--

В редакторі коду `MyComponent` вже збережено. Визначення теґу `h1` в методі відображення компонента, що передає значення `name` стану компонента.

**Note:** `h1` має відображати тільки значення з `state`, і більш нічого. В JSX будь- який код у фігурних дужках `{ }` буде розглядатися як JavaScript. Тож для доступу до значення `state`, просто візьміть посилання в фігурні дужки.

# --hints--

`MyComponent` повинен мати ключ `name` зі збереженим у його стані значенням `freeCodeCamp`.

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

У заголовку `h1` має бути тільки текст, переданий у стані компонента.

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
