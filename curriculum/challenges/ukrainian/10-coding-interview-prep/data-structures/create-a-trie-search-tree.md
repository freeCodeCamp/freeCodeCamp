---
id: 587d8259367417b2b2512c84
title: Створення префіксного дерева пошуку
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

Далі ми відійдемо від вивчення двійкового дерева пошуку та розглянемо структуру іншого виду дерева пошуку під назвою префіксне. Префіксне дерево пошуку - це впорядкований вид дерева пошуку, який зазвичай містить рядки, досить часто дозволяє зберігати асоціативні масиви або динамічні сукупності даних, ключами яких є рядки. Їхньою перевагою є зберігання наборів даних у тих випадках, коли багато ключів мають однакові префікси, як-от усі слова у словнику. На відміну від двійкового дерева, вузли не пов'язані з реальними значеннями. Натомість шлях до вузла визначає певний ключ. До прикладу, якщо нам потрібно зберегти у префіксному дереві пошуку код у вигляді рядка, ми отримаємо чотири вузли, по одному на кожну букву: c — o — d — e. Застосовуючи цей шлях до всіх вузлів, ми отримаємо код у вигляді рядка, а сам шлях є ключем, який ми зберегли. Далі, якби ми хотіли додати рядкове кодування, він би розділив перші три вузли коду перед тим, як розгалузитись після d. У такому випадку, великий обсяг даних може зберігатися дуже компактно. Окрім цього, пошук може відбуватися дуже швидко, оскільки він практично обмежений довжиною рядка, який ми зберігаємо. А ще, на відміну від двійкових дерев вузол може зберігати будь-яку кількість дочірніх вузлів. Як можна було здогадатися із наведеного вище прикладу, деякі метадані зазвичай зберігаються у вузлах, які містять кінець ключа, тому під час наступних обходів дерева цей ключ все ще можна відновити. Скажімо, якби ми додали коди у зазначений вище приклад, нам потрібно було б якось дізнатися, що е в коді означає кінець введеного раніше ключа. В іншому випадку ця інформація буде втрачена при додаванні кодів.

# --instructions--

Створімо префіксне дерево пошуку для зберігання слів. Воно буде отримувати слова за допомогою методу `add` і зберігати їх у структурі даних префіксного дерева пошуку. А також він допоможе нам дізнатися, чи даний рядок містить слово з методом `isWord`, і вилучить всі слова, введені у префіксне дерево пошуку за допомогою способу `print`. `isWord` should return a boolean value and `print` should return an array of all these words as string values. Аби впевнитись, що ця структура даних реалізована правильно, ми задали структуру `Node` для кожного вузла у дереві. Кожен вузол буде об'єктом із властивістю `keys`, яка є об'єктом JavaScript Map. Він міститиме окремі літери, які виступають дійсними ключами кожного вузла. Також ми створили для вузлів властивість `end`, яка може бути налаштована як `true`, якщо вузол являє собою закінчення слова.

# --hints--

`Trie` повинен мати метод `add`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

`Trie` повинен мати метод `print`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

`Trie` повинен мати метод `isWord`.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.isWord == 'function';
  })()
);
```

The `print` method should return all items added to the trie as strings in an array.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('jump');
    test.add('jumps');
    test.add('jumped');
    test.add('house');
    test.add('mouse');
    var added = test.print();
    return (
      added.indexOf('jump') != -1 &&
      added.indexOf('jumps') != -1 &&
      added.indexOf('jumped') != -1 &&
      added.indexOf('house') != -1 &&
      added.indexOf('mouse') != -1 &&
      added.length == 5
    );
  })()
);
```

The `isWord` method should return `true` only for words added to the trie and `false` for all other words.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('hop');
    test.add('hops');
    test.add('hopped');
    test.add('hoppy');
    test.add('hope');
    return (
      test.isWord('hop') &&
      !test.isWord('ho') &&
      test.isWord('hopped') &&
      !test.isWord('hopp') &&
      test.isWord('hoppy') &&
      !test.isWord('hoping')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
