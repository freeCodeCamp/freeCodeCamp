---
id: 5eb3e4af7d0e7b760b46cedc
title: Establecer consolidación
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

Dados dos conjuntos de elementos, y si cualquier elemento es común a cualquier conjunto entonces el resultado de aplicar *consolidación* a esos conjuntos es un conjunto de conjuntos cuyo contenido es:

<ul>
  <li>The two input sets if no common item exists between the two input sets of items.
Las dos entradas se ajustan si no tienen elementos en común.</li>
  <li>El único conjunto que es la unión de los dos conjuntos de entrada si comparten un elemento común.</li>
</ul>

Dado N conjuntos de elementos donde N > 2 entonces el resultado es el mismo que reemplazando repetidamente todas las combinaciones de dos conjuntos por su consolidación hasta que no sea posible una mayor consolidación entre pares de conjunto. Si N &lt; 2 entonces la consolidación no tiene un significado estricto y el valor de entrada puede ser devuelto.

Aquí hay un par de ejemplos:

**Ejemplo 1:**

Dados los dos conjuntos `{A,B}` y `{C,D}`, entonces no hay un elemento común entre los conjuntos y el resultado es el mismo que la entrada.

**Ejemplo 2:**

Dados los dos conjuntos `{A,B}` y `{B,D}`, entonces hay un elemento común `B` entre los conjuntos y el resultado es el conjunto único `{B,D,A}`. (Tenga en cuenta que el orden de los artículos en un conjunto es inmaterial: `{A,B,D}` es lo mismo que `{B,D,A}` y `{D,A,B}`, etc.

**Ejemplo 3:**

Dados los tres conjuntos `{A,B}`, `{C,D}` y `{D,B}` se conoce que no hay ningún elemento en común entre los conjuntos `{A,B}` y `{C,D}`, pero los conjuntos `{A,B}` y `{D,B}` sí comparten un elemento en común que se combina para producir el resultado `{B,D,A}`. Al analizar este resultado con el conjunto restante, `{C,D}`, comparten un elemento común y así consolidar el resultado final del conjunto único `{A,B,C,D}`

**Ejemplo 4:**

Consolidación de las cinco partes:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}`, y `{F,G,H}`

Son las dos partes:

`{A, C, B, D}`, y `{G, F, I, H, K}`

# --instructions--

Escribe uná función que tome un arreglo de cadenas como parámetro. Cada cadena es representa un establecer con los caracteres representan los establecer elementos. La función debe devolver un 2D arreglo que contenga los consolidado conjuntos. Nota: Cada conjunto debe ser ordenado.

# --hints--

`setConsolidation` deberian ser un función.

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` deberian devolver un arreglo.

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` deberian devolver `[["C", "D"], ["A", "B"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` deberian devolver `[["A", "B", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` deberian devolver `[["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` deberian devolver `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['HIK', 'AB', 'CD', 'DB', 'FGH']), [
  ['F', 'G', 'H', 'I', 'K'],
  ['A', 'B', 'C', 'D']
]);
```

# --seed--

## --seed-contents--

```js
function setConsolidation(sets) {

}
```

# --solutions--

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```
