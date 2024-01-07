---
id: 587d7daf367417b2b2512b7e
title: Entender a propriedade construtora
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

Tem uma propriedade especial do `constructor` localizada nas instâncias dos objetos `duck` e `beagle` que foram criados nos desafios anteriores:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Ambas as chamadas a `console.log` vão exibir `true` no console.

Note que a propriedade `constructor` é uma referência a função construtora que criou a instância. A vantagem da propriedade `constructor` é que se torna possível verificar essa propriedade para descobrir qual o tipo do objeto. Aqui está um exemplo de como isso poderia ser utilizado:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Observação:** já que a propriedade `constructor` pode ser sobrescrita (o que será abordado nos próximos dois desafios), geralmente é melhor utilizar o método `instanceof` para verificar o tipo de um objeto.

# --instructions--

Escreva a função `joinDogFraternity` que recebe o parâmetro `candidate` e, utilizando a propriedade `constructor`, retorne `true` se o candidato é um `Dog`, e caso não seja, retorne `false`.

# --hints--

`joinDogFraternity` deve ser definido como uma função.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` deve retornar `true` se `candidate` for uma instância de `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` deve utilizar a propriedade `construtor`.

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
