---
id: 587d7db0367417b2b2512b82
title: Entender a cadeia de protótipos
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Todos os objetos em JavaScript (com algumas exceções) possuem um `prototype`. Além de que, um `prototype` de um objeto ser um próprio objeto.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Devido ao fato de um `prototype` ser um objeto, um `prototype` pode ter seu próprio `prototype`! Neste caso, o `prototype` de `Bird.prototype` é um `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

Como isso é útil? Você pode ser lembrar que o método `hasOwnProperty` do desafio anterior:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

O método `hasOwnProperty` é definido em `Object.prototype`, o qual pode ser acessado por `Bird.prototype`, o qual pode ser acessado por `duck`. Este é um exemplo de cadeia de `prototype`. Nesta cadeia de `prototype`, `Bird` é um `supertipo` para `duck`, enquanto `duck` é o `subtipo`. `Object` é um `supertipo` para ambos `Bird` e `duck`. `Object` é um `supertipo` para todos os objetos em JavaScript. Desta forma, qualquer objeto pode utilizar o método `hasOwnProperty`.

# --instructions--

Modifique o código para mostrar corretamente a cadeia de protótipo.

# --hints--

O código deve mostrar que `Object.prototype` é o protótipo de `Dog.prototype`

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
