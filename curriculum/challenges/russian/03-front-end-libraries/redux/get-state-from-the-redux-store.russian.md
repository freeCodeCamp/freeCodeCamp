---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
isRequired: false
forumTopicId: 301443
localeTitle: Получение состояния из хранилища Redux
---

## Description
<section id='description'>
У объекта хранилища Redux есть несколько методов, которые позволяют вам взаимодействовать с ним. Например, вы можете получить текущее состояние <code>state</code> , сохраненное в объекте хранилища Redux, с помощью метода  <code>getState()</code> .
</section>

## Instructions
<section id='instructions'>
Код из предыдущего упражнения переписан более кратко в редакторе кода. Используйте <code>store.getState()</code> для извлечения <code>state</code> из <code>store</code> и присвойте его новой переменной <code>currentState</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The redux store should have a value of 5 for the initial state.
    testString: assert(store.getState()===5);
  - text: A variable <code>currentState</code> should exist and should be assigned the current state of the Redux store.
    testString: getUserInput => assert(currentState === 5 && getUserInput('index').includes('store.getState()'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
const currentState = store.getState();
```

</section>
