---
id: 587d7b8c367417b2b2512b54
title: Usar getters e setter para controlar acesso a um objeto
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

Você pode obter valores de um objeto e definir o valor da propriedade dentro de um objeto.

Esses são classicamente chamados de <dfn>getters</dfn> e <dfn>setters</dfn>.

Funções getter tem a finalidade de simplesmente retornar (get) o valor de uma variável privada de um objeto para o usuário sem que o usuário acesse diretamente a variável privada.

Funções setter tem a finalidade de modificar, ou definir (set), o valor de uma variável privada de um objeto baseado no valor passado dentro da função setter. Essa mudança poderia envolver cálculos, ou até sobrescrever completamente o valor anterior.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

O console exibirá as strings `anonymous` e `newAuthor`.

Note a sintaxe usada para invocar o getter e setter. Eles nem sequer se parecem com funções. Getters e setters são importantes porque escondem os detalhes internos da implementação.

**Observação:** é uma convenção preceder o nome de uma variável privada com um underscore (`_`). No entanto, essa prática por si só não torna uma variável privada.

# --instructions--

Use a palavra-chave `class` para criar a classe `Thermostat`. O `constructor` aceita uma temperatura Fahrenheit.

In the class, create a `getter` to obtain the temperature in Celsius and a `setter` that accepts a temperature in Celsius.

Lembre-se de que `C = 5/9 * (F - 32)` e `F = C * 9.0 / 5 + 32`, aonde `F` é o valor da temperatura em Fahrenheit e `C` é o valor da mesma temperatura em Celsius.

**Observação:** quando você implementa isso, você vai rastrear a temperatura dentro da classe em uma escala, ou Fahrenheit ou Celsius.

Esse é o poder de um getter e um setter. Você está criando uma API para outro uso, que pode pegar o resultado correto independente de qual está rastreando.

Em outras palavras, você está abstraindo detalhes de implementação do usuário.

# --hints--

`Thermostat` deve ser uma `class` com um método `constructor` definido.

```js
assert.isFunction(Thermostat);
assert.isFunction(Thermostat?.constructor);
```

A palavra-chave `class` deve ser usada.

```js
assert.match(code, /class/);
```

`Thermostat` deve ser possível de ser instanciado.

```js
const _t = new Thermostat(122);
assert.isObject(_t);
```

Quando instanciado com um valor Fahrenheit, `Thermostat` deve definir a `temperature` correta.

```js
const _t = new Thermostat(122);
assert.strictEqual(_t?.temperature, 50);
```

Um `getter` deve ser definido.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.get);
```

Um `setter` deve ser definido.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.set);
```

Chamando um `setter` com um valor Celsius deve definir a `temperature`.

```js
const _t = new Thermostat(32);
_t.temperature = 26;
const _u = new Thermostat(32);
_u.temperature = 50;
assert.approximately(_t.temperature, 26, 0.1);
assert.approximately(_u.temperature, 50, 0.1);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```
