---
id: 587d7b8c367417b2b2512b54
title: Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

Estas operaciones clásicamente se llaman <dfn>getters</dfn> y <dfn>setters</dfn>.

Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.

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

La consola mostrará las cadenas `anonymous` y `newAuthor`.

Ten en cuenta la sintaxis usada para invocar el getter y el setter. Ni siquiera se ven como funciones. Los getter y los setter son importantes porque ocultan los detalles internos de la implementación.

**Nota:** Es convención preceder el nombre de una variable privada con un guión bajo (`_`). Sin embargo, la práctica en sí misma no hace una variable privada.

# --instructions--

Utiliza la palabra clave `class` para crear una clase `Thermostat`. El `constructor` acepta una temperatura Fahrenheit.

En la clase, crea un `getter` para obtener la temperatura en Celsius y un `setter` que acepte una temperatura en Celsius.

Recuerda que `C = 5/9 * (F - 32)` y `F = C * 9.0 / 5 + 32` donde `F` es el valor de la temperatura en Fahrenheit y `C` es el valor de la misma temperatura en Celsius.

**Nota:** Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

En otras palabras, estás abstrayendo los detalles de la implementación del usuario.

# --hints--

`Thermostat` debe ser una `class` con un método `constructor` definido.

```js
assert.isFunction(Thermostat);
assert.isFunction(Thermostat?.constructor);
```

Se debe usar la palabra clave `class`.

```js
assert.match(code, /class/);
```

`Thermostat` debe ser capaz de ser instanciado.

```js
const _t = new Thermostat(122);
assert.isObject(_t);
```

Cuando se crea una instancia con un valor de Fahrenheit, `Thermostat` debe establecer la temperatura (`temperature`) correcta.

```js
const _t = new Thermostat(122);
assert.strictEqual(_t?.temperature, 50);
```

Un `getter` debe ser definido.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.get);
```

Un `setter` debe ser definido.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.set);
```

Llamar al `setter` con un valor Celsius debe establecer `temperature`.

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
