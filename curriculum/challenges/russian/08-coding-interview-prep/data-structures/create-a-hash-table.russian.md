---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
forumTopicId: 301627
localeTitle: Создание таблицы хешей
---

## Description
<section id='description'>
В этой задаче мы узнаем о хэш-таблицах. Хэш-таблица используется для реализации ассоциативных массивов или сопоставлений пар ключ-значение, таких как объекты и Карты, которые мы только что изучали. Например, объект JavaScript может быть реализован как хэш-таблица (его фактическая реализация будет зависеть от среды, в которой он работает). Способ работы хеш-таблицы состоит в том, что он принимает ключевой ввод и делит этот ключ на некоторое числовое значение. Это числовое значение затем используется как фактический ключ, связанное значение сохраняется. Затем, если вы снова попытаетесь получить доступ к тому же ключу, хеширующая функция обработает ключ, вернет тот же числовой результат, который затем будет использоваться для поиска связанного значения. Это обеспечивает очень эффективное время поиска O (1) в среднем. Хэш-таблицы могут быть реализованы как массивы с хеш-функциями, производящими индексы массивов в заданном диапазоне. В этом методе выбор размера массива важен, как и функция хэширования. Например, что, если функция хэширования дает одно и то же значение для двух разных ключей? Это называется столкновением. Один из способов обработки коллизий - просто сохранить обе пары ключ-значение в этом индексе. Затем, после поиска либо, вам придется перебирать ведро предметов, чтобы найти ключ, который вы ищете. Хорошая функция хэширования минимизирует столкновения для поддержания эффективного времени поиска. Здесь мы не будем беспокоиться о деталях хэширования или реализации хеш-таблицы, мы просто попытаемся получить общее представление о том, как они работают. Инструкции: Давайте создадим базовую функциональность хеш-таблицы. Мы создали наивную функцию хэширования для вас. Вы можете передать строковое значение в хэш функции, и оно вернет хешированное значение, которое вы можете использовать в качестве ключа для хранения. Храните элементы на основе этого хешированного значения в объекте this.collection. Создайте эти три метода: добавьте, удалите и найдите. Первый должен принять пару значений ключа для добавления в хеш-таблицу. Второй должен удалить пару ключ-значение при передаче ключа. Третий должен принять ключ и вернуть связанное значение или null, если ключ отсутствует. Обязательно напишите свой код для учета конфликтов!
</section>

## Instructions
<section id='instructions'>
Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. You can pass a string value to the function <code>hash</code> and it will return a hashed value you can use as a key for storage. Store items based on this hashed value in the <code>this.collection</code> object. Create these three methods: <code>add</code>, <code>remove</code>, and <code>lookup</code>. The first should accept a key value pair to add to the hash table. The second should remove a key-value pair when passed a key. The third should accept a key and return the associated value or <code>null</code> if the key is not present.
Be sure to write your code to account for collisions!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The HashTable data structure exists.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return (typeof test === 'object')})());
  - text: The HashTable has an add method.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.add) === 'function')})());
  - text: The HashTable has an remove method.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.remove) === 'function')})());
  - text: The HashTable has an lookup method.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.lookup) === 'function')})());
  - text: The add method adds key value pairs and the lookup method returns the values associated with a given key.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); return (test.lookup('key') === 'value')})());
  - text: The remove method accepts a key as input and removes the associated key value pair.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); test.remove('key'); return (test.lookup('key') === null)})());
  - text: Items are added using the hash function.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('key2','value2'); test.add('key3','value3'); return (called === 3)})());
  - text: The hash table handles collisions.
    testString: assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('1key','value2'); test.add('ke1y','value3'); return (test.lookup('key1') === 'value1' && test.lookup('1key') == 'value2' && test.lookup('ke1y') == 'value3')})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  // change code above this line
};

```

</div>

### Before Tests
<div id='js-setup'>

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
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
