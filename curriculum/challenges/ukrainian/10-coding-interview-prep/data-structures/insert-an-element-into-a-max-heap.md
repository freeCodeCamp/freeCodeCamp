---
id: 587d825a367417b2b2512c8a
title: Вставте елемент в незростаючу купу
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

А тепер перейдемо до іншої деревоподібної структури даних — бінарної купи. Бінарна купа — це частково впорядковане бінарне дерево, яке задовольняє властивість купи. Властивість купи визначає зв’язок між батьківським та дочірнім вузлами. Купа може бути незростаючою (значення всіх батьківських вузлів більше або дорівнює значенню дочірніх вузлів) та неспадною (навпаки). Бінарні купи — це також повні бінарні дерева. Це означає, що всі рівні дерева повністю заповнені або, якщо останній рівень неповний, воно заповнене зліва направо.

І хоча бінарну купу можна реалізувати у вигляді дерева з вузлами, які ростуть вліво та вправо, вона може бути представлена масивом за умови часткового впорядкування відповідно до властивості купи. Нас цікавить зв’язок батьківського та дочірнього вузлів, а за допомогою простої арифметики ми можемо вирахувати дітей будь-якого батьківського вузла та навпаки.

Наприклад, розглянемо наступну бінарну неспадну купу у вигляді масиву:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Кореневим вузлом є перший елемент `6`. Його дочірні вузли — `22` та `30`. Якщо глянути на зв’язок між індексами масиву цих значень, то для індексу `i` дочірніми вузлами будуть `2 * i + 1` та `2 * i + 2`. Схожим чином, елемент за індексом `0` буде батьківським вузлом для вузлів за індексами `1` та `2`. Батьківський вузол можна знайти за будь-яким індексом, використовуючи `Math.floor((i - 1) / 2)`. За цією формулою можна отримати дійсну інформацію незалежно від розміру дерева. Зрештою, ми можемо зробити незначні зміни, щоб полегшити обчислення, пропустивши перший елемент масиву. У результаті утворяться наступні зв’язки для будь-якого елемента за даним індексом `i`:

Представлення масиву з прикладу:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Лівий дочірній вузол елемента: `i * 2`

Правий дочірній вузол елемента: `i * 2 + 1`

Батьківський вузол елемента: `Math.floor(i / 2)`

Важливо зрозуміти ці обчислення, оскільки представлення масиву дозволяє швидко визначити розташування вузла, а використання пам’яті зменшується за відсутності потреби зберігати посилання на дочірні вузли.

# --instructions--

Інструкція: у цьому завданні ми створимо незростаючу купу. Розпочніть зі створення методу `insert`, який додає елементи до купи. Під час вставки важливо завжди підтримувати властивість купи. Для незростаючої купи це означає, що кореневий елемент має найбільше значення в дереві, а дочірні вузли не можуть перевищувати значення батьківського вузла. Для реалізації купи з використанням масиву зазвичай потрібно виконати три кроки:

<ol>
  <li>Додайте новий елемент у кінець масиву.</li>
  <li>Якщо цей елемент більший від батьківського, поміняйте їх місцями.</li>
  <li>Продовжуйте змінювати елементи місцями, поки значення нового елемента не буде меншим від батьківського, або поки не досягнете кореня дерева.</li>
</ol>

Вкінці додайте метод `print`, який повертає масив усіх елементів, доданих до купи.

# --hints--

Має існувати структура даних `MaxHeap`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

Структура `MaxHeap` повинна мати метод під назвою `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

Структура `MaxHeap` повинна мати метод під назвою `print`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

Метод `insert` має додавати елементи відповідно до властивості незростаючої купи.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(50);
    test.insert(100);
    test.insert(700);
    test.insert(32);
    test.insert(51);
    test.insert(800);
    const result = test.print();
    const solution = JSON.stringify([null,800,51,700,32,50,100]);
    const solutionWithoutNull = JSON.stringify([800,51,700,32,50,100]);

    return (result.length == 6) ? (JSON.stringify(result) == solutionWithoutNull) : (JSON.stringify(result) == solution);
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var MaxHeap = function() {
    // Only change code below this line
    this.heap = [];
    this.parent = index => {
      return Math.floor((index - 1) / 2);
    }
    this.insert = element => {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
    this.heapifyUp = index => {
      let currentIndex = index,
      parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }
    }
    this.swap = (index1, index2) => {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    this.print = () => {
      return this.heap;
    }
    // Only change code above this line
};
```
