---
id: 5a24c314108439a4d403617a
title: Передати стан як версію дочірніх компонентів
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

Ви бачили багато прикладів, які передавали версію дочірнім JSX елементам і дочірнім компонентів React в попередніх викликах. Вам, напевно, цікаво, звідки взявся цей пропс. Загальноприйнятою схемою є компонент стану, що містить `state` який важливо для вашого додатка, який потім відтворює дочірні компоненти. Ви хочете, щоб ці компоненти мали доступ до деяких частин цього `state`, який передано як props.

Наприклад, можливо, у вас є компонент `App`, який надає`Navbar`, серед інших компонентів. У вашому `App`, ви маєте `state` який містить багато інформації про користувачів, але для `Navbar` потрібен лише доступ до імені користувача, щоб він міг його відобразити. Ви передаєте цей фрагмент `state` в компонент `Navbar` як prop.

Ця модель ілюструє деякі важливі парадигми в React. Перший: *односторонній потік даних*. Стан рухається в одному напрямку вниз по дереву компонентів додатка, від вихідного компонента до дочірніх компонентів. Дочірні компоненти отримують тільки необхідні їм державні дані про стан. По-друге, складні програми стану можуть бути розбиті на декілька, а може бути, і на один компонент стану. Інші компоненти просто отримують стан від батьків в якості реквізиту і представляють для користувача інтерфейс з цього стану. Вона починає створювати поділ, коли управління державою обробляється в одній частині коду, а рендеринг призначеного для користувача інтерфейсу - в інший. Цей принцип відділення логіки стану від логіки призначеного для користувача інтерфейсу є одним з головних та важливих принципів React. Коли це використовується правильно, це робить дизайн складних, програм стану набагато простішим в управлінні.

# --instructions--

`MyApp` компонент має статус і відображає компоненту `Navbar` в якості підробки. Перетворювати `name` властивості в `state` вниз до дочірнього компонента, а потім показати `name/code> в <code>h1` тегу, що є частиною методу обробки `Navbar`. `name` повинно з'явитися після тексту `Привіт, моє ім'я:`.

# --hints--

Компонент`MyApp` повинен візуалізуватися і відобразити компонент `Navbar` в якості підробки.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return (
      mockedComponent.find('MyApp').length === 1 &&
      mockedComponent.find('Navbar').length === 1
    );
  })()
);
```

`Navbar` компонент повинен отримувати властивість стану `MyApp` `name<` у якості props.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').props());
  };
  const navProps = await setState();
  assert(navProps.name === 'TestName');
};
```

`h1` у `Navbar`Елемент має відобразити `name` prop.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const navH1Before = mockedComponent.find('Navbar').find('h1').text();
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').find('h1').text());
  };
  const navH1After = await setState();
  assert(new RegExp('TestName').test(navH1After) && navH1After !== navH1Before);
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
