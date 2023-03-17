---
id: 587d7dae367417b2b2512b7c
title: Usar propriedades de protótipos para reduzir código duplicado
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Já que `numLegs` provavelmente terá o mesmo valor para todas as instâncias de `Bird`, você tem a variável `numLegs` duplicada dentro de cada instância de `Bird`.

Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se há milhões de instâncias. Neste cenário teríamos muitas variáveis duplicadas.

Uma maneira melhor é usar o `prototype` de `Bird`. Propriedades dentro de `prototype` são compartilhados entre todas as instâncias de `Bird`. Aqui está como adicionar `numLegs` para o `prototype` de `Bird`:

```js
Bird.prototype.numLegs = 2;
```

Agora todas as instâncias de `Bird` possuem a propriedade `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Já que todas as instâncias automaticamente possuem as propriedades no `prototype`, pense no `prototype` como uma "receita" para criar objetos. Note que o `prototype` para `duck` e `canary` faz parte do construtor de `Bird` como `Bird.prototype`.

# --instructions--

Adicione a propriedade `numLegs` para o `prototype` de `Dog`

# --hints--

`beagle` deve ter a propriedade `numLegs`.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` deve ser um número.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` deve ser uma propriedade `prototype` e não uma propriedade própria (own property).

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
