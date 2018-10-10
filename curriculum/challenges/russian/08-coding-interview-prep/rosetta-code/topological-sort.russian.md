---
title: Topological sort
id: 594fa2746886f41f7d8bf225
challengeType: 5
videoUrl: ''
localeTitle: Топологическая сортировка
---

## Description
<section id="description"><p> Учитывая сопоставление между элементами и элементами, на которых они зависят, <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: топологическая сортировка">топологические</a> позиции <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: топологическая сортировка">сортировки сортируются,</a> так что ни один элемент не предшествует элементу, от которого он зависит. </p><p> Компиляция библиотеки на языке <a href="https://en.wikipedia.org/wiki/VHDL" title="wp: VHDL">VHDL</a> имеет ограничение на то, что библиотека должна быть скомпилирована после любой библиотеки, от которой она зависит. </p> Задача: <p> Напишите функцию, которая вернет действительный порядок компиляции библиотек VHDL из их зависимостей. </p> Предположим, что имена библиотек - это одиночные слова. Пункты, упомянутые как только иждивенцы, не имеют собственных иждивенцев, но их порядок компиляции должен быть дан. Любые собственные зависимости следует игнорировать. Любые неустановимые зависимости следует игнорировать. <p> В качестве примера используйте следующие данные: </p><pre> БИБЛИОТЕЧНЫЕ БИОГРАФИЧЕСКИЕ ЗАВИСИМОСТИ
======= =============================
des_system_lib std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
dw01 ieee dw01 dware gtech
dw02 ieee dw02 dware
dw03 std synopsys dware dw03 dw02 dw01 ieee gtech
dw04 dw04 ieee dw01 dware gtech
dw05 dw05 ieee dware
dw06 dw06 ieee dware
dw07 ieee dware
dware ieee dware
gtech ieee gtech
ramlib std ieee
std_cell_lib ieee std_cell_lib
Synopsys
</pre><p> <small>Примечание: вышеуказанные данные были бы неустановимыми, если, например, <code>dw04</code> добавляется в список зависимостей <code>dw01</code> .</small> </p> Cf: <pre> <code>&lt;a href=&quot;http://rosettacode.org/wiki/Topological sort/Extracted top item&quot; title=&quot;Topological sort/Extracted top item&quot;&gt;Topological sort/Extracted top item&lt;/a&gt;.</code> </pre><p> Существует два популярных алгоритма топологической сортировки: </p><p> Канский топологический сорт 1962 года и поиск по глубине: <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: топологическая сортировка">топологическая сортировка</a> </p><p> Джейсон Сакс: <a href="http://www.embeddedrelated.com/showarticle/799.php" title="ссылка: http://www.embeddedrelated.com/showarticle/799.php">«Десять небольших алгоритмов, часть 4: топологическая сортировка»</a> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topologicalSort</code> функция <code>topologicalSort</code> является функцией.
    testString: 'assert(typeof topologicalSort === "function", "<code>topologicalSort</code> is a function.");'
  - text: <code>topologicalSort</code> должен вернуть правильный порядок библиотек.
    testString: 'assert.deepEqual(topologicalSort(libsSimple), ["bbb", "aaa"], "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> должен вернуть правильный порядок библиотек.
    testString: 'assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL, "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> должен вернуть правильный порядок библиотек.
    testString: 'assert.deepEqual(topologicalSort(libsCustom), solutionCustom, "<code>topologicalSort</code> must return correct library order..");'
  - text: <code>topologicalSort</code> должен игнорировать неупорядоченные зависимости.
    testString: 'assert.deepEqual(topologicalSort(libsUnorderable), solutionUnorderable, "<code>topologicalSort</code> must ignore unorderable dependencies..");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topologicalSort(libs) {
  // Good luck!
  return true;
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
