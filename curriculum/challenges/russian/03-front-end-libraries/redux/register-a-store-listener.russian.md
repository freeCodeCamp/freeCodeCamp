---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Зарегистрировать слушателя магазина
---

## Description
<section id="description"> Другой метод, к <code>store.subscribe()</code> вас есть доступ к объекту <code>store</code> Redux, - <code>store.subscribe()</code> . Это позволяет вам подписывать функции слушателя в хранилище, которые вызывается всякий раз, когда действие отправляется против магазина. Одним из простых способов использования этого метода является подписка функции на ваш магазин, которая просто регистрирует сообщение каждый раз, когда принимается действие, и хранилище обновляется. </section>

## Instructions
<section id="instructions"> Написать функцию обратного вызова , который увеличивает глобальную переменную <code>count</code> каждый раз , когда магазин принимает действие, и передать эту функцию в к <code>store.subscribe()</code> метода. Вы увидите, что <code>store.dispatch()</code> вызывается три раза подряд, каждый раз непосредственно передавая объект действия. Посмотрите вывод консоли между диспетчерами действий, чтобы увидеть обновления. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Отправка действия <code>ADD</code> в хранилище должна увеличивать состояние на <code>1</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: "ADD" }); const newState = store.getState(); return newState === (initialState + 1); })(), "Dispatching the <code>ADD</code> action on the store should increment the state by <code>1</code>.");'
  - text: 'Должна быть функция прослушивателя, подписанная на магазин, используя <code>store.subscribe</code> .'
    testString: 'getUserInput => assert(getUserInput("index").includes("store.subscribe("), "There should be a listener function subscribed to the store using <code>store.subscribe</code>.");'
  - text: Обратный вызов <code>store.subscribe</code> также должен увеличивать глобальную переменную <code>count</code> при обновлении хранилища.
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

// global count variable:
let count = 0;

// change code below this line

// change code above this line

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
