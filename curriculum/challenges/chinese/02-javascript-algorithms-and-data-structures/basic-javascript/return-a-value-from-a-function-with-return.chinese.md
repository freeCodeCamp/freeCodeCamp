---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
localeTitle: 函数可以返回某个值
---

## Description
<section id='description'>
我们可以通过函数的<dfn>参数</dfn>把值传入函数，也可以使用<code>return</code>语句把数据从一个函数中传出来。
<strong>示例</strong>

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

<code>plusThree</code>带有一个<code>num</code>的<dfn>参数</dfn>并且返回（returns）一个等于<code>num + 3</code>的值。
</section>

## Instructions
<section id='instructions'>
创建一个函数<code>timesFive</code>接收一个参数, 把它乘以<code>5</code>之后返回，关于如何测试timesFive 函数，可以参考编辑器中最后一行的示例。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code>应是一个函数。
    testString: assert(typeof timesFive === 'function');
  - text: <code>timesFive(5)</code>应该返回<code>25</code>。
    testString: assert(timesFive(5) === 25);
  - text: <code>timesFive(2)</code>应该返回<code>10</code>。
    testString: assert(timesFive(2) === 10);
  - text: <code>timesFive(0)</code>应该返回<code>0</code>。
    testString: assert(timesFive(0) === 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line



console.log(minusSeven(10));
```

</div>



</section>

## Solution
<section id='solution'>


```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```

</section>
