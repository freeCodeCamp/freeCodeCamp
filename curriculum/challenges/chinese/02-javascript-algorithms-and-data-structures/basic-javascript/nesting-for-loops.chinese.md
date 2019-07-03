---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1

videoUrl: ''
localeTitle: Nesting For Loops
---

## Description
<section id='description'>
如果你有一个二维数组，可以使用相同的逻辑，先遍历外面的数组，再遍历里面的子数组。下面是一个例子：
<blockquote>var arr = [<br>&nbsp;&nbsp;[1,2], [3,4], [5,6]<br>];<br>for (var i=0; i &lt; arr.length; i++) {<br>&nbsp;&nbsp;for (var j=0; j &lt; arr[i].length; j++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(arr[i][j]);<br>&nbsp;&nbsp;}<br>}</blockquote>
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
  - text: <code>multiplyAll([[1],[2],[3]])</code>应该返回 <code>6</code>
    testString: assert(multiplyAll([[1],[2],[3]]) === 6, '<code>multiplyAll([[1],[2],[3]])</code>应该返回 <code>6</code>');
  - text: <code>multiplyAll([[1,2],[3,4],[5,6,7]])</code>应该返回 <code>5040</code>
    testString: assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040, '<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code>应该返回 <code>5040</code>');
  - text: <code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code>应该返回 <code>54</code>
    testString: assert(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54, '<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code>应该返回 <code>54</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              