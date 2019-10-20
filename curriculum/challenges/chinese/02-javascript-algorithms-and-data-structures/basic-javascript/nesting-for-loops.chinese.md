---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
videoUrl: ''
localeTitle: 嵌套循环
---

## Description
<section id="description">如果您有一个多维数组，则可以使用与先前路点相同的逻辑来遍历数组和任何子数组。这是一个例子： <blockquote> var arr = [ <br> [1,2]，[3,4]，[5,6] <br> ]。 <br> for（var i = 0; i &lt;arr.length; i ++）{ <br> for（var j = 0; j &lt;arr [i] .length; j ++）{ <br>的console.log（ARR [i] [j]）; <br> } <br> } </blockquote>这个输出在每个子元件<code>arr</code>一次一个。注意，对于内部循环，我们检查<code>arr[i]</code>的<code>.length</code> ，因为<code>arr[i]</code>本身就是一个数组。 </section>

## Instructions
<section id="instructions">修改函数<code>multiplyAll</code> ，使其乘以<code>product</code>变量乘以<code>arr</code>的子数组中的每个数字</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>multiplyAll([[1],[2],[3]])</code>应该返回<code>6</code>'
    testString: 'assert(multiplyAll([[1],[2],[3]]) === 6, "<code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>");'
  - text: '<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code>应返回<code>5040</code>'
    testString: 'assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040, "<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>");'
  - text: '<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code>应该返回<code>54</code>'
    testString: 'assert(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54, "<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> should return <code>54</code>");'

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
// solution required
```
</section>
