---
id: 587d7b8b367417b2b2512b53
title: Usar a sintaxe de classe para criar uma função construtora
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave <dfn>class</dfn>.

Deve ser notado que a sintaxe `class` é apenas sintaxe, um <dfn>syntatical sugar</dfn>. JavaScript ainda não oferece suporte completo ao paradigma orientado a objetos, ao contrário do que acontece em linguagens como Java, Python, Ruby, etc.

No ES5, geralmente definimos uma função construtora (`constructor` function) e usamos a palavra-chave `new` para instanciar um objeto.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

A sintaxe `class` simplesmente substitui a criação da função construtora (`constructor`):

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Deve ser notado que a palavra-chave `class` declara uma nova função, para qual um construtor é adicionado. Esse construtor é invocado quando `new` é chamado na criação de um novo objeto.

**Observação:** UpperCamelCase (observe a primeira letra de cada palavra em maiúsculo) deve ser usado por convenção para nomes de classe no ES6, como em `SpaceShuttle` usado acima.

O método `constructor` é um método especial usado para inicializar um objeto criado com uma classe. Você aprenderá mais sobre isso na seção Programação Orientada a Objetos da Certificação de Algoritmos e Estruturas de Dados JavaScript.

# --instructions--

Use a palavra-chave `class` e declare o método `constructor` para criar a classe `Vegetable`.

A classe `Vegetable` permite criar um objeto vegetal com a propriedade `name` que é passada ao `constructor`.

# --hints--

`Vegetable` deve ser uma `class` com um método `constructor` definido.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

A palavra-chave `class` deve ser usada.

```js
assert(code.match(/class/g));
```

A classe `Vegetable` deve poder ser instanciada.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` deve retornar a string `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
