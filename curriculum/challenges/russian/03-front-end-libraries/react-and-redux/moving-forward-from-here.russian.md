---
id: 5a24c314108439a4d403614a
title: Moving Forward From Here
challengeType: 6
isRequired: false
forumTopicId: 301434
localeTitle: Перемещение вперед
---

## Description
<section id='description'>
Поздравляем! Вы закончили занятия по Реакту и Редьюксу. Перед тем, как двигаться дальше, нужно указать один последний предмет. Как правило, вы не будете писать приложения React в редакторе кода, как это. Эта задача дает вам представление о том, как выглядит синтаксис, если вы работаете с npm и файловой системой на своей собственной машине. Код должен выглядеть аналогично, за исключением использования операторов <code>import</code> (они охватывают все зависимости, которые были предоставлены вам в задачах). Раздел «Управление пакетами с номером npm» охватывает npm более подробно. Наконец, для написания кода React и Redux обычно требуется некоторая конфигурация. Это может быстро усложниться. Если вы заинтересованы в экспериментировании на своей собственной машине, <a id="CRA" target="_blank" href="https://github.com/facebookincubator/create-react-app">приложение Create React</a> будет настроено и готово к работе. Кроме того, вы можете включить Babel в качестве препроцессора JavaScript в CodePen, добавить React и ReactDOM в качестве внешних ресурсов JavaScript и работать там.
</section>

## Instructions
<section id='instructions'>
Запишите сообщение <code>&#39;Now I know React and Redux!&#39;</code> на консоль.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The message <code>Now I know React and Redux!</code> should be logged to the console.
    testString: getUserInput => assert(/console.log\(("|')Now I know React and Redux!\1\)/.test(getUserInput('index')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider, connect } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './redux/reducers'
// import App from './components/App'

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );

// change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
console.log('Now I know React and Redux!');
```

</section>
