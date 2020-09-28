---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
forumTopicId: 301632
localeTitle: Создание набора классов
---

## Description
<section id='description'>
В следующих нескольких упражнениях мы собираемся создать функцию для эмуляции структуры данных, называемой «Set». Набор подобен массиву, но он не может содержать повторяющиеся значения. Типичное использование набора - это просто проверить наличие предмета. Это может быть реализовано с помощью объекта, например: <blockquote> var set = new Object (); <br> set.foo = true; <br> // Смотрите, существует ли foo в нашем наборе: <br> console.log (set.foo) // true </blockquote> В следующих нескольких упражнениях мы создадим полнофункциональный набор с нуля. Для этого упражнения создайте функцию, которая добавит значение в нашу коллекцию наборов, если это значение еще не существует в наборе. Например: <blockquote> this.add = function (element) { <br> // некоторый код для добавления значения к набору <br> } </blockquote> Функция должна возвращать значение <code>true</code> если значение успешно добавлено, а <code>false</code> противном случае.
</section>

## Instructions
<section id='instructions'>
Create an <code>add</code> method that adds a unique value to the set collection and returns <code>true</code> if the value was successfully added and <code>false</code> otherwise.

Create a <code>remove</code> method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return <code>true</code>. Otherwise, it should return <code>false</code>.
Create a <code>size</code> method that returns the size of the set collection.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have an <code>add</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.add === 'function')}()));
  - text: Your <code>add</code> method should not add duplicate values.
    testString: assert((function(){var test = new Set(); test.add('a'); test.add('b'); test.add('a'); var vals = test.values(); return (vals[0] === 'a' && vals[1] === 'b' && vals.length === 2)}()));
  - text: Your <code>add</code> method should return <code>true</code> when a value has been successfully added.
    testString: assert((function(){var test = new Set(); var result = test.add('a'); return (result != undefined) && (result === true);}()));
  - text: Your <code>add</code> method should return <code>false</code> when a duplicate value is added.
    testString: assert((function(){var test = new Set(); test.add('a'); var result = test.add('a'); return (result != undefined) && (result === false);}()));
  - text: Your <code>Set</code> class should have a <code>remove</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.remove === 'function')}()));
  - text: Your <code>remove</code> method should only remove items that are present in the set.
    testString: assert.deepEqual((function(){var test = new Set(); test.add('a');test.add('b');test.remove('c'); return test.values(); })(), ['a', 'b']);
  - text: Your <code>remove</code> method should remove the given item from the set.
    testString: assert((function(){var test = new Set(); test.add('a');test.add('b');test.remove('a'); var vals = test.values(); return (vals[0] === 'b' && vals.length === 1)}()));
  - text: Your <code>Set</code> class should have a <code>size</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.size === 'function')}()));
  - text: The <code>size</code> method should return the number of elements in the collection.
    testString: assert((function(){var test = new Set(); test.add('a');test.add('b');test.remove('a');return (test.size() === 1)}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
class Set {
    constructor() {
    // collection will hold our set
    this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // change code below this line

    // write your add method here

    // write your remove method here

    // write your size method here

    // change code above this line
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
class Set {
  constructor() {
    this.collection = [];
  }
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }
  values() {
    return this.collection;
  }
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    } else {
      return false;
    }
  }
  remove(element) {
    if (this.has(element)) {
      let i = this.collection.indexOf(element);
      this.collection.splice(i, 1);
      return true;
    }
    return false;
  }
  size() {
    return this.collection.length;
  }
}
```

</section>
