---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: ''
localeTitle: Manipular matrizes com unshift ()
---

## Description
<section id="description"> Não apenas você pode <code>shift</code> elementos do início de um array, você também pode <code>unshift</code> elementos para o início de um array, isto é, adicionar elementos na frente do array. <code>.unshift()</code> funciona exatamente como <code>.push()</code> , mas em vez de adicionar o elemento no final da matriz, <code>unshift()</code> adiciona o elemento no início da matriz. </section>

## Instructions
<section id="instructions"> Adicione <code>[&quot;Paul&quot;,35]</code> ao início da variável <code>myArray</code> usando <code>unshift()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> agora deve ter [[&quot;Paul&quot;, 35], [&quot;dog&quot;, 3]].'
    testString: 'assert((function(d){if(typeof d[0] === "object" && d[0][0] == "Paul" && d[0][1] === 35 && d[1][0] != undefined && d[1][0] == "dog" && d[1][1] != undefined && d[1][1] == 3){return true;}else{return false;}})(myArray), "<code>myArray</code> should now have [["Paul", 35], ["dog", 3]].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

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
// solution required
```
</section>
