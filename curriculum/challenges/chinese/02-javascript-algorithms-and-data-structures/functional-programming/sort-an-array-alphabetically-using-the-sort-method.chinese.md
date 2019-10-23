---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
videoUrl: ''
localeTitle: 使用sort方法按字母顺序对数组进行排序
---

## Description
<section id="description"> <code>sort</code>方法根据回调函数对数组的元素进行<code>sort</code> 。例如： <blockquote> function ascendingOrder（arr）{ <br> return arr.sort（function（a，b）{ <br>返回a  -  b; <br> }）; <br> } <br> ascendingOrder（[1,5,2,3,4]）; <br> //返回[1,2,3,4,5] <br><br> function reverseAlpha（arr）{ <br> return arr.sort（function（a，b）{ <br>返回&lt;b; <br> }）; <br> } <br> reverseAlpha（[&#39;l&#39;，&#39;h&#39;，&#39;z&#39;，&#39;b&#39;，&#39;s&#39;]）; <br> //返回[&#39;z&#39;，&#39;s&#39;，&#39;l&#39;，&#39;h&#39;，&#39;b&#39;] </blockquote>注意：鼓励提供回调函数来指定如何对数组项进行排序。 JavaScript的默认排序方法是字符串Unicode点值，这可能会返回意外结果。 </section>

## Instructions
<section id="instructions">使用<code>alphabeticalOrder</code>函数中的<code>sort</code>方法<code>alphabeticalOrder</code>字母顺序对<code>arr</code>的元素进行排序。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>sort</code>方法。
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;d&quot;, &quot;c&quot;, &quot;a&quot;, &quot;z&quot;, &quot;g&quot;])</code>应返回<code>[&quot;a&quot;, &quot;a&quot;, &quot;c&quot;, &quot;d&quot;, &quot;g&quot;, &quot;z&quot;]</code> 。'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]), "<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;x&quot;, &quot;h&quot;, &quot;a&quot;, &quot;m&quot;, &quot;n&quot;, &quot;m&quot;])</code>应返回<code>[&quot;a&quot;, &quot;h&quot;, &quot;m&quot;, &quot;m&quot;, &quot;n&quot;, &quot;x&quot;]</code> 。'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]), "<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;x&quot;, &quot;t&quot;])</code>应返回<code>[&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;t&quot;, &quot;x&quot;]</code> 。'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]), "<code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line


  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
