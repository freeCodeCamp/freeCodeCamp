---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
---

## Description
<section id='description'>
We have an array of objects representing different people in our contacts lists.
A <code>lookUpProfile</code> function that takes <code>name</code> and a property (<code>prop</code>) as arguments has been pre-written for you.
The function should check if <code>name</code> is an actual contact's <code>firstName</code> and the given property (<code>prop</code>) is a property of that contact.
If both are true, then return the "value" of that property.
If <code>name</code> does not correspond to any contacts then return <code>"No such contact"</code>.
If <code>prop</code> does not correspond to any valid properties of a contact found to match <code>name</code> then return <code>"No such property"</code>.
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
// Setup
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
