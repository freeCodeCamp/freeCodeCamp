---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
videoUrl: ''
localeTitle: 使用push（）和unshift（）将项添加到数组
---

## Description
<section id="description">数组的长度与它可以包含的数据类型一样，并不固定。可以使用任意数量的元素的长度来定义数组，并且可以随时间添加或移除元素;换句话说，数组是<dfn>可变的</dfn> 。在这个挑战中，我们将研究两种方法，我们可以用它们以编程方式修改数组： <code>Array.push()</code>和<code>Array.unshift()</code> 。两种方法都将一个或多个元素作为参数，并将这些元素添加到调用该方法的数组中; <code>push()</code>方法将元素添加到数组的末尾， <code>unshift()</code>将元素添加到开头。考虑以下： <blockquote>让二十三&#39;=&#39;XXIII&#39;; <br>让romanNumerals = [&#39;XXI&#39;，&#39;XXII&#39;]; <br><br> romanNumerals.unshift（&#39;XIX&#39;，&#39;XX&#39;）; <br> //现在等于[&#39;XIX&#39;，&#39;XX&#39;，&#39;XXI&#39;，&#39;XXII&#39;] <br><br> romanNumerals.push（二十三）; <br> //现在等于[&#39;XIX&#39;，&#39;XX&#39;，&#39;XXI&#39;，&#39;XXII&#39;，&#39;XXIII&#39;]请注意，我们也可以传递变量，这使我们可以更灵活地动态修改数组的数据。 </blockquote></section>

## Instructions
<section id="instructions">我们定义了一个函数<code>mixedNumbers</code> ，我们将一个数组作为参数传递。修改函数使用<code>push()</code>和<code>unshift()</code>将<code>&#39;I&#39;, 2, &#39;three&#39;</code>到数组的开头，将<code>7, &#39;VIII&#39;, 9</code>到结尾，以便返回的数组包含数字的表示形式按顺序1-9。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code>现在应该返回<code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code>'
    testString: assert.deepEqual(mixedNumbers(['IV', 5, 'six']), ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9]);
  - text: <code>mixedNumbers</code>函数应该使用<code>push()</code>方法
    testString: assert(mixedNumbers.toString().match(/\.push/));
  - text: <code>mixedNumbers</code>函数应该使用<code>unshift()</code>方法
    testString: assert(mixedNumbers.toString().match(/\.unshift/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
