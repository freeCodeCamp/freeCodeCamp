---
id: 5a24c314108439a4d403618d
title: Візуалізація React на сервері з renderToString
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

Отже, ви вже візуалізували компоненти React для клієнтів. Звичайно, це є те, що ви будете робити завжди. Однак, є деякі випадки, де є сенс в тому, щоб візуалізувати компонент React на сервері. Це є можливим, оскільки React є бібліотекою для перегляду JavaScript і ви можете запустити JavaScript на сервері з Node. Дійсно, React надає метод `renderToString()`, який ви можете використовувати для цієї мети.

Існує дві ключові причини, чому візуалізація на сервері може використовуватися в додатках, якими користується весь світ. По-перше, якщо цього не робити, то ваші React додатки будуть складатися з відносно порожнього файлу HTML і великого набору JavaScript, коли він початково завантажений у браузер. Це може бути не ідеальним для пошукової системи, яка намагається індексувати вміст ваших сторінок, тож люди зможуть вас знайти. Якщо ви візуалізуєте початкову HTML розмітку на сервері та надішлете це клієнту, то початкове завантаження сторінки буде містити усі розмітки сторінки, які можуть бути переглянуті пошуковими системами. По-друге, це створює досвід швидшого початкового завантаження сторінки, тому що візуалізований HTML є меншим, ніж JavaScript код всього додатку. React все ще зможе розпізнати ваш додаток і керувати ним після початкового завантаження.

# --instructions--

Метод `renderToString()` надається на `ReactDOMServer`, який є доступним, як глобальний об'єкт. Метод приймає один аргумент, який є елементом React. Використовуйте це для того, щоб візуалізувати `App` в рядку.

# --hints--

Компонент `App` має візуалізувати рядок використовуючи `ReactDOMServer.renderToString`.

```js
(getUserInput) =>
  assert(
    getUserInput('index')
      .replace(/ /g, '')
      .includes('ReactDOMServer.renderToString(<App/>)') &&
      Enzyme.mount(React.createElement(App)).children().name() === 'div'
  );
```

# --seed--

## --before-user-code--

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
```

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
```

# --solutions--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App/>);
```
