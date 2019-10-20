---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
isRequired: false
forumTopicId: 301423
localeTitle: Использовать компонент Lifecycle MethodWillMount
---

## Description
<section id='description'>
У компонентов React есть несколько специальных методов, которые предоставляют возможности для выполнения действий в определенных точках жизненного цикла компонента. Они называются методами жизненного цикла, или крючками жизненного цикла, и позволяют вам быстро отслеживать компоненты в определенные моменты времени. Это может быть до того, как они будут визуализированы, прежде чем они будут обновлены, прежде чем они получат реквизиты, прежде чем они будут отключены, и так далее. Ниже приведен список некоторых основных методов жизненного цикла: <code>componentWillMount()</code> <code>componentDidMount()</code> <code>componentWillReceiveProps()</code> <code>shouldComponentUpdate()</code> <code>componentWillUpdate()</code> <code>componentDidUpdate()</code> <code>componentWillUnmount()</code> Следующие несколько уроков будут посвящены некоторым основным <code>shouldComponentUpdate()</code> использования этих методов жизненного цикла.
</section>

## Instructions
<section id='instructions'>
Метод <code>componentWillMount()</code> вызывается перед методом <code>render()</code> когда компонент монтируется в DOM. Запишите что-нибудь на консоль в <code>componentWillMount()</code> - вы можете открыть консоль своего браузера для просмотра вывода.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should render a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').length === 1; })());
  - text: <code>console.log</code> should be called in <code>componentWillMount</code>.
    testString: assert((function() { const lifecycle = React.createElement(MyComponent).type.prototype.componentWillMount.toString().replace(/ /g,''); return lifecycle.includes('console.log('); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line

    // change code above this line
  }
  render() {
    return <div />
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
  }
  componentWillMount() {
    // change code below this line
    console.log('Component is mounting...');
    // change code above this line
  }
  render() {
    return <div />
  }
};
```

</section>
