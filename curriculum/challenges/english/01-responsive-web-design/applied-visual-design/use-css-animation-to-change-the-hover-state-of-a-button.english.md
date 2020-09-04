---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
---

## Description
<section id='description'>
You can use CSS <code>@keyframes</code> to change the color of a button in its hover state.
Here's an example of changing the width of an image on hover:

```html
<style>
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://bit.ly/smallgooglelogo" alt="Google's Logo" />
```

</section>

## Instructions
<section id='instructions'>
Note that <code>ms</code> stands for milliseconds, where 1000ms is equal to 1s.
Use CSS <code>@keyframes</code> to change the <code>background-color</code> of the <code>button</code> element so it becomes <code>#4791d0</code> when a user hovers over it. The <code>@keyframes</code> rule should only have an entry for <code>100%</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The @keyframes rule should use the <code>animation-name</code> background-color.
    testString: assert(code.match(/@keyframes\s+?background-color\s*?{/g));
  - text: There should be one rule under <code>@keyframes</code> that changes the <code>background-color</code> to <code>#4791d0</code> at 100%.
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```

</section>
