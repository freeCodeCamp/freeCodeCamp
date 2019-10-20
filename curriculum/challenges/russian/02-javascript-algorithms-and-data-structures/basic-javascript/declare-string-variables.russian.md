---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: https://scrimba.com/c/c2QvWU6
forumTopicId: 17557
localeTitle: Объявлять строковые переменные
---

## Description
<section id='description'>
Раньше мы использовали код <code>var myName = &quot;your name&quot;;</code> <code>&quot;your name&quot;</code> называется <dfn>строковым</dfn> <dfn>литералом</dfn> . Это строка, потому что это серия из нуля или более символов, заключенных в одинарные или двойные кавычки.
</section>

## Instructions
<section id='instructions'>
Создайте две новые <code>string</code> переменные: <code>myFirstName</code> и <code>myLastName</code> и присвойте им значения вашего первого и последнего имени, соответственно.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code> should be a string with at least one character in it.
    testString: assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})());
  - text: <code>myLastName</code> should be a string with at least one character in it.
    testString: assert((function(){if(typeof myLastName !== "undefined" && typeof myLastName === "string" && myLastName.length > 0){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```

</section>
