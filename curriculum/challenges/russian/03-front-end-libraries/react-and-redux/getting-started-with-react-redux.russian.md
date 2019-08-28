---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
isRequired: false
forumTopicId: 301430
localeTitle: Начало работы с React Redux
---

## Description
<section id='description'>
Эта серия проблем знакомит с использованием Redux с React. Во-первых, рассмотрим некоторые ключевые принципы каждой технологии. Реагирование - это библиотека представлений, которую вы предоставляете с данными, а затем рендерит представление эффективным и предсказуемым образом. Redux - это система управления состоянием, которую вы можете использовать для упрощения управления состоянием вашего приложения. Как правило, в приложении React Redux вы создаете одно хранилище Redux, которое управляет состоянием всего вашего приложения. Ваши компоненты React подписываются только на части данных в магазине, которые имеют отношение к их роли. Затем вы отправляете действия непосредственно из компонентов React, которые затем запускают обновления магазина. Хотя компоненты React могут управлять своим собственным состоянием локально, когда у вас сложное приложение, обычно лучше поддерживать состояние приложения в одном месте с помощью Redux. Существуют исключения, когда отдельные компоненты могут иметь локальное состояние, специфичное только для них. Наконец, поскольку Redux не предназначен для работы с React из коробки, вам нужно использовать пакет <code>react-redux</code> . Он предоставляет вам возможность передать <code>state</code> Redux и <code>dispatch</code> ваши компоненты React в качестве <code>props</code> . В следующих нескольких задачах, во-первых, вы создадите простой компонент React, который позволит вам вводить новые текстовые сообщения. Они добавляются в массив, который отображается в представлении. Это должен быть хороший обзор того, что вы узнали на уроках React. Затем вы создадите хранилище Redux и действия, управляющие состоянием массива сообщений. Наконец, вы будете использовать <code>react-redux</code> для подключения хранилища Redux к вашему компоненту, тем самым извлекая локальное состояние в хранилище Redux.
</section>

## Instructions
<section id='instructions'>
Начните с компонента <code>DisplayMessages</code> . Добавьте конструктор к этому компоненту и инициализируйте его с состоянием, которое имеет два свойства: <code>input</code> , который установлен в пустую строку, и <code>messages</code> , которые установлены в пустой массив.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>DisplayMessages</code> component should render an empty <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find('div').text() === '' })());
  - text: The <code>DisplayMessages</code> constructor should be called properly with <code>super</code>, passing in <code>props</code>.
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').replace(/\s/g,''); return noWhiteSpace.includes('constructor(props)') && noWhiteSpace.includes('super(props'); })());
  - text: 'The <code>DisplayMessages</code> component should have an initial state equal to <code>{input: "", messages: []}</code>.'
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === 'object' && initialState.input === '' && Array.isArray(initialState.messages) && initialState.messages.length === 0; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  // change code below this line

  // change code above this line
  render() {
    return <div />
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```

</section>
