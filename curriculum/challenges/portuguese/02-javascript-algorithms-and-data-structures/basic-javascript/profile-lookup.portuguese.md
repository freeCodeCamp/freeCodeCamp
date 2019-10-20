---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: ''
localeTitle: Pesquisa de perfil
---

## Description
<section id="description"> Temos uma variedade de objetos representando pessoas diferentes em nossas listas de contatos. Uma função <code>lookUpProfile</code> que leva <code>name</code> e uma propriedade ( <code>prop</code> ) como argumentos foi pré-escrita para você. A função deve verificar se <code>name</code> é o <code>firstName</code> um contato real e se a propriedade fornecida ( <code>prop</code> ) é uma propriedade desse contato. Se ambos forem verdadeiros, retorne o &quot;valor&quot; dessa propriedade. Se o <code>name</code> não corresponder a nenhum contato, retorne <code>&quot;No such contact&quot;</code> Se <code>prop</code> não corresponder a nenhuma propriedade válida de um contato que corresponda ao <code>name</code> , retorne <code>&quot;No such property&quot;</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>&quot;Kristian&quot;, &quot;lastName&quot;</code> deve retornar <code>&quot;Vos&quot;</code>'
    testString: 'assert(lookUpProfile("Kristian","lastName") === "Vos", "<code>"Kristian", "lastName"</code> should return <code>"Vos"</code>");'
  - text: '<code>&quot;Sherlock&quot;, &quot;likes&quot;</code> deve retornar <code>[&quot;Intriguing Cases&quot;, &quot;Violin&quot;]</code>'
    testString: 'assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"], "<code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>");'
  - text: '<code>&quot;Harry&quot;,&quot;likes&quot;</code> deve retornar um array'
    testString: 'assert(typeof lookUpProfile("Harry", "likes") === "object", "<code>"Harry","likes"</code> should return an array");'
  - text: '<code>&quot;Bob&quot;, &quot;number&quot;</code> deve retornar &quot;Nenhum contato desse tipo&quot;'
    testString: 'assert(lookUpProfile("Bob", "number") === "No such contact", "<code>"Bob", "number"</code> should return "No such contact"");'
  - text: '<code>&quot;Bob&quot;, &quot;potato&quot;</code> deve retornar &quot;Nenhum contato desse tipo&quot;'
    testString: 'assert(lookUpProfile("Bob", "potato") === "No such contact", "<code>"Bob", "potato"</code> should return "No such contact"");'
  - text: '<code>&quot;Akira&quot;, &quot;address&quot;</code> deve retornar &quot;Nenhuma propriedade&quot;'
    testString: 'assert(lookUpProfile("Akira", "address") === "No such property", "<code>"Akira", "address"</code> should return "No such property"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
