---
title: Element-wise operations
id: 599c333915e0ea32d04d4bec
challengeType: 5
videoUrl: ''
localeTitle: Элементные операции
---

## Description
<section id="description"><p> Реализуйте основные матричные матричные и скалярно-матричные операции. </p><p> Воплощать в жизнь: </p><p> :: * дополнение </p><p> :: * вычитание </p><p> :: * умножение </p><p> :: * раздел </p><p> :: * возведение в степень </p><p> Первым параметром будет операция, которая должна быть выполнена, например: «m_add» для добавления матрицы и «s_add» для скалярного добавления. Второй и третий параметры будут представлять собой матрицы, на которых должны выполняться операции. </p></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>operation</code> - это функция.
    testString: 'assert(typeof operation === "function", "<code>operation</code> is a function.");'
  - text: '<code>operation(&quot;m_add&quot;,[[1,2],[3,4]],[[1,2],[3,4]])</code> должны вернуться <code>[[2,4],[6,8]]</code> .'
    testString: 'assert.deepEqual(operation("m_add", [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[2, 4], [6, 8]], "<code>operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[2,4],[6,8]]</code>.");'
  - text: '<code>operation(&quot;s_add&quot;,[[1,2],[3,4]],[[1,2],[3,4]])</code> должны возвращать <code>[[3,4],[5,6]]</code> .'
    testString: 'assert.deepEqual(operation("s_add", [[1, 2], [3, 4]], 2), [[3, 4], [5, 6]], "<code>operation("s_add",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[3,4],[5,6]]</code>.");'
  - text: '<code>operation(&quot;m_sub&quot;,[[1,2],[3,4]],[[1,2],[3,4]])</code> должны возвращать <code>[[0,0],[0,0]]</code> .'
    testString: 'assert.deepEqual(operation("m_sub", [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[0, 0], [0, 0]], "<code>operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[0,0],[0,0]]</code>.");'
  - text: '<code>operation(&quot;m_mult&quot;,[[1,2],[3,4]],[[1,2],[3,4]])</code> должны возвращать <code>[[1,4],[9,16]]</code> .'
    testString: 'assert.deepEqual(operation("m_mult", [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 4], [9, 16]], "<code>operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,4],[9,16]]</code>.");'
  - text: '<code>operation(&quot;m_div&quot;,[[1,2],[3,4]],[[1,2],[3,4]])</code> должны возвращать <code>[[1,1],[1,1]]</code> .'
    testString: 'assert.deepEqual(operation("m_div", [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 1], [1, 1]], "<code>operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,1],[1,1]]</code>.");'
  - text: '<code>operation(&quot;m_exp&quot;,[[1,2],[3,4]],[[1,2],[3,4]])</code> должны вернуться <code>[[1,4],[27,256]]</code> .'
    testString: 'assert.deepEqual(operation("m_exp", [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 4], [27, 256]], "<code>operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])</code> should return <code>[[1,4],[27,256]]</code>.");'
  - text: '<code>operation(&quot;m_add&quot;,[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])</code> должен возвращать <code>[[10,12,14,16],[18,20,22,24]]</code> .'
    testString: 'assert.deepEqual(operation("m_add", [[1, 2, 3, 4], [5, 6, 7, 8]], [[9, 10, 11, 12], [13, 14, 15, 16]]), [[10, 12, 14, 16], [18, 20, 22, 24]], "<code>operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])</code> should return <code>[[10,12,14,16],[18,20,22,24]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function operation (op, arr1, arr2) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
