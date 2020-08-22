---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
---

## Description
<section id='description'>
For this challenge, you'll change the <code>opacity</code> of an animated element so it gradually fades as it reaches the right side of the screen.
In the displayed animation, the round element with the gradient background moves to the right by the 50% mark of the animation per the <code>@keyframes</code> rule.
</section>

## Instructions
<section id='instructions'>
Target the element with the id of <code>ball</code> and add the <code>opacity</code> property set to 0.1 at <code>50%</code>, so the element fades as it moves to the right.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>keyframes</code> rule for fade should set the <code>opacity</code> property to 0.1 at 50%.
    testString: assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```

</section>
