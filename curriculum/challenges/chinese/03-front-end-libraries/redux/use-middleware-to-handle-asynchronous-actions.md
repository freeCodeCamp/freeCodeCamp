---
id: 5a24c314108439a4d4036156
challengeType: 6
forumTopicId: 301451
title: 使用中间件处理异步操作
---

## Description
<section id='description'>
目前为止的挑战都在避免讨论异步操作，但它们是 Web 开发中不可避免的一部分。在某些时候，你需要在 Redux 应用程序中使用异步请求，那么如何处理这些类型的请求？Redux 中间件专为此目的而设计，称为 Redux Thunk 中间件。这里简要介绍如何在 Redux 中使用它。
如果要使用 Redux Thunk 中间件，请将其作为参数传递给<code>Redux.applyMiddleware()</code>。然后将此函数作为第二个可选参数提供给<code>createStore()</code>函数，看一下编辑器底部的代码，然后，要创建一个异步的 action，你需要在 action creator 中返回一个以<code>dispatch</code>为参数的函数。在这个函数中，你可以 dispatch  action 并执行异步请求。
在此示例中，使用<code>setTimeout()</code>调用模拟异步请求。通常在执行异步行为之前 dispatch action，以便应用程序状态知道正在请求某些数据（例如，这个状态可以显示加载图标）。然后，一旦收到数据，就会发送另一个 action，这个 action 完成的时间将作为数据的一个有效值。
请记住，你正在通过将<code>dispatch</code>作为参数传递给这个特殊的 action creator。你用于 dispatch 你的 action 时只需将 action 直接传递给 dispatch，中间件就可以处理其余的部分。
</section>

## Instructions
<section id='instructions'>
在<code>handleAsync()</code>的 action creator 中编写两个 dispatch 事件。在<code>setTimeout()</code>（模拟 API 调用）之前 dispatch<code>requestingData()</code>。然后在收到（模拟）数据后，dispatch<code>receivedData()</code>action，传入这些数据。现在你知道如何处理 Redux 中的异步操作，其他所有操作都继续像以前一样。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>requesData</code> action creator 应返回类型和值都为<code>REQUESTING_DATA</code>的对象。
    testString: assert(requestingData().type === REQUESTING_DATA);
  - text: <code>receivedData</code> action creator 应返回类型和值都等于<code>RECEIVED_DATA</code>的对象。
    testString: assert(receivedData('data').type === RECEIVED_DATA);
  - text: <code>asyncDataReducer</code>必须是个函数。
    testString: assert(typeof asyncDataReducer === 'function');
  - text: 分发 requestedData 后 action creator 应该将 store 中的<code>state</code>的 fetching 的值更新为 <code>true</code>。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })());
  - text: 如果要 dispatch <code>handleAsync</code> 应先 dispatch 数据请求的 action，然后在收到请求结果后再 dispatch 接收的数据 action。
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
    // 在这里 dispatch 请求的 action

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // 在这里 dispatch 接收到的数据 action

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


```js
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
