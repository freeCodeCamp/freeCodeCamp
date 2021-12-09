---
id: 56bbb991ad1ed5201cd392d2
title: Додати нові властивості об'єкту JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

Ви можете додати нові властивості вже наявним об'єктам JavaScript, таким чином модифікуючи їх.

Нижче подано як додавати властивість `bark` до `ourDog`:

```js
ourDog.bark = "bow-wow";
```

або

```js
ourDog["bark"] = "bow-wow";
```

Тепер, коли оцінимо `ourDog.bark`, отримаємо його гавкання, `bow-wow`.

Наприклад:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

Додайте властивість `bark` до `myDog` і встановіть його на звук собаки, наприклад "гав". Ви можете використовувати крапковий запис або запис квадратними дужками.

# --hints--

Вам потрібно додати властивість `bark` до `myDog`.

```js
assert(myDog.bark !== undefined);
```

Не слід додавати `bark` до ініціалізації `myDog`.

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
