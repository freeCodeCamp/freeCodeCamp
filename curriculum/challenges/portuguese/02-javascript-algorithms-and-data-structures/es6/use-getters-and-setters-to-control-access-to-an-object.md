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

Na classe, crie um `getter` para obter a temperatura em Celsius e um `setter` para definir a temperatura em Celsius.

Lembre-se de que `C = 5/9 * (F - 32)` e `F = C * 9.0 / 5 + 32`, aonde `F` é o valor da temperatura em Fahrenheit e `C` é o valor da mesma temperatura em Celsius.

**Observação:** quando você implementa isso, você vai rastrear a temperatura dentro da classe em uma escala, ou Fahrenheit ou Celsius.

Esse é o poder de um getter e um setter. Você está criando uma API para outro uso, que pode pegar o resultado correto independente de qual está rastreando.

Em outras palavras, você está abstraindo detalhes de implementação do usuário.

# --hints--

`Thermostat` deve ser uma `class` com um método `constructor` definido.

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

A palavra-chave `class` deve ser usado.

```js
assert(code.match(/class/g));
```

`Thermostat` deve ser possível de ser instanciado.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

Quando instanciado com um valor Fahrenheit, `Thermostat` deve definir a `temperature` correta.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

Um `getter` deve ser definido.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

Um `setter` deve ser definido.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

Chamando um `setter` com um valor Celsius deve definir a `temperature`.

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
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
