---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
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
    testString: 'assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-radius</code> which has a parameter named <code>$radius</code>.");'
  - text: ''
    testString: 'assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-webkit-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: ''
    testString: 'assert(code.match(/-moz-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-moz-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: يجب أن تحتوي <code>-ms-border-radius</code> على <code>-ms-border-radius</code> التي تستخدم معلمة <code>$radius</code> .
    testString: 'assert(code.match(/-ms-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-ms-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: يجب أن تتضمن شفرتك قاعدة <code>border-radius</code> العامة التي تستخدم معلمة <code>$radius</code> .
    testString: 'assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4, "Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.");'
  - text: ''
    testString: 'assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi), "Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
