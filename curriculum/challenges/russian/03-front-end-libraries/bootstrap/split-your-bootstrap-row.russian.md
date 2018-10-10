---
id: bad87fee1348bd9aec908847
title: Split Your Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: Разделите строку Bootstrap
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Nest два элемента <code>div class=&quot;col-xs-6&quot;</code> в вашем элементе <code>div class=&quot;row&quot;</code> .
    testString: 'assert($("div.row > div.col-xs-6").length > 1, "Nest two <code>div class="col-xs-6"</code> elements within your <code>div class="row"</code> element.");'
  - text: 'Убедитесь, что все ваши элементы <code>div</code> имеют закрывающие теги.'
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure all your <code>div</code> elements have closing tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">


  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
