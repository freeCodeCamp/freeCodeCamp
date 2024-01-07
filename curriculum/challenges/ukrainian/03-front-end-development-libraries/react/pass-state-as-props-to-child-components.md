---
id: 5a24c314108439a4d403617a
title: Передайте стан як пропс до дочірніх компонентів
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

Ви бачили багато прикладів, які передавали пропси до дочірніх елементів JSX та дочірніх компонентів React в попередніх завданнях. Можливо, вам цікаво, звідки беруться ці пропси. Загальною схемою є компонент зі станом, важливим для застосунку, який відтворює дочірні компоненти. Потрібно, щоб ці компоненти мали доступ до деяких частин стану, який передано як пропс.

Наприклад, у вас є компонент `App`, який відтворює `Navbar` серед інших компонентів. В `App` існує стан, який містить багато інформації про користувача, але `Navbar` потребує доступ лише до імені користувача, щоб зобразити його. Ви передаєте цю частину стану до компонента `Navbar` як пропс.

Цей шаблон ілюструє деякі важливі парадигми в React. Перша парадигма: *односторонній потік даних*. Стан рухається в одному напрямку вниз по дереву компонентів застосунку, від батьківського компонента зі станом до дочірніх компонентів. Дочірні елементи отримують лише потрібні дані про стан. Друга парадигма: складні застосунки зі станом можна розбити на декілька, або в один, компонентів зі станом. Решта компонентів отримують стан від батьківського компонента як пропс, та відтворюють UI з цього стану. Таким чином починає створюватись поділ: контроль стану відбувається в одній частині коду, а відтворення UI — в іншій. Такий принцип відокремлення логіки стану від логіки UI — один з ключових принципів React. Якщо його використати правильно, він полегшить створення складних застосунків зі станом.

# --instructions--

Компонент `MyApp` має стан та відтворює компонент `Navbar` як дочірній. Передайте властивість `name` стану до дочірнього компонента, а потім покажіть `name` в тегу `h1` (це частина методу відтворення `Navbar`). `name` має з’явитись після тексту `Hello, my name is:`.

# --hints--

Компонент `MyApp` має відтворитись з компонентом `Navbar` всередині.

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

Компонент `Navbar` має отримати властивість стану `name` від `MyApp` як пропс.

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

Елемент `h1` в `Navbar` має відтворити пропс `name`.

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
