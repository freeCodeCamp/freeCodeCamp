---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
isRequired: false
forumTopicId: 301441
localeTitle: Определить создателя действия
---

## Description
<section id='description'>
После создания действия следующий шаг - отправление действия в хранилище Redux, чтобы обновить свое состояние. В Redux вы определяете создателей действий для завершения процесса. Создатель действия - это просто функция JavaScript, которая возвращает действие. Другими словами, создатели действий создают объекты, которые представляют события действия.
</section>

## Instructions
<section id='instructions'>
Определите функцию <code>actionCreator()</code> , которая возвращает объект <code>action</code> при вызове.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function <code>actionCreator</code> should exist.
    testString: assert(typeof actionCreator === 'function');
  - text: Running the <code>actionCreator</code> function should return the action object.
    testString: assert(typeof action === 'object');
  - text: The returned action should have a key property type with value <code>LOGIN</code>.
    testString: assert(action.type === 'LOGIN');

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

```jsx
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
const actionCreator = () => {
  return action;
};
```

</section>
