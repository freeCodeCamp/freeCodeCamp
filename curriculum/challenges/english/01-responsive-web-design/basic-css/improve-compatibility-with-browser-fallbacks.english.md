---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
isHidden: false
videoUrl: ''
forumTopicId: 301087
---

## Description
<section id='description'>
When working with CSS you will likely run into browser compatibility issues at some point. This is why it's important to provide browser fallbacks to avoid potential problems.
When your browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support. For example, if you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will use whatever value it has for that property. If it can't find any other value set for that property, it will revert to the default value, which is typically not ideal.
This means that if you do want to provide a browser fallback, it's as easy as providing another more widely supported value immediately before your declaration. That way an older browser will have something to fall back on, while a newer browser will just interpret whatever declaration comes later in the cascade.
</section>

## Instructions
<section id='instructions'>
It looks like a variable is being used to set the background color of the <code>.red-box</code> class. Let's improve our browser compatibility by adding another <code>background</code> declaration right before the existing declaration and set its value to red.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to red immediately before the existing <code>background</code> declaration.
    testString: assert(code.replace(/\s/g, "").match(/\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

</section>
