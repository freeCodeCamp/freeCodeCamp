---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
localeTitle: Encuentra la diferencia simétrica
challengeType: 5
---

## Description
<section id='description'> 
Cree una función que tome dos o más matrices y devuelva una matriz de la <dfn>diferencia simétrica</dfn> ( <code>△</code> o <code>⊕</code> ) de las matrices proporcionadas. 
Dado dos conjuntos (por ejemplo, conjunto <code>A = {1, 2, 3}</code> y conjunto <code>B = {2, 3, 4}</code> ), el término matemático &quot;diferencia simétrica&quot; ​​es el conjunto de elementos que se encuentran en cualquiera de los dos conjuntos, pero no en ambos ( <code>A △ B = C = {1, 4}</code> ). Por cada diferencia simétrica adicional que tome (por ejemplo, en un conjunto <code>D = {2, 3}</code> ), debe obtener el conjunto con elementos que están en cualquiera de los dos conjuntos pero no en ambos ( <code>C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}</code> ). La matriz resultante debe contener solo valores únicos ( <em>no duplicados</em> ). 
Recuerda usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>sym([1, 2, 3], [5, 2, 1, 4])</code> debe devolver <code>[3, 4, 5]</code> .&#39;
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: &#39; <code>sym([1, 2, 3], [5, 2, 1, 4])</code> debe contener solo tres elementos.&#39;
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: &#39; <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> debe devolver <code>[3, 4, 5]</code> .&#39;
    testString: 'assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: &#39; <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> debe contener solo tres elementos.&#39;
    testString: 'assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: &#39; <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> debe devolver <code>[3, 4, 5]</code> .&#39;
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.");'
  - text: &#39; <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> debe contener solo tres elementos.&#39;
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.");'
  - text: &#39; <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> debe devolver <code>[1, 4, 5]</code> &#39;
    testString: 'assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>");'
  - text: &#39; <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> debe contener solo tres elementos.&#39;
    testString: 'assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3, "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.");'
  - text: &#39; <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> debe devolver <code>[1, 4, 5]</code> .&#39;
    testString: 'assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.");'
  - text: &#39; <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> debe contener solo tres elementos.&#39;
    testString: 'assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3, "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.");'
  - text: &#39; <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> debe devolver <code>[2, 3, 4, 6, 7]</code> .
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.");'
  - text: &#39; <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> debe contener solo cinco elementos.&#39;
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.");'
  - text: &#39; <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> debe devolver <code>[1, 2, 4, 5, 6, 7, 8, 9]</code> . &#39;
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.");'
  - text: &#39; <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> debe contener solo ocho elementos &#39;.
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function sym() {
  var arrays = [].slice.call(arguments);
  return arrays.reduce(function (symDiff, arr) {
    return symDiff.concat(arr).filter(function (val, idx, theArr) {
      return theArr.indexOf(val) === idx
        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);
    });
  });
}
sym([1, 2, 3], [5, 2, 1, 4]);

```

</section>
