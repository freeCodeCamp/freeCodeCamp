---
id: 587d7db2367417b2b2512b8a
title: >-
  Usar closure para evitar que propriedades de um objeto sejam modificadas externamente
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

No desafio anterior, `bird` possuía uma propriedade pública `name`. É considerado público porque ele pode ser acessado e modificado fora da definição de `bird`.

```js
bird.name = "Duffy";
```

Portanto, qualquer parte do seu código pode facilmente alterar o nome do `bird` para qualquer valor. Pense sobre coisas como senhas e contas de banco sendo facilmente modificáveis em qualquer parte do seu código. Isso poderia causar inúmeros problemas.

A forma mais simples para tornar essa propriedade pública em privada, seria criando uma variável dentro da função constructor. Isso alteraria o escopo daquela variável para ser apenas o escopo da função construtora ao invés de globalmente disponível. Dessa maneira, a variável pode ser acessada e modificada apenas pelos métodos dentro da função construtora.

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

Aqui `getHatchedEggCount` é um método privilegiado, porque ele possui acesso à variável privada `hatchedEgg`. Isso é possível porque `hatchedEgg` é declarado no mesmo contexto que `getHatchedEggCount`. Em JavaScript, a função sempre possui acesso ao contexto na qual foi criada. Isso é chamado de `closure`.

# --instructions--

Modifique como `weight` é declarado na função `Bird` para que seja uma variável privada. Em seguida, crie o método `getWeight` que retorna o valor de `weight` 15.

# --hints--

A propriedade `weight` deve ser uma variável privada e deve ser atribuída a ela o valor `15`.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

O código deve criar o método dentro de `Bird` chamado `getWeight` que retorna o valor da variável privada `weight`.

```js
assert(new Bird().getWeight() === 15);
```

A função `getWeight` deve retornar a variável privada `weight`.

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
