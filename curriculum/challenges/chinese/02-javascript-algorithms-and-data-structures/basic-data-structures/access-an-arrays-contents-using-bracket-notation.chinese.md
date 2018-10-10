---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: 使用括号表示法访问数组的内容
---

## Description
<section id="description">当然，任何数据结构的基本特征是不仅能够存储数据，而且能够根据命令检索该数据。所以，既然我们已经学会了如何创建数组，那么让我们开始考虑如何访问该数组的信息。当我们定义一个如下所示的简单数组时，其中有3个项目： <blockquote>让ourArray = [“a”，“b”，“c”]; </blockquote>在数组中，每个数组项都有一个<dfn>索引</dfn> 。此索引兼作数组中该项的位置，以及您如何引用它。但是，值得注意的是，JavaScript数组是<dfn>零索引的</dfn> ，这意味着数组的第一个元素实际上处于第<em><strong>零</strong></em>位，而不是第一个。为了从数组中检索元素，我们可以将一个索引括在括号中，并将其附加到数组的末尾，或者更常见的是附加到引用数组对象的变量。这称为<dfn>括号表示法</dfn> 。例如，如果我们想从<code>ourArray</code>检索<code>&quot;a&quot;</code>并将其分配给变量，我们可以使用以下代码执行此操作： <blockquote>让ourVariable = ourArray [0]; <br> // ourVariable等于“a” </blockquote>除了访问与索引相关的值，你还可以<em>设置</em>索引使用相同的符号中的值： <blockquote> ourArray [1] =“不再是b”; <br> // ourArray现在等于[“a”，“不再b”，“c”]; </blockquote>使用括号表示法，我们现在将索引1处的项目从<code>&quot;b&quot;</code>重置为<code>&quot;not b anymore&quot;</code> 。 </section>

## Instructions
<section id="instructions">为了完成此挑战，将<code>myArray</code>的第二个位置（索引<code>1</code> ）设置为您想要的任何内容，除了<code>&quot;b&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray[0]</code>等于<code>&quot;a&quot;</code>'
    testString: 'assert.strictEqual(myArray[0], "a", "<code>myArray[0]</code> is equal to <code>"a"</code>");'
  - text: '<code>myArray[1]</code>不再设置为<code>&quot;b&quot;</code>'
    testString: 'assert.notStrictEqual(myArray[1], "b", "<code>myArray[1]</code> is no longer set to <code>"b"</code>");'
  - text: '<code>myArray[2]</code>等于<code>&quot;c&quot;</code>'
    testString: 'assert.strictEqual(myArray[2], "c", "<code>myArray[2]</code> is equal to <code>"c"</code>");'
  - text: '<code>myArray[3]</code>等于<code>&quot;d&quot;</code>'
    testString: 'assert.strictEqual(myArray[3], "d", "<code>myArray[3]</code> is equal to <code>"d"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
