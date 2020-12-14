---
id: 56533eb9ac21ba0edf2244e1
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
title: 循环嵌套
---

## Description
<section id='description'>
如果你有一个二维数组，可以使用相同的逻辑，先遍历外面的数组，再遍历里面的子数组。下面是一个例子：

```js
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

一次输出<code>arr</code>中的每个子元素。提示，对于内部循环，我们可以通过<code>arr[i]</code>的<code>.length</code>来获得子数组的长度，因为<code>arr[i]</code>的本身就是一个数组。
</section>

## Instructions
<section id='instructions'>
修改函数<code>multiplyAll</code>，获得<code>arr</code>内部数组的每个数字相乘的结果<code>product</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>multiplyAll([[1],[2],[3]])</code>应该返回 <code>6</code>。
    testString: assert(multiplyAll([[1],[2],[3]]) === 6);
  - text: <code>multiplyAll([[1,2],[3,4],[5,6,7]])</code>应该返回 <code>5040</code>。
    testString: assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040);
  - text: <code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code>应该返回 <code>54</code>。
    testString: assert(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

</section>
