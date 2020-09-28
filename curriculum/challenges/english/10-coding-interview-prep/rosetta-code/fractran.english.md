---
title: Fractran
id: 5a7dad05be01840e1778a0d1
challengeType: 5
forumTopicId: 302270
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/FRACTRAN" title="wp: FRACTRAN" target="_blank">FRACTRAN</a> is a Turing-complete esoteric programming language invented by the mathematician <a href="https://en.wikipedia.org/wiki/John Horton Conway" title="wp: John Horton Conway" target="_blank">John Horton Conway</a>.
A FRACTRAN program is an ordered list of positive fractions $P = (f_1, f_2, \ldots, f_m)$, together with an initial positive integer input $n$.
The program is run by updating the integer $n$ as follows:
<ul>
  <li>for the first fraction, $f_i$, in the list for which $nf_i$ is an integer, replace $n$ with $nf_i$ ;</li>
  <li>repeat this rule until no fraction in the list produces an integer when multiplied by $n$, then halt.</li>
</ul>
Conway gave a program for primes in FRACTRAN:
<span style="margin-left: 1em;">$\dfrac{17}{91}$, $\dfrac{78}{85}$, $\dfrac{19}{51}$, $\dfrac{23}{38}$, $\dfrac{29}{33}$, $\dfrac{77}{29}$, $\dfrac{95}{23}$, $\dfrac{77}{19}$, $\dfrac{1}{17}$, $\dfrac{11}{13}$, $\dfrac{13}{11}$, $\dfrac{15}{14}$, $\dfrac{15}{2}$, $\dfrac{55}{1}$</span>
Starting with $n=2$, this FRACTRAN program will change $n$ to $15=2\times (\frac{15}{2})$, then $825=15\times (\frac{55}{1})$, generating the following sequence of integers:
<span style="margin-left: 1em;">$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\ldots$</span>
After 2, this sequence contains the following powers of 2:
<span style="margin-left: 1em;">$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\ldots$</span>
which are the prime powers of 2.
</section>

## Instructions
<section id='instructions'>
Write a function that takes a fractran program as a string parameter and returns the first 10 numbers of the program as an array. If the result does not have 10 numbers then return the numbers as is.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fractran</code> should be a function.
    testString: assert(typeof fractran=='function');
  - text: <code>fractran("3/2, 1/3")</code> should return an array.
    testString: assert(Array.isArray(fractran('3/2, 1/3')));
  - text: <code>fractran("3/2, 1/3")</code> should return <code>[ 2, 3, 1 ]</code>.
    testString: assert.deepEqual(fractran('3/2, 1/3'), [ 2, 3, 1 ]);
  - text: <code>fractran("3/2, 5/3, 1/5")</code> should return <code>[ 2, 3, 5, 1 ]</code>.
    testString: assert.deepEqual(fractran('3/2, 5/3, 1/5'), [ 2, 3, 5, 1 ]);
  - text: <code>fractran("3/2, 6/3")</code> should return <code>[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]</code>.
    testString: assert.deepEqual(fractran('3/2, 6/3'), [ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]);
  - text: <code>fractran("2/7, 7/2")</code> should return <code>[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]</code>.
    testString: assert.deepEqual(fractran('2/7, 7/2'), [ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]);
  - text: <code>fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")</code> should return <code>[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]</code>.
    testString: assert.deepEqual(fractran('17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1'), [ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fractran(progStr) {

}
```

</div>

</section>

## Solution
<section id='solution'>


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

</section>
