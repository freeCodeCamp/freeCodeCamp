---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
localeTitle: 5951a53863c8a34f02bf1bdc
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Proporcione una función para encontrar los dos puntos más cercanos entre un conjunto de puntos dados en dos dimensiones, es decir, para resolver el problema del <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: problema de par de puntos más cercano">par de puntos más cercano</a> en el caso plano. </p><p> La solución directa es un algoritmo O (n <sup>2</sup> ) (que podemos llamar algoritmo de fuerza bruta); El pseudocódigo (utilizando índices) podría ser simplemente: </p> 
<pre> 
bruteForceClosestPair de P (1), P (2), ... P (N) 
si N &lt;2 entonces 
retorno ∞ 
otro 
minDistance ← | P (1) - P (2) | 
minPuntos ← {P (1), P (2)} 
foreach i ∈ [1, N-1] 
foreach j ∈ [i + 1, N] 
si | P (i) - P (j) | &lt;minDistance luego 
minDistance ← | P (i) - P (j) | 
minPuntos ← {P (i), P (j)} 
endif 
endfor 
endfor 
return minDistance, minPoints 
endif 
</pre> 
<p> Un mejor algoritmo se basa en el enfoque recursivo de divide y vencerás, como se explica también en <a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp: problema de par de puntos más cercano # Planar_case">el problema del par de puntos más cercanos de Wikipedia</a> , que es O (n log n); Un pseudocódigo podría ser: </p> 
<pre> 
par más cercano de (xP, yP) 
donde xP es P (1) .. P (N) ordenada por la coordenada x, y 
yP es P (1) .. P (N) ordenada por la coordenada y (orden ascendente) 
si N ≤ 3 entonces 
devuelve los puntos más cercanos de xP utilizando el algoritmo de fuerza bruta 
más 
xL ← puntos de xP de 1 a ⌈N / 2⌉ 
xR ← puntos de xP de ⌈N / 2⌉ + 1 a N 
xm ← xP (⌈N / 2⌉) <sub>x</sub> 
yL ← {p ∈ yP: p <sub>x</sub> ≤ xm} 
yR ← {p ∈ yP: p <sub>x</sub> &gt; xm} 
(dL, pairL) ← closestPar de (xL, yL) 
(dR, pairR) ← par más cercano de (xR, yR) 
(dmin, pairMin) ← (dR, pairR) 
si dL &lt;dR luego 
(dmin, pairMin) ← (dL, pairL) 
endif 
yS ← { p ∈ yP: | xm - p <sub>x</sub> | &lt;dmin} 
nS ← número de puntos en yS 
(la par más cercana, más cercana) ← (dmin, pairMin) 
para i de 1 a nS - 1 
k ← i + 1 
mientras k ≤ nS e yS (k) <sub>y</sub> - yS (i) <sub>y</sub> &lt;dmin 
si | yS (k) - yS (i) | &lt;más cercano entonces 
(más cercano, más cercano) ← (| yS (k) - yS (i) |, {yS (k), yS (i)}) 
endif 
k ← k + 1 
endwhile 
endfor 
return más cercano más cercano par 
endif 
</pre> 
Referencias y otras lecturas: 
<a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: problema de par de puntos más cercano">Par de puntos</a> <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="enlace: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">más cercanos</a> <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: problema de par de puntos más cercano">problema</a> 
<a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="enlace: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">Par más cercano (McGill)</a> 
<a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="enlace: http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">Par más cercano (UCSB)</a> 
<a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="enlace: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Par más cercano (WUStL)</a> 
<a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="enlace: http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">Par más cercano (IUPUI)</a> 
<p> Para la entrada, espere que el argumento sea una matriz de objetos (puntos) con los miembros <code>x</code> e <code>y</code> establecidos en números. Para la salida, devuelva un objeto que contenga los pares clave: valor para la <code>distance</code> y el <code>pair</code> (es decir, el par de dos puntos más cercanos). </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code> es una función.
    testString: 'assert(typeof getClosestPair === "function", "<code>getClosestPair</code> is a function.");'
  - text: La distancia debe ser la siguiente.
    testString: 'assert.equal(getClosestPair(points1).distance, answer1.distance, "Distance should be the following.");'
  - text: Los puntos deben ser los siguientes.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair, "Points should be the following.");'
  - text: La distancia debe ser la siguiente.
    testString: 'assert.equal(getClosestPair(points2).distance, answer2.distance, "Distance should be the following.");'
  - text: Los puntos deben ser los siguientes.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair, "Points should be the following.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

function getClosestPair (pointsArr) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

const mergeSort = function mergeSort(points, comp) {
	if(points.length < 2) return points;

	var n = points.length,
		i = 0,
		j = 0,
		leftN = Math.floor(n / 2),
		rightN = leftN;

	var leftPart = mergeSort( points.slice(0, leftN), comp),
		rightPart = mergeSort( points.slice(rightN), comp );

	var sortedPart = [];

	while((i < leftPart.length) && (j < rightPart.length)) {
		if(comp(leftPart[i], rightPart[j]) < 0) {
			sortedPart.push(leftPart[i]);
			i += 1;
		}
		else {
			sortedPart.push(rightPart[j]);
			j += 1;
		}
	}
	while(i < leftPart.length) {
		sortedPart.push(leftPart[i]);
		i += 1;
	}
	while(j < rightPart.length) {
		sortedPart.push(rightPart[j]);
		j += 1;
	}
	return sortedPart;
};

const closestPair = function _closestPair(Px, Py) {
	if(Px.length < 2) return { distance: Infinity, pair: [ new Point(0, 0), new Point(0, 0) ] };
	if(Px.length < 3) {
		//find euclid distance
		var d = Math.sqrt( Math.pow(Math.abs(Px[1].x - Px[0].x), 2) + Math.pow(Math.abs(Px[1].y - Px[0].y), 2) );
		return {
			distance: d,
			pair: [ Px[0], Px[1] ]
		};
	}

	var	n = Px.length,
		leftN = Math.floor(n / 2),
		rightN = leftN;

	var Xl = Px.slice(0, leftN),
		Xr = Px.slice(rightN),
		Xm = Xl[leftN - 1],
		Yl = [],
		Yr = [];
	//separate Py
	for(var i = 0; i < Py.length; i += 1) {
		if(Py[i].x <= Xm.x)
			Yl.push(Py[i]);
		else
			Yr.push(Py[i]);
	}

	var dLeft = _closestPair(Xl, Yl),
		dRight = _closestPair(Xr, Yr);

	var minDelta = dLeft.distance,
		closestPair = dLeft.pair;
	if(dLeft.distance > dRight.distance) {
		minDelta = dRight.distance;
		closestPair = dRight.pair;
	}

	//filter points around Xm within delta (minDelta)
	var closeY = [];
	for(i = 0; i < Py.length; i += 1) {
		if(Math.abs(Py[i].x - Xm.x) < minDelta) closeY.push(Py[i]);
	}
	//find min within delta. 8 steps max
	for(i = 0; i < closeY.length; i += 1) {
		for(var j = i + 1; j < Math.min( (i + 8), closeY.length ); j += 1) {
			var d = Math.sqrt( Math.pow(Math.abs(closeY[j].x - closeY[i].x), 2) + Math.pow(Math.abs(closeY[j].y - closeY[i].y), 2) );
			if(d < minDelta) {
				minDelta = d;
				closestPair = [ closeY[i], closeY[j] ]
			}
		}
	}

	return {
		distance: minDelta,
		pair: closestPair
	};
};

function getClosestPair (points) {
  const sortX = function (a, b) { return (a.x < b.x) ? -1 : ((a.x > b.x) ? 1 : 0); }
  const sortY = function (a, b) { return (a.y < b.y) ? -1 : ((a.y > b.y) ? 1 : 0); }

  const Px = mergeSort(points, sortX);
  const Py = mergeSort(points, sortY);

  return closestPair(Px, Py);
}

```

</section>
