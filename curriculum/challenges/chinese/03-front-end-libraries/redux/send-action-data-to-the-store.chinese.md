---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将操作数据发送到商店
---

## Description
<section id="description">到目前为止，您已经学会了如何将操作分派给Redux存储，但到目前为止，这些操作还没有包含除<code>type</code>之外的任何信息。您还可以发送特定数据以及您的操作。事实上，这是非常常见的，因为动作通常源于一些用户交互，并倾向于携带一些数据。 Redux商店经常需要了解这些数据。 </section>

## Instructions
<section id="instructions">在代码编辑器中定义了一个基本的<code>notesReducer()</code>和一个<code>addNoteText()</code>动作创建器。完成<code>addNoteText()</code>函数的主体，以便它返回一个<code>action</code>对象。该对象应包含值为<code>ADD_NOTE</code>的<code>type</code>属性，以及设置为传递给action creator的<code>note</code>数据的<code>text</code>属性。当您致电操作创建者时，您将传递可以访问该对象的特定注释信息。接下来，完成在<code>notesReducer()</code>编写<code>switch</code>语句。您需要添加一个处理<code>addNoteText()</code>操作的案例。只要存在类型为<code>ADD_NOTE</code>的操作，就应该触发此情况，并且应该将传入<code>action</code>的<code>text</code>属性作为新<code>state</code> 。该操作将在代码底部发送。完成后，运行代码并观察控制台。这就是将特定于操作的数据发送到商店并在更新存储<code>state</code>时使用它所需的全部内容。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 动作创建者<code>addNoteText</code>应返回具有键<code>type</code>和<code>text</code>的对象。
    testString: assert((function() { const addNoteFn = addNoteText('__TEST__NOTE'); return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE' })());
  - text: 使用<code>addNoteText</code>操作创建程序调度<code>ADD_NOTE</code>类型的操作应将<code>state</code>更新为传递给操作创建者的字符串。
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
    // change code below this line

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line

  // change code above this line
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
// solution required
```

/section>
