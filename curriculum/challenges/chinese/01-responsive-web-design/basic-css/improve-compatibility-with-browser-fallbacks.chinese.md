---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ''
localeTitle: 改善与浏览器回退的兼容性
---

## Description
<section id="description">使用CSS时，您可能会在某些时候遇到浏览器兼容性问题。这就是为什么提供浏览器回退以避免潜在问题的重要性。当您的浏览器解析网页的CSS时，它会忽略它无法识别或支持的任何属性。例如，如果使用CSS变量在站点上分配背景颜色，Internet Explorer将忽略背景颜色，因为它不支持CSS变量。在这种情况下，浏览器将使用它对该属性的任何值。如果找不到该属性的任何其他值集，它将恢复为默认值，这通常不理想。这意味着如果您确实希望提供浏览器回退，那么就像在声明之前提供另一个更广泛支持的值一样简单。这样，较旧的浏览器将有一些东西可以依赖，而较新的浏览器只会解释级联后期的任何声明。 </section>

## Instructions
<section id="instructions">它看起来像一个变量用于设置<code>.red-box</code>类的背景颜色。让我们通过在现有声明之前添加另一个<code>background</code>声明来提高我们的浏览器兼容性，并将其值设置为红色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>.red-box</code>规则应包括在现有<code>background</code>声明之前立即将<code>background</code>设置为红色的后备。
    testString: 'assert(code.match(/.red-box\s*{[^}]*background:\s*(red|#ff0000|#f00|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)|rgb\(\s*100%\s*,\s*0%\s*,\s*0%\s*\)|hsl\(\s*0\s*,\s*100%\s*,\s*50%\s*\))\s*;\s*background:\s*var\(\s*--red-color\s*\);/gi), "Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to red immediately before the existing <code>background</code> declaration.");'

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

```js
// solution required
```
</section>
