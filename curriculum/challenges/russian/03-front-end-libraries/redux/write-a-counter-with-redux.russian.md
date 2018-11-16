---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Написание счетчика с помощью Redux
---

## Description
<section id="description"> Теперь вы узнали все основные принципы Redux! Вы видели, как создавать действия и создателей действия, создавать хранилище Redux, отправлять ваши действия в хранилище и разрабатывать обновления состояния с помощью чистых редукторов. Вы даже видели, как управлять сложным состоянием с композицией редукторов и обрабатывать асинхронные действия. Эти примеры упрощены, но эти концепции являются основными принципами Redux. Если вы их хорошо понимаете, вы готовы приступить к созданию своего собственного приложения Redux. Следующие упражнения охватывают некоторые детали, касающиеся неизменности <code>state</code> , но сначала рассмотрим все, что вы изучили до сих пор. </section>

## Instructions
<section id="instructions"> В этом уроке вы будете реализовывать простой счетчик с помощью Redux с нуля. Основы представлены в редакторе кода, но вам нужно будет заполнить детали! Используйте имена, которые предоставлены и опишите создателей действий <code>incAction</code> и <code>decAction</code> , редуктор <code>counterReducer()</code> , типы действий <code>INCREMENT</code> и <code>DECREMENT</code> , и, наконец, Redux хранилище <code>store</code> . После того, как вы закончите , вы должны смочь отправить действия <code>INCREMENT</code> или <code>DECREMENT</code> для увеличения или уменьшения состояния в хранилище  <code>store</code> . Удачи в создании вашего первого приложения Redux! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создатель действия <code>incAction</code> должен возвращать объект действия с <code>type</code> равным значению <code>INCREMENT</code>
    testString: 'assert(incAction().type ===INCREMENT, "The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>");'
  - text: Создатель действия <code>decAction</code> должен возвращать объект действия с <code>type</code> равным значению <code>DECREMENT</code>
    testString: 'assert(decAction().type === DECREMENT, "The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>");'
  - text: Хранилище Redux должно инициализироваться состоянием <code>state</code> равным 0.
    testString: 'assert(store.getState() === 0, "The Redux store should initialize with a <code>state</code> of 0.");'
  - text: Отправка <code>incAction</code> в хранилище Redux должна увеличивать <code>state</code> на 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })(), "Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.");'
  - text: Отправка <code>decAction</code> в хранилище Redux должна уменьшать <code>state</code> на 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })(), "Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.");'
  - text: <code>counterReducer</code> должен быть функцией
    testString: 'assert(typeof counterReducer === "function", "<code>counterReducer</code> should be a function");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // определите константу для типа действия увеличения
const DECREMENT = null; // определите константу для типа действия уменьшения

const counterReducer = null; // определите редуктор счётчика, который будет увеличивать или уменьшать состояние в зависимости от переданного действия

const incAction = null; // определите создателя действия для увеличения

const decAction = null; // определите создателя действия для уменьшения

const store = null; // определите хранилище Redux, передав в него ваши редукторы

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
