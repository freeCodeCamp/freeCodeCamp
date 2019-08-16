---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Определение Redux действия
---

## Description
<section id="description"> Т.к. Redux - это фреймворк управления состоянием, то обновление состояния - одна из его главных задач. В Redux все обновления состояния срабатывают по диспетчерским действиям. Действие - это просто JavaScript объект, который содержит информацию о произошедшем событии. Хранилище Redux получает объекты действий, затем обновляет состояние, если нужно. Иногда Redux действие также содержит некоторую дополнительную информацию. Например, действие "сообщает" имя пользователя после успешного входа в систему. Действие обязательно должно содержать поле <code>type</code> , которое указывает "тип" исполняемого действия. Думайте о действиях Redux как о сообщениях, которые передают информацию о событиях, происходящих в вашем приложении, хранилищу Redux. Хранилище затем занимается обновлением состояния, на основании действия которое случилось. </section>

## Instructions
<section id="instructions"> Написание действия Redux это просто объявление объекта со свойством "тип". Объявите объект <code>action</code> и передайте ему свойство <code>type</code> со строковым значением <code>&#39;LOGIN&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Объект действия существует.'
    testString: 'assert((function() { return typeof action === "object" })(), "An action object should exist.");'
  - text: 'Действие должно содержать свойство (ключ) type со значением <code>LOGIN</code> .'
    testString: 'assert((function() { return action.type === "LOGIN" })(), "The action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Объявите действие здесь:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
