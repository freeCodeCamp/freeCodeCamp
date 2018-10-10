---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: 使用splice（）删除项目
---

## Description
<section id="description">好的，所以我们已经学会了如何使用<code>shift()</code>和<code>pop()</code>从数组的开头和结尾删除元素，但是如果我们想要从中间某处删除元素呢？或者一次删除多个元素？好吧，这就是<code>splice()</code>用武之地<code>splice()</code>允许我们这样做：从数组中的任何位置<strong>删除任意数量的连续元素</strong> 。 <code>splice()</code>可能需要长达3个参数，但现在，我们将重点放在刚第一2.第2个参数<code>splice()</code>是其代表索引的整数，或位置中，阵列的该<code>splice()</code>是为呼吁。请记住，数组是<em>零索引的</em> ，所以为了表示数组的第一个元素，我们将使用<code>0</code> 。 <code>splice()</code>的第一个参数表示从中开始删除元素的数组的索引，而第二个参数表示要删除的元素的数量。例如： <blockquote>让array = [&#39;今天&#39;，&#39;是&#39;，&#39;不&#39;，&#39;所以&#39;，&#39;伟大&#39;]; <br><br> array.splice（2,2）; <br> //删除以第3个元素开头的2个元素<br> //数组现在等于[&#39;今天&#39;，&#39;是&#39;，&#39;很棒&#39;] </blockquote> <code>splice()</code>不仅修改了它被调用的数组，而且还返回一个包含被删除元素值的新数组： <blockquote>让array = [&#39;我&#39;，&#39;我&#39;，&#39;感觉&#39;，&#39;真的&#39;，&#39;快乐&#39;]; <br><br> let newArray = array.splice（3,2）; <br> // newArray等于[&#39;真&#39;&#39;，&#39;快乐&#39;] </blockquote></section>

## Instructions
<section id="instructions">我们定义了一个函数<code>sumOfTen</code> ，它将一个数组作为参数，并返回该数组元素的总和。使用<code>splice()</code>修改函数，使其返回值<code>10</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code>应该返回10
    testString: 'assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, "<code>sumOfTen</code> should return 10");'
  - text: <code>sumOfTen</code>函数应该使用<code>splice()</code>方法
    testString: 'assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1, "The <code>sumOfTen</code> function should utilize the <code>splice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
