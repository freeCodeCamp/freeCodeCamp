---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
---

## Description
<section id='description'>
<code>anchor</code> elements can also be used to create internal links to jump to different sections within a webpage.
To create an internal link, you assign a link's <code>href</code> attribute to a hash symbol <code>#</code> plus the value of the <code>id</code> attribute for the element that you want to internally link to, usually further down the page. You then need to add the same <code>id</code> attribute to the element you are linking to. An <code>id</code> is an attribute that uniquely describes an element.
Below is an example of an internal anchor link and its target element:
<blockquote>&lt;a href="#contacts-header"&gt;Contacts&lt;/a&gt;<br>...<br>&lt;h2 id="contacts-header"&gt;Contacts&lt;/h2&gt;</blockquote>
When users click the Contacts link, they'll be taken to the section of the webpage with the <b>Contacts</b> header element.
</section>

## Instructions
<section id='instructions'>
Change your external link to an internal link by changing the <code>href</code> attribute to "#footer" and the text from "cat photos" to "Jump to Bottom".
Remove the <code>target="_blank"</code> attribute from the anchor tag since this causes the linked document to open in a new window tab.
Then add an <code>id</code> attribute with a value of "footer" to the <code>&lt;footer&gt;</code> element at the bottom of the page.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be only one anchor tag on your page.
    testString: assert($('a').length == 1, 'There should be only one anchor tag on your page.');
  - text: There should be only one <code>footer</code> tag on your page.
    testString: assert($('footer').length == 1, 'There should be only one <code>footer</code> tag on your page.');
  - text: The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".
    testString: assert($('a').eq(0).attr('href') == "#footer", 'The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".');
  - text: The <code>a</code> tag should not have a <code>target</code> attribute
    testString: assert(typeof $('a').eq(0).attr('target') == typeof undefined || $('a').eq(0).attr('target') == true, 'The <code>a</code> tag should not have a <code>target</code> attribute');
  - text: The <code>a</code> text should be "Jump to Bottom".
    testString: assert($('a').eq(0).text().match(/Jump to Bottom/gi), 'The <code>a</code> text should be "Jump to Bottom".');
  - text: The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".
    testString: assert($('footer').eq(0).attr('id') == "footer", 'The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>