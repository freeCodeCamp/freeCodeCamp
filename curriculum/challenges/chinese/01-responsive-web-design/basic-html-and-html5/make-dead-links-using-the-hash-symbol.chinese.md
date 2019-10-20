---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: ''
localeTitle: 使用哈希符号制作死链接
---

## Description
<section id="description">有时你想添加<code>a</code>元素到你的网站，你知道他们会链接之前。当您使用<code>JavaScript</code>更改链接的行为时，这也很方便，我们将在稍后了解。 </section>

## Instructions
<section id="instructions"> <code>href</code>属性的当前值是指向“http://freecatphotoapp.com”的链接。将<code>href</code>属性值替换为<code>#</code> （也称为哈希符号）以创建死链接。例如： <code>href=&quot;#&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您<code>a</code>元素应该是一个死链接， <code>href</code>属性的值设置为“＃”。
    testString: 'assert($("a").attr("href") === "#", "Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
