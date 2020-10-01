---
id: 5a24c314108439a4d4036155
challengeType: 6
forumTopicId: 301448
title: 发送 Action Data 给 Store
---

## Description
<section id='description'>
到目前为止，你已经学会了如何将 action dispatch 给 Redux store，但到目前为止，这些 action 并未包含除 <code>type</code>之外的任何信息。你还可以发送特定数据和 action 一起。事实上，这是非常常见的，因为 action 通常源于一些用户交互，并且往往会携带一些数据，Redux store 经常需要知道这些数据。
</section>

## Instructions
<section id='instructions'>
在代码编辑器中定义了一个基础的<code>notesReducer()</code>和<code>addNoteText()</code> action creator。完成<code>addNoteText()</code>函数的主体，这样它就会返回一个<code>action</code>对象。该对象应该包含一个<code>type</code>属性，其值为<code>ADD_NOTE</code>，还有一个<code>text</code>属性通过 action creator 将值设置为<code>note</code>。当你调用 action creator 时，你需要传入可以访问该对象的特定注释信息。
接下来，完成在<code>notesReducer()</code>中编写的<code>switch</code>语句。你需要添加一个处理<code>addNoteText()</code>操作的选项。只要存在<code>ADD_NOTE</code>类型的 action，就应该触发 case，并且它应该在传入的<code>action</code>上返回<code>text</code>属性作为新的<code>state</code>
这个 action 将在代码底部发送。一旦完成后，运行代码并观察控制台。这就是将特定于 action 的数据发送到 store 并在更新 store <code>state</code>时使用它所需的全部内容。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: action creator <code>addNoteText</code>应该返回一个包含<code>type</code>和<code>text</code>的对象。
    testString: assert((function() { const addNoteFn = addNoteText('__TEST__NOTE'); return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE' })());
  - text: dispatch 一个 action creator 是<code>addNoteText</code>的action<code>ADD_NOTE</code>，应将<code>state</code>更新为 action creator 传递的字符串。
    testString: assert((function() { const initialState = store.getState(); store.dispatch(addNoteText('__TEST__NOTE')); const newState = store.getState(); return initialState !== newState && newState === '__TEST__NOTE' })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // 修改此行下方的代码

    // 修改此行上方的代码
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // 修改此行下方的代码

  // 修改此行上方的代码
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

</div>



</section>

## Solution
<section id='solution'>

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
    case ADD_NOTE:
      return action.text;
    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```

</section>
