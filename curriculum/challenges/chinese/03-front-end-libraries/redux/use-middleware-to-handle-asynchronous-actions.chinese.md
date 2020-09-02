---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用中间件处理异步操作
---

## Description
<section id="description">到目前为止，这些挑战已经避免讨论异步操作，但它们是Web开发中不可避免的一部分。在某些时候，您需要在Redux应用程序中调用异步端点，那么如何处理这些类型的请求？ Redux提供专门为此目的而设计的中间件，称为Redux Thunk中间件。以下是如何在Redux中使用它的简要说明。要包含Redux Thunk中间件，请将其作为参数传递给<code>Redux.applyMiddleware()</code> 。然后，此语句作为<code>createStore()</code>函数的第二个可选参数提供。看一下编辑器底部的代码，看看这个。然后，要创建异步操作，您将在动作创建器中返回一个函数，该函数将<code>dispatch</code>作为参数。在此函数中，您可以分派操作并执行异步请求。在此示例中，使用<code>setTimeout()</code>调用模拟异步请求。在启动任何异步行为之前调度操作是很常见的，这样您的应用程序状态就知道正在请求某些数据（例如，此状态可能会显示加载图标）。然后，一旦收到数据，就会发送另一个操作，该操作将数据作为有效负载以及操作完成的信息。请记住，您将<code>dispatch</code>作为参数传递给此特殊操作创建者。这是您用于分派操作的方法，您只需将操作直接传递给调度，中间件就可以处理其余操作。 </section>

## Instructions
<section id="instructions">在<code>handleAsync()</code>动作创建器中写入两个调度。调度<code>requestingData()</code>在之前<code>setTimeout()</code>模拟API调用）。然后，在收到（假装）数据后，调度<code>receivedData()</code>操作，传入此数据。现在您知道如何在Redux中处理异步操作。其他一切继续像以前一样。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>requestingData</code>操作创建者应返回类型等于<code>REQUESTING_DATA</code>值的对象。
    testString: assert(requestingData().type === REQUESTING_DATA);
  - text: <code>receivedData</code>操作创建者应返回类型等于<code>RECEIVED_DATA</code>值的对象。
    testString: assert(receivedData('data').type === RECEIVED_DATA);
  - text: <code>asyncDataReducer</code>应该是一个函数。
    testString: assert(typeof asyncDataReducer === 'function');
  - text: 调度requestedData操作创建者应该将获取的store <code>state</code>属性更新为<code>true</code> 。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })());
  - text: 调度<code>handleAsync</code>应调度数据请求操作，然后在延迟后调度接收的数据操作。
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

```js
// solution required
```

/section>
