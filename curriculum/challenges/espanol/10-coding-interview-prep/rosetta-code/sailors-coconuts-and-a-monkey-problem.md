---
id: 59da22823d04c95919d46269
title: 'Marineros, cocos y un problema de monos'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Cinco marineros acabaron naufragos en una isla y colectan una larga pila de cocos durante el día.

Esa noche el primer marinero despertó y decidió tomar su primera compartida temprana para intentar dividir la pila de cocos igualmente en 5 pilas pero se encontró que sobrá un coco, entonces el lo lanzó a un mono y luego ocultó el "suyo" una de cinco pilas de igual tamaño de cocos y empujo las cuatro otras pilas juntas para formar una única pila visible de cocos nuevamente y fue a la cama.

Para resumir una larga historia, cada uno de los marinos se levantan una vez durante la noche y realizan las mismas acciones dividir la pila de cocos en cinco, encontrandose que hay un coco sobrante y dando ese coco sobrante al mono, luego empujan las otras 4 pilas juntas para formar una única pila.

En la mañana (luego de la acción suprepticia y separada durante la noche), los cocos restantes son divididos en cinco pilas iguales para cada uno de los marinos, donde quiera esta se encuentre la pila de cocos esta dividida en iguales cantidades a los marinos sin residuos. (Nada para el mono en la mañana.)

# --instructions--

Crea una función que devuelve el tamaño mínimo posible de la pila de cocos recolectados durante el día `N` para los marinos. **Note:** Por supuesto la historia esta dicha en un mundo donde la recolección de cualquier número de cocos en un día y multiples divisiones de la pila, etc. puede ocurrir a tiempo ajustando la línea de la historia, pero no afacta las matemáticas.

# --hints--

`splitCoconuts` debería ser una función.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` debería devolver 3121.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` debería devolver 233275.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` debería devolver 823537.

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
