---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
isRequired: false
forumTopicId: 301439
localeTitle: Создание Redux хранилища
---

## Description
<section id='description'>
Redux - это система управления состоянием (state), которая может использоваться с различными веб-технологиями, включая React. В Redux один объект состояния, который отвечает за все состояние вашего приложения. Это означает, что если у вас было приложение React с десятью компонентами, и каждый компонент имел свое собственное локальное состояние, то всё состояние вашего приложения было бы определено одним объектом состояния, размещенным в Redux <code>store</code> . Это первый важный принцип, который следует понимать при изучении Redux: хранилище Redux является единственным источником правды, когда дело касается состояния приложения. Это также означает, что в любое время, когда какая-либо часть вашего приложения хочет обновить состояние, она <strong>должна</strong> сделать это через хранилище Redux. Однонаправленный поток данных облегчает управление состоянием в вашем приложении.
</section>

## Instructions
<section id='instructions'>
Redux <code>store</code> является объектом, который хранит и управляет состоянием приложения <code>state</code> . В объекте Redux существует метод, называемый <code>createStore()</code> , который вы используете для создания Redux <code>store</code> . Этот метод принимает функцию <code>reducer</code> как обязательный аргумент. Функция <code>reducer</code> рассматривается далее в упражнениях и уже определена для вас в редакторе кода. Она просто принимает <code>state</code> как аргумент и возвращает <code>state</code> . Объявите переменную <code>store</code> и присвойте ей метод <code>createStore()</code> , передав <code>reducer</code> в качестве аргумента. <strong>Примечание</strong> . Код в редакторе использует ES6 синтаксис аргумента по умолчанию, чтобы инициализировать состояние значением <code>5</code> . Если вы не знакомы с аргументами по умолчанию, вы можете обратиться к <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">разделу ES6 в учебной программе</a> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The redux store exists.
    testString: assert(typeof store.getState === 'function');
  - text: The redux store has a value of 5 for the state.
    testString: assert(store.getState()=== 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer);
```

</section>
