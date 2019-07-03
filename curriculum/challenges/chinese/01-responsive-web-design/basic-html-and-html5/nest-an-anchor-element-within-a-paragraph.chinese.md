---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0

videoUrl: ''
localeTitle: Nest an Anchor Element within a Paragraph
---

## Description
<section id='description'>
你可以在其他文本元素内嵌套链接。
<blockquote>&#60;p&#62;<br> Here's a &#60;a target="_blank" href="http://freecodecamp.one"&#62; link to freecodecamp.one&#60;/a&#62; for you to follow.<br>&#60;/p&#62;</blockquote>
让我们来分解这个例子：
通常，文本是被包裹在<code>p</code>段落内：<br><code>&#60;p&#62; Here's a ... for you to follow. &#60;/p&#62;</code>
接下来是<code>anchor</code>锚点<code>&#60;a&#62;</code>（需要结束标记 <code>&#60;/a&#62;</code>）:<br> <code>&#60;a&#62; ... &#60;/a&#62;</code>
<code>target</code>是锚点的一个属性，它指定了会以什么方式来打开链接，属性值 <code>"_blank"</code> 的意思是链接会在新元素页打开。
<code>href</code>是锚点的另一个属性：它指定了链接的 URL 地址：<br><code>&#60;a href="http://freecodecamp.one"> ... &#60;/a&#62;</code>
锚点元素内的文本：<strong>"link to freecodecamp.one"</strong>，会显示为一个可以点击的链接：<br>  <code>&#60;a href=" ... "&#62;link to freecodecamp.one&#60;/a&#62;</code>
例子的最后输出将会是这样：<br><p>Here's a <a target="_blank" href="http://freecodecamp.one"> link to freecodecamp.one</a> for you to follow.</p>
</section>

## Instructions
<section id='instructions'>
现在用一个新的段落来包裹现存的锚点（必须放在<code>main</code>元素之后才行)。新段落的文本为：View more cat photos，其中 "cat photos" 是一个链接，其他是纯文本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你需要一个指向 "http://freecatphotoapp.com" 的锚点。'
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "你需要一个指向 "http://freecatphotoapp.com" 的锚点。");'
  - text: 锚点的文本应为：cat photos。
    testString: assert($("a").text().match(/cat\sphotos/gi), '锚点的文本应为：cat photos。');
  - text: 在锚点的外部创建一个新段落，这样页面就有3个段落了。
    testString: assert($("p") && $("p").length > 2, '在锚点的外部创建一个段落，这样页面就有3个段落了。');
  - text: 锚点应嵌套在新段落内。
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "锚点应嵌套在新段落内。");'
  - text: 段落应该包含文本 View more （记得 more 后面有一个空格）。
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "段落应该包含文本 View more （记得 more 后面有一个空格）。");'
  - text: 锚点不应该包含文本 View more 。
    testString: assert(!$("a").text().match(/View\smore/gi), '锚点不应该包含文本 View more 。');
  - text: 确保每个段落有结束标记。
    testString: assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, '确保每个段落有结束标记。');
  - text: 确保每个段落有结束标记。
    testString: assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, '确保每个段落有结束标记。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  <a href="http://freecatphotoapp.com" target="_blank">猫图</a>,  ,  <img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫">,  ,  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>,  <p>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</p>,</main>
```





</div>





</section>

              