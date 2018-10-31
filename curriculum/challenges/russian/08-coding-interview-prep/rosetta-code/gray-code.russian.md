---
title: Gray code
id: 5a23c84252665b21eecc7e80
challengeType: 5
videoUrl: ''
localeTitle: Серый код
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Gray code">Серый код</a> - это форма двоичного кодирования, где переходы между последовательными числами отличаются только одним битом. Это полезное кодирование для снижения опасности аппаратных данных со значениями, которые быстро изменяются и / или подключаются к более медленному оборудованию в качестве входных данных. Он также полезен для генерации входных данных для <a href="https://en.wikipedia.org/wiki/Karnaugh map">карт Карно</a> в порядке слева направо или сверху вниз. Создайте функцию для кодирования числа и декодирования числа из кода Grey. Функция должна иметь 2 параметра. Первый будет логическим. Функция должна кодироваться для истины и декодирования для false. Второй параметр будет номером, который должен быть закодирован / декодирован. Отображение нормальных двоичных представлений, представлений серого кода и декодированных значений кода Grey для всех 5-битных двоичных чисел (0-31 включительно, что приводит к 0 не нужно). Существует много возможных кодов Грея. Следующее кодирует так называемый «двоичный отраженный серый код». <br> Кодирование (MSB - бит 0, b - двоичный, g - код Grey): <code><br> if b[i-1] = 1 <br> <span style="padding-left:1em">g[i] = not b[i]</span> <br> else <br> <span style="padding-left:1em">g[i] = b[i]</span> <br></code> Или: <br> <code>g = b xor (b logically right shifted 1 time)</code> <br> Декодирование (MSB - бит 0, b - двоичный, g - код Grey): <br> <code>b[0] = g[0] <br> for other bits: <br> b[i] = g[i] xor b[i-1] <br></code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gray</code> должен быть функцией.
    testString: 'assert(typeof gray=="function","<code>gray</code> should be a function.");'
  - text: '<code>gray(true,177)</code> должен возвращать число.'
    testString: 'assert(typeof gray(true,177)=="number","<code>gray(true,177)</code> should return a number.");'
  - text: '<code>gray(true,177)</code> должен возвращать <code>233</code> .'
    testString: 'assert.equal(gray(true,177),233,"<code>gray(true,177)</code> should return <code>233</code>.");'
  - text: '<code>gray(true,425)</code> должен возвращать <code>381</code> .'
    testString: 'assert.equal(gray(true,425),381,"<code>gray(true,425)</code> should return <code>381</code>.");'
  - text: '<code>gray(true,870)</code> должен возвращать <code>725</code> .'
    testString: 'assert.equal(gray(true,870),725,"<code>gray(true,870)</code> should return <code>725</code>.");'
  - text: '<code>gray(false,233)</code> должен вернуть <code>177</code> .'
    testString: 'assert.equal(gray(false,233),177,"<code>gray(false,233)</code> should return <code>177</code>.");'
  - text: '<code>gray(false,381)</code> должен возвращать <code>425</code> .'
    testString: 'assert.equal(gray(false,381),425,"<code>gray(false,381)</code> should return <code>425</code>.");'
  - text: '<code>gray(false,725)</code> должен возвращать <code>870</code> .'
    testString: 'assert.equal(gray(false,725),870,"<code>gray(false,725)</code> should return <code>870</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gray(enc, number) {
 // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
