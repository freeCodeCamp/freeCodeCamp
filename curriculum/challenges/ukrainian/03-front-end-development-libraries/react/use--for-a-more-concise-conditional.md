---
id: 5a24c314108439a4d4036185
title: Використання && для більш стислого умовного значення
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

В останньому завданні спрацювали оператори `if/else`, але є більш стислий спосіб досягти того ж самого результату. Уявіть, що ви відстежуєте кілька умов в компоненті та хочете, щоб різні елементи відображались залежно від кожної з цих умов. Якщо ви створюєте багато операторів `else if`, щоб повернути дещо інші інтерфейси користувачів, то в такому випадку ви можете повторювати код, а це залишає можливість помилки. Замість цього, ви можете використовувати логічний оператор `&&` для виконання умовної логіки в більш стислому вигляді. Це можливо, тому що ви хочете перевірити, чи є умова `true`, і якщо так, то повернути деяку розмітку. Ось приклад:

```jsx
{condition && <p>markup</p>}
```

Якщо `condition` встановлено `true`, тоді повертається розмітка. Якщо умова встановлена `false`, то операція одразу поверне `false` після оцінки `condition`, і тоді нічого не повертається. Ви можете включати ці оператори безпосередньо в ваш JSX та об'єднувати кілька умов, записуючи `&&` після кожної з них. Це дозволяє обробляти більш складну умовну логіку в вашому методі `render()` без повторення великої кількості коду.

# --instructions--

Розв'яжіть попередній приклад ще раз, так щоб `h1` відображався тільки, якщо `display` встановлено `true`, але використовуйте логічний оператор `&&` замість оператора `if/else`.

# --hints--

`MyComponent` має існувати та відображатись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
  })()
);
```

Коли `display` встановлено на `true`, то мають виводитись `div`, `button`, та `h1`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
  );
};
```

Коли `display` встановлено на `false`, то мають виводитись тільки `div` та `button`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

Метод візуалізації має використовувати логічний оператор `&&` для перевірки умови `this.state.display`.

```js
(getUserInput) => assert(getUserInput('index').includes('&&'));
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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```
