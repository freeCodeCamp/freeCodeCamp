---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
isRequired: false
forumTopicId: 301451
localeTitle: Использование промежуточного программного обеспечения для обработки асинхронных действий
---

## Description
<section id='description'>
До сих пор эти проблемы избегали обсуждения асинхронных действий, но они являются неотъемлемой частью веб-разработки. В какой-то момент вам нужно будет вызывать асинхронные конечные точки в вашем приложении Redux, так как вы обрабатываете эти типы запросов? Redux обеспечивает промежуточное программное обеспечение, разработанное специально для этой цели, называемое промежуточным программным обеспечением Redux Thunk. Вот краткое описание того, как использовать это с Redux. Чтобы включить промежуточное ПО Redux Thunk, вы передаете его в качестве аргумента для <code>Redux.applyMiddleware()</code> . Затем этот оператор предоставляется в качестве второго необязательного параметра функции <code>createStore()</code> . Посмотрите на код внизу редактора, чтобы увидеть это. Затем, чтобы создать асинхронное действие, вы возвращаете функцию в создателе действия, который принимает <code>dispatch</code> в качестве аргумента. В рамках этой функции вы можете отправлять действия и выполнять асинхронные запросы. В этом примере асинхронный запрос моделируется с помощью вызова <code>setTimeout()</code> . Обычно перед отправкой какого-либо асинхронного поведения вы отправляете какое-либо действие, чтобы ваше состояние приложения знало, что запрашиваются некоторые данные (например, это состояние может отображать значок загрузки). Затем, как только вы получите данные, вы отправите другое действие, которое несет данные как полезную нагрузку вместе с информацией о завершении действия. Помните, что вы <code>dispatch</code> в качестве параметра этому создателю специальных действий. Это то, что вы будете использовать для отправки ваших действий, вы просто передаете действие непосредственно для отправки, а промежуточное ПО заботится обо всем остальном.
</section>

## Instructions
<section id='instructions'>
Напишите оба отправления в создателе <code>handleAsync()</code> . Отправка <code>requestingData()</code> перед <code>setTimeout()</code> (имитированный вызов API). Затем, после получения (притворяются) данных, отправьте <code>receivedData()</code> действиеData <code>receivedData()</code> , передав эти данные. Теперь вы знаете, как обрабатывать асинхронные действия в Redux. Все остальное продолжает вести себя по-прежнему.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>requestingData</code> action creator should return an object of type equal to the value of <code>REQUESTING_DATA</code>.
    testString: assert(requestingData().type === REQUESTING_DATA);
  - text: The <code>receivedData</code> action creator should return an object of type equal to the value of <code>RECEIVED_DATA</code>.
    testString: assert(receivedData('data').type === RECEIVED_DATA);
  - text: <code>asyncDataReducer</code> should be a function.
    testString: assert(typeof asyncDataReducer === 'function');
  - text: Dispatching the requestingData action creator should update the store <code>state</code> property of fetching to <code>true</code>.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })());
  - text: Dispatching <code>handleAsync</code> should dispatch the data request action and then dispatch the received data action after a delay.
    testString: assert((function() { const noWhiteSpace = handleAsync.toString().replace(/\s/g,''); return noWhiteSpace.includes('dispatch(requestingData())') === true && noWhiteSpace.includes('dispatch(receivedData(data))') === true })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

</section>
