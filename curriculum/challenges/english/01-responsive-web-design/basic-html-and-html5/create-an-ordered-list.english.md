---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
---

## Description
<section id='description'>
HTML has another special element for creating <code>ordered lists</code>, or numbered lists.
Ordered lists start with an opening <code>&#60;ol&#62;</code> element, followed by any number of <code>&#60;li&#62;</code> elements. Finally, ordered lists are closed with the <code>&#60;/ol&#62;</code> tag.

For example:
<blockquote>&#60;ol&#62;<br>&nbsp;&nbsp;&#60;li&#62;Garfield&#60;/li&#62;<br>&nbsp;&nbsp;&#60;li&#62;Sylvester&#60;/li&#62;<br>&#60;/ol&#62;</blockquote>
would create a numbered list of "Garfield" and "Sylvester".
</section>

## Instructions
<section id='instructions'>
Create an ordered list of the top 3 things cats hate the most.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have an ordered list for "Top 3 things cats hate:"
    testString: assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), 'You should have an ordered list for "Top 3 things cats hate:"');
  - text: You should have an unordered list for "Things cats love:"
    testString: assert((/Things cats love:/i).test($("ul").prev().text()), 'You should have an unordered list for "Things cats love:"');
  - text: You should have only one <code>ul</code> element.
    testString: assert.equal($("ul").length, 1, 'You should have only one <code>ul</code> element.');
  - text: You should have only one <code>ol</code> element.
    testString: assert.equal($("ol").length, 1, 'You should have only one <code>ol</code> element.');
  - text: You should have three <code>li</code> elements within your <code>ul</code> element.
    testString: assert.equal($("ul li").length, 3, 'You should have three <code>li</code> elements within your <code>ul</code> element.');
  - text: You should have three <code>li</code> elements within your <code>ol</code> element.
    testString: assert.equal($("ol li").length, 3, 'You should have three <code>li</code> elements within your <code>ol</code> element.');
  - text: Make sure your <code>ul</code> element has a closing tag.
    testString: assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, 'Make sure your <code>ul</code> element has a closing tag.');
  - text: Make sure your <code>ol</code> element has a closing tag.
    testString: assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, 'Make sure your <code>ol</code> element has a closing tag.');
  - text: Make sure your <code>li</code> element has a closing tag.
    testString: assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, 'Make sure your <code>li</code> element has a closing tag.');
  - text: The <code>li</code> elements in your unordered list should not be empty.
    testString: $('ul li').each((i, val) => assert(val.textContent.replace(/\s/g, ''), 'Your <code>li</code> elements in your unordered list should not be empty.'));
  - text: The <code>li</code> elements in your ordered list should not be empty.
    testString: $('ol li').each((i, val) => assert(!!val.textContent.replace(/\s/g, ''), 'Your <code>li</code> elements in your ordered list should not be empty.'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
</section>
