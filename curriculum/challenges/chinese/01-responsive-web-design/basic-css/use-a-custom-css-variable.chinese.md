---
id: 5a9d727a424fe3d0e10cad12
title: Use a custom CSS Variable
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM989ck'
forumTopicId: 301090
localeTitle: 使用一个自定义的 CSS 变量
---

## Description
<section id='description'>
创建变量后，CSS 属性可以通过引用变量名来使用它的值。

```css
background: var(--penguin-skin);
```

因为引用了<code>--penguin-skin</code>变量的值，使用了这个样式的元素背景颜色会是灰色。
注意：如果变量名不匹配，样式不会生效。
</section>

## Instructions
<section id='instructions'>
<code>penguin-top</code>，<code>penguin-bottom</code>，<code>right-hand</code>和<code>left-hand</code>class 的<code>background</code>属性均使用<code>--penguin-skin</code>变量值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>penguin-top</code> class 的<code>background</code>属性应使用<code>--penguin-skin</code>变量值。'
    testString: assert(code.match(/.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi));
  - text: '<code>penguin-bottom</code> class 的<code>background</code>属性应使用<code>--penguin-skin</code>变量值。'
    testString: assert(code.match(/.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.right-hand\s{/gi));
  - text: '<code>right-hand</code> class 的<code>background</code>属性应使用<code>--penguin-skin</code>变量值。'
    testString: assert(code.match(/.right-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.left-hand\s{/gi));
  - text: '<code>left-hand</code> class 的<code>background</code>属性应使用<code>--penguin-skin</code>变量值。'
    testString: assert(code.match(/.left-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    
    /* change code below */
    background: black;
    /* change code above */
    
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    
    /* change code below */
    background: black;
    /* change code above */
    
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  
  .right-hand {
    top: 0%;
    left: -5%;
    
    /* change code below */
    background: black;
    /* change code above */
    
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  
  .left-hand {
    top: 0%;
    left: 75%;
    
    /* change code below */
    background: black;
    /* change code above */
    
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

</div>
</section>

## Solution
<section id='solution'>


```js
// solution required
```

</section>
              