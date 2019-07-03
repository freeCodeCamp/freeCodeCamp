---
id: 587d7b8f367417b2b2512b61
title: Use the map Method to Extract Data from an Array
challengeType: 1

videoUrl: ''
localeTitle: Use the map Method to Extract Data from an Array
---

## Description
<section id='description'>
目前为止，我们已经学会了使用纯函数来避免程序中的副作用。此外，我们已经看到函数的值仅取决于其输入参数。
这仅仅是个开始。顾名思义，函数式编程以函数理论为中心。
能够将它们作为参数传递给其他函数，和从另一个函数返回一个函数是有意义的。函数在 JavaScript 中被视为<code>First Class Objects</code>，它们可以像任何其他对象一样使用。它们可以保存在变量中，存储在对象中，也可以作为函数参数传递。
让我们从一些简单的数组函数开始，这些函数是数组对象原型上的方法。在本练习中，我们来了解下数组的<code>map</code>方法（即<code>Array.prototype.map()</code>）。
请记住，<code>map</code>方法是迭代数组中每一项的方式之一。在对每个元素应用回调函数后，它会创建一个新数组(不改变原来的数组)。
</section>

## Instructions
<section id='instructions'>
<code>watchList</code>数组保存了包含一些电影信息的对象。使用<code>map</code>从<code>watchList</code>中提取标题（<code>title</code>）和评分（<code>rating</code>），并将新数组保存在<code>rating</code>变量里。目前编辑器中的代码是使用<code>for</code>循环实现，使用<code>map</code>表达式替换循环功能。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>watchList</code>不能被改变
    testString: assert(watchList[0].Title === "Inception" && watchList[4].Director == "James Cameron", '<code>watchList</code>不能被改变');
  - text: 你的代码不能使用<code>for</code>循环。
    testString: assert(!code.match(/for\s*?\(.+?\)/g), '你的代码不能使用<code>for</code>循环。');
  - text: 你的代码应使用<code>map</code>方法。
    testString: assert(code.match(/\.map/g), '你的代码应使用<code>map</code>方法。');
  - text: '<code>rating</code>应等于<code>[{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]</code>.'
    testString: 'assert(JSON.stringify(rating) === JSON.stringify([{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]), "<code>rating</code>应等于<code>[{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              