---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
---

## Description
<section id='description'>
HTML5 introduced a number of new elements that give developers more options while also incorporating accessibility features. These tags include <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>article</code>, and <code>section</code>, among others.
By default, a browser renders these elements similarly to the humble <code>div</code>. However, using them where appropriate gives additional meaning in your markup. The tag name alone can indicate the type of information it contains, which adds semantic meaning to that content. Assistive technologies can access this information to provide better page summary or navigation options to their users.
The <code>main</code> element is used to wrap (you guessed it) the main content, and there should be only one per page. It's meant to surround the information that's related to the central topic of your page. It's not meant to include items that repeat across pages, like navigation links or banners.
The <code>main</code> tag also has an embedded landmark feature that assistive technology can use to quickly navigate to the main content. If you've ever seen a "Jump to Main Content" link at the top of a page, using a main tag automatically gives assistive devices that functionality.
</section>

## Instructions
<section id='instructions'>
Camper Cat has some big ideas for his ninja weapons page. Help him set up his markup by adding opening and closing <code>main</code> tags between the <code>header</code> and <code>footer</code> (covered in other challenges). Keep the <code>main</code> tags empty for now.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>main</code> tag.
    testString: assert($('main').length == 1);
  - text: The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.
    testString: assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```

</section>
