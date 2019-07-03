---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1

videoUrl: ''
localeTitle: Nest one Array within Another Array
---

## Description
<section id='description'>
你也可以在数组中包含其他数组，例如：<code>[["Bulls", 23], ["White Sox", 45]]</code>。这被称为一个<dfn>多维数组<dfn>。
</section>

## Instructions
<section id='instructions'>
创建一个名为<code>myArray</code>的多维数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该包含至少一个嵌入的数组
    testString: assert(Array.isArray(myArray) && myArray.some(Array.isArray), '应该包含至少一个嵌入的数组');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [[1,2,3]];
```

</section>
              