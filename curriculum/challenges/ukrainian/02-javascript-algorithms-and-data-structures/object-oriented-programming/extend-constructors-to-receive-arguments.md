---
id: 587d7dae367417b2b2512b79
title: Розширити конструктори для отримання аргументів
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

Конструктори `Bird` та `Dog` з останнього завдання працювали добре. Однак зверніть увагу, що всі `Birds`, створені за допомогою конструктора `Bird`, автоматично називаються Альбертом, мають синій колір і мають дві ніжки. Що робити, якщо вам потрібні birds з різними значеннями для назви та кольору? Змінити властивості кожної bird можна вручну, але це займе багато часу:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Припустимо, ви писали програму для відстеження сотень чи навіть тисяч різних bird у вольєрі. Це займе багато часу, щоб створити всі birds, а потім змінити для кожного властивості на різні значення. Щоб легше створювати різні об'єкти `Bird`, ви можете спроектувати свій конструктор Bird для прийняття параметрів:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Потім передайте значення в якості аргументів для визначення кожного унікального bird в конструкторі `Bird`: `let cardinal = new Bird("Bruce", "red");` Це дає новий екземпляр `Bird` із властивостями `name` та `color`, встановленими відповідно до `Bruce` та й відповідно до `red`. Для властивості `numLegs` все ще відповідає значення 2. `cardinal` має такі властивості:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

Конструктор є більш гнучким. Тепер можна визначити властивості для кожної `Bird` під час її створення, що є одним із способів, яким конструктори JavaScript так корисні. Вони поєднують об’єкти разом на основі спільних характеристик та поведінки та визначають план, який автоматизує створення.

# --instructions--

Створіть ще один конструктор `Dog`. Цього разу встановіть його так щоб прийняти параметри `name` та `color` і встановіть властивість `numLegs` на 4. Потім створіть новий `Dog`, збережений у змінній `terrier`. Передайте два рядки в якості аргументів для властивостей `name` and `color`.

# --hints--

`Dog` має отримати аргумент для `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` має отримати аргумент для `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` має мати властивості `numLegs` значення 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` слід створити за допомогою конструктора `Dog`.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
