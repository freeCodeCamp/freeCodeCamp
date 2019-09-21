---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
isRequired: false
forumTopicId: 301407
localeTitle: Render React на сервере с помощью renderToString
---

## Description
<section id='description'>
До сих пор вы предоставляли компоненты React на клиенте. Обычно это то, что вы всегда будете делать. Однако есть некоторые варианты использования, когда имеет смысл отображать на сервере компонент React. Так как React - это библиотека просмотра JavaScript, и вы можете запускать JavaScript на сервере с помощью Node, это возможно. Фактически, React предоставляет метод <code>renderToString()</code> который вы можете использовать для этой цели. Существует две основные причины, по которым рендеринг на сервере может быть использован в приложении реального мира. Во-первых, без этого приложения React будут состоять из относительно пустого HTML-файла и большого пакета JavaScript, когда он первоначально загружен в браузер. Это может быть не идеальным для поисковых систем, которые пытаются индексировать содержимое ваших страниц, чтобы люди могли вас найти. Если вы визуализируете начальную разметку HTML на сервере и отправляете ее клиенту, загрузка начальной страницы содержит всю разметку страницы, которая может быть сканирована поисковыми системами. Во-вторых, это создает более быструю загрузку начальной загрузки страницы, поскольку отображаемый HTML меньше, чем код JavaScript всего приложения. React по-прежнему сможет распознать ваше приложение и управлять им после начальной загрузки.
</section>

## Instructions
<section id='instructions'>
Метод <code>renderToString()</code> предоставляется на <code>ReactDOMServer</code> , который доступен здесь как глобальный объект. Метод принимает один аргумент, который является элементом React. Используйте это, чтобы отобразить <code>App</code> в строку.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>App</code> component should render to a string using <code>ReactDOMServer.renderToString</code>.
    testString: getUserInput => assert(getUserInput('index').replace(/ /g,'').includes('ReactDOMServer.renderToString(<App/>)') && Enzyme.mount(React.createElement(App)).children().name() === 'div');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line

```

</div>

### Before Tests
<div id='jsx-setup'>

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<App />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);
```

</section>
