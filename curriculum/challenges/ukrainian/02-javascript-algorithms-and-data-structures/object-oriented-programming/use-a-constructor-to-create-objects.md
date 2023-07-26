---
id: 587d7dad367417b2b2512b78
title: Використання конструктора для створення об’єктів
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

Ось конструктор `Bird` із попереднього завдання:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**ПРИМІТКА:** `this` вcередині конструктора завжди посилається на створений об’єкт.

Зауважте, що для виклику конструктора використовують оператор `new`. Так JavaScript отримує команду створити новий екземпляр `Bird` під назвою `blueBird`. Без оператора `new`, `this` всередині конструктора не посилатиметься на новостворений об’єкт, що може привести до неочікуваних результатів. Тепер `blueBird` має усі властивості, визначені всередині конструктора `Bird`:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Як і будь-який інший об’єкт, його властивості можуть бути доступні і змінені:

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

Використайте конструктор `Dog` із попереднього завдання, щоб створити новий екземпляр `Dog`, призначивши його до змінної `hound`.

# --hints--

Створіть `hound` за допомогою конструктора `Dog`.

```js
assert(hound instanceof Dog);
```

Код має використати оператор `new`, щоб створити екземпляр `Dog`.

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
