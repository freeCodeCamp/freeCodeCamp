---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
videoUrl: ''
localeTitle: 将数组与Spread运算符组合在一起
---

## Description
<section id="description"> <dfn>扩展</dfn>运算符的另一个巨大优势是能够组合数组，或者在任何索引处将一个数组的所有元素插入到另一个数组中。使用更传统的语法，我们可以连接数组，但这只允许我们在一个数组的末尾和另一个数组的开头组合数组。 Spread语法使以下操作非常简单： <blockquote>让thisArray = [&#39;sage&#39;，&#39;迷迭香&#39;，&#39;欧芹&#39;，&#39;百里香&#39;]; <br><br>让那个阵容= [&#39;罗勒&#39;，&#39;香菜&#39;，......这个阿雷，&#39;香菜&#39;]; <br> //现在等于[&#39;罗勒&#39;，&#39;香菜&#39;，&#39;鼠尾草&#39;，&#39;迷迭香&#39;，&#39;欧芹&#39;，&#39;百里香&#39;，&#39;香菜&#39;] </blockquote>使用扩展语法，我们刚刚实现了一个操作，如果我们使用传统方法，这个操作会更复杂，更冗长。 </section>

## Instructions
<section id="instructions">我们定义了一个函数<code>spreadOut</code> ，它返回变量<code>sentence</code> ，使用<dfn>spread</dfn>运算符修改函数，使它返回数组<code>[&#39;learning&#39;, &#39;to&#39;, &#39;code&#39;, &#39;is&#39;, &#39;fun&#39;]</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>spreadOut</code>应该返回<code>[&quot;learning&quot;, &quot;to&quot;, &quot;code&quot;, &quot;is&quot;, &quot;fun&quot;]</code>'
    testString: assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
  - text: <code>spreadOut</code>函数应该使用扩展语法
    testString: assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
