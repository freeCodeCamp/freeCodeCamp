---
id: 587d7db2367417b2b2512b8a
title: >-
  Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

En el desafío anterior, `bird` tenía una propiedad pública `name`. Se considera pública porque se puede acceder y cambiar fuera de la definición de `bird`.

```js
bird.name = "Duffy";
```

Por lo tanto, cualquier parte de tu código puede cambiar fácilmente el nombre "name" de `bird` a cualquier valor. Piensa en cosas como contraseñas y cuentas bancarias que se pueden cambiar fácilmente por cualquier parte de tu base de código. Eso podría crear muchos problemas.

La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.

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

Aquí `getHatchedEggCount` es un método privilegiado, porque tiene acceso a la variable privada `hatchedEgg`. Esto es posible porque `hatchedEgg` está declarada en el mismo contexto que `getHatchedEggCount`. En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama `closure`.

# --instructions--

Cambia como `weight` es declarada en la función `Bird` para que sea una variable privada. Después, crea un método `getWeight` que devuelva el valor 15 para `weight`.

# --hints--

La propiedad `weight` debe ser una variable privada y debe asignársele el valor `15`.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

Tu código debe crear un método llamado `getWeight` en `Bird` que devuelva el valor de la variable privada `weight`.

```js
assert(new Bird().getWeight() === 15);
```

Tu función `getWeight` debe devolver la variable privada `weight`.

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
