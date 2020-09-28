---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
forumTopicId: 301456
---

## Description
<section id='description'>
Sass has a feature called <code>extend</code> that makes it easy to borrow the CSS rules from one element and build upon them in another.
For example, the below block of CSS rules style a <code>.panel</code> class. It has a <code>background-color</code>, <code>height</code> and <code>border</code>.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Now you want another panel called <code>.big-panel</code>. It has the same base properties as <code>.panel</code>, but also needs a <code>width</code> and <code>font-size</code>.
It's possible to copy and paste the initial CSS rules from <code>.panel</code>, but the code becomes repetitive as you add more types of panels.
The <code>extend</code> directive is a simple way to reuse the rules written for one element, then add more for another:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

The <code>.big-panel</code> will have the same properties as <code>.panel</code> in addition to the new styles.
</section>

## Instructions
<section id='instructions'>
Make a class <code>.info-important</code> that extends <code>.info</code> and also has a <code>background-color</code> set to magenta.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>info-important</code> class should have a <code>background-color</code> set to <code>magenta</code>.
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi));
  - text: Your <code>info-important</code> class should use <code>@extend</code> to inherit the styling from the <code>info</code> class.
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>

```

</section>
