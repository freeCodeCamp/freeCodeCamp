---
id: 587d7daf367417b2b2512b7e
title: Властивість конструктора
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

Існує особлива властивість `constructor`, що знаходиться в екземплярах об’єктів `duck` та `beagle`, які ми створили у попередніх завданнях:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Обидва виклики `console.log` виведуть `true` на консолі.

Зверніть увагу, що властивість `constructor` є посиланням на функцію-конструктор, яка створила екземпляр. Перевага властивості `constructor` полягає в тому, що цю властивість можна перевірити та визначити, який це об’єкт. Ось приклад того, як це можна використовувати:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Примітка:** оскільки властивість `constructor` можна перевизначити (детальніше у наступних двох завданнях), для перевірки типу об’єкта краще використовувати метод `instanceof`.

# --instructions--

Напишіть функцію `joinDogFraternity`, яка приймає параметр `candidate` та, використовуючи властивість `constructor`, поверніть `true`, якщо кандидатом є `Dog`, в іншому випадку поверніть `false`.

# --hints--

`joinDogFraternity` потрібно визначити як функцію.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` має повернути `true`, якщо `candidate` є екземпляром `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` має використовувати властивість `constructor`.

```js
assert(/\.constructor/.test(__helpers.removeJSComments(code)) && !/instanceof/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
