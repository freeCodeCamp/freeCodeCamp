---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 注册商店监听器
---

## Description
<section id="description">您可以在Redux <code>store</code>对象上访问的另一种方法是<code>store.subscribe()</code> 。这允许您将监听器函数订阅到商店，只要针对商店调度操作，就会调用这些函数。此方法的一个简单用途是为您的商店订阅一个功能，只需在每次收到操作并更新商店时记录消息。 </section>

## Instructions
<section id="instructions">编写一个回调函数，每次商店收到一个动作时，它会递增全局变量<code>count</code> ，并将此函数传递给<code>store.subscribe()</code>方法。您将看到<code>store.dispatch()</code>连续三次被调用，每次都直接传入一个操作对象。观察操作调度之间的控制台输出以查看更新。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在商店上调度<code>ADD</code>操作应该将状态增加<code>1</code> 。
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: ''ADD'' }); const newState = store.getState(); return newState === (initialState + 1); })());'
  - text: 应该有一个使用<code>store.subscribe</code>订阅商店的监听器功能。
    testString: getUserInput => assert(getUserInput('index').includes('store.subscribe('));
  - text: <code>store.subscribe</code>的回调还应该在存储更新时增加全局<code>count</code>变量。
    testString: assert(store.getState() === count);

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

/section>
