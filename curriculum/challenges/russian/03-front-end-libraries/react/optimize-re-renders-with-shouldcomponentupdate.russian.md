---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
isRequired: false
forumTopicId: 301398
localeTitle: Оптимизировать повторные рендеринги с shouldComponentUpdate
---

## Description
<section id='description'>
Пока, если какой-либо компонент получает новое <code>state</code> или новый <code>props</code> , он повторно отображает себя и всех своих детей. Обычно это нормально. Но React предоставляет метод жизненного цикла, который вы можете вызывать, когда дочерние компоненты получают новое <code>state</code> или <code>props</code> , и заявляют, что конкретно компоненты должны обновляться или нет. Этот метод должен быть <code>shouldComponentUpdate()</code> , и он принимает параметры <code>nextProps</code> и <code>nextState</code> качестве параметров. Этот метод является полезным способом оптимизации производительности. Например, поведение по умолчанию заключается в том, что ваш компонент повторно отображает, когда он получает новые <code>props</code> , даже если <code>props</code> не изменился. Вы можете использовать <code>shouldComponentUpdate()</code> чтобы предотвратить это, сравнив <code>props</code> . Метод должен возвращать <code>boolean</code> значение, которое сообщает React, обновлять или не обновлять компонент. Вы можете сравнить текущие реквизиты ( <code>this.props</code> ) со следующими реквизитами ( <code>nextProps</code> ), чтобы определить, нужно ли вам обновлять или нет, и соответственно вернуть <code>true</code> или <code>false</code> .
</section>

## Instructions
<section id='instructions'>
Метод <code>shouldComponentUpdate()</code> добавляется в компонент, называемый <code>OnlyEvens</code> . В настоящее время этот метод возвращает <code>true</code> так что <code>OnlyEvens</code> повторно отображает каждый раз, когда он получает новые <code>props</code> . Измените метод так, чтобы <code>OnlyEvens</code> только если <code>value</code> его новых реквизитов равно. Нажмите кнопку « <code>Add</code> и посмотрите порядок событий в консоли вашего браузера, когда запускаются другие крючки жизненного цикла.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>Controller</code> component should render the <code>OnlyEvens</code> component as a child.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find('Controller').length === 1 && mockedComponent.find('OnlyEvens').length === 1; })());
  - text: The <code>shouldComponentUpdate</code> method should be defined on the <code>OnlyEvens</code> component.
    testString: assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,''); return child !== 'undefined'; })());
  - text: The <code>OnlyEvens</code> component should return an <code>h1</code> tag which renders the value of <code>this.props.value</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 1000 }); return waitForIt(() => mockedComponent.find(''h1'').html()); }; const second = () => { mockedComponent.setState({ value: 10 }); return waitForIt(() => mockedComponent.find(''h1'').html()); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''<h1>1000</h1>'' && secondValue === ''<h1>10</h1>''); }; '
  - text: <code>OnlyEvens</code> should re-render only when <code>nextProps.value</code> is even.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 8 }); return waitForIt(() => mockedComponent.find(''h1'').text()); }; const second = () => { mockedComponent.setState({ value: 7 }); return waitForIt(() => mockedComponent.find(''h1'').text()); }; const third = () => { mockedComponent.setState({ value: 42 }); return waitForIt(() => mockedComponent.find(''h1'').text()); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(firstValue === ''8'' && secondValue === ''8'' && thirdValue === ''42''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    return true;
     // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    return nextProps.value % 2 === 0;
    // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```

</section>
