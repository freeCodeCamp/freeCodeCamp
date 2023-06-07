---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN è un linguaggio di programmazione esoterico e Turing-completo inventato dal matematico John Horton Conway.

Un programma FRACTRAN è un elenco ordinato di frazioni positive $P = (f_1, f_2, \\ldots, f_m)$, insieme a un input intero iniziale positivo $n$.

Il programma viene eseguito aggiornando l'intero $n$ come segue:

<ul>
  <li>per la prima frazione, $f_i$, nella lista per la quale $nf_i$ è un numero intero, sostituire $n$ con $nf_i$;</li>
  <li>ripetere questa regola fino a quando nessuna frazione nella lista produce un numero intero quando moltiplicato per $n$, quindi arrestarsi.</li>
</ul>

Conway ha scritto un programma per i numeri primi in FRACTRAN:

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

A partire da $n=2$, questo programma FRACTRAN cambierà $n$ in $15=2\\times (\\frac{15}{2})$, poi $825=15\\times (\\frac{55}{1})$, generando la seguente sequenza di interi:

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

Dopo 2, questa sequenza contiene le seguenti potenze di 2:

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

che sono le potenze prime di 2.

# --instructions--

Scrivi una funzione che prende un programma fractran come parametro di tipo stringa e restituisce i primi 10 numeri del programma come un array. Se il risultato non ha 10 numeri, restituire i numeri così come sono.

# --hints--

`fractran` dovrebbe essere una funzione.

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` dovrebbe restituire un array.

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` dovrebbe restituire `[ 2, 3, 1 ]`.

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` dovrebbe restituire `[ 2, 3, 5, 1 ]`.

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` dovrebbe restituire `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`.

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` dovrebbe restituire `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`.

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` dovrebbe restituire `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`.

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
