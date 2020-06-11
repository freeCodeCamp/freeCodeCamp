---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
---

## Description
<section id='description'>
Media Queries are a new technique introduced in CSS3 that change the presentation of content based on different viewport sizes. The viewport is a user's visible area of a web page, and is different depending on the device used to access the site.
Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.
Here's an example of a media query that returns the content when the device's width is less than or equal to 100px:
<code>@media (max-width: 100px) { /* CSS Rules */ }</code>
and the following media query returns the content when the device's height is more than or equal to 350px:
<code>@media (min-height: 350px) { /* CSS Rules */ }</code>
Remember, the CSS inside the media query is applied only if the media type matches that of the device being used.
</section>

## Instructions
<section id='instructions'>
Add a media query, so that the <code>p</code> tag has a <code>font-size</code> of <code>10px</code> when the device's height is less than or equal to <code>800px</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.
    testString: assert($("style").text().replace(/\s/g ,'').match(/@media\(max-height:800px\)/g));
  - text: Your <code>p</code> element should have a <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.
    testString: assert($("style").text().replace(/\s/g ,'').match(/@media\(max-height:800px\){p{font-size:10px;?}}/g));
  - text: Your <code>p</code> element should have an initial <code>font-size</code> of 20px when the device <code>height</code> is more than 800px.
    testString: assert($("style").text().replace(/\s/g ,'').replace(/@media.*}/g, '').match(/p{font-size:20px;?}/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</section>
