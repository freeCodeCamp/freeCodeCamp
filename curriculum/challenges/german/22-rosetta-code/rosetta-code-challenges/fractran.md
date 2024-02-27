---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN is a Turing-complete esoteric programming language invented by the mathematician John Horton Conway.

Ein FRACTRAN-Programm ist eine geordnete Liste von positiven Brüchen $P = (f_1, f_2, \\ldots, f_m)$, zusammen mit einer anfänglichen positiven ganzen Zahl $n$.

Das Programm wird ausgeführt, indem die ganze Zahl $n$ wie folgt aktualisiert wird:

<ul>
  <li>for the first fraction, $f_i$, in the list for which $nf_i$ is an integer, replace $n$ with $nf_i$ ;</li>
  <li>wiederhole diese Regel, bis kein Bruch in der Liste eine ganze Zahl ergibt, wenn er mit $n$ multipliziert wird, und halte dann an.</li>
</ul>

Conway gab ein Programm für Primzahlen in FRACTRAN:

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

Ausgehend von $n=2$ ändert dieses FRACTRAN-Programm $n$ in $15=2\\times (\\\frac{15}{2})$, dann $825=15\\times (\\\frac{55}{1})$ und erzeugt die folgende Folge von ganzen Zahlen:

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

Nach 2 enthält diese Folge die folgenden Potenzen von 2:

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

die die Primzahlen von 2 sind.

# --instructions--

Schreibe eine Funktion, die ein Fraktran-Programm als String-Parameter annimmt und die ersten 10 Zahlen des Programms als Auflistung zurückgibt. Wenn das Ergebnis keine 10 Zahlen enthält, werden die Zahlen so zurückgegeben, wie sie sind.

# --hints--

`fractran` sollte eine Funktion sein.

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` sollte eine Anordnung zurückgeben.

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` sollte `[ 2, 3, 1 ]` zurückgeben.

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` sollte `[ 2, 3, 5, 1 ]` zurückgeben.

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` sollte `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]` zurückgeben.

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` sollte `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]` zurückgeben.

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` sollte `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]` zurückgeben.

```js
assert.deepEqual(
  fractran(
    '17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1'
  ),
  [2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290]
);
```

# --seed--

## --seed-contents--

```js
function fractran(progStr) {

}
```

# --solutions--

```js
function fractran(progStr){
  var num = new Array();
  var den = new Array();
  var val ;
  var out="";
  function compile(prog){
    var regex = /\s*(\d*)\s*\/\s*(\d*)\s*(.*)/m;
    while(regex.test(prog)){
      num.push(regex.exec(prog)[1]);
      den.push(regex.exec(prog)[2]);
      prog = regex.exec(prog)[3];
    }
  }

  function step(val){
    var i=0;
    while(i<den.length && val%den[i] != 0) i++;
    return num[i]*val/den[i];
  }

  var seq=[]

  function exec(val){
    var i = 0;
    while(val && i<limit){
      seq.push(val)
      val = step(val);
      i ++;
    }
  }

  // Main
  compile(progStr);
  var limit = 10;
  exec(2);
  return seq;
}
```
