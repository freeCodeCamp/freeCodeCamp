---
id: 587d7db0367417b2b2512b81
title: Entender de onde vem o protótipo de um objeto
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Assim como uma pessoa herda o gene de seus parentes, um objeto herda seu `prototype` diretamente da função construtora que o criou. Por exemplo, aqui o construtor de `Bird` cria um objeto `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` herda seu `prototype` da função construtora de `Bird`. Você pode mostrar a relação com o método `isPrototypeOf`:

```js
Bird.prototype.isPrototypeOf(duck);
```

Isso retornaria `true`.

# --instructions--

Utilize `isPrototypeOf` para verificar o `prototype` de `beagle`.

# --hints--

Você deve mostrar que o `Dog.prototype` é um `protótipo` de `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
