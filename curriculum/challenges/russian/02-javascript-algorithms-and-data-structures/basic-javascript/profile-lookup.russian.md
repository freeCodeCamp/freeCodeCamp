---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: https://scrimba.com/c/cDqW2Cg
forumTopicId: 18259
localeTitle: Поиск профиля
---

## Description
<section id='description'>
У нас есть набор объектов, представляющих разные люди в наших списках контактов. Функция <code>lookUpProfile</code> которая принимает <code>name</code> и свойство ( <code>prop</code> ) в качестве аргументов, была предварительно написана для вас. Функция должна проверять, является ли <code>name</code> фактическим контактом <code>firstName</code> и данное свойство ( <code>prop</code> ) является свойством этого контакта. Если оба они истинны, верните «значение» этого свойства. Если <code>name</code> не соответствует контактам, тогда верните <code>&quot;No such contact&quot;</code> Если <code>prop</code> не соответствует каким-либо действительным свойствам контакта, найденного для соответствия <code>name</code> тогда верните <code>&quot;No such property&quot;</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Kristian", "lastName"</code> should return <code>"Vos"</code>
    testString: assert(lookUpProfile('Kristian','lastName') === "Vos");
  - text: <code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>
    testString: assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"]);
  - text: <code>"Harry","likes"</code> should return an array
    testString: assert(typeof lookUpProfile("Harry", "likes") === "object");
  - text: <code>"Bob", "number"</code> should return "No such contact"
    testString: assert(lookUpProfile("Bob", "number") === "No such contact");
  - text: <code>"Bob", "potato"</code> should return "No such contact"
    testString: assert(lookUpProfile("Bob", "potato") === "No such contact");
  - text: <code>"Akira", "address"</code> should return "No such property"
    testString: assert(lookUpProfile("Akira", "address") === "No such property");

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
