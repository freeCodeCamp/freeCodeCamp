---
id: 587d7db2367417b2b2512b8a
title: >-
  Замикання, щоб захистити властивості об’єкта від зовнішніх змін
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

`bird` у попередньому завданні мав публічну властивість `name`. Вона вважається публічною, оскільки до неї можна отримати доступ та змінити за межами визначення `bird`.

```js
bird.name = "Duffy";
```

Тому будь-яка частина коду може легко змінити назву `bird` на будь-яке значення. Подумайте про паролі та банківські рахунки, які можна легко змінити будь-якою частиною кодової бази. Це може спричинити багато проблем.

Найпростіший спосіб зробити публічну властивість приватною — створити змінну всередині функції конструктора. Це змінить область видимості цієї змінної, щоб вона була областю функції конструктора, а не доступною глобально. Таким чином до змінної можна отримати доступ та змінити за допомогою методів в межах функції конструктора.

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

`getHatchedEggCount` є привілейованим методом, оскільки він має доступ до приватної змінної `hatchedEgg`. Причина в тому, що `hatchedEgg` оголошена в тому ж контексті, що й `getHatchedEggCount`. У JavaScript функція завжди має доступ до контексту, в якому вона була створена. Це називається замиканням (`closure`).

# --instructions--

Змініть оголошення `weight` у функції `Bird`, щоб вона стала приватною змінною. Потім створіть метод `getWeight`, який поверне значення `weight` 15.

# --hints--

Властивість `weight` має бути приватною змінною і їй має бути присвоєно значення `15`.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

Код має створити метод у `Bird` під назвою `getWeight`, який повертає значення приватної змінної `weight`.

```js
assert(new Bird().getWeight() === 15);
```

Функція `getWeight` має повернути приватну змінну `weight`.

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
