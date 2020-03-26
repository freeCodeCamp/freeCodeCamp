---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
videoUrl: ''
localeTitle: 使用for循环遍历所有数组的项目
---

## Description
<section id="description">有时在使用数组时，能够遍历每个项目以查找我们可能需要的一个或多个元素，或者根据哪些数据项符合某组标准来操作数组非常方便。 JavaScript提供了几种内置方法，每种方法都以稍微不同的方式迭代数组以实现不同的结果（例如<code>every()</code> ， <code>forEach()</code> ， <code>map()</code>等），但是这种技术最灵活并且为我们提供了最大的控制量是一个简单的<code>for</code>循环。考虑以下： <blockquote> function greaterThanTen（arr）{ <br>让newArr = []; <br> for（let i = 0; i &lt;arr.length; i ++）{ <br> if（arr [i]&gt; 10）{ <br> （ARR [I]）newArr.push; <br> } <br> } <br>返回newArr; <br> } <br><br> greaterThanTen（[2,12,8,14,80,0,1]）; <br> //返回[12,14,80] </blockquote>使用<code>for</code>循环，此函数遍历并访问数组的每个元素，并使其经受我们创建的简单测试。通过这种方式，我们可以轻松地以编程方式确定哪些数据项大于<code>10</code> ，并返回包含这些项的新数组。 </section>

## Instructions
<section id="instructions">我们定义了一个函数<code>filteredArray</code> ，它接受<code>arr</code> ，一个嵌套数组和<code>elem</code>作为参数，并返回一个新数组。 <code>elem</code>表示在<code>arr</code>嵌套的一个或多个数组上可能存在或不存在的元素。使用<code>for</code>循环修改函数，以返回已传递数组的过滤版本，以便删除嵌套在包含<code>elem</code> <code>arr</code>中的任何数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code>应该返回<code>[ [10, 8, 3], [14, 6, 23] ]</code>'
    testString: assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]]);
  - text: '<code>filteredArray([ [&quot;trumpets&quot;, 2], [&quot;flutes&quot;, 4], [&quot;saxophones&quot;, 2] ], 2)</code>应返回<code>[ [&quot;flutes&quot;, 4] ]</code>'
    testString: assert.deepEqual(filteredArray([ ['trumpets', 2], ['flutes', 4], ['saxophones', 2] ], 2), [['flutes', 4]]);
  - text: '<code>filteredArray([ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;], [&quot;dave&quot;, &quot;sean&quot;, &quot;peter&quot;] ], &quot;peter&quot;)</code>应该返回<code>[ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;] ]</code>'
    testString: assert.deepEqual(filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter'), [['amy', 'beth', 'sam']]);
  - text: '<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code>应该返回<code>[ ]</code>'
    testString: assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), []);
  - text: <code>filteredArray</code>函数应该使用<code>for</code>循环
    testString: assert.notStrictEqual(filteredArray.toString().search(/for/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
