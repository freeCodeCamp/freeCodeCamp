---
title: Josephus problem
id: 5a23c84252665b21eecc7ec5
localeTitle: 5a23c84252665b21eecc7ec5
challengeType: 5
---

## Description
<section id='description'> 
<a href="https://en.wikipedia.org/wiki/Josephus problem">problema de Josephus</a> es un rompecabezas matemático con una sombría descripción: $ n $ los prisioneros están parados en un círculo, numerados secuencialmente de $ 0 $ a $ n-1 $. 
Un verdugo camina a lo largo del círculo, comenzando desde el prisionero $ 0 $, sacando a cada $ k $ -th prisionero y matándolo. 
A medida que avanza el proceso, el círculo se hace cada vez más pequeño, hasta que solo queda un prisionero, quien es liberado. 
Por ejemplo, si hay $ n = 5 $ prisioneros y $ k = 2 $, el orden en que se mata a los prisioneros (llamémoslo la &quot;secuencia de matanza&quot;) será 1, 3, 0 y 4, y el El sobreviviente será el # 2. 
Dado cualquier <big>$ n, k&gt; 0 $</big> , averigüe qué prisionero será el sobreviviente final. 
En uno de esos incidentes, hubo 41 prisioneros y cada <sup>3º</sup> prisionero fue asesinado ( <big>$ k = 3 $</big> ). 
Entre ellos era un nombre cap inteligente Josefo que trabajaba en el problema, se situó en la posición de sobrevivir, y vivían en para contarlo. 
¿Qué número fue? 
Escriba una función que tome el número inicial de prisioneros y &#39;k&#39; como parámetro y devuelva el número del prisionero que sobrevive. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>josephus</code> debería ser una función.
    testString: 'assert(typeof josephus=="function","<code>josephus</code> should be a function.");'
  - text: <code>josephus(30,3)</code> debe devolver un número.
    testString: 'assert(typeof josephus(30,3)=="number","<code>josephus(30,3)</code> should return a number.");'
  - text: <code>josephus(30,3)</code> debe devolver <code>29</code> .
    testString: 'assert.equal(josephus(30,3),29,"<code>josephus(30,3)</code> should return <code>29</code>.");'
  - text: <code>josephus(30,5)</code> debe devolver <code>3</code> .
    testString: 'assert.equal(josephus(30,5),3,"<code>josephus(30,5)</code> should return <code>3</code>.");'
  - text: <code>josephus(20,2)</code> debe devolver <code>9</code> .
    testString: 'assert.equal(josephus(20,2),9,"<code>josephus(20,2)</code> should return <code>9</code>.");'
  - text: <code>josephus(17,6)</code> debe devolver <code>2</code> .
    testString: 'assert.equal(josephus(17,6),2,"<code>josephus(17,6)</code> should return <code>2</code>.");'
  - text: <code>josephus(29,4)</code> debe devolver <code>2</code> .
    testString: 'assert.equal(josephus(29,4),2,"<code>josephus(29,4)</code> should return <code>2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function josephus (init, kill) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function josephus (init, kill) {
  var Josephus = {
    init: function(n) {
      this.head = {};
      var current = this.head;
      for (var i = 0; i < n - 1; i++) {
        current.label = i + 1;
        current.next = {
          prev: current
        };
        current = current.next;
      }
      current.label = n;
      current.next = this.head;
      this.head.prev = current;
      return this;
    },
    kill: function(spacing) {
      var current = this.head;
      while (current.next !== current) {
        for (var i = 0; i < spacing - 1; i++) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current = current.next;
      }
      return current.label;
    }
  }

  return Josephus.init(init).kill(kill)
}


```

</section>
