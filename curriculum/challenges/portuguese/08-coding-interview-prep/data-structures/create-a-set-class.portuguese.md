---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
videoUrl: ''
localeTitle: Criar uma classe de conjunto
---

## Description
<section id="description"> Nos próximos exercícios, vamos criar uma função para emular uma estrutura de dados chamada &quot;Set&quot;. Um conjunto é como uma matriz, mas não pode conter valores duplicados. O uso típico de um conjunto é simplesmente verificar a presença de um item. Isso pode ser implementado com um objeto, por exemplo: <blockquote> var set = new Object (); <br> set.foo = true; <br> // Veja se foo existe em nosso conjunto: <br> console.log (set.foo) // true </blockquote> Nos próximos exercícios, vamos construir um conjunto completo a partir do zero. Para este exercício, crie uma função que irá adicionar um valor à nossa coleção de conjuntos, desde que o valor ainda não exista no conjunto. Por exemplo: <blockquote> this.add = function (element) { <br> // algum código para agregar valor ao conjunto <br> } </blockquote> A função deve retornar <code>true</code> se o valor for adicionado com sucesso e, caso contrário, <code>false</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Set</code> deve ter um método <code>add</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.add === "function")}()), "Your <code>Set</code> class should have an <code>add</code> method.");'
  - text: Seu método <code>add</code> não deve adicionar valores duplicados.
    testString: 'assert((function(){var test = new Set(); test.add("a"); test.add("b"); test.add("a"); var vals = test.values(); return (vals[0] === "a" && vals[1] === "b" && vals.length === 2)}()), "Your <code>add</code> method should not add duplicate values.");'
  - text: Seu método <code>add</code> deve retornar <code>true</code> quando um valor for adicionado com sucesso.
    testString: 'assert((function(){var test = new Set(); var result = test.add("a"); return (result != undefined) && (result === true);}()), "Your <code>add</code> method should return <code>true</code> when a value has been successfully added.");'
  - text: Seu método <code>add</code> deve retornar <code>false</code> quando um valor duplicado é adicionado.
    testString: 'assert((function(){var test = new Set(); test.add("a"); var result = test.add("a"); return (result != undefined) && (result === false);}()), "Your <code>add</code> method should return <code>false</code> when a duplicate value is added.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
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
