---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Создание магазина Redux
---

## Description
<section id="description"> Redux - это система управления государственными структурами, которая может использоваться с несколькими различными веб-технологиями, включая React. В Redux существует один объект состояния, который отвечает за все состояние вашего приложения. Это означает, что если у вас было приложение React с десятью компонентами, и каждый компонент имел свое собственное локальное состояние, все состояние вашего приложения было бы определено одним объектом состояния, размещенным в <code>store</code> Redux. Это первый важный принцип, который следует понимать при изучении Redux: хранилище Redux является единственным источником правды, когда дело касается состояния приложения. Это также означает, что в любое время, когда какая-либо часть вашего приложения хочет обновить состояние, он <strong>должен</strong> сделать это через магазин Redux. Однонаправленный поток данных облегчает отслеживание управления состоянием в вашем приложении. </section>

## Instructions
<section id="instructions"> Redux <code>store</code> является объектом , который имеет и управляет приложения <code>state</code> . В объекте Redux существует метод, называемый <code>createStore()</code> , который вы используете для создания <code>store</code> Redux. Этот метод принимает функцию <code>reducer</code> как необходимый аргумент. Функция <code>reducer</code> рассматривается в более поздней задаче и уже определена для вас в редакторе кода. Он просто принимает <code>state</code> как аргумент и возвращает <code>state</code> . Объявите переменную <code>store</code> и назначьте ее <code>createStore()</code> , передав в <code>reducer</code> в качестве аргумента. <strong>Примечание</strong> . Код в редакторе использует синтаксис аргумента по умолчанию ES6 для инициализации этого состояния, чтобы сохранить значение <code>5</code> . Если вы не знакомы с аргументами по умолчанию, вы можете обратиться к <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">разделу ES6 в учебной программе,</a> которая охватывает этот <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">раздел</a> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Магазин редукции существует.
    testString: 'assert(typeof store.getState === "function", "The redux store exists.");'
  - text: Хранилище redux имеет значение 5 для состояния.
    testString: 'assert(store.getState()=== 5, "The redux store has a value of 5 for the state.");'

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

```js
// solution required
```
</section>
