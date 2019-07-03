---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1

videoUrl: ''
localeTitle: Shopping List
---

## Description
<section id='description'>
你不仅可以<code>shift</code>（移出）数组中的第一个元素，你也可以<code>unshift</code>（移入）一个元素到数组的头部。
<code>.unshift()</code>函数用起来就像<code>.push()</code>函数一样, 但不是在数组的末尾添加元素，而是在数组的头部添加元素。
</section>

## Instructions
<section id='instructions'>
使用<code>unshift()</code>函数把<code>["Paul",35]</code>加入到<code>myArray</code>的头部。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code>应该一个数组
    testString: assert(isArray, '<code>myList</code>应该一个数组');
  - text: 你的每个子数组的第一个元素的类型都应该是字符串
    testString: assert(hasString, '你的每个子数组的第一个元素的类型都应该是字符串');
  - text: 你的每个子数组的第二个元素的类型都应该是数字
    testString: assert(hasNumber, '你的每个子数组的第二个元素的类型都应该是数字');
  - text: 你的列表中至少要包含 5 个元素
    testString: assert(count > 4, '你的列表中至少要包含 5 个元素');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      myList.forEach(function(elem) {
        if(typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      });
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```

</section>
              