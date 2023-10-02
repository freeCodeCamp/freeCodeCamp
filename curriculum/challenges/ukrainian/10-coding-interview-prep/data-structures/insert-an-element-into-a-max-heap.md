---
id: 587d825a367417b2b2512c8a
title: Вставити елемент у максимальну купу
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

А тепер перейдемо до іншої деревоподібної структури даних — двійкової купи. Двійкова купка — це частково впорядковане двійкове дерево, яке задовольняє властивість купи. Властивість купи визначає співвідношення між батьківським та дочірнім вузлами. Існує зростаюча купа, у якої всі батьківські вузли мають більше або рівне значення відносно дочірніх вузлів, та неспадна купа, де ця умова діє у зворотньому напрямку. Двійкові купи — це ще також повні двійкові дерева. Це означає, що всі рівні дерева повністю заповнені або, якщо останній рівень неповний, він заповнений зліва направо.

І хоч двійкові купи реалізуються у вигляді дерева з вузлами, що ростуть уліво та вправо, відповідно до властивості купи вона може бути представлена масивом, за умови часткового впорядкування. Нас цікавить співвідношення батьківський-дочірній вузол, а з допомогою простої арифметики ми зможемо обрахувати кількість дочірних елементів певного батьківського вузла та батьків конкретного дочірнього вузла.

Приміром, розглянемо наступну двійкову неспадну купу у вигляді масиву:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Перший елемент — кореневий вузол — `6`. Його дочірні вузли — `22` та `30`. Якщо поглянути на відношення між індексами масиву цих значень, то для індексу `i` дочірніми вузлами будуть `2 * i + 1` and `2 * i + 2`. Схожим чином елемент в індексі `0` буде мати батьківське відношення стосовно цих двох дочірніх вузлів в індексі `1` і `2`. Загалом можна знайти батьківський вузол у будь-якому індексі, використовуючи такий шаблон: `Math.floor((i - 1) / 2)`. За ним можна отримувати правдиву інформацію незалежно від розміру дерева. На завершення, ми можемо зробити незначне коригування, щоб полегшити обчислення, пропустивши перший елемент у рядку. Ця дія створює зв'язки з кожним елементом із заданим індексом `i`:

Приклад відображення масиву:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Лівий дочірній вузол елемента: `i * 2`

Правий дочірній вузол елемента: `i * 2 + 1`

Батьківський вузол елемента: `Math.floor(i / 2)`

Як тільки ці обрахунки вклалися у голові, використання двійкового масиву стане у пригоді, оскільки це уможливить швидке визначення розташування вузла, водночас використання пам'яті зменшується за відсутності потреби зберігати посилання на дочірні вузли.

# --instructions--

Інструкції: Як створити зростаючу купу. Розпочніть із створення методу `insert` за допомогою якого елементи можна додати до купи. Під час вставки важливо завжди підтримувати властивості купи. Щодо незростаючої купи, кореневий елемент дерева має найбільшу вагу, а усі дочірні вузли не перевищують значення батьківських вузлів. Перетворення масиву у незростаючу купу зазвичай відбувається у три етапи:

<ol>
  <li>Додайте новий елемент у кінець масиву.</li>
  <li>Якщо цей елемент більший від батьківського, перемкніть їх.</li>
  <li>Продовжуйте перемикати, поки значення нового елемента не стане меншим від батьківського, або поки він не досягне кореня дерева.</li>
</ol>

Наостанок, скористайтеся процедурою `print` яка повертає до масиву усі елементи, які додали у купу.

# --hints--

The `MaxHeap` data structure should exist.

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

`MaxHeap` повинен мати метод під назвою `insert`.

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

`MaxHeap` повинен мати метод під назвою `print`.

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

The `insert` method should add elements according to the max heap property.

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
