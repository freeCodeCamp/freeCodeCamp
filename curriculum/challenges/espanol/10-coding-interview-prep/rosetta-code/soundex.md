---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** trata con la *intentions* de las palabras. Crea una representación para palabras de sonido similar.

Es usada para buscar <em>names</em> y <em>addresses</em>. Esto significa que la persona que llenó el <em>name</em>, puede enfocarse en como suena en lugar de corregir la pronunciación de <em>names</em>.

Por ejemplo:

Si estás escuchando el nombre `Quenci` por primera vez, y mal ingresado obtendrás el código **Soundex** `Q520`.

Cuando deletreas correctamente el nombre `Quincy` la próxima vez, aún obtendrás el mismo código `Q520`, lo que significa que tu puedes enlazar multiples pronunciaciones de nombre sobre el mismo <em>person</em> sin la necesidad de agregar cada deletreo.

Aquí están las reglas: 

<ul>
  <li>Si una vocal (A, E, I, O, U) separa dos consonantes que tienen el mismo código soundex, la consonante a la derecha de la vocal es codificada. Tymczak es codificado como T-522 (T, 5 para la M, 2 para la C, Z es ignorada (Consulta en la parte superior la regla "Side-by-Side"), 2 para la K). Puesto que la vocal "A" separa la Z y K, la K is codificada.</li>
  <li>Si la "H" o "W" separan dos consonantes que tienen el mismo código, la consonante a la derecha de la vocal no es codificada. Ejemplo: Ashcraft es codificado A-261 (A, 2 para la S, C es ignorado, 6 para la R, 1 para la F). No es codificado A-226.</li>
</ul>

# --instructions--

Escribe una función Write que tome una cadena como un parámetro y devuelva la cadena codificada.

# --hints--

`soundex` debe ser una función.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` debe devolver una cadena.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` debe devolver `"S532"`.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` debe devolver `"E251"`.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` deb retornar `"S532"`.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` debe devolver `"E251"`.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` should return `"E460"`.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` should return `"G200"`.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` should return `"H416"`.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` should return `"K530"`.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` should return `"L300"`.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` should return `"L222"`.

```js
assert.equal(soundex('Lukasiewicz'), 'L222');
```

# --seed--

## --seed-contents--

```js
function soundex(s) {

}
```

# --solutions--

```js
function soundex(s) {
  var a = s.toLowerCase().split('');
  var f = a.shift(),
    r = '',
    codes = {
      a: '',
      e: '',
      i: '',
      o: '',
      u: '',
      b: 1,
      f: 1,
      p: 1,
      v: 1,
      c: 2,
      g: 2,
      j: 2,
      k: 2,
      q: 2,
      s: 2,
      x: 2,
      z: 2,
      d: 3,
      t: 3,
      l: 4,
      m: 5,
      n: 5,
      r: 6
    };
  r =
    f +
    a
      .map(function(v, i, a) {
        return codes[v];
      })
      .filter(function(v, i, a) {
        return i === 0 ? v !== codes[f] : v !== a[i - 1];
      })
      .join('');

  return (r + '000').slice(0, 4).toUpperCase();
}
```
