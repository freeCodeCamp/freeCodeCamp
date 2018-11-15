---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
---

## Description
<section id='description'>
Headings (<code>h1</code> through <code>h6</code> elements) are workhorse tags that help provide structure and labeling to your content. Screen readers can be set to read only the headings on a page so the user gets a summary. This means it is important for the heading tags in your markup to have semantic meaning and relate to each other, not be picked merely for their size values.
<em>Semantic meaning</em> means that the tag you use around content indicates the type of information it contains.
If you were writing a paper with an introduction, a body, and a conclusion, it wouldn't make much sense to put the conclusion as a subsection of the body in your outline. It should be its own section. Similarly, the heading tags in a webpage need to go in order and indicate the hierarchical relationships of your content.
Headings with equal (or higher) rank start new implied sections, headings with lower rank start subsections of the previous one.
As an example, a page with an <code>h2</code> element followed by several subsections labeled with <code>h4</code> tags would confuse a screen reader user. With six choices, it's tempting to use a tag because it looks better in a browser, but you can use CSS to edit the relative sizing.
One final point, each page should always have one (and only one) <code>h1</code> element, which is the main subject of your content. This and the other headings are used in part by search engines to understand the topic of the page.
</section>

## Instructions
<section id='instructions'>
Camper Cat wants a page on his site dedicated to becoming a ninja. Help him fix the headings so his markup gives semantic meaning to the content, and shows the proper parent-child relationships of his sections. Change all the <code>h5</code> tags to the proper heading level to indicate they are subsections of the <code>h2</code> ones. Use <code>h3</code> tags for the purpose.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 6 <code>h3</code> tags.
    testString: assert($("h3").length === 6, 'Your code should have 6 <code>h3</code> tags.');
  - text: Your code should have 6 <code>h3</code> closing tags.
    testString: assert((code.match(/\/h3/g) || []).length===6,'Your code should have 6 <code>h3</code> closing tags.');
  - text: Your code should not have any <code>h5</code> tags.
    testString: assert($("h5").length === 0, "Your code should not have any <code>h5</code> tags.");
  - text: Your code should not have any <code>h5</code> closing tags.
    testString: assert(/\/h5/.test(code)===false, 'Your code should not have any <code>h5</code> closing tags');
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
