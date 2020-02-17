---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: ''
localeTitle: 个人资料查询
---

## Description
<section id="description">我们的联系人列表中有一组代表不同人的对象。已经为您预先编写了一个以<code>name</code>和属性（ <code>prop</code> ）作为参数的<code>lookUpProfile</code>函数。该函数应检查<code>name</code>是否是实际联系人的<code>firstName</code> ，并且给定属性（ <code>prop</code> ）是该联系人的属性。如果两者都为真，则返回该属性的“值”。如果<code>name</code>与任何联系人不对应，则返回<code>&quot;No such contact&quot;</code>如果<code>prop</code>不符合找到匹配<code>name</code>的联系人的任何有效属性，则返回<code>&quot;No such property&quot;</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>&quot;Kristian&quot;, &quot;lastName&quot;</code>应该返回<code>&quot;Vos&quot;</code>'
    testString: assert(lookUpProfile('Kristian','lastName') === "Vos");
  - text: '<code>&quot;Sherlock&quot;, &quot;likes&quot;</code>应该回归<code>[&quot;Intriguing Cases&quot;, &quot;Violin&quot;]</code>'
    testString: assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"]);
  - text: '<code>&quot;Harry&quot;,&quot;likes&quot;</code>应该返回一个阵列'
    testString: assert(typeof lookUpProfile("Harry", "likes") === "object");
  - text: '<code>&quot;Bob&quot;, &quot;number&quot;</code>应该返回“没有这样的联系”'
    testString: assert(lookUpProfile("Bob", "number") === "No such contact");
  - text: '<code>&quot;Bob&quot;, &quot;potato&quot;</code>应该返回“没有这样的联系”'
    testString: assert(lookUpProfile("Bob", "potato") === "No such contact");
  - text: '<code>&quot;Akira&quot;, &quot;address&quot;</code>应该返回“没有这样的财产”'
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
// solution required
```
</section>
