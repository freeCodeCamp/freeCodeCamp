---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Регистрация слушателя хранилища
---

## Description
<section id="description"> Другой метод, к которому у вас есть доступ из Redux <code>store</code>, - это <code>store.subscribe()</code> . Он позволяет вам подписать функции слушателя к хранилищу, которые будут вызываться всякий раз, когда действие отправляется в хранилище. Одним из простых способов использования этого метода является подписка функции на ваше хранилище, которая просто регистрирует сообщение каждый раз, когда принимается действие, и хранилище обновляется. </section>

## Instructions
<section id="instructions"> Написать функцию обратного вызова, которая увеличивает значение глобальной переменной <code>count</code> каждый раз, когда хранилище принимает действие, и передать эту функцию в метод <code>store.subscribe()</code> . Вы увидите, что <code>store.dispatch()</code> вызывается три раза подряд, каждый раз непосредственно передавая объект действия. Посмотрите вывод консоли между отправками действия, чтобы увидеть, что обновления происходят. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Отправка действия <code>ADD</code> в хранилище должна увеличивать состояние на <code>1</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: "ADD" }); const newState = store.getState(); return newState === (initialState + 1); })(), "Dispatching the <code>ADD</code> action on the store should increment the state by <code>1</code>.");'
  - text: 'Должна быть функция слушателя, подписанная на хранилище, используя <code>store.subscribe</code> .'
    testString: 'getUserInput => assert(getUserInput("index").includes("store.subscribe("), "There should be a listener function subscribed to the store using <code>store.subscribe</code>.");'
  - text: Обратный вызов в <code>store.subscribe</code> также должен увеличивать значение глобальной переменной <code>count</code> при обновлении хранилища.
    testString: 'assert(store.getState() === count, "The callback to <code>store.subscribe</code> should also increment the global <code>count</code> variable as the store is updated.");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// глобальная переменная счётчика:
let count = 0;

// измените код ниже этой линии

// измените код выше этой линии

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
count = 0;

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
