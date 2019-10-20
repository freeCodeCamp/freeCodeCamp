---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
videoUrl: ''
localeTitle: 使用切片方法返回数组的一部分
---

## Description
<section id="description"> <code>slice</code>方法返回数组的某些元素的副本。它可以采用两个参数，第一个给出切片开始位置的索引，第二个是切片结束位置的索引（并且它是非包含的）。如果未提供参数，则默认为从数组的开头到结尾开始，这是复制整个数组的简单方法。 <code>slice</code>方法不会改变原始数组，但会返回一个新数组。这是一个例子： <blockquote> var arr = [“Cat”，“Dog”，“Tiger”，“Zebra”]; <br> var newArray = arr.slice（1,3）; <br> //将newArray设置为[“Dog”，“Tiger”] </blockquote></section>

## Instructions
<section id="instructions">在给定提供的<code>beginSlice</code>和<code>endSlice</code>索引的情况下，使用<code>sliceArray</code>函数中的<code>slice</code>方法返回<code>anim</code>数组的一部分。该函数应返回一个数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>slice</code>方法。
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: <code>inputAnim</code>变量不应该更改。
    testString: 'assert(JSON.stringify(inputAnim) === JSON.stringify(["Cat", "Dog", "Tiger", "Zebra", "Ant"]), "The <code>inputAnim</code> variable should not change.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 3)</code>应该返回<code>[&quot;Dog&quot;, &quot;Tiger&quot;]</code> 。'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)) === JSON.stringify(["Dog", "Tiger"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)</code> should return <code>["Dog", "Tiger"]</code>.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 0, 1)</code>应返回<code>[&quot;Cat&quot;]</code> 。'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)) === JSON.stringify(["Cat"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)</code> should return <code>["Cat"]</code>.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 4)</code>应返回<code>[&quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;]</code> 。'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)) === JSON.stringify(["Dog", "Tiger", "Zebra"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)</code> should return <code>["Dog", "Tiger", "Zebra"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line


  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
