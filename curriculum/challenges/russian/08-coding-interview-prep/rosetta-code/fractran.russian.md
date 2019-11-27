---
title: Fractran
id: 5a7dad05be01840e1778a0d1
challengeType: 5
forumTopicId: 302270
localeTitle: Fractran
---

## Description
<section id='description'>
<div class="rosetta"><p class="rosetta__paragraph"> <span class="rosetta__text--bold"><a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/FRACTRAN" title="wp: FRACTRAN">FRACTRAN</a></span> - полный эзотерический язык программирования Тьюринга, изобретенный математиком <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/John Horton Conway" title="wp: Джон Хортон Конвей">Джоном Хортоном Конвеем</a> . </p><br><p class="rosetta__paragraph"> Программа FRACTRAN представляет собой упорядоченный список положительных дробей $ P = (f_1, f_2, \ ldots, f_m) $ вместе с начальным положительным целым числом $ n $. </p><br><p class="rosetta__paragraph"> Программа запускается путем обновления целого числа $ n $ следующим образом: </p><br><ul class="rosetta__unordered-list"><li class="rosetta__list-item--unordered"> для первой фракции $ f_i $ в списке, для которого $ nf_i $ является целым числом, замените $ n $ на $ nf_i $; </li><li class="rosetta__list-item--unordered"> повторите это правило, пока никакая фракция в списке не выдает целое число при умножении на $ n $, а затем остановится. </li></ul><br><p class="rosetta__paragraph"> Конвей дал программу для простых чисел в FRACTRAN: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">17 долл. США, долл. США, долл. США, долл. США / $ 13/11 $, $ 15/14 $, $ 15/2 $, $ 55/1 $</span> </p><br><p class="rosetta__paragraph"> Начиная с $ n = 2 $, эта программа FRACTRAN изменит $ n $ на $ 15 = 2 \ times (15/2) $, затем $ 825 = 15 \ times (55/1) $, генерируя следующую последовательность целых чисел: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 $, $ 15 $, $ 825 $, $ 725 $, $ 1925 $, $ 2275 $, $ 425 $, $ 390 $, $ 330 $, $ 290 $, $ 770 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> После 2 эта последовательность содержит следующие степени 2: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 ^ 2 = 4 $, $ 2 ^ 3 = 8 $, $ 2 ^ 5 = 32 $, $ 2 ^ 7 = 128 $, $ 2 ^ {11} = 2048 $, $ 2 ^ {13} = 8192 $, $ 2 ^ {17 } = 131072 $, $ 2 ^ {19} = 524288 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> которые являются главными полномочиями 2. </p><br><dl class="rosetta__description-list"><dt class="rosetta__description-title"> Задача: </dt></dl><p class="rosetta__paragraph"> Напишите функцию, которая принимает программу fractran как строковый параметр и возвращает первые 10 номеров программы в виде массива. Если результат не содержит 10 чисел, тогда возвращаем числа как есть. </p></div>
</section>

## Instructions
<section id='instructions'>
Write a function that takes a fractran program as a string parameter and returns the first 10 numbers of the program as an array. If the result does not have 10 numbers then return the numbers as is.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fractran</code> should be a function.
    testString: assert(typeof fractran=='function');
  - text: <code>fractran("3/2, 1/3")</code> should return an array.
    testString: assert(Array.isArray(fractran('3/2, 1/3')));
  - text: <code>fractran("3/2, 1/3")</code> should return <code>[ 2, 3, 1 ]</code>.
    testString: assert.deepEqual(fractran('3/2, 1/3'), [ 2, 3, 1 ]);
  - text: <code>fractran("3/2, 5/3, 1/5")</code> should return <code>[ 2, 3, 5, 1 ]</code>.
    testString: assert.deepEqual(fractran('3/2, 5/3, 1/5'), [ 2, 3, 5, 1 ]);
  - text: <code>fractran("3/2, 6/3")</code> should return <code>[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]</code>.
    testString: assert.deepEqual(fractran('3/2, 6/3'), [ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]);
  - text: <code>fractran("2/7, 7/2")</code> should return <code>[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]</code>.
    testString: assert.deepEqual(fractran('2/7, 7/2'), [ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]);
  - text: <code>fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")</code> should return <code>[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]</code>.
    testString: assert.deepEqual(fractran('17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1'), [ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fractran(progStr) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function fractran(progStr){
  var num = new Array();
  var den = new Array();
  var val ;
  var out="";
  function compile(prog){
    var regex = /\s*(\d*)\s*\/\s*(\d*)\s*(.*)/m;
    while(regex.test(prog)){
      num.push(regex.exec(prog)[1]);
      den.push(regex.exec(prog)[2]);
      prog = regex.exec(prog)[3];
    }
  }

  function step(val){
    var i=0;
    while(i<den.length && val%den[i] != 0) i++;
    return num[i]*val/den[i];
  }

  var seq=[]

  function exec(val){
    var i = 0;
    while(val && i<limit){
      seq.push(val)
      val = step(val);
      i ++;
    }
  }

  // Main
  compile(progStr);
  var limit = 10;
  exec(2);
  return seq;
}
```

</section>
