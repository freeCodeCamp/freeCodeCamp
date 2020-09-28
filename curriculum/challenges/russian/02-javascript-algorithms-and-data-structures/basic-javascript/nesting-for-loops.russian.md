---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
videoUrl: https://scrimba.com/c/cRn6GHM
forumTopicId: 18248
localeTitle: Вложение в петли
---

## Description
<section id='description'>
Если у вас многомерный массив, вы можете использовать ту же логику, что и предыдущая путевая точка, чтобы прокручивать как массив, так и любые подмассивы. Вот пример: <blockquote> var arr = [ <br> [1,2], [3,4], [5,6] <br> ]; <br> для (var i = 0; i &lt;arr.length; i ++) { <br> для (var j = 0; j &lt;arr [i] .length; j ++) { <br> console.log (обр [я] [J]); <br> } <br> } </blockquote> Это выводит каждый подэлемент в <code>arr</code> одному за раз. Обратите внимание, что для внутреннего цикла мы проверяем <code>.length</code> of <code>arr[i]</code> , так как <code>arr[i]</code> сам является массивом.
</section>

## Instructions
<section id='instructions'>
Модифицировать функцию <code>multiplyAll</code> так, чтобы она умножала переменную <code>product</code> на каждое число в подмассивах <code>arr</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>
    testString: assert(multiplyAll([[1],[2],[3]]) === 6);
  - text: <code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>
    testString: assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040);
  - text: <code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> should return <code>54</code>
    testString: assert(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54);

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
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

</section>
