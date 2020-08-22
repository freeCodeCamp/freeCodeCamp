---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
---

## Description
<section id='description'>
You can use <code>a</code> (<i>anchor</i>) elements to link to content outside of your web page.
<code>a</code> elements need a destination web address called an <code>href</code> attribute. They also need anchor text. Here's an example:
<code>&#60;a href="https://freecodecamp.org">this links to freecodecamp.org&#60;/a&#62;</code>
Then your browser will display the text <strong>"this links to freecodecamp.org"</strong> as a link you can click. And that link will take you to the web address <strong>https://www.freecodecamp.org</strong>.
</section>

## Instructions
<section id='instructions'>
Create an <code>a</code> element that links to <code>https://freecatphotoapp.com</code> and has "cat photos" as its anchor text.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>a</code> element should have the anchor text of "cat photos".
    testString: assert((/cat photos/gi).test($("a").text()));
  - text: You need an <code>a</code> element that links to <code>https://freecatphotoapp.com</code>
    testString: assert(/https:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")));
  - text: Your <code>a</code> element should have a closing tag.
    testString: assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>



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
  
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  <a href="https://freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
