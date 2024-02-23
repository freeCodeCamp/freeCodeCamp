---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN é uma linguagem de programação esotérica, completa para testes Turing, inventada pelo matemático John Horton Conway.

Um programa em FRACTRAN é uma lista ordenada de frações positivas $P = (f_1, f_2, \\ldots, f_m)$, juntamente com uma primeira entrada positiva inteira $n$.

O programa é executado atualizando o inteiro $n$ da seguinte forma:

<ul>
  <li>para a primeira fração, $f_i$, na lista para a qual $nf_i$ é um número inteiro, substitua $n$ por $nf_i$;</li>
  <li>repita essa regra até que nenhuma fração na lista produza um inteiro quando multiplicado por $n$, e então pare.</li>
</ul>

Conway forneceu um programa para números primos em FRACTRAN:

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

Começando com $n=2$, este programa em FRACTRAN mudará $n$ para $15=2\\times (\\frac{15}{2})$, então $825=15\\times (\\frac{55}{1})$, gerando a seguinte sequência de inteiros:

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

Depois do 2, esta sequência contém as seguintes potências de 2:

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

que são as principais potências primas de 2.

# --instructions--

Escreva uma função que recebe um programa em fractran como um parâmetro de string e retorna os primeiros 10 números do programa como um array. Se o resultado não tiver 10 números, então retorne os números como estão.

# --hints--

`fractran` deve ser uma função.

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` deve retornar um array.

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` deve retornar `[ 2, 3, 1 ]`.

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` deve retornar `[ 2, 3, 5, 1 ]`.

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` deve retornar `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`.

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` deve retornar `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`.

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` deve retornar `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`.

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
