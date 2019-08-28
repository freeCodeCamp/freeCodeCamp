---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
---

## Description
<section id='description'>
To animate an element, you need to know about the animation properties and the <code>@keyframes</code> rule. The animation properties control how the animation should behave and the <code>@keyframes</code> rule controls what happens during that animation. There are eight animation properties in total. This challenge will keep it simple and cover the two most important ones first:
<code>animation-name</code> sets the name of the animation, which is later used by <code>@keyframes</code> to tell CSS which rules go with which animations.
<code>animation-duration</code> sets the length of time for the animation.
<code>@keyframes</code> is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene. Here's an example to illustrate the usage of <code>@keyframes</code> and the animation properties:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

For the element with the <code>anim</code> id, the code snippet above sets the <code>animation-name</code> to <code>colorful</code> and sets the <code>animation-duration</code> to 3 seconds. Then the <code>@keyframes</code> rule links to the animation properties with the name <code>colorful</code>. It sets the color to blue at the beginning of the animation (0%) which will transition to yellow by the end of the animation (100%). You aren't limited to only beginning-end transitions, you can set properties for the element for any percentage between 0% and 100%.
</section>

## Instructions
<section id='instructions'>
Create an animation for the element with the id <code>rect</code>, by setting the <code>animation-name</code> to rainbow and the <code>animation-duration</code> to 4 seconds. Next, declare a <code>@keyframes</code> rule, and set the <code>background-color</code> at the beginning of the animation (<code>0%</code>) to blue, the middle of the animation (<code>50%</code>) to green, and the end of the animation (<code>100%</code>) to yellow.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with id of <code>rect</code> should have an <code>animation-name</code> property with a value of rainbow.
    testString: assert($('#rect').css('animation-name') == 'rainbow');
  - text: The element with id of <code>rect</code> should have an <code>animation-duration</code> property with a value of 4s.
    testString: assert($('#rect').css('animation-duration') == '4s');
  - text: The <code>@keyframes</code> rule should use the <code>animation-name</code> of rainbow.
    testString: assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
  - text: The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of blue at 0%.
    testString: assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
  - text: The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of green at 50%.
    testString: assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
  - text: The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of yellow at 100%.
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```

</section>
