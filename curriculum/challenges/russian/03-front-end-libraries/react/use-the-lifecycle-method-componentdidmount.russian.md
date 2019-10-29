---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
isRequired: false
forumTopicId: 301422
localeTitle: Используйте метод Lifecycle MethodDidMount
---

## Description
<section id='description'>
Большинство веб-разработчиков в какой-то момент должны вызывать конечную точку API для извлечения данных. Если вы работаете с React, важно знать, где выполнить это действие. Лучшей практикой в ​​React является размещение вызовов API или любых вызовов на ваш сервер в методе жизненного цикла <code>componentDidMount()</code> . Этот метод вызывается после того, как компонент подключен к DOM. Любые вызовы <code>setState()</code> здесь <code>setState()</code> повторный рендеринг вашего компонента. Когда вы вызываете API в этом методе и устанавливаете свое состояние с данными, возвращаемыми API, он автоматически инициирует обновление после получения данных.
</section>

## Instructions
<section id='instructions'>
В <code>componentDidMount()</code> есть ложный вызов API. Он устанавливает состояние через 2,5 секунды, чтобы имитировать вызов сервера для извлечения данных. В этом примере запрашиваются текущие общие активные пользователи для сайта. В методе рендеринга визуализируйте значение <code>activeUsers</code> в <code>h1</code> . Посмотрите, что происходит в предварительном просмотре, и не стесняйтесь менять таймаут, чтобы увидеть различные эффекты.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1); })());
  - text: Component state should be updated with a timeout function in <code>componentDidMount</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(String(mockedComponent.instance().componentDidMount)); })());
  - text: The <code>h1</code> tag should render the <code>activeUsers</code> value from <code>MyComponent</code>&apos;s state.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ activeUsers: 1237 }); return mockedComponent.find(''h1'').text(); }; const second = () => { mockedComponent.setState({ activeUsers: 1000 }); return mockedComponent.find(''h1'').text(); }; assert(new RegExp(''1237'').test(first()) && new RegExp(''1000'').test(second())); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};
```

</section>
