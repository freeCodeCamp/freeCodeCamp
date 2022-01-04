---
id: 587d7dad367417b2b2512b76
title: Зробити код більш придатним для повторного використання з цим ключовим словами
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

У попередньому завданні було представлено метод для об'єкту `duck`. Він використовував крапкову нотацію `duck.name` для доступу до властивості `name` в межах інструкції return:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

Це допустимий спосіб отримати доступ до властивості об'єкту, але тут є свої підводні камені. Якщо зміниться назва змінної, то й будь-які посилання коду до початкової назви необхідно буде також оновити. Це не становить проблеми в короткому визначенні об'єкту, але якщо посилань до властивостей об'єкту є багато, то й шанси на помилку збільшуються.

Уникнути цієї проблеми можна за допомогою кодового слова `this`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` є доволі багатогранною темою, а наведений вище приклад є лише одним із способів його використання. У даному контексті `this` посилається до пов'язаного із методом об'єкту `duck`. Якщо ім'я об'єкту зміниться на `mallard`, то необхідності шукати усі посилання до назви `duck` у коді не буде. Це кодове слово робить код більш придатним та легшим для читання.

# --instructions--

Модифікуєте метод `dog.sayLegs`, забравши будь-які посилання до `dog`. Використовуйте приклад об'єкту `duck` для орієнтації.

# --hints--

`dog.sayLegs()` повинен повертати вказаний рядок символів.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

Код повинен використовувати кодове слово `this` для доступу до властивості `numLegs` об'єкту `dog`.

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
