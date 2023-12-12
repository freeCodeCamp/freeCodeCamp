---
id: 587d7b8c367417b2b2512b54
title: Usare getter e setter per controllare l'accesso a un oggetto
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

È possibile ottenere valori da un oggetto ed impostare il valore di una proprietà all'interno di un oggetto.

Queste due azioni sono classicamente chiamate <dfn>getter</dfn> e <dfn>setter</dfn>.

Le funzioni getter sono destinate semplicemente a restituire (to get, ottenere) all'utente il valore della variabile privata di un oggetto, senza che l'utente acceda direttamente alla variabile privata.

Le funzioni setter sono destinate a modificare (to set, impostare) il valore della variabile privata di un oggetto in base al valore passato nella funzione di impostazione. Questa modifica potrebbe comportare calcoli, o addirittura sovrascrivere completamente il valore precedente.

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

La console mostrerà le stringhe `anonymous` e `newAuthor`.

Notare la sintassi utilizzata per invocare le funzioni getter e setter. Non assomigliano nemmeno a funzioni. Getter e setter sono importanti perché nascondono i dettagli interni dell'implementazione.

**Nota:** È convenzione precedere il nome di una variabile privata con un underscore(`_`). Tuttavia, la pratica in sé non rende privata una variabile.

# --instructions--

Usa la parola chiave `class` per creare una classe `Thermostat`. Il `constructor` accetta una temperatura in Fahrenheit.

All'interno della classe, crea un `getter` per ottenere la temperatura in Celsius e un `setter` che accetta una temperatura in Celsius.

Ricorda che `C = 5/9 * (F - 32)` e `F = C * 9.0 / 5 + 32`, dove `F` è il valore della temperatura in Fahrenheit, e `C` è il valore della stessa temperatura in Celsius.

**Nota:** Una volta implementato, monitorerai la temperatura all'interno della classe in una scala, sia essa Fahrenheit o Celsius.

Questo è il potere di un getter e di un setter. Stai creando un'API per un altro utente, che può ottenere il risultato corretto, indipendentemente da quale stai monitorando.

In altre parole, stai astraendo i dettagli di implementazione dall'utente.

# --hints--

`Thermostat` dovrebbe essere una `class` con un metodo `constructor` definito.

```js
assert.isFunction(Thermostat);
assert.isFunction(Thermostat?.constructor);
```

Dovresti usare la parola chiave `class`.

```js
assert.match(code, /class/);
```

`Thermostat` dovrebbe poter essere istanziato.

```js
const _t = new Thermostat(122);
assert.isObject(_t);
```

Quando istanziato con un valore in Fahrenheit, `Thermostat` dovrebbe impostare la `temperature` corretta.

```js
const _t = new Thermostat(122);
assert.strictEqual(_t?.temperature, 50);
```

Dovrebbe essere definita una funzione `getter`.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.get);
```

Dovrebbe essere definita una funzione `setter`.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.set);
```

Chiamando il `setter` con un valore in Celsius dovrebbe essere impostata la `temperature`.

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
