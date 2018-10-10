---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
challengeType: 5
videoUrl: ''
localeTitle: Общие вопросы FizzBuzz
---

## Description
<section id="description"> Напишите обобщенную версию <a href="http://rosettacode.org/wiki/FizzBuzz">FizzBuzz,</a> которая работает для любого списка факторов вместе со своими словами. Это в основном реализация «fizzbuzz», где правила игры предоставляются пользователю. Создайте функцию для ее реализации. Функция должна принимать два параметра. Первым будет массив с правилами FizzBuzz. Например: <code>[ [3,&quot;Fizz&quot;] , [5,&quot;Buzz&quot;] ]</code> . Это указывает на то, что <code>Fizz</code> следует печатать, если число кратно 3 и <code>Buzz</code> если оно кратно 5. Если оно кратно, то строки должны быть объединены в порядке, указанном в массиве. В этом случае <code>FizzBuzz</code> если число кратно 3 и 5. Второй параметр - это номер, для которого функция должна возвращать строку, как указано выше. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>genFizzBuzz</code> должен быть функцией.
    testString: 'assert(typeof genFizzBuzz=="function","<code>genFizzBuzz</code> should be a function.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+tests[0][1]+&quot;)</code> должны возвращать тип.'
    testString: 'assert(typeof genFizzBuzz(tests[0][0],tests[0][1])=="string","<code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code> should return a type.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+tests[0][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[0]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[0][0],tests[0][1]),results[0],"<code>genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")</code> should return <code>""+results[0]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[1][0])+&quot;,&quot;+tests[1][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[1]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[1][0],tests[1][1]),results[1],"<code>genFizzBuzz("+JSON.stringify(tests[1][0])+","+tests[1][1]+")</code> should return <code>""+results[1]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[2][0])+&quot;,&quot;+tests[2][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[2]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[2][0],tests[2][1]),results[2],"<code>genFizzBuzz("+JSON.stringify(tests[2][0])+","+tests[2][1]+")</code> should return <code>""+results[2]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[3][0])+&quot;,&quot;+tests[3][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[3]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[3][0],tests[3][1]),results[3],"<code>genFizzBuzz("+JSON.stringify(tests[3][0])+","+tests[3][1]+")</code> should return <code>""+results[3]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[4][0])+&quot;,&quot;+tests[4][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[4]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[4][0],tests[4][1]),results[4],"<code>genFizzBuzz("+JSON.stringify(tests[4][0])+","+tests[4][1]+")</code> should return <code>""+results[4]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[5][0])+&quot;,&quot;+tests[5][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[5]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[5][0],tests[5][1]),results[5],"<code>genFizzBuzz("+JSON.stringify(tests[5][0])+","+tests[5][1]+")</code> should return <code>""+results[5]+""</code>.");'
  - text: '<code>genFizzBuzz(&quot;+JSON.stringify(tests[6][0])+&quot;,&quot;+tests[6][1]+&quot;)</code> должны возвращать <code>&quot;&quot;+results[6]+&quot;&quot;</code> .'
    testString: 'assert.equal(genFizzBuzz(tests[6][0],tests[6][1]),results[6],"<code>genFizzBuzz("+JSON.stringify(tests[6][0])+","+tests[6][1]+")</code> should return <code>""+results[6]+""</code>.");'

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
</section>
