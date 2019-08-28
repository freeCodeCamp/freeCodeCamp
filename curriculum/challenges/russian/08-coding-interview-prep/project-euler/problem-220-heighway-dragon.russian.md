---
id: 5900f4481000cf542c50ff5b
challengeType: 5
title: 'Problem 220: Heighway Dragon'
forumTopicId: 301863
localeTitle: 'Проблема 220: Heighway Dragon'
---

## Description
<section id='description'>
Пусть D0 - двухбуквенная строка «Fa». Для n≥1 выведите Dn из Dn-1 с помощью правил перезаписи строк: <p> &quot;a&quot; → &quot;aRbFR&quot; &quot;b&quot; → &quot;LFaLb&quot; </p><p> Таким образом, D0 = «Fa», D1 = «FaRbFR», D2 = «FaRbFRRLFaLbFR» и т. Д. </p><p> Эти строки можно интерпретировать как инструкции для программы компьютерной графики, а «F» означает «нарисовать одну единицу», «L» означает «повернуть налево на 90 градусов», «R» означает «повернуть направо на 90 градусов», а «a &quot;и&quot; b &quot;игнорируются. Начальная позиция компьютерного курсора - (0,0), направленная вверх (0,1). </p><p> Тогда Dn является экзотическим рисунком, известным как Драконский Дракон порядка n. Например, D10 показан ниже; считая каждый «F» в качестве одного шага, выделенное пятно на (18,16) представляет собой положение, достигнутое после 500 шагов. </p><p> Какова позиция курсора после 1012 шагов в D50? Дайте свой ответ в форме x, y без пробелов. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler220()</code> should return 139776, 963904.
    testString: assert.strictEqual(euler220(), 139776, 963904);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler220() {
  // Good luck!
  return true;
}

euler220();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
