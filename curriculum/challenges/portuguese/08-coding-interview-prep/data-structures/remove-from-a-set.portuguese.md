---
id: 587d8253367417b2b2512c6b
title: Remove from a Set
challengeType: 1
videoUrl: ''
localeTitle: Remover de um conjunto
---

## Description
<section id="description"> Neste exercício, vamos criar uma função de exclusão para o nosso conjunto. A função deve ser nomeada <code>this.remove</code> . Esta função deve aceitar um valor e verificar se existe no conjunto. Em caso afirmativo, remova esse valor do conjunto e retorne true. Caso contrário, retorne falso. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Set</code> deve ter um método <code>remove</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.remove === "function")}()), "Your <code>Set</code> class should have a <code>remove</code> method.");'
  - text: Seu método <code>remove</code> só deve remover itens que estão presentes no conjunto.
    testString: 'assert.deepEqual((function(){var test = new Set(); test.add("a");test.add("b");test.remove("c"); return test.values(); })(), ["a", "b"], "Your <code>remove</code> method should only remove items that are present in the set.");'
  - text: Seu método <code>remove</code> deve remover o item fornecido do conjunto.
    testString: 'assert((function(){var test = new Set(); test.add("a");test.add("b");test.remove("a"); var vals = test.values(); return (vals[0] === "b" && vals.length === 1)}()), "Your <code>remove</code> method should remove the given item from the set.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // change code below this line
    // change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
