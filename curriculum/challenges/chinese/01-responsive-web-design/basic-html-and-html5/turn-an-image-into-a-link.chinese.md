---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: ''
localeTitle: 将图像转换为链接
---

## Description
<section id="description">您可以通过嵌套在他们做出元素融入链接<code>a</code>元素。鸟巢的内部图像<code>a</code>元素。这是一个例子： <code>&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;https://bit.ly/fcc-running-cats&quot; alt=&quot;Three kittens running towards the camera.&quot;&gt;&lt;/a&gt;</code>记得使用<code>#</code>为你的<code>a</code>元素的<code>href</code>为了把它变成一个死链接属性。 </section>

## Instructions
<section id="instructions">将现有图像元素放在锚元素中。完成此操作后，使用光标将鼠标悬停在图像上。光标的正常指针应该成为链接点击指针。这张照片现在是一个链接。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 巢现有<code>img</code>一个内元件<code>a</code>元件。
    testString: 'assert($("a").children("img").length > 0, "Nest the existing <code>img</code> element within an <code>a</code> element.");'
  - text: '您<code>a</code>元素应该是<code>href</code>属性设置为<code>#</code>的死链接。'
    testString: 'assert(new RegExp("#").test($("a").children("img").parent().attr("href")), "Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.");'
  - text: 确保每个的<code>a</code>元素具有一个结束标记。
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
