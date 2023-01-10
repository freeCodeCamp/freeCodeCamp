---
id: 5a23c84252665b21eecc8045
title: Taglio di un poligono di Sutherland-Hodgman
challengeType: 1
forumTopicId: 302336
dashedName: sutherland-hodgman-polygon-clipping
---

# --description--

L'algoritmo di ritaglio Sutherland-Hodgman trova il poligono che è l'intersezione tra un poligono arbitrario (il "poligono soggetto") e un poligono convesso (il "poligono di ritaglio"). Viene utilizzato nella grafica informatica (in particolare nella grafica 2D) per ridurre la complessità di una scena che viene visualizzata eliminando parti di un poligono che non hanno bisogno di essere visualizzate. Prende il poligono chiuso definito dai punti:

<pre>[(50, 150), (200, 50), (350, 150), (350, 300), (250, 300), (200, 250), (150, 350), (100, 250), (100, 200)]</pre>

e lo ritaglia dal rettangolo definito dai punti:

<pre>[(100, 100), (300, 100), (300, 300), (100, 300)]</pre>

# --instructions--

Scrivi una funzione che richiede 2 array come parametri. Il primo array contiene i punti del poligono soggetto e il secondo array contiene i punti del poligono di ritaglio. La funzione dovrebbe restituire un array contenente i punti del poligono ritagliato. Ogni numero deve essere arrotondato al terzo decimale.

# --hints--

`clip` dovrebbe essere una funzione.

```js
assert(typeof clip == 'function');
```

`clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])` dovrebbe restituire un array.

```js
assert(
  Array.isArray(
    clip(
      [
        [50, 150],
        [200, 50],
        [350, 150],
        [350, 300],
        [250, 300],
        [200, 250],
        [150, 350],
        [100, 250],
        [100, 200]
      ],
      [
        [100, 100],
        [300, 100],
        [300, 300],
        [100, 300]
      ]
    )
  )
);
```

`clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])` dovrebbe restituire `[[100, 116.667], [125, 100], [275, 100], [300, 116.667], [300, 300], [250, 300], [200, 250], [175, 300], [125, 300], [100, 250]]`.

```js
assert.deepEqual(
  clip(
    [
      [50, 150],
      [200, 50],
      [350, 150],
      [350, 300],
      [250, 300],
      [200, 250],
      [150, 350],
      [100, 250],
      [100, 200]
    ],
    [
      [100, 100],
      [300, 100],
      [300, 300],
      [100, 300]
    ]
  ),
  [
    [100, 116.667],
    [125, 100],
    [275, 100],
    [300, 116.667],
    [300, 300],
    [250, 300],
    [200, 250],
    [175, 300],
    [125, 300],
    [100, 250]
  ]
);
```

`clip([[150, 200], [400, 450], [30, 50]], [[10, 10], [300, 200], [400, 600], [100, 300]])` dovrebbe restituire `[[150, 200], [350, 400], [348.611, 394.444], [30, 50]]`.

```js
assert.deepEqual(
  clip(
    [
      [150, 200],
      [400, 450],
      [30, 50]
    ],
    [
      [10, 10],
      [300, 200],
      [400, 600],
      [100, 300]
    ]
  ),
  [
    [150, 200],
    [350, 400],
    [348.611, 394.444],
    [30, 50]
  ]
);
```

`clip([[250, 200], [100, 450], [130, 250]], [[50, 60], [100, 230], [400, 600], [100, 300]])` dovrebbe restituire `[[129.167, 329.167], [119.565, 319.565], [121.854, 304.305]]`.

```js
assert.deepEqual(
  clip(
    [
      [250, 200],
      [100, 450],
      [130, 250]
    ],
    [
      [50, 60],
      [100, 230],
      [400, 600],
      [100, 300]
    ]
  ),
  [
    [129.167, 329.167],
    [119.565, 319.565],
    [121.854, 304.305]
  ]
);
```

# --seed--

## --seed-contents--

```js
function clip(subjectPolygon, clipPolygon) {

}
```

# --solutions--

```js
function clip(subjectPolygon, clipPolygon) {
  var cp1, cp2, s, e, i, j;
  var inside = function(p) {
    return (
      (cp2[0] - cp1[0]) * (p[1] - cp1[1]) > (cp2[1] - cp1[1]) * (p[0] - cp1[0])
    );
  };
  var intersection = function() {
    var dc = [cp1[0] - cp2[0], cp1[1] - cp2[1]],
      dp = [s[0] - e[0], s[1] - e[1]],
      n1 = cp1[0] * cp2[1] - cp1[1] * cp2[0],
      n2 = s[0] * e[1] - s[1] * e[0],
      n3 = 1.0 / (dc[0] * dp[1] - dc[1] * dp[0]);
    return [(n1 * dp[0] - n2 * dc[0]) * n3, (n1 * dp[1] - n2 * dc[1]) * n3];
  };
  var outputList = subjectPolygon;
  cp1 = clipPolygon[clipPolygon.length - 1];
  for (j in clipPolygon) {
    var cp2 = clipPolygon[j];
    var inputList = outputList;
    outputList = [];
    s = inputList[inputList.length - 1]; //last on the input list
    for (i in inputList) {
      var e = inputList[i];
      if (inside(e)) {
        if (!inside(s)) {
          outputList.push(intersection());
        }
        outputList.push(e);
      } else if (inside(s)) {
        outputList.push(intersection());
      }
      s = e;
    }
    cp1 = cp2;
  }
  return outputList.map(e => e.map(f => Math.round(f * 1000) / 1000));
}
```
