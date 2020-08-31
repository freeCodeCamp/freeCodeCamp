---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
---

## Description
<section id='description'>
Screen reader users have different options for what type of content their device reads. This includes skipping to (or over) landmark elements, jumping to the main content, or getting a page summary from the headings. Another option is to only hear the links available on a page.
Screen readers do this by reading the link text, or what's between the anchor (<code>a</code>) tags. Having a list of "click here" or "read more" links isn't helpful. Instead, you should use brief but descriptive text within the <code>a</code> tags to provide more meaning for these users.
</section>

## Instructions
<section id='instructions'>
The link text that Camper Cat is using is not very descriptive without the surrounding context. Move the anchor (<code>a</code>) tags so they wrap around the text "information about batteries" instead of "Click here".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".
    testString: assert($('a').text().match(/^(information about batteries)$/g));
  - text: The <code>a</code> element should have an <code>href</code> attribute with a value of an empty string <code>""</code>.
    testString: assert($('a').attr('href') === '');
  - text: The <code>a</code> element should have a closing tag.
    testString: assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

</section>
