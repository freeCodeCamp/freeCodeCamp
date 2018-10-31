---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Определить создателя действий
---

## Description
<section id="description"> После создания действия следующий шаг отправляет действие в хранилище Redux, чтобы он мог обновить свое состояние. В Redux вы определяете создателей действий для достижения этого. Создатель действия - это просто функция JavaScript, которая возвращает действие. Другими словами, создатели действий создают объекты, которые представляют события действий. </section>

## Instructions
<section id="instructions"> Определите функцию с именем <code>actionCreator()</code> которая возвращает объект <code>action</code> при вызове. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Функция <code>actionCreator</code> должна существовать.
    testString: 'assert(typeof actionCreator === "function", "The function <code>actionCreator</code> should exist.");'
  - text: Запуск функции <code>actionCreator</code> должен вернуть объект действия.
    testString: 'assert(typeof action === "object", "Running the <code>actionCreator</code> function should return the action object.");'
  - text: Возвращаемое действие должно иметь тип свойства ключа со значением <code>LOGIN</code> .
    testString: 'assert(action.type === "LOGIN", "The returned action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
