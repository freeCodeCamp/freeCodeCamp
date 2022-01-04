---
id: 56533eb9ac21ba0edf2244cc
title: Доступ до вкладених об'єктів
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

Доступ до субвластивостей об'єктів можна отримати використавши крапкову або дужкову нотацію.

Ось вкладений об'єкт:

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

`ourStorage.cabinet["top drawer"].folder2` зміниться на `secrets`, і `ourStorage.desk.drawer` зміниться на `stapler`.

# --instructions--

Отримайте доступ до `myStorage` та визначте вміст скрині `glove box` для змінної `gloveBoxContents`. Використовуйте точкову нотацію для всіх властивостей, де це можливо, в іншому випадку використовуйте дужки.

# --hints--

`gloveBoxContents` має дорівнювати рядку `maps`.

```js
assert(gloveBoxContents === 'maps');
```

Використовуйте крапкову або дужкову нотацію в коді, щоб отримати доступ до `myStorage`.

```js
assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

## --seed-contents--

```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;
```

# --solutions--

```js
const myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
```
