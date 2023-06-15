---
id: 5a9d727a424fe3d0e10cad12
title: Use a custom CSS Variable
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM989ck'
forumTopicId: 301090
dashedName: use-a-custom-css-variable
---

# --description--

After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it.

```css
background: var(--penguin-skin);
```

This will change the background of whatever element you are targeting to gray because that is the value of the `--penguin-skin` variable. Note that styles will not be applied unless the variable names are an exact match.

# --instructions--

Apply the `--penguin-skin` variable to the `background` property of the `penguin-top`, `penguin-bottom`, `right-hand` and `left-hand` classes.

# --hints--

The `--penguin-skin` variable should be applied to the `background` property of the `penguin-top` class.

```js
assert(
  code.match(
    /.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi
  )
);
```

The `--penguin-skin` variable should be applied to the `background` property of the `penguin-bottom` class.

```js
assert(
  code.match(
    /.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.right-hand\s{/gi
  )
);
```

The `--penguin-skin` variable should be applied to the `background` property of the `right-hand` class.

```js
assert(
  code.match(
    /.right-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.left-hand\s{/gi
  )
);
```

The `--penguin-skin` variable should be applied to the `background` property of the `left-hand` class.

```js
assert(
  code.match(
    /.left-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .penguin {
    --penguin-skin: gray;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

# --solutions--

```html
<style>.penguin-top {background: var(--penguin-skin);} .penguin-bottom {background: var(--penguin-skin);} .right-hand {background: var(--penguin-skin);} .left-hand {background: var(--penguin-skin);}</style>
```
