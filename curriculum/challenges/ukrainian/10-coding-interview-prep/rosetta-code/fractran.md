---
id: 5a7dad05be01840e1778a0d1
title: Мова програмування Fractran
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN is a Turing-complete esoteric programming language invented by the mathematician John Horton Conway.

Програма FRACTRAN є впорядкованим списком додатних дробів $P = (f_1, f_2, \\ldots, f_m)$, разом з початковим введенням додатного цілого числа $n$.

Програма запускається шляхом оновлення цілого числа $n$ наступним чином:

<ul>
  <li>для першого дробу, $f_i$в списку, для якого $nf_i$ є цілим числом, замінить $n$ на $nf_i$;</li>
  <li>повторіть це правило допоки жоден дріб у списку не виробляє ціле число, коли помножений на $n$, потім зупиніть.</li>
</ul>

Конвей дав програму для простих чисел в FRACTRAN:

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

Починаючи з $n=2$, ця програма FRACTRAN змінить $n$ на 15=2\\times (\\frac{15}{2})$, потім $825=15\\t (\\frac{55}{1}$, генеруючи наступну послідовність цілих чисел:

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

Після 2, ця послідовність містить наступні степені 2:

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

які є простими степенями від 2.

# --instructions--

Напишіть функцію, яка приймає програму fractran як рядковий параметр і повертає перші 10 номерів програми як масив. Якщо результат не містить 10 чисел, поверніть числа як є.

# --hints--

`fractran` має бути функцією.

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` має повернути масив.

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` має повернути `[ 2, 3, 1 ]`.

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` має повернути `[ 2, 3, 5, 1 ]`.

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` має повернути `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`.

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` має повернути `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`.

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` має повернути `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`.

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
