---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: 链接到具有锚元素的页面的内部部分
---

## Description
<section id="description">锚元素还可用于创建内部链接以跳转到网页中的不同部分。要创建内部链接，请将链接的<code>href</code>属性分配给哈希符号<code>#</code>加上要在内部链接到的元素的<code>id</code>属性值，通常在页面的下方。然后，您需要将相同的<code>id</code>属性添加到要链接的元素。 <code>id</code>是唯一描述元素的属性。下面是内部锚链接及其目标元素的示例： <blockquote> &lt;a href=&quot;#contacts-header&quot;&gt;通讯录&lt;/a&gt; <br> ... <br> &lt;h2 id =“contacts-header”&gt;通讯录&lt;/ h2&gt; </blockquote>当用户单击“联系人”链接时，他们将被带到具有“ <b>联系人”</b>标题元素的网页部分。 </section>

## Instructions
<section id="instructions">通过将<code>href</code>属性更改为“#footer”并将文本从“cat photos”更改为“Jump to Bottom”，将外部链接更改为内部链接。从锚标记中删除<code>target=&quot;_blank&quot;</code>属性，因为这会导致链接的文档在新窗口选项卡中打开。然后将值为“footer”的<code>id</code>属性添加到页面底部的<code>&lt;footer&gt;</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的页面上应该只有一个锚标记。
    testString: 'assert($("a").length == 1, "There should be only one anchor tag on your page.");'
  - text: 页面上应该只有一个<code>footer</code>标记。
    testString: 'assert($("footer").length == 1, "There should be only one <code>footer</code> tag on your page.");'
  - text: '<code>a</code>标签的<code>href</code>属性应设置为“#footer”。'
    testString: 'assert($("a").eq(0).attr("href") == "#footer", "The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".");'
  - text: <code>a</code>标签不应具有<code>target</code>属性
    testString: 'assert(typeof $("a").eq(0).attr("target") == typeof undefined || $("a").eq(0).attr("target") == true, "The <code>a</code> tag should not have a <code>target</code> attribute");'
  - text: <code>a</code>文本应该是“跳到底部”。
    testString: 'assert($("a").eq(0).text().match(/Jump to Bottom/gi), "The <code>a</code> text should be "Jump to Bottom".");'
  - text: <code>footer</code>标记的<code>id</code>属性应设置为“footer”。
    testString: 'assert($("footer").eq(0).attr("id") == "footer", "The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
