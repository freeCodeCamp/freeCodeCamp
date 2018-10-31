---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
videoUrl: ''
localeTitle: Создание таблицы хешей
---

## Description
<section id="description"> В этой задаче мы узнаем о хэш-таблицах. Хэш-таблица используется для реализации ассоциативных массивов или сопоставлений пар ключ-значение, таких как объекты и Карты, которые мы только что изучали. Например, объект JavaScript может быть реализован как хэш-таблица (его фактическая реализация будет зависеть от среды, в которой он работает). Способ работы хеш-таблицы состоит в том, что он принимает ключевой ввод и делит этот ключ на некоторое числовое значение. Это числовое значение затем используется как фактический ключ, связанное значение сохраняется. Затем, если вы снова попытаетесь получить доступ к тому же ключу, хеширующая функция обработает ключ, вернет тот же числовой результат, который затем будет использоваться для поиска связанного значения. Это обеспечивает очень эффективное время поиска O (n) в среднем. Хэш-таблицы могут быть реализованы как массивы с хеш-функциями, производящими индексы массивов в заданном диапазоне. В этом методе выбор размера массива важен, как и функция хэширования. Например, что, если функция хэширования дает одно и то же значение для двух разных ключей? Это называется столкновением. Один из способов обработки коллизий - просто сохранить обе пары ключ-значение в этом индексе. Затем, после поиска либо, вам придется перебирать ведро предметов, чтобы найти ключ, который вы ищете. Хорошая функция хэширования минимизирует столкновения для поддержания эффективного времени поиска. Здесь мы не будем беспокоиться о деталях хэширования или реализации хеш-таблицы, мы просто попытаемся получить общее представление о том, как они работают. Инструкции: Давайте создадим базовую функциональность хеш-таблицы. Мы создали наивную функцию хэширования для вас. Вы можете передать строковое значение в хэш функции, и оно вернет хешированное значение, которое вы можете использовать в качестве ключа для хранения. Храните элементы на основе этого хешированного значения в объекте this.collection. Создайте эти три метода: добавьте, удалите и найдите. Первый должен принять пару значений ключа для добавления в хеш-таблицу. Второй должен удалить пару ключ-значение при передаче ключа. Третий должен принять ключ и вернуть связанное значение или null, если ключ отсутствует. Обязательно напишите свой код для учета конфликтов! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Структура данных HashTable существует.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return (typeof test === "object")})(), "The HashTable data structure exists.");'
  - text: В HashTable есть метод добавления.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.add) === "function")})(), "The HashTable has an add method.");'
  - text: У метода HashTable есть метод удаления.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.remove) === "function")})(), "The HashTable has an remove method.");'
  - text: У метода HashTable есть метод поиска.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; return ((typeof test.lookup) === "function")})(), "The HashTable has an lookup method.");'
  - text: 'Метод add добавляет пары ключевых значений, и метод поиска возвращает значения, связанные с данным ключом.'
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); return (test.lookup("key") === "value")})(), "The add method adds key value pairs and the lookup method returns the values associated with a given key.");'
  - text: Метод remove принимает ключ как ввод и удаляет связанную пару ключей.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; test.add("key", "value"); test.remove("key"); return (test.lookup("key") === null)})(), "The remove method accepts a key as input and removes the associated key value pair.");'
  - text: Элементы добавляются с помощью хэш-функции.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("key2","value2"); test.add("key3","value3"); return (called === 3)})(), "Items are added using the hash function.");'
  - text: Хэш-таблица обрабатывает конфликты.
    testString: 'assert((function() { var test = false; if (typeof HashTable !== "undefined") { test = new HashTable() }; called = 0; test.add("key1","value1"); test.add("1key","value2"); test.add("ke1y","value3"); return (test.lookup("key1") === "value1" && test.lookup("1key") == "value2" && test.lookup("ke1y") == "value3")})(), "The hash table handles collisions.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>

### Before Test
<div id='js-setup'>

```js
  var called = 0;
    var hash = (string) => {
     called++;
      var hash = 0;
      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
      return hash;
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
