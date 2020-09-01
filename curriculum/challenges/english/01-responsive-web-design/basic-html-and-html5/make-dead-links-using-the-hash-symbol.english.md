---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
---

## Description
<section id='description'>
Sometimes you want to add <code>a</code> elements to your website before you know where they will link.
This is also handy when you're changing the behavior of a link using <code>JavaScript</code>, which we'll learn about later.
</section>

## Instructions
<section id='instructions'>
The current value of the <code>href</code> attribute is a link that points to "https://freecatphotoapp.com". Replace the <code>href</code> attribute value with a <code>#</code>, also known as a hash symbol, to create a dead link.
For example: <code>href="#"</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".
    testString: assert($("a").attr("href") === "#");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
  
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
