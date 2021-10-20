---
id: 587d7daf367417b2b2512b7e
title: Entiende la propiedad constructor
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

Hay una propiedad especial `constructor` ubicada en instancias de objeto `duck` y `beagle` que fueron creados en desafíos anteriores:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Ambas llamadas `console.log` devolverían `true` en la consola.

Ten en cuenta que la propiedad `constructor` hace referencia a la función constructor que creo la instancia. La ventaja de la propiedad `constructor` es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Así es como se podría utilizar:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Nota:** dado que la propiedad `constructor` se puede sobreescribir (se verá en los próximos dos desafíos), por lo general, es mejor utilizar el método `instanceof` para verificar el tipo de un objeto.

# --instructions--

Escribe una función `joinDogFraternity` que tome como parámetro `candidate` y que con la propiedad `constructor`, devuelva `true` si el candidato es un `Dog` y si no lo es debería devolver `false`.

# --hints--

`joinDogFraternity` debe definirse como una función.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` debe devolver `true` si `candidate` es una instancia de `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` debe utilizar la propiedad `constructor`.

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
