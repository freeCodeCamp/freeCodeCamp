---
id: 5f490b3bd7fa89604fa0bdee
title: Example pyodide
challengeType: 12
isHidden: false
---

## Description

<section id='description'>
An example of a challenge using pyodide to run python code in the browser
</section>

## Instructions

<section id='instructions'>
Instructions about what exactly needs to be done.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should have a value of 15.
    testString: assert(pyodide.pyimport('a) === 15);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
a = sum([1,2,3,4,5])

// Only change code below this line

```

</div>

### Before Test
<div id='js-setup'>

```js

```

</div>

### After Test
<div id='js-teardown'>

```js

```

</div>

</section>

## Solution
<section id='solution'>


```js
var a;
var b = 2;
a = 7;
b = a;
```

</section>
