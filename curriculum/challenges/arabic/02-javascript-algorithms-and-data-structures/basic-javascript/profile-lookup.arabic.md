---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(lookUpProfile("Kristian","lastName") === "Vos", "<code>"Kristian", "lastName"</code> should return <code>"Vos"</code>");'
  - text: ''
    testString: 'assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"], "<code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>");'
  - text: ''
    testString: 'assert(typeof lookUpProfile("Harry", "likes") === "object", "<code>"Harry","likes"</code> should return an array");'
  - text: ''
    testString: 'assert(lookUpProfile("Bob", "number") === "No such contact", "<code>"Bob", "number"</code> should return "No such contact"");'
  - text: ''
    testString: 'assert(lookUpProfile("Bob", "potato") === "No such contact", "<code>"Bob", "potato"</code> should return "No such contact"");'
  - text: ''
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
