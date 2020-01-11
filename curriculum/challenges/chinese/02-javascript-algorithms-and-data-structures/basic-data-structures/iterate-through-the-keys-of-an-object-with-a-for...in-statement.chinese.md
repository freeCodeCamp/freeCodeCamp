---
id: 587d7b7d367417b2b2512b1d
title: 'Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
forumTopicId: 301162
localeTitle: '使用 for...in 语句迭代对象'
---

## Description
<section id='description'>

有时候你需要遍历一个对象中的所有键。这需要 JavaScript 中的一个特殊语法：<dfn>for...in</dfn> 语句。以遍历 <code>users</code> 对象的键为例：

```js
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan
```

在这个语句中，我们定义了一个<code>user</code>变量，你可以看到，这个变量在 for...in 语句对对象的每一个键的遍历中都会被重置。
<strong>注意：</strong><br>跟数组不同，对象中的键是无序的，因此一个对象中某个键的位置，或者说它出现的相对顺序，在引用或访问该键时是不确定的。
</section>

## Instructions
<section id='instructions'>

我们已经定义了一个<code>countOnline</code>函数，请在其中使用一个 <dfn>for...in</dfn> 语句来遍历<code>users</code>对象中的用户，并返回<code>online</code>属性为<code>true</code>的用户的数量。


```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 函数 <code>countOnline</code> 应该使用 `for in` 语句遍历传入对象的key。
    testString: assert(code.match(/for\s*\(\s*(var|let)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)\s*{/));
  - text: '当传入 <code>{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }</code> 时，函数 <code>countOnline</code> 应该返回  <code>1</code>。'
    testString: assert(countOnline(usersObj1) === 1);
  - text: '当传入 <code>{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }</code> 时，函数 <code>countOnline</code> 应该返回  <code>2</code>。'
    testString: assert(countOnline(usersObj2) === 2);
  - text: '当传入 <code>{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }</code> 时，函数 <code>countOnline</code> 应该返回  <code>0</code>。'
    testString: assert(countOnline(usersObj3) === 0);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countOnline(usersObj) {
  // change code below this line

  // change code above this line
}
```

</div>

### After Test
<div id='js-teardown'>

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

</div>


</section>

## Solution
<section id='solution'>

```js

function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}

```

</section>
