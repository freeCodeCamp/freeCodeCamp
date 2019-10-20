---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: ''
localeTitle: 调整颜色的色调
---

## Description
<section id="description"> CSS中的<code>hsl()</code>选项还可以轻松调整颜色的色调。混合白色和纯净的色调会产生这种颜色的色调，添加黑色会产生阴影。或者，通过添加灰色或通过着色和着色来产生色调。回想一下， <code>hsl()</code>的&#39;s&#39;和&#39;l&#39;分别代表饱和度和亮度。饱和度百分比会改变灰度，亮度百分比决定颜色中白色或黑色的含量。当您拥有自己喜欢的基色调时，这很有用，但需要不同的变体。 </section>

## Instructions
<section id="instructions">此站点上的导航栏当前从<code>header</code>元素继承其<code>background-color</code> 。从该颜色作为基础开始，为<code>nav</code>元素添加<code>background-color</code> ，使其使用相同的青色色调，但具有80％饱和度和25％亮度值，以改变其色调和阴影。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nav</code>元素应使用<code>hsl()</code>属性具有调整后的青色调的<code>background-color</code> 。
    testString: 'assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi), "The <code>nav</code> element should have a <code>background-color</code> of the adjusted cyan tone using the <code>hsl()</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
