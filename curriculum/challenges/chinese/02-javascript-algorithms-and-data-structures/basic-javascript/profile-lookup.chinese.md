---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
localeTitle: 资料查找
---

## Description
<section id='description'>
我们有一个对象数组，里面存储着通讯录。
函数<code>lookUp</code>有两个预定义参数：<code>firstName</code>值和<code>prop</code>属性 。
函数将会检查通讯录中是否存在一个与传入的<code>firstName</code>相同的联系人。如果存在，那么还需要检查对应的联系人中是否存在<code>prop</code>属性。
如果它们都存在，函数返回<code>prop</code>属性对应的值。
如果<code>firstName</code>值不存在，返回<code>"No such contact"</code>。
如果<code>prop</code>属性不存在，返回<code>"No such property"</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Kristian", "lastName"</code>应该返回 <code>"Vos"</code>。
    testString: assert(lookUpProfile('Kristian','lastName') === "Vos");
  - text: <code>"Sherlock", "likes"</code>应该返回 <code>["Intriguing Cases", "Violin"]</code>。
    testString: assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"]);
  - text: <code>"Harry","likes"</code>应该返回 an array。
    testString: assert(typeof lookUpProfile("Harry", "likes") === "object");
  - text: <code>"Bob", "number"</code>应该返回 "No such contact"。
    testString: assert(lookUpProfile("Bob", "number") === "No such contact");
  - text: <code>"Bob", "potato"</code>应该返回 "No such contact"。
    testString: assert(lookUpProfile("Bob", "potato") === "No such contact");
  - text: <code>"Akira", "address"</code>应该返回 "No such property"。
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
