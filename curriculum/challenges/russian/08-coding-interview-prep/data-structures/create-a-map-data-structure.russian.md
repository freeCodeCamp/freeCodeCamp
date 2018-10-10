---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
videoUrl: ''
localeTitle: Создание структуры данных карты
---

## Description
<section id="description"> Следующие несколько проблем будут охватывать карты и хеш-таблицы. Карты - это структуры данных, в которых хранятся пары ключ-значение. В JavaScript они доступны для нас как объекты. Карты обеспечивают быстрый поиск сохраненных элементов на основе значений ключей и являются очень распространенными и полезными структурами данных. Инструкции: Давайте попробуем создать собственную карту. Поскольку объекты JavaScript обеспечивают гораздо более эффективную структуру карты, чем все, что мы могли бы здесь написать, это в первую очередь предназначено для обучения. Однако объекты JavaScript предоставляют нам определенные операции. Что, если мы хотим определить пользовательские операции? Используйте объект <code>Map</code> указанный здесь как обертка вокруг <code>object</code> JavaScript. Создайте следующие методы и операции над объектом Map: <ul><li> <code>add</code> принимает пару <code>key, value</code> для добавления на карту. </li><li> <code>remove</code> принимает ключ и удаляет связанную пару <code>key, value</code> </li><li> <code>get</code> принимает <code>key</code> и возвращает сохраненное <code>value</code> </li><li> <code>has</code> принимает <code>key</code> и возвращает <dfn>истину</dfn> , если ключ существует , или <dfn>ложь</dfn> , если она не делает. </li><li> <code>values</code> возвращают массив всех значений на карте </li><li> <code>size</code> возвращает количество элементов на карте </li><li> <code>clear</code> пустую карту </li></ul></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Структура данных карты существует.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test == "object")})(), "The Map data structure exists.");'
  - text: 'Объект Map имеет следующие методы: добавление, удаление, получение, наличие, значения, очистка и размер.'
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; return (typeof test.add == "function" && typeof test.remove == "function" && typeof test.get == "function" && typeof test.has == "function" && typeof test.values == "function" && typeof test.clear == "function" && typeof test.size == "function")})(), "The Map object has the following methods: add, remove, get, has, values, clear, and size.");'
  - text: Метод добавления добавляет элементы к карте.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 2)})(), "The add method adds items to the map.");'
  - text: Метод has возвращает true для добавленных элементов и false для отсутствующих элементов.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("test","value"); return (test.has("test") && !test.has("false"))})(), "The has method returns true for added items and false for absent items.");'
  - text: Метод get принимает ключи как входные данные и возвращает связанные значения.
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("abc","def"); return (test.get("abc") == "def")})(), "The get method accepts keys as input and returns the associated values.");'
  - text: 'Метод values ​​возвращает все значения, хранящиеся на карте, в виде строк в массиве.'
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("a","b"); test.add("c","d"); test.add("e","f"); var vals = test.values(); return (vals.indexOf("b") != -1 && vals.indexOf("d") != -1 && vals.indexOf("f") != -1)})(), "The values method returns all the values stored in the map as strings in an array.");'
  - text: 'Метод clear очищает карту, а метод size возвращает количество элементов, присутствующих на карте.'
    testString: 'assert((function() { var test = false; if (typeof Map !== "undefined") { test = new Map() }; test.add("b","b"); test.add("c","d"); test.remove("asdfas"); var init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})(), "The clear method empties the map and the size method returns the number of items present in the map.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Map = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
