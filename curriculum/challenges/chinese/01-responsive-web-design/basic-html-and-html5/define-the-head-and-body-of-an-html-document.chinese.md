---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: 定义HTML文档的头部和正文
---

## Description
<section id="description">您可以使用<code>head</code>和<code>body</code>元素在<code>html</code>标记内的HTML文档中添加其他级别的组织。任何包含有关您网页信息的标记都会显示在<code>head</code>标记中。然后，任何带有页面内容（为用户显示的内容）的标记都会进入<code>body</code>标签。元数据元素（例如<code>link</code> ， <code>meta</code> ， <code>title</code>和<code>style</code> ）通常位于<code>head</code>元素内。这是页面布局的示例： <blockquote> &lt;！DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;HEAD&gt; <br> &lt;！ - 元数据元素 - &gt; <br> &lt;/ HEAD&gt; <br> &lt;BODY&gt; <br> &lt;！ - 页面内容 - &gt; <br> &lt;/ BODY&gt; <br> &lt;/ HTML&gt; </blockquote></section>

## Instructions
<section id="instructions">编辑标记，以便有<code>head</code>和<code>body</code> 。 <code>head</code>元素应该只包含<code>title</code> ， <code>body</code>元素应该只包含<code>h1</code>和<code>p</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 页面上应该只有一个<code>head</code>元素。
    testString: 'assert($("head").length == 1, "There should be only one <code>head</code> element on the page.");'
  - text: 页面上应该只有一个<code>body</code>元素。
    testString: 'assert($("body").length == 1, "There should be only one <code>body</code> element on the page.");'
  - text: <code>head</code>元素应该是<code>html</code>元素的子元素。
    testString: 'assert($("html").children("head").length == 1, "The <code>head</code> element should be a child of the <code>html</code> element.");'
  - text: <code>body</code>元素应该是<code>html</code>元素的子元素。
    testString: 'assert($("html").children("body").length == 1, "The <code>body</code> element should be a child of the <code>html</code> element.");'
  - text: <code>head</code>元素应该包围<code>title</code>元素。
    testString: 'assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), "The <code>head</code> element should wrap around the <code>title</code> element.");'
  - text: <code>body</code>元素应该环绕<code>h1</code>和<code>p</code>元素。
    testString: 'assert($("body").children("h1").length == 1 && $("body").children("p").length == 1, "The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
