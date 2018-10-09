---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
localeTitle: Búsqueda de perfiles
challengeType: 1
---

## Description
<section id='description'>
Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.
Se ha <code>lookUpProfile</code> función <code>lookUpProfile</code> que toma el <code>name</code> y una propiedad ( <code>prop</code> ) como argumentos.
La función debe comprobar si <code>name</code> es de un contacto real <code>firstName</code> y la propiedad dada ( <code>prop</code> ) es una propiedad de ese contacto.
Si ambos son verdaderos, devuelva el &quot;valor&quot; de esa propiedad.
Si el <code>name</code> no corresponde a ningún contacto, devuelva <code>&quot;No such contact&quot;</code>
Si la <code>prop</code> no corresponde a ninguna propiedad válida de un contacto encontrado para coincidir con el <code>name</code> entonces devuelva <code>&quot;No such property&quot;</code> existe <code>&quot;No such property&quot;</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>&quot;Kristian&quot;, &quot;lastName&quot;</code> debería devolver <code>&quot;Vos&quot;</code> '
    testString: 'assert(lookUpProfile("Kristian","lastName") === "Vos", "<code>"Kristian", "lastName"</code> should return <code>"Vos"</code>");'
  - text: ' <code>&quot;Sherlock&quot;, &quot;likes&quot;</code> debería devolver <code>[&quot;Intriguing Cases&quot;, &quot;Violin&quot;]</code> '
    testString: 'assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"], "<code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>");'
  - text: ' <code>&quot;Harry&quot;,&quot;likes&quot;</code> debería devolver una matriz'
    testString: 'assert(typeof lookUpProfile("Harry", "likes") === "object", "<code>"Harry","likes"</code> should return an array");'
  - text: ' <code>&quot;Bob&quot;, &quot;number&quot;</code> debe devolver &quot;No existe tal contacto&quot;'
    testString: 'assert(lookUpProfile("Bob", "number") === "No such contact", "<code>"Bob", "number"</code> should return "No such contact"");'
  - text: ' <code>&quot;Bob&quot;, &quot;potato&quot;</code> debe devolver &quot;No hay tal contacto&quot;'
    testString: 'assert(lookUpProfile("Bob", "potato") === "No such contact", "<code>"Bob", "potato"</code> should return "No such contact"");'
  - text: ' <code>&quot;Akira&quot;, &quot;address&quot;</code> debe devolver &quot;No existe tal propiedad&quot;
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
    },
];


//Write your function in between these comments
function lookUpProfile(name, prop){
    for(var i in contacts){
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
    }
   return "No such contact";
}
//Write your function in between these comments

lookUpProfile("Akira", "likes");
```

</section>
