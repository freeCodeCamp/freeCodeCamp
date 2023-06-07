---
id: 587d8253367417b2b2512c6a
title: Matrices tipeadas
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Los matrices son objetos JavaScript que pueden contener muchos elementos diferentes.

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

Básicamente, lo que sucede en segundo plano es que el navegador automáticamente le dará la cantidad correcta de espacio de memoria para esa matriz. También cambiará según sea necesario si añade o elimina datos.

Sin embargo, en el mundo de alto rendimiento y diferentes tipos de elementos, a veces es necesario ser más específico en cuanto a la cantidad de memoria que se da a una matriz.

<dfn>Los arreglos escritos</dfn> son la respuesta a este problema. Ahora puedes decir cuánta memoria quieres dar a una matriz. Debajo hay una visión general básica de los diferentes tipos de matrices disponibles y el tamaño en bytes para cada elemento de esa matriz.

<table class='table table-striped'><tbody><tr><th>Tipo</th><th>Cada tamaño de elemento en bytes</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

Hay dos formas de crear este tipo de matriz. Una forma es crearla directamente. A continuación se muestra cómo crear una longitud de 3 `Int16Array`.

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

También puede crear un <dfn>búfer</dfn> para asignar cuántos datos (en bytes) desea que el array ocupe. **Nota**  
Para crear arreglos escritos usando búferes, necesita asignar el número de bytes para ser un múltiplo de los bytes listados arriba.

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>Los búferes</dfn> son objetos de propósito general que solo llevan datos. No puedes acceder a ellos normalmente. Para acceder a ellos, primero necesita crear una <dfn>vista</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**Note**  
Los arrays tipeados no tienen algunos de los métodos que tienen arrays tradicionales como `.pop()` o `.push()`. Los arreglos escritos también fallan `Array.isArray()` que comprueba si algo es un arreglo. Aunque más sencillo, esto puede ser una ventaja para los motores JavaScript menos sofisticados para implementarlos.

# --instructions--

Primero cree un `búfer` de 64 bytes. Luego crea un array tipeado de `Int32Array` con una vista llamada `i32View`.

# --hints--

El búfer `` debe tener 64 bytes de tamaño.

```js
assert(buffer.byteLength === 64);
```

La vista `i32View` del búfer debe ser de 64 bytes.

```js
assert(i32View.byteLength === 64);
```

La vista `i32View` del búfer debe tener 16 elementos de largo.

```js
assert(i32View.length === 16);
```

# --seed--

## --seed-contents--

```js
var buffer;
var i32View;
```

# --solutions--

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```
