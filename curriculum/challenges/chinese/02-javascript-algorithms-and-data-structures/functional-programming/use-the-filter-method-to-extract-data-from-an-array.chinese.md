---
id: 587d7b8f367417b2b2512b63
title: Use the filter Method to Extract Data from an Array
challengeType: 1

videoUrl: ''
localeTitle: Use the filter Method to Extract Data from an Array
---

## Description
<section id='description'>
另一个有用的数组方法是<code>filter()</code>（即<code>Array.prototype.filter()</code>）。<code>filter</code>方法会返回一个长度不大于原始数组的新数组。
和<code>map</code>一样，<code>Filter</code>不会改变原始数组，它接收一个回调函数，将回调内的逻辑应用于数组的每个元素。新数组包含根据回调函数内条件返回 true 的元素。
</section>

## Instructions
<section id='instructions'>
<code>watchList</code>是包含一些电影信息的对象。结合<code>filter</code>和<code>map</code>返回一个只包含<code>title</code>和<code>rating</code>属性的新数组，并且<code>imdbRating</code>值大于或等于 8.0。请注意，评级值在对象中保存为字符串，你可能需要将它转换成数字来执行运算。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>watchList</code>应保持不变。
    testString: assert(watchList[0].Title === "Inception" && watchList[4].Director == "James Cameron", '<code>watchList</code>应保持不变。');
  - text: 应使用<code>filter</code>方法。
    testString: assert(code.match(/\.filter/g), '应使用<code>filter</code>方法。');
  - text: 不能使用<code>for</code>循环。
    testString: assert(!code.match(/for\s*?\(.+?\)/g), '不能使用<code>for</code>循环。');
  - text: '<code>filteredList</code>应等于<code>[{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}]</code>。'
    testString: 'assert.deepEqual(filteredList, [{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}], "<code>filteredList</code>应等于<code>[{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}]</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              