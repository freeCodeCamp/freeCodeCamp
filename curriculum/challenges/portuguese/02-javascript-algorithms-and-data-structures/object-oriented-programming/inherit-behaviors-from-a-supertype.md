---
id: 587d7db0367417b2b2512b84
title: Herdar comportamentos de um supertipo
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

No desafio anterior, você criou um `supertype` chamado `Animal` que define os comportamentos compartilhados por todos os animais:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

Este e o próximo desafio vai abordar como reutilizar métodos de `Animal` dentro de `Bird` e `Dog` sem ter de definir os métodos novamente. Ele utiliza uma técnica chamada herança. Este desafio cobrirá o primeiro passo: fazer uma instância do `supertype` (ou parente). Você já sabe uma forma de criar instâncias de `Animal` utilizando o operador `new`:

```js
let animal = new Animal();
```

Há algumas desvantagens quando utilizamos essa sintaxe para herança, que são muito complexas para o escopo deste desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` cria um novo objeto, e define `obj` como o novo `prototype` do objeto. Lembre-se que o `prototype` é como uma "receita" para criar um objeto. Ao definir o `prototype` de `animal` para ser um `prototype` de `Animal`, você está efetivamente dando a instância `animal` a mesma "receita" de qualquer outra instância de `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

O método `instanceof` aqui vai retornar `true`.

# --instructions--

Utilize `Object.create` para fazer duas instâncias de `Animal` nomeados `duck` e `beagle`.

# --hints--

A variável `duck` deve ser definida.

```js
assert(typeof duck !== 'undefined');
```

A variável `beagle` deve ser definida.

```js
assert(typeof beagle !== 'undefined');
```

A variável `duck` deve ser inicializada com `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

A variável `beagle` deve ser inicializada com `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` deve ter o `prototype` de `Animal`.

```js
assert(duck instanceof Animal);
```

`beagle` deve ter o `prototype` de `Animal`.

```js
assert(beagle instanceof Animal);
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
