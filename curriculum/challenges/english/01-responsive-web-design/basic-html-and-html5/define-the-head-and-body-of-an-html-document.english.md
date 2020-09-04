---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra9bfP'
forumTopicId: 301096
---

## Description
<section id='description'>
You can add another level of organization in your HTML document within the <code>html</code> tags with the <code>head</code> and <code>body</code> elements. Any markup with information about your page would go into the <code>head</code> tag. Then any markup with the content of the page (what displays for a user) would go into the <code>body</code> tag.
Metadata elements, such as <code>link</code>, <code>meta</code>, <code>title</code>, and <code>style</code>, typically go inside the <code>head</code> element.
Here's an example of a page's layout:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

</section>

## Instructions
<section id='instructions'>
Edit the markup so there's a <code>head</code> and a <code>body</code>. The <code>head</code> element should only include the <code>title</code>, and the <code>body</code> element should only include the <code>h1</code> and <code>p</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be only one <code>head</code> element on the page.
    testString: |
      const headElems = code.replace(/\n/g,'').match(/\<head\s*>.*?\<\/head\s*>/g);
      assert(headElems && headElems.length === 1);
  - text: There should be only one <code>body</code> element on the page.
    testString: |
      const bodyElems = code.replace(/\n/g,'').match(/<body\s*>.*?<\/body\s*>/g);
      assert(bodyElems && bodyElems.length === 1);
  - text: The <code>head</code> element should be a child of the <code>html</code> element.
    testString: |
      const htmlChildren = code.replace(/\n/g,'').match(/<html\s*>(?<children>.*)<\/html\s*>/);
      let foundHead;
      if(htmlChildren) {
        const { children } = htmlChildren.groups;

        foundHead = children.match(/<head\s*>.*<\/head\s*>/);
      }
      assert(foundHead);
  - text: The <code>body</code> element should be a child of the <code>html</code> element.
    testString: |
      const htmlChildren = code.replace(/\n/g,'').match(/<html\s*>(?<children>.*?)<\/html\s*>/);
      let foundBody;
      if(htmlChildren) {
        const { children } = htmlChildren.groups;
        foundBody = children.match(/<body\s*>.*<\/body\s*>/);
      }
      assert(foundBody);
  - text: The <code>head</code> element should wrap around the <code>title</code> element.
    testString: |
      const headChildren = code.replace(/\n/g,'').match(/<head\s*>(?<children>.*?)<\/head\s*>/);
      let foundTitle;
      if(headChildren) {
        const { children } = headChildren.groups;
        foundTitle = children.match(/<title\s*>.*?<\/title\s*>/);
      }
      assert(foundTitle);
  - text: The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.
    testString: |
      const bodyChildren = code.replace(/\n/g,'').match(/<body\s*>(?<children>.*?)<\/body\s*>/);
      let foundElems;
      if(bodyChildren) {
        const { children } = bodyChildren.groups;
        const h1s = children.match(/<h1\s*>.*<\/h1\s*>/g);
        const ps = children.match(/<p\s*>.*<\/p\s*>/g);
        const numH1s = h1s ? h1s.length : 0;
        const numPs = ps ? ps.length : 0;
        foundElems = numH1s === 1 && numPs === 1;
      }
      assert(foundElems);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>
```

</div>



</section>

## Solution
<section id='solution'>

```html

<!DOCTYPE html>
<html>
 <head>
  <title>The best page ever</title>
 </head>
 <body>
  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
 </body>
</html>
```

</section>
