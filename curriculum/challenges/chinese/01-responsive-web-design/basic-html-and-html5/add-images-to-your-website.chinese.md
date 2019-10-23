---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
videoUrl: ''
localeTitle: 添加图片到您的网站
---

## Description
<section id="description">您可以使用<code>img</code>元素将图像添加到网站，并使用<code>src</code>属性指向特定图像的URL。这方面的一个例子是： <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot;&gt;</code>请注意， <code>img</code>元素是自动关闭的。所有<code>img</code>元素都<strong>必须</strong>具有<code>alt</code>属性。 <code>alt</code>属性中的文本用于屏幕阅读器以提高可访问性，并在图像无法加载时显示。注意：如果图像纯粹是装饰性的，则使用空的<code>alt</code>属性是最佳做法。理想情况下，除非需要，否则<code>alt</code>属性不应包含特殊字符。让我们在上面的<code>img</code>示例中添加一个<code>alt</code>属性： <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot; alt=&quot;Author standing on a beach with two thumbs up.&quot;&gt;</code> </section>

## Instructions
<section id="instructions">让我们尝试将图像添加到我们的网站：在<code>h2</code>元素之前插入<code>img</code>标记。现在设置<code>src</code>属性，使其指向此URL： <code>https://bit.ly/fcc-relaxing-cat</code> ： <code>https://bit.ly/fcc-relaxing-cat</code>最后不要忘记为您的图像添加<code>alt</code>文字。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的页面应该有一个图像元素。
    testString: 'assert($("img").length > 0, "Your page should have an image element.");'
  - text: 您的图像应具有指向小猫图像的<code>src</code>属性。
    testString: 'assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), "Your image should have a <code>src</code> attribute that points to the kitten image.");'
  - text: 您的图片元素<strong>必须</strong>具有<code>alt</code>属性。
    testString: 'assert(code.match(/alt\s*?=\s*?(\"|\").*(\"|\")/), "Your image element <strong>must</strong> have an <code>alt</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>


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
