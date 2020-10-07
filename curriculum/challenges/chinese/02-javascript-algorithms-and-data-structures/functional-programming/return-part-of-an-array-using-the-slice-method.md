---
id: 587d7b90367417b2b2512b65
challengeType: 1
forumTopicId: 301239
title: 使用 slice 方法返回数组的一部分
---

## Description
<section id='description'>
<code>slice</code>方法可以从已有数组中返回指定元素。它接受两个参数，第一个规定从何处开始选取，第二个规定从何处结束选取（不包括该元素）。如果没有传参，则默认为从数组的开头开始到结尾结束，这是复制整个数组的简单方式。<code>slice</code>返回一个新数组，不会修改原始数组。
举个例子：

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

</section>

## Instructions
<section id='instructions'>
在<code>sliceArray</code>函数中使用<code>slice</code>方法，给出<code>beginSlice</code>和<code>endSlice</code>索引，返回<code>anim</code>数组的一部分，这个函数应返回一个数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码中应使用<code>slice</code>方法。
    testString: assert(code.match(/\.slice/g));
  - text: 不能改变<code>inputAnim</code>变量。
    testString: assert(JSON.stringify(inputAnim) === JSON.stringify(["Cat", "Dog", "Tiger", "Zebra", "Ant"]));
  - text: "<code>sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)</code>应返回<code>['Dog', 'Tiger']</code>。"
    testString: assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)) === JSON.stringify(["Dog", "Tiger"]));
  - text: "<code>sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)</code>应返回<code>['Cat']</code>。"
    testString: assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)) === JSON.stringify(["Cat"]));
  - text: "<code>sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)</code>应返回<code>['Dog', 'Tiger', 'Zebra']</code>。"
    testString: assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)) === JSON.stringify(["Dog", "Tiger", "Zebra"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line


  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  return anim.slice(beginSlice, endSlice)
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

</section>
