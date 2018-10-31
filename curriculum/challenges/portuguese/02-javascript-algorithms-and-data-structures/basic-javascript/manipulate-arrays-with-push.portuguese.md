---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1
videoUrl: ''
localeTitle: Manipular matrizes com push ()
---

## Description
<section id="description"> Uma maneira fácil de anexar dados ao final de um array é por meio da função <code>push()</code> . <code>.push()</code> recebe um ou mais <dfn>parâmetros</dfn> e os &quot;empurra&quot; para o final do array. <blockquote> var arr = [1,2,3]; <br> arr.push (4); <br> // arr é agora [1,2,3,4] </blockquote></section>

## Instructions
<section id="instructions"> Empurre <code>[&quot;dog&quot;, 3]</code> para o final da variável <code>myArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> agora deve ser igual a <code>[[&quot;John&quot;, 23], [&quot;cat&quot;, 2], [&quot;dog&quot;, 3]]</code> .'
    testString: 'assert((function(d){if(d[2] != undefined && d[0][0] == "John" && d[0][1] === 23 && d[2][0] == "dog" && d[2][1] === 3 && d[2].length == 2){return true;}else{return false;}})(myArray), "<code>myArray</code> should now equal <code>[["John", 23], ["cat", 2], ["dog", 3]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

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
