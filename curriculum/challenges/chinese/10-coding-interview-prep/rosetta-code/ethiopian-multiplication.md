---
id: 599d1566a02b571412643b84
challengeType: 5
videoUrl: ''
title: 埃塞俄比亚的乘法
---

## Description
<section id="description"><p>埃塞俄比亚乘法是一种仅使用加法，加倍和减半来乘以整数的方法。 </p><p>方法： </p>取两个数字相乘，然后将它们写在两列的顶部。在左侧列中反复将最后一个数字减半，丢弃任何余数，并将结果写入同一列中的最后一个，直到您写入值1.在右侧列中重复加倍最后一个数字并写入结果如下。在左侧列显示的同一行中添加结果时停止1.检查生成的表并丢弃左列中的值为偶数的任何行。将右侧列中的值相加，以产生将原始两个数相乘的结果<p>例如：17×34 </p><p> 17 34 </p><p>将第一列减半： </p><p> 17 34 </p><p> 8 </p><p> 4 </p><p> 2 </p><p> 1 </p><p>加倍第二列： </p><p> 17 34 </p><p> 8 68 </p><p> 4 136 </p><p> 2 272 </p><p> 1 544 </p><p>第一个单元格为偶数的删除行： </p><p> 17 34 </p><p> 8 <strike>68</strike> </p><p> 4 <strike>136</strike> </p><p> 2 <strike>272</strike> </p><p> 1 544 </p><p>将右侧列中的剩余数字相加： </p><p> 17 34 </p><p> 8  - </p><p> 4 --- </p><p> 2 --- </p><p> 1 544 </p><p> ==== </p><p> 578 </p><p>所以17乘以34，埃塞俄比亚方法是578。 </p>任务： <p>任务是定义三个命名函数/方法/过程/子例程： </p>一个将一个整数减半，一个减半整数，一个整数是偶数。 <p>使用这些函数创建一个执行埃塞俄比亚乘法的函数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eth_mult</code>是一个功能。
    testString: assert(typeof eth_mult === 'function');
  - text: '<code>eth_mult(17,34)</code>应该返回<code>578</code> 。'
    testString: assert.equal(eth_mult(17, 34), 578);
  - text: '<code>eth_mult(23,46)</code>应该返回<code>1058</code> 。'
    testString: assert.equal(eth_mult(23, 46), 1058);
  - text: '<code>eth_mult(12,27)</code>应该返回<code>324</code> 。'
    testString: assert.equal(eth_mult(12, 27), 324);
  - text: '<code>eth_mult(56,98)</code>应该返回<code>5488</code> 。'
    testString: assert.equal(eth_mult(56, 98), 5488);
  - text: '<code>eth_mult(63,74)</code>应该返回<code>4662</code> 。'
    testString: assert.equal(eth_mult(63, 74), 4662);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult (a, b) {
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

/section>
