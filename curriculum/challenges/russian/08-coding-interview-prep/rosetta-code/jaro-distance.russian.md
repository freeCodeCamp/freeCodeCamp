---
title: Jaro distance
id: 5a23c84252665b21eecc7ec2
challengeType: 5
videoUrl: ''
localeTitle: Расстояние Jaro
---

## Description
<section id="description"> Расстояние Jaro является мерой сходства между двумя строками. Чем выше расстояние Jaro для двух строк, тем более похожи строки. Оценка нормализуется так, что <b>0 не</b> приравнивается к подобию, а <b>1</b> - точное совпадение. Определение Расстояние Jaro \ (d_j \) двух заданных строк \ (s_1 \) и \ (s_2 \) - это \ begin {align} d_j = \ begin {cases} 0 &amp; &amp; \ text {if} m = 0 \\\ \ {\ frac {1} {3}} \ left ({\ frac {m} {| s_ {1} |}} + {\ frac {m} {| s_ {2} |}} + {\ frac { mt} {m}} \ right) &amp; &amp; \ text {other} \ end {cases} \ end {align} Где: <ul><li> \ (m \) - количество <i>совпадающих символов</i> ; </li><li> \ (t \) - половина числа <i>транспозиций</i> . </li></ul> Два символа из \ (s_1 \) и \ (s_2 \) соответственно, считаются <i>совпадающими,</i> только если они одинаковы, а не дальше \ (\ left \ lfloor \ frac {\ max (| s_1 |, | s_2 |)} {2} \ право \ rfloor-1 \). Каждый символ \ (s_1 \) сравнивается со всеми его совпадающими символами в \ (s_2 \). Количество совпадающих (но разных порядковых порядков) символов, деленное на 2, определяет количество <i>транспозиций</i> . <b>Пример.</b> С учетом строк \ (s_1 \) <i>DWAYNE</i> и \ (s_2 \) <i>DUANE</i> находим: <ul><li> \ (т = 4 \) </li><li> \ (| s_1 | = 6 \) </li><li> \ (| s_2 | = 5 \) </li><li> \ (t = 0 \) </li></ul> Мы находим оценку Джаро: \ (d_j = \ frac {1} {3} \ left (\ frac {4} {6} + \ frac {4} {5} + \ frac {4-0} {4} \ right) = 0.822 \). Напишите функцию a, которая принимает две строки в качестве параметров и возвращает связанное расстояние Jaro. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jaro</code> должен быть функцией.
    testString: 'assert(typeof jaro=="function","<code>jaro</code> should be a function.");'
  - text: '<code>jaro(&quot;&quot;+tests[0][0]+&quot;&quot;,&quot;&quot;+tests[0][1]+&quot;&quot;)</code> должны возвращать число.'
    testString: 'assert(typeof jaro(tests[0][0],tests[0][1])=="number","<code>jaro()</code> should return a number.");'
  - text: '<code>jaro(&quot;&quot;+tests[0][0]+&quot;&quot;,&quot;&quot;+tests[0][1]+&quot;&quot;)</code> должны возвращать <code>&quot;+results[0]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[0][0],tests[0][1]),results[0],"<code>jaro(""+tests[0][0]+"",""+tests[0][1]+"")</code> should return <code>"+results[0]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[1][0]+&quot;&quot;,&quot;&quot;+tests[1][1]+&quot;&quot;)</code> должны возвращать <code>&quot;+results[1]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[1][0],tests[1][1]),results[1],"<code>jaro(""+tests[1][0]+"",""+tests[1][1]+"")</code> should return <code>"+results[1]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[2][0]+&quot;&quot;,&quot;&quot;+tests[2][1]+&quot;&quot;)</code> должны возвращать <code>&quot;+results[2]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[2][0],tests[2][1]),results[2],"<code>jaro(""+tests[2][0]+"",""+tests[2][1]+"")</code> should return <code>"+results[2]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[3][0]+&quot;&quot;,&quot;&quot;+tests[3][1]+&quot;&quot;)</code> должны возвращать <code>&quot;+results[3]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[3][0],tests[3][1]),results[3],"<code>jaro(""+tests[3][0]+"",""+tests[3][1]+"")</code> should return <code>"+results[3]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[4][0]+&quot;&quot;,&quot;&quot;+tests[4][1]+&quot;&quot;)</code> должны возвращать <code>&quot;+results[4]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[4][0],tests[4][1]),results[4],"<code>jaro(""+tests[4][0]+"",""+tests[4][1]+"")</code> should return <code>"+results[4]+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jaro (s, t) {
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
