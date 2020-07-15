---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
---

## Description
<section id='description'>
That's great, but it doesn't work right yet. Notice how the animation resets after <code>500ms</code> has passed, causing the button to revert back to the original color. You want the button to stay highlighted.
This can be done by setting the <code>animation-fill-mode</code> property to <code>forwards</code>. The <code>animation-fill-mode</code> specifies the style applied to an element when the animation has finished. You can set it like so:
<code>animation-fill-mode: forwards;</code>
</section>

## Instructions
<section id='instructions'>
Set the <code>animation-fill-mode</code> property of <code>button:hover</code> to <code>forwards</code> so the button stays highlighted when a user hovers over it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>button:hover</code> should have a <code>animation-fill-mode</code> property with a value of <code>forwards</code>.
    testString: assert(code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi));

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
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
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
    animation-fill-mode: forwards;
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
