---
id: 56533eb9ac21ba0edf2244cc
title: Acessar objetos aninhados
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

As subpropriedades de objetos podem ser acessadas ao encadear a notação de ponto e de colchetes.

Aqui está um objeto aninhado:

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

`ourStorage.cabinet["top drawer"].folder2` seria a string `secrets` e `ourStorage.desk.drawer` seria a string `stapler`.

# --instructions--

Acesse o objeto `myStorage` e atribua o conteúdo da propriedade `glove box` para a variável `gloveBoxContents`. Use notação de ponto para todas as propriedades sempre que possível, caso contrário, use a notação de colchetes.

# --hints--

`gloveBoxContents` deveria ser igual à string `maps`.

```js
assert(gloveBoxContents === 'maps');
```

O código deve usar notação de ponto e de colchetes para acessar `myStorage`.

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
