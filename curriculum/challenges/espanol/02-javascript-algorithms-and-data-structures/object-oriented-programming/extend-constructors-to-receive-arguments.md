---
id: 587d7dae367417b2b2512b79
title: Extender constructores para recibir argumentos
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

Los constructores de `Bird` y `Dog` del último desafío funcionaron bien. Sin embargo, nota que todas las `Birds` que son creadas con el constructor `Bird`, automáticamente se nombran Albert, son de color azul y tienen dos patas. ¿Qué pasa si quieres Birds (aves) con diferentes valores para nombre y color? Es posible cambiar manualmente las propiedades de cada Bird (ave), pero sería bastante trabajo:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Supongamos que estabas escribiendo un programa para hacer seguimiento de cientos o incluso miles de aves diferentes en un aviario. Tardaría mucho tiempo en crear todas las aves, para luego cambiar las propiedades a diferentes valores para cada una. Para crear más fácilmente diferentes objetos `Bird`, puedes diseñar tu constructor de aves para aceptar parámetros:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Luego pasa los valores como argumentos para definir cada ave única en el constructor `Bird`: `let cardinal = new Bird("Bruce", "red");` Esto genera una nueva instancia de `Bird` con propiedades `name` y `color` que tienen como valor `Bruce` y `red`, respectivamente. La propiedad `numLegs` aún está establecida en 2. El `cardinal` tiene estas propiedades:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

El constructor es más flexible. Ahora es posible definir las propiedades para cada `Bird` en el momento que se crea. Esta es una manera en que los constructores de JavaScript son tan útiles. Estos agrupan objetos basados en características y comportamiento compartidos, y definen un plano que automatiza su creación.

# --instructions--

Crea otro constructor `Dog`. Esta vez, configúralo para que tome los parámetros `name` y `color`, y ten la propiedad `numLegs` fija a 4. Luego crea un nuevo `Dog` almacenado en una variable `terrier`. Pasale dos cadenas de texto como argumentos para las propiedades `name` y `color`.

# --hints--

`Dog` debe recibir un argumento para `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` debe recibir un argumento para `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` debe tener la propiedad `numLegs` fija a 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` debería ser creado usando el constructor `Dog`.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
