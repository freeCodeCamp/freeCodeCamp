---
id: 5a24c314108439a4d4036153
challengeType: 6
forumTopicId: 301446
title: 注册 Store 监听器
---

## Description
<section id='description'>
在 Redux <code>store</code>对象上访问数据的另一种方法是<code>store.subscribe()</code>。这允许你将监听器函数订阅到 store，只要一个 action 被 dispatch 就会调用它们。这个方法的一个简单用途是为你的 store 订阅一个函数，它只是在每次收到一个 action 并且更新 store 时记录一条消息。
</section>

## Instructions
<section id='instructions'>
编写一个回调函数，每次 store 收到一个 action 时，它会递增全局变量<code>count</code>，并将此函数传递给<code>store.subscribe()</code>方法。你将会看到<code>store.dispatch()</code>连续三次被调用，每次都直接传入一个 action 对象。观察 dispatch action 之间的控制台输出，看看是否发生了更新。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在 store 上 dispatch <code>ADD</code> action 应该使计数器增加<code>1</code>。
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: ''ADD'' }); const newState = store.getState(); return newState === (initialState + 1); })());'
  - text: 应该有一个监听函数<code>store.subscribe</code>订阅 store。
    testString: getUserInput => assert(getUserInput('index').includes('store.subscribe('));
  - text: 在更新 store 时，<code>store.subscribe</code>应该在回调中使全局变量<code>count</code>增加。
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

// 用于计数的全局变量：
let count = 0;

// 修改此行下方的代码

// 修改此行上方的代码

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
 let count = 0;
// change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```

</section>
