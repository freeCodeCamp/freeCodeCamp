---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1

videoUrl: ''
localeTitle: Return a Value from a Function with Return
---

## Description
<section id='description'>
我们可以通过函数的<dfn>参数</dfn>把值传入函数，也可以使用<code>return</code>语句把数据从一个函数中传出来。
<strong>示例</strong>
<blockquote>function plusThree(num) {<br>  return num + 3;<br>}<br>var answer = plusThree(5); // 8</blockquote>
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
  - text: <code>timesFive</code>应是一个函数
    testString: assert(typeof timesFive === 'function', '<code>timesFive</code>应是一个函数');
  - text: <code>timesFive(5)</code>应该返回<code>25</code>
    testString: assert(timesFive(5) === 25, '<code>timesFive(5)</code>应该返回<code>25</code>');
  - text: <code>timesFive(2)</code>应该返回<code>10</code>
    testString: assert(timesFive(2) === 10, '<code>timesFive(2)</code>应该返回<code>10</code>');
  - text: <code>timesFive(0)</code>应该返回<code>0</code>
    testString: assert(timesFive(0) === 0, '<code>timesFive(0)</code>应该返回<code>0</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              