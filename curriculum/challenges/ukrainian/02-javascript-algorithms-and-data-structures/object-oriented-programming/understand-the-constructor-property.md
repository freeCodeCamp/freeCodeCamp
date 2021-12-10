---
id: 587d7daf367417b2b2512b7e
title: Розуміння властивостей конструктора
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

Є особлива властивість `constructor`, що знаходиться в екземплярі об'єкта `duck` і `beagle`, які ми створили у попередніх завданнях:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Обидва ці `console.log` виклики відображатимуться `true` у консолі.

Зверніть увагу, що властивість `constructor` є посиланням на функцію конструктора, що створила екземпляр. Перевага властивостей `constructor` полягає в тому, що можна перевірити цю функцію та визначити, який це об'єкт. Ось приклад того, як це можна використовувати:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Примітка:** Через те, що властивості `constructor` можуть бути перезаписані (це буде показано у наступних двох завданнях), загалом, краще використовувати метод `instanceof` для перевірки типу об'єкта.

# --instructions--

Напишіть функцію `joinDogFraternity`, яка приймає параметр `candidate` та, використовуючи властивість `constructor`, перетворюється на `true`, за умови, що кандидат - це `Dog`, в іншому випадку - на `false`.

# --hints--

`joinDogFraternity` має бути визначено як функція.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` має перетворюватись на `true`, якщо `candidate` є екземпляром `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` повинно використовувати властивість `constructor`.

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
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
