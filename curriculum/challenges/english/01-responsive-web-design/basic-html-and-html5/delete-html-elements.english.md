---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
---

## Description
<section id='description'>
Our phone doesn't have much vertical space.
Let's remove the unnecessary elements so we can start building our CatPhotoApp.
</section>

## Instructions
<section id='instructions'>
Delete your <code>h1</code> element so we can simplify our view.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should be deleted.
    testString: assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
  - text: Your <code>h2</code> element should be on the page.
    testString: assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
  - text: Your <code>p</code> element should be on the page.
    testString: assert(code.match(/<p>[\w\W]*<\/p>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>"
```

</section>
