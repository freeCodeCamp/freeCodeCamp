---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
isRequired: false
forumTopicId: 301391
localeTitle: Создание компонента состояния
---

## Description
<section id='description'>
Одна из наиболее важных тем в Реактировании - это <code>state</code> . Состояние состоит из любых данных, о которых должно знать ваше приложение, которые могут со временем меняться. Вы хотите, чтобы ваши приложения отвечали на изменения состояния и при необходимости обновляли интерфейс. React предлагает хорошее решение для государственного управления современными веб-приложениями. Вы создаете состояние в компоненте React, объявляя свойство <code>state</code> в классе компонента в своем <code>constructor</code> . Это инициализирует компонент с <code>state</code> при его создании. Свойство <code>state</code> должно быть установлено на <code>object</code> JavaScript. Объявление выглядит следующим образом: <blockquote> this.state = { <br> // описываем ваше состояние здесь <br> } У вас есть доступ к объекту <code>state</code> протяжении всего срока службы вашего компонента. Вы можете обновить его, отобразить в пользовательском интерфейсе и передать его в качестве реквизита для дочерних компонентов. Объект <code>state</code> может быть как сложным, так и простым, как вам нужно. Обратите внимание , что вы должны создать компонент класса за счет расширения <code>React.Component</code> для того , чтобы создать <code>state</code> , как это. </blockquote>
</section>

## Instructions
<section id='instructions'>
В редакторе кода есть компонент, который пытается отобразить свойство <code>name</code> из своего <code>state</code> . Однако не определено <code>state</code> . Инициализируйте компонент с <code>state</code> в <code>constructor</code> и присвойте свое имя свойству <code>name</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>StatefulComponent</code> should exist and render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('StatefulComponent').length === 1; })());
  - text: <code>StatefulComponent</code> should render a <code>div</code> and an <code>h1</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1; })());
  - text: The state of <code>StatefulComponent</code> should be initialized with a property <code>name</code> set to a string.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === 'object' && typeof initialState.name === 'string'); })());
  - text: The property <code>name</code> in the state of <code>StatefulComponent</code> should render in the <code>h1</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find('h1').text() === initialState.name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</section>
