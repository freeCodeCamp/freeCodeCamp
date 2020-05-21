---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
---

## Description
<section id='description'>
Instead of using <code>em</code> or <code>px</code> to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.
The four different viewport units are:
<ul><li><code>vw</code> (viewport width): <code>10vw</code> would be 10% of the viewport's width.</li><li><code>vh</code> (viewport height): <code>3vh</code> would be 3% of the viewport's height.</li><li><code>vmin</code> (viewport minimum): <code>70vmin</code> would be 70% of the viewport's smaller dimension (height or width).</li><li><code>vmax</code> (viewport maximum): <code>100vmax</code> would be 100% of the viewport's bigger dimension (height or width).</li></ul>
Here is an example that sets a body tag to 30% of the viewport's width.
<code>body { width: 30vw; }</code>
</section>

## Instructions
<section id='instructions'>
Set the <code>width</code> of the <code>h2</code> tag to 80% of the viewport's width and the <code>width</code> of the paragraph as 75% of the viewport's smaller dimension.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h2</code> tag should have a <code>width</code> of 80vw.
    testString: assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g));
  - text: Your <code>p</code> tag should have a <code>width</code> of 75vmin.
    testString: assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</section>
