---
id: 587d7dad367417b2b2512b78
title: Utiliza un constructor para crear objetos
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

Aquí tenemos el constructor `Bird` del desafío anterior:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**NOTA:** `this` dentro del constructor siempre se refiere al objeto que se está creando.

Observa que se utiliza el operador `new` cuando llamamos a un constructor. Esto le indica a JavaScript que cree una nueva instancia de `Bird` llamada `blueBird`. Sin el operador `new`, dentro del constructor `this` no haría referencia al nuevo objeto, dando resultados inesperados. Ahora `blueBird` tiene todas las propiedades definidas dentro del constructor `Bird`:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Al igual que cualquier otro objeto, sus propiedades pueden ser accedidas y modificadas:

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

Utiliza el constructor `Dog` de la última lección para crear una nueva instancia de `Dog`, asignándolo a una variable `hound`.

# --hints--

`hound` debe ser creado usando el constructor `Dog`.

```js
assert(hound instanceof Dog);
```

Tu código debe usar el operador `new` para crear una instancia de `Dog`.

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
