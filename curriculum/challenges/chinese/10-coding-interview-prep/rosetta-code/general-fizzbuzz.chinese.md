---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
challengeType: 5
videoUrl: ''
localeTitle: 一般的FizzBu​​zz
---

## Description
<section id="description">编写<a href="http://rosettacode.org/wiki/FizzBuzz">FizzBu​​zz</a>的通用版本，适用于任何因子列表及其单词。这基本上是一种“fizzbuzz”实现，其中游戏规则被提供给用户。创建一个实现此功能的函数。该函数应该有两个参数。第一个是带有FizzBu​​zz规则的数组。例如： <code>[ [3,"Fizz"] , [5,"Buzz"] ]</code> 。此indcates该<code>Fizz</code> ，如果数量是3的倍数，并应被打印<code>Buzz</code>如果是5的倍数。如果它是两则字符串应该在阵列中指定的顺序被连结的倍数。在这种情况下，如果数字是3和5的倍数，则为<code>FizzBuzz</code> 。第二个参数是函数应返回如上所述的字符串的数字。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>genFizzBuzz</code>应该是一个功能。
    testString: assert(typeof genFizzBuzz=='function');
  - text: <code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code>应该返回一个类型。
    testString: assert(typeof genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)=='string');
  - text: <code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code>应返回<code>""+results[0]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6), "Fizz");
  - text: <code>genFizzBuzz("+JSON.stringify(tests[1][0])+","+tests[1][1]+")</code>应返回<code>""+results[1]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10), "Buzz");
  - text: <code>genFizzBuzz("+JSON.stringify(tests[2][0])+","+tests[2][1]+")</code>应返回<code>""+results[2]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12), "Buzz");
  - text: <code>genFizzBuzz("+JSON.stringify(tests[3][0])+","+tests[3][1]+")</code>应返回<code>""+results[3]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13), '13');
  - text: <code>genFizzBuzz("+JSON.stringify(tests[4][0])+","+tests[4][1]+")</code>应该返回<code>""+results[4]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15), "BuzzFizz");
  - text: <code>genFizzBuzz("+JSON.stringify(tests[5][0])+","+tests[5][1]+")</code>应返回<code>""+results[5]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15), "FizzBuzz");
  - text: <code>genFizzBuzz("+JSON.stringify(tests[6][0])+","+tests[6][1]+")</code>应该返回<code>""+results[6]+""</code> 。
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105), "FizzBuzzBaxx");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function genFizzBuzz (rules, num) {
  // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
