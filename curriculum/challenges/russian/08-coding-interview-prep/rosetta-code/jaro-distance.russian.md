---
title: Jaro distance
id: 5a23c84252665b21eecc7ec2
challengeType: 5
forumTopicId: 302292
localeTitle: Расстояние Jaro
---

## Description
<section id='description'>
Расстояние Jaro является мерой сходства между двумя строками. Чем выше расстояние Jaro для двух строк, тем более похожи строки. Оценка нормализуется так, что <b>0 не</b> приравнивается к подобию, а <b>1</b> - точное совпадение. Определение Расстояние Jaro \ (d_j \) двух заданных строк \ (s_1 \) и \ (s_2 \) - это \ begin {align} d_j = \ begin {cases} 0 &amp; &amp; \ text {if} m = 0 \\\ \ {\ frac {1} {3}} \ left ({\ frac {m} {| s_ {1} |}} + {\ frac {m} {| s_ {2} |}} + {\ frac { mt} {m}} \ right) &amp; &amp; \ text {other} \ end {cases} \ end {align} Где: <ul><li> \ (m \) - количество <i>совпадающих символов</i> ; </li><li> \ (t \) - половина числа <i>транспозиций</i> . </li></ul> Два символа из \ (s_1 \) и \ (s_2 \) соответственно, считаются <i>совпадающими,</i> только если они одинаковы, а не дальше \ (\ left \ lfloor \ frac {\ max (| s_1 |, | s_2 |)} {2} \ право \ rfloor-1 \). Каждый символ \ (s_1 \) сравнивается со всеми его совпадающими символами в \ (s_2 \). Количество совпадающих (но разных порядковых порядков) символов, деленное на 2, определяет количество <i>транспозиций</i> . <b>Пример.</b> С учетом строк \ (s_1 \) <i>DWAYNE</i> и \ (s_2 \) <i>DUANE</i> находим: <ul><li> \ (т = 4 \) </li><li> \ (| s_1 | = 6 \) </li><li> \ (| s_2 | = 5 \) </li><li> \ (t = 0 \) </li></ul> Мы находим оценку Джаро: \ (d_j = \ frac {1} {3} \ left (\ frac {4} {6} + \ frac {4} {5} + \ frac {4-0} {4} \ right) = 0.822 \). Напишите функцию a, которая принимает две строки в качестве параметров и возвращает связанное расстояние Jaro.
</section>

## Instructions
<section id='instructions'>
Write a function a that takes two strings as parameters and returns the associated Jaro distance.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jaro</code> should be a function.
    testString: assert(typeof jaro=='function');
  - text: <code>jaro("MARTHA", "MARHTA")</code> should return a number.
    testString: assert(typeof jaro('MARTHA', 'MARHTA')=='number');
  - text: <code>jaro("MARTHA", "MARHTA")</code> should return <code>0.9444444444444445</code>.
    testString: assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
  - text: <code>jaro("DIXON", "DICKSONX")</code> should return <code>0.7666666666666666</code>.
    testString: assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
  - text: <code>jaro("JELLYFISH", "SMELLYFISH")</code> should return <code>0.8962962962962964</code>.
    testString: assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
  - text: <code>jaro("HELLOS", "CHELLO")</code> should return <code>0.888888888888889</code>.
    testString: assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
  - text: <code>jaro("ABCD", "BCDA")</code> should return <code>0.8333333333333334</code>.
    testString: assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jaro(s, t) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function jaro(s, t) {
  var s_len = s.length;
  var t_len = t.length;

  if (s_len == 0 && t_len == 0) return 1;

  var match_distance = Math.max(s_len, t_len) / 2 - 1;

  var s_matches = new Array(s_len);
  var t_matches = new Array(t_len);

  var matches = 0;
  var transpositions = 0;

  for (var i = 0; i < s_len; i++) {
    var start = Math.max(0, i - match_distance);
    var end = Math.min(i + match_distance + 1, t_len);

    for (var j = start; j < end; j++) {
      if (t_matches[j]) continue;
      if (s.charAt(i) != t.charAt(j)) continue;
      s_matches[i] = true;
      t_matches[j] = true;
      matches++;
      break;
    }
  }

  if (matches == 0) return 0;

  var k = 0;
  for (var i = 0; i < s_len; i++) {
    if (!s_matches[i]) continue;
    while (!t_matches[k]) k++;
    if (s.charAt(i) != t.charAt(k)) transpositions++;
    k++;
  }

  return ((matches / s_len) +
    (matches / t_len) +
    ((matches - transpositions / 2.0) / matches)) / 3.0;
}
```

</section>
