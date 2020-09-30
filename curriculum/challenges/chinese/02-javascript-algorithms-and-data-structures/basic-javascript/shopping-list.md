---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
localeTitle: 购物清单
---

## Description
<section id='description'>
创建一个名叫<code>myList</code>的购物清单，清单的数据格式就是多维数组。
每个子数组中的第一个元素应该是购买的物品名称，第二个元素应该是物品的数量，类似于：
<code>["Chocolate Bar", 15]</code>
任务：你的购物清单至少应该有 5 个子数组。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code>应该一个数组。
    testString: assert(isArray);
  - text: 你的每个子数组的第一个元素的类型都应该是字符串。
    testString: assert(hasString);
  - text: 你的每个子数组的第二个元素的类型都应该是数字。
    testString: assert(hasNumber);
  - text: 你的列表中至少要包含 5 个元素。
    testString: assert(count > 4);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];


```

</div>


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
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
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
