---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Управление обновлениями с помощью методов жизненного цикла
---

## Description
<section id='description'>
Другим методом жизненного цикла является <code>componentWillReceiveProps()</code> который вызывается всякий раз, когда компонент получает новые реквизиты. Этот метод получает новый реквизит в качестве аргумента, который обычно записывается как <code>nextProps</code> . Вы можете использовать этот аргумент и сравнить с этим <code>this.props</code> и выполнить действия перед обновлением компонента. Например, вы можете вызвать <code>setState()</code> локально до обработки обновления. Другим методом является <code>componentDidUpdate()</code> и вызывается сразу после повторного рендеринга компонента. Обратите внимание, что рендеринг и установка в жизненном цикле компонентов считаются разными. Когда страница сначала загружается, все компоненты монтируются, и здесь вызывается такие методы, как <code>componentWillMount()</code> и <code>componentDidMount()</code> . После этого, по мере изменения состояния, компоненты переделают себя. Следующая задача охватывает это более подробно.
</section>

## Instructions
<section id='instructions'>
Детский компонент <code>Dialog</code> получает реквизит <code>message</code> от своего родителя, компонента <code>Controller</code> . Напишите <code>componentWillReceiveProps()</code> в компоненте <code>Dialog</code> и <code>nextProps</code> его в консоли <code>this.props</code> и <code>nextProps</code> . Вам нужно будет передать <code>nextProps</code> в качестве аргумента для этого метода, и хотя можно назвать его чем угодно, назовите его <code>nextProps</code> здесь. Затем добавьте <code>componentDidUpdate()</code> в компонент <code>Dialog</code> и запишите заявление, в котором говорится, что компонент обновлен. Этот метод работает аналогично <code>componentWillUpdate()</code> , который предоставляется вам. Теперь нажмите кнопку, чтобы изменить сообщение и посмотреть консоль браузера. Порядок консольных операторов показывает порядок вызова методов. <strong>Примечание.</strong> Вам необходимо будет написать методы жизненного цикла в качестве обычных функций, а не как функции стрелок для прохождения тестов (также нет преимуществ при написании методов жизненного цикла в виде функций стрелок).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Компонент <code>Controller</code> должен отображать компонент <code>Dialog</code> как дочерний.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("Dialog").length === 1; })(), "The <code>Controller</code> component should render the <code>Dialog</code> component as a child.");'
  - text: Метод <code>componentWillReceiveProps</code> в компоненте <code>Dialog</code> должен записывать <code>this.props</code> на консоль.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); return lifecycleChild.includes("console.log") && lifecycleChild.includes("this.props") })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.");'
  - text: Метод <code>componentWillReceiveProps</code> в компоненте <code>Dialog</code> должен записывать <code>nextProps</code> в консоль.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes("console.log") && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.");'
  - text: Компонент <code>Dialog</code> должен вызывать метод <code>componentDidUpdate</code> и записывать сообщение на консоль.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentDidUpdate.toString().replace(/ /g,""); return lifecycleChild.length !== "undefined" && lifecycleChild.includes("console.log"); })(), "The <code>Dialog</code> component should call the <code>componentDidUpdate</code> method and log a message to the console.");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line

  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
console.info('after the test');

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
// solution required
```

</section>
