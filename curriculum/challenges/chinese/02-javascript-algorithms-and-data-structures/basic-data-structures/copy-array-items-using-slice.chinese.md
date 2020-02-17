---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
videoUrl: ''
localeTitle: 使用slice（）复制数组项
---

## Description
<section id="description">我们将介绍的下一个方法是<code>slice()</code> 。 <code>slice()</code> ，而不是修改数组，将给定数量的元素复制或<em>提取</em>到新数组，而不改变它所调用的数组。 <code>slice()</code>只接受2个参数 - 第一个是开始提取的索引，第二个是停止提取的索引（提取将发生，但不包括此索引处的元素）。考虑一下： <blockquote>让weatherConditions = [&#39;rain&#39;，&#39;snow&#39;，&#39;sleet&#39;，&#39;hail&#39;，&#39;clear&#39;]; <br><br>让todaysWeather = weatherConditions.slice（1,3）; <br> //今天天气等于[&#39;雪&#39;，&#39;雨夹雪&#39;]; <br> // weatherConditions仍等于[&#39;rain&#39;，&#39;snow&#39;，&#39;sleet&#39;，&#39;hail&#39;，&#39;clear&#39;] <br></blockquote>实际上，我们通过从现有数组中提取元素来创建一个新数组。 </section>

## Instructions
<section id="instructions">我们定义了一个以数组作为参数的函数<code>forecast</code> 。使用<code>slice()</code>修改函数以从参数数组中提取信息，并返回包含元素<code>&#39;warm&#39;</code>和<code>&#39;sunny&#39;</code>的新数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>forecast</code>应该返回<code>[&quot;warm&quot;, &quot;sunny&quot;]</code>'
    testString: assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']), ['warm', 'sunny']);
  - text: <code>forecast</code>函数应该使用<code>slice()</code>方法
    testString: assert(/\.slice\(/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function forecast(arr) {
  // change code below this line

  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
