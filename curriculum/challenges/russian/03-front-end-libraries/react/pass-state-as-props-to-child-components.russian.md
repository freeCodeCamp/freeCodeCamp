---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
isRequired: false
forumTopicId: 301403
localeTitle: Состояние передачи в качестве компонентов реквизита для детей
---

## Description
<section id='description'>
Вы видели множество примеров, которые передавали реквизиты дочерним элементам JSX и компонентам Child React в предыдущих задачах. Вам может быть интересно, откуда берутся эти реквизиты. Общим примером является наличие компонента с состоянием, содержащего <code>state</code> важное для вашего приложения, которое затем отображает дочерние компоненты. Вы хотите, чтобы эти компоненты имели доступ к некоторым частям этого <code>state</code> , которые передаются в качестве реквизита. Например, возможно, у вас есть компонент <code>App</code> который отображает <code>Navbar</code> , среди других компонентов. В вашем <code>App</code> вас есть <code>state</code> которое содержит много информации о пользователе, но <code>Navbar</code> нуждается только в доступе к имени пользователя пользователя, чтобы он мог отображать его. Вы передаете эту часть <code>state</code> компоненту <code>Navbar</code> в качестве опоры. Этот шаблон иллюстрирует некоторые важные парадигмы в Реактите. Первый - <em>однонаправленный поток данных</em> . Государство течет в одном направлении вниз по дереву компонентов вашего приложения, от родительского компонента с состоянием до дочерних компонентов. Детские компоненты получают только данные состояния, в которых они нуждаются. Во-вторых, сложные приложения с установленным состоянием могут быть разбиты на несколько или один компонент с состоянием. Остальные компоненты просто получают состояние от родителя как реквизита и отображают пользовательский интерфейс из этого состояния. Он начинает создавать разделение, в котором управление состоянием обрабатывается в одной части кода и визуализации пользовательского интерфейса в другой. Этот принцип отделения логики состояния от логики пользовательского интерфейса является одним из ключевых принципов Реакта. Когда он используется правильно, он упрощает управление сложными приложениями с сохранением состояния.
</section>

## Instructions
<section id='instructions'>
Компонент <code>MyApp</code> имеет <code>Navbar</code> stateful и отображает компонент <code>Navbar</code> в качестве дочернего элемента. Передайте свойство <code>name</code> в его <code>state</code> до дочернего компонента, затем покажите <code>name</code> в теге <code>h1</code> который является частью <code>Navbar</code> рендеринга <code>Navbar</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>MyApp</code> component should render with a <code>Navbar</code> component inside.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1 && mockedComponent.find('Navbar').length === 1; })());
  - text: The <code>Navbar</code> component should receive the <code>MyApp</code> state property <code>name</code> as props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').props() )}; const navProps = await setState(); assert(navProps.name === ''TestName''); }; '
  - text: The <code>h1</code> element in <code>Navbar</code> should render the <code>name</code> prop.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const navH1Before = mockedComponent.find(''Navbar'').find(''h1'').text(); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').find(''h1'').text() )}; const navH1After = await setState(); assert(new RegExp(''TestName'').test(navH1After) && navH1After !== navH1Before); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
         <Navbar /* your code here */ />
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
      <h1>Hello, my name is: {/* your code here */} </h1>
    </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
