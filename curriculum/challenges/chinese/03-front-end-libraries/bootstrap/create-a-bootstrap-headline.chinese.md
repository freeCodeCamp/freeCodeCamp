---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
videoUrl: ''
localeTitle: 创建一个Bootstrap标题
---

## Description
<section id="description">现在让我们从头开始构建一些东西来练习我们的HTML，CSS和Bootstrap技能。我们将构建一个jQuery游戏，我们很快将在jQuery挑战中使用它。首先，使用文本<code>jQuery Playground</code>创建一个<code>h3</code>元素。使用<code>text-primary</code> Bootstrap类为<code>h3</code>元素着色，并将其与<code>text-center</code> Bootstrap类<code>text-center</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在页面中添加<code>h3</code>元素。
    testString: assert($("h3") && $("h3").length > 0);
  - text: 确保您的<code>h3</code>元素具有结束标记。
    testString: assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length);
  - text: 应该使用<code>text-primary</code>类来对你的<code>h3</code>元素进行着色
    testString: assert($("h3").hasClass("text-primary"));
  - text: 应用类<code>text-center</code>应该使<code>h3</code>元素居中
    testString: assert($("h3").hasClass("text-center"));
  - text: 你的<code>h3</code>元素应该有<code>jQuery Playground</code>文本。
    testString: assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
