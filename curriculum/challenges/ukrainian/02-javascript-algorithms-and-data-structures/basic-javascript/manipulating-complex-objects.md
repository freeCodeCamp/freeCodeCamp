---
id: 56533eb9ac21ba0edf2244cb
title: Керування складними об'єктами
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

Іноді ви можете зберігати дані в гнучкій <dfn>Data Structure</dfn>. Об'єкт JavaScript є одним із способів обробки гнучких даних. Вони створюють можливість довільних комбінацій <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn> та <dfn>objects</dfn>.

Ось приклад структури складних даних:

```js
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

Це масив, який містить один об'єкт всередині. Об'єкт має різні частини <dfn>metadata</dfn> про альбом. Він також має вкладений масив `formats`. Якщо ви хочете додати більше записів в альбом, це можна зробити, додавши записи до масиву верхнього рівня. Об'єкти зберігають дані у властивості, яка має формат ключ-значення. У прикладі вище, `"artist": "Daft Punk"` - це властивість, що має ключ `artist` і значення `Daft Punk`. [JavaScript Object Notation](http://www.json.org/) або `JSON` є форматом відповідного обміну даними, який використовується для зберігання даних.

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**Примітка:** Вам потрібно буде розмістити кому після кожного об'єкта в масиві, якщо він не є останнім його об'єктом.

# --instructions--

Додайте новий альбом до масиву `myMusic`. Додайте `artist` та `title` рядки, `release_year` число та масив рядків `formats`.

# --hints--

`myMusic` повинен бути масивом

```js
assert(Array.isArray(myMusic));
```

`myMusic` має мати принаймні два елементи

```js
assert(myMusic.length > 1);
```

Елементи у масиві `myMusic` повинні бути об'єктами

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Ваш об'єкт в `myMusic` повинен мати щонайменше 4 властивості

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

Ваш об'єкт в `myMusic` повинен містити властивість `artist`, яка належить до типу string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

Ваш об'єкт в `myMusic` повинен містити властивість `title`, яка належить до типу string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

Ваш об'єкт в `myMusic` повинен містити властивість `release_year`, яка належить до типу number

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

Ваш об'єкт у `myMusic` повинен містити властивість `formats`, яка є масивом

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` повинен бути масивом рядків з щонайменше двома елементами

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.typeOf(format, 'string')
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

# --solutions--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```
