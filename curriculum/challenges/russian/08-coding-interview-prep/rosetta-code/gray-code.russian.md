---
title: Gray code
id: 5a23c84252665b21eecc7e80
challengeType: 5
forumTopicId: 302276
localeTitle: Серый код
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/Gray code">Серый код</a> - это форма двоичного кодирования, где переходы между последовательными числами отличаются только одним битом. Это полезное кодирование для снижения опасности аппаратных данных со значениями, которые быстро изменяются и / или подключаются к более медленному оборудованию в качестве входных данных. Он также полезен для генерации входных данных для <a href="https://en.wikipedia.org/wiki/Karnaugh map">карт Карно</a> в порядке слева направо или сверху вниз. Создайте функцию для кодирования числа и декодирования числа из кода Grey. Функция должна иметь 2 параметра. Первый будет логическим. Функция должна кодироваться для истины и декодирования для false. Второй параметр будет номером, который должен быть закодирован / декодирован. Отображение нормальных двоичных представлений, представлений серого кода и декодированных значений кода Grey для всех 5-битных двоичных чисел (0-31 включительно, что приводит к 0 не нужно). Существует много возможных кодов Грея. Следующее кодирует так называемый «двоичный отраженный серый код». <br> Кодирование (MSB - бит 0, b - двоичный, g - код Grey): <code><br> if b[i-1] = 1 <br> <span style="padding-left:1em">g[i] = not b[i]</span> <br> else <br> <span style="padding-left:1em">g[i] = b[i]</span> <br></code> Или: <br> <code>g = b xor (b logically right shifted 1 time)</code> <br> Декодирование (MSB - бит 0, b - двоичный, g - код Grey): <br> <code>b[0] = g[0] <br> for other bits: <br> b[i] = g[i] xor b[i-1] <br></code>
</section>

## Instructions
<section id='instructions'>
Create a function to encode a number to and decode a number from Gray code. The function should will have 2 parameters.
The first would be a boolean. The function should encode for true and decode for false. The second parameter would be the number to be encoded/decoded.
Display the normal binary representations, Gray code representations, and decoded Gray code values for all 5-bit binary numbers (0-31 inclusive, leading 0's not necessary).
There are many possible Gray codes. The following encodes what is called "binary reflected Gray code."
Encoding (MSB is bit 0, b is binary, g is Gray code):
<pre>
if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>
Or:
<pre>
g = b xor (b logically right shifted 1 time)
</pre>
Decoding (MSB is bit 0, b is binary, g is Gray code):
<pre>
b[0] = g[0]<br>
for other bits:
b[i] = g[i] xor b[i-1]
</pre>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gray</code> should be a function.
    testString: assert(typeof gray=='function');
  - text: <code>gray(true,177)</code> should return a number.
    testString: assert(typeof gray(true,177)=='number');
  - text: <code>gray(true,177)</code> should return <code>233</code>.
    testString: assert.equal(gray(true,177),233);
  - text: <code>gray(true,425)</code> should return <code>381</code>.
    testString: assert.equal(gray(true,425),381);
  - text: <code>gray(true,870)</code> should return <code>725</code>.
    testString: assert.equal(gray(true,870),725);
  - text: <code>gray(false,233)</code> should return <code>177</code>.
    testString: assert.equal(gray(false,233),177);
  - text: <code>gray(false,381)</code> should return <code>425</code>.
    testString: assert.equal(gray(false,381),425);
  - text: <code>gray(false,725)</code> should return <code>870</code>.
    testString: assert.equal(gray(false,725),870);

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
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```

</section>
