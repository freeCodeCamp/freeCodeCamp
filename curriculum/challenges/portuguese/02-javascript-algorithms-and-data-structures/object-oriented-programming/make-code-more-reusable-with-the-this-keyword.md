---
id: 587d7dad367417b2b2512b76
title: Fazer código mais reutilizável com a palavra-chave this
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

O último desafio introduziu um método ao objeto `duck`. Ele utiliza a notação de ponto (`duck.name`) para acessar o valor da propriedade `name` dentro da declaração de retorno:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

Enquanto isso é uma forma válida de acessar a propriedade do objeto, tem uma armadilha aqui. Se o nome da variável mudar, qualquer código referenciando o nome original seria necessário ser atualizado também. Em uma definição curta de objeto, isso não é um problema, mas se um objeto possui muitas referencias para suas propriedades, há uma chance maior de erro.

Uma forma para evitar estes problemas é utilizar a palavra-chave `this`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` é um tópico bem extenso e o exemplo acima é apenas uma forma de utilizá-lo. No contexto atual, `this` refere-se ao objeto que o método está associado à: `duck`. Se o nome do objeto é alterado para `mallard`, não é necessariamente para encontrar todas as referencias para `duck` no código. Isso torna o código reutilizável e legível.

# --instructions--

Modifique o método `dog.sayLegs` para remover qualquer referencia para `dog`. Utilize o exemplo `duck` como guia.

# --hints--

`dog.sayLegs()` deve retornar a string definida.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

O código deve utilizar a palavra-chave `this` para acessar a propriedade `numLegs` de `dog`.

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
