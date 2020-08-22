---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
videoUrl: ''
localeTitle: 找到对称差异
---

## Description
<section id="description">创建一个带有两个或更多数组的函数，并返回所提供数组的<dfn>对称差</dfn> （ <code>△</code>或<code>⊕</code> ）数组。给定两个集合（例如集合<code>A = {1, 2, 3}</code>并且集合<code>B = {2, 3, 4}</code> ），两个集合的数学术语“对称差异”是在任一集合中的元素集合。两组，但两者都没有（ <code>A △ B = C = {1, 4}</code> ）。对于你所采取的每一个额外的对称差异（比如在集合<code>D = {2, 3}</code> ），你应该得到具有两个集合中的任何一个但不是两个集合的元素的集合（ <code>C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}</code> ）。结果数组必须仅包含唯一值（ <em>不重复</em> ）。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4])</code>应返回<code>[3, 4, 5]</code> 。'
    testString: assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4])</code>应仅包含三个元素。'
    testString: assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
  - text: '<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code>应该返回<code>[3, 4, 5]</code> 。'
    testString: assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
  - text: '<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code>应仅包含三个元素。'
    testString: assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code>应返回<code>[3, 4, 5]</code> 。'
    testString: assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code>应仅包含三个元素。'
    testString: assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
  - text: '<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code>应该返回<code>[1, 4, 5]</code>'
    testString: assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
  - text: '<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code>应仅包含三个元素。'
    testString: assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
  - text: '<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code>应该返回<code>[1, 4, 5]</code> 。'
    testString: assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
  - text: '<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code>应仅包含三个元素。'
    testString: assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code>应该返回<code>[2, 3, 4, 6, 7]</code> <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> <code>[2, 3, 4, 6, 7]</code> 。'
    testString: assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7]);
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code>应仅包含五个元素。'
    testString: assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5);
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code>应该返回<code>[1, 2, 4, 5, 6, 7, 8, 9]</code> 。'
    testString: assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9]);
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code>应该只包含八个元素。'
    testString: assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
