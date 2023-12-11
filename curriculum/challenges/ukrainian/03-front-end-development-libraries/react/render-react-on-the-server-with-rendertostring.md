---
id: 5a24c314108439a4d403618d
title: Відтворіть React на сервері за допомогою renderToString
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

Ви вже відтворювали компоненти React для клієнтів. Зазвичай, ви завжди будете це робити. Однак існують випадки, коли компонент React краще відтворити на сервері. Це можливо, оскільки React є бібліотекою JavaScript і ви можете запустити JavaScript на сервері з Node. Насправді React надає метод `renderToString()`, який ви можете використовувати для цієї мети.

Існує дві ключові причини, чому відтворення на сервері може використовуватися в реальних застосунках. По-перше, якщо цього не робити, то застосунки React будуть складатися з відносно порожнього файлу HTML і великого набору JavaScript, коли він початково завантажений у браузер. Це погано для пошукової системи, яка намагається індексувати вміст сторінок, щоб люди змогли знайти вас. Якщо відтворити розмітку початкового HTML на сервері та надіслати її клієнту, то початкове завантаження сторінки міститиме всю розмітку, що може бути переглянуто пошуковими системами. По-друге, це створює швидше початкове завантаження сторінки, оскільки відтворений HTML менший, ніж JavaScript всього застосунку. React досі зможе розпізнати ваш застосунок і керувати ним після початкового завантаження.

# --instructions--

Метод `renderToString()` надано до `ReactDOMServer`, що доступний як глобальний об’єкт. Метод приймає один аргумент, який є елементом React. Використайте його, щоб відтворити `App` у вигляді рядка.

# --hints--

Компонент `App` має відтворитись як рядок за допомогою `ReactDOMServer.renderToString`.

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
