---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: ''
localeTitle: 导入Google字体
---

## Description
<section id="description">除了指定在大多数操作系统上找到的常用字体外，我们还可以指定在我们的网站上使用的非标准自定义Web字体。互联网上有各种网络字体来源，但在本例中，我们将重点关注Google字体库。 <a href="https://fonts.google.com/" target="_blank">Google字体</a>是一个免费的网络字体库，您可以通过引用字体的URL在CSS中使用它。因此，让我们继续导入并应用Google字体（请注意，如果Google在您所在的国家/地区被屏蔽，则需要跳过此挑战）。要导入Google字体，您可以从Google字体库中复制字体网址，然后将其粘贴到HTML中。对于这个挑战，我们将导入<code>Lobster</code>字体。为此，请复制以下代码段并将其粘贴到代码编辑器的顶部（在开始<code>style</code>元素之前）： <code>&lt;link href=&quot;https://fonts.googleapis.com/css?family=Lobster&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;</code>现在，您可以使用<code>Lobster</code>作为FAMILY_NAME在CSS中使用<code>Lobster</code>字体，如下例所示： <br> <code>font-family: FAMILY_NAME, GENERIC_NAME;</code> 。 GENERIC_NAME是可选的，如果其他指定的字体不可用，则为后备字体。这将在下一个挑战中得到体现。系列名称区分大小写，如果名称中有空格，则需要用引号括起来。例如，您需要引号才能使用<code>&quot;Open Sans&quot;</code>字体，但不能使用<code>Lobster</code>字体。 </section>

## Instructions
<section id="instructions">创建使用<code>Lobster</code>字体的<code>font-family</code> CSS规则，并确保它将应用于您的<code>h2</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 导入<code>Lobster</code>字体。
    testString: 'assert(new RegExp("googleapis", "gi").test(code), "Import the <code>Lobster</code> font.");'
  - text: 你的<code>h2</code>元素应该使用字体<code>Lobster</code> 。
    testString: 'assert($("h2").css("font-family").match(/lobster/i), "Your <code>h2</code> element should use the font <code>Lobster</code>.");'
  - text: 使用<code>h2</code> CSS选择器更改字体。
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?\s*;\s*\}/gi.test(code), "Use an <code>h2</code> CSS selector to change the font.");'
  - text: 你的<code>p</code>元素仍然应该使用字体<code>monospace</code> 。
    testString: 'assert($("p").css("font-family").match(/monospace/i), "Your <code>p</code> element should still use the font <code>monospace</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
