---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 从数组中删除项目
---

## Description
<section id="description">是时候练习从数组中删除项目了。扩展运算符也可以在这里使用。其他有用的JavaScript方法包括<code>slice()</code>和<code>concat()</code> 。 </section>

## Instructions
<section id="instructions">修改了reducer和action creator，以根据项目的索引从数组中删除项目。完成编写reducer以便返回一个新的状态数组，并删除特定索引处的项。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
