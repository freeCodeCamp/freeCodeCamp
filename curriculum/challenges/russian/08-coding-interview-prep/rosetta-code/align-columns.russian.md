---
title: Align columns
id: 594810f028c0303b75339ad0
challengeType: 5
videoUrl: ''
localeTitle: Выровнять столбцы
---

## Description
<section id="description"><p> Учитывая текстовый файл многих строк, где поля в строке обозначаются одним символом <code>$</code> , напишите программу, которая выравнивает каждый столбец полей, гарантируя, что слова в каждом столбце разделены хотя бы одним пробелом. Кроме того, разрешите каждое слово в столбце быть либо оправданным, либо оправданным, либо оправданным по центру в его столбце. </p><p> Используйте следующий текст для тестирования своих программ: </p><pre> Учитывая $ в $ текста $ файл $ из $ многих $ линий
где $ поля $ в $ а $ линия $
составляют $ очерчены $ на $ «доллар» в размере $ одноместный $ символа $
написать $ в $ программе
что $ совпадет $ каждый $ столбец $ из $ полей
от $ обеспечения $, что $ слова $ в $ каждый $
колонка $ являются $ $ разделены на $ по $ мере $ за $ пространство.
Кроме того, $ позволяют $ за $ каждого $ слова $ в $ A $ столбец $ до $ быть $ либо $ остался $
оправданный, $ права $ оправдано
или $ центр $ оправдана $ в $ его $ колонке.
</pre><p> Обратите внимание, что: </p> Примеры строк ввода текста могут или не могут иметь завершающие символы доллара. Все столбцы должны иметь одинаковое выравнивание. Последовательные символы пробела, создаваемые рядом с концом строк, несущественны для целей задачи. Текст вывода будет отображаться моноширинным шрифтом в текстовом редакторе или базовом терминале. Минимальное пространство между столбцами должно быть вычислено из текста, а не жестко закодировано. Не требуется добавлять разделительные символы между столбцами или вокруг них. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>formatText</code> - это функция.
    testString: 'assert(typeof formatText === "function", "<code>formatText</code> is a function.");'
  - text: '<code>formatText</code> с указанным выше вводом и «правильным» обоснованием должен <code>formatText</code> следующее:'
    testString: 'assert.strictEqual(formatText(testInput, "right"), rightAligned, "<code>formatText</code> with the above input and "right" justification should produce the following: ");'
  - text: '<code>formatText</code> с указанным выше вводом и «левым» обоснованием должен <code>formatText</code> следующее:'
    testString: 'assert.strictEqual(formatText(testInput, "left"), leftAligned, "<code>formatText</code> with the above input and "left" justification should produce the following: ");'
  - text: '<code>formatText</code> с указанным выше вводом и выравниванием «центра» должно приводить к следующему:'
    testString: 'assert.strictEqual(formatText(testInput, "center"), centerAligned, "<code>formatText</code> with the above input and "center" justification should produce the following: ");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

function formatText (input, justification) {
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
