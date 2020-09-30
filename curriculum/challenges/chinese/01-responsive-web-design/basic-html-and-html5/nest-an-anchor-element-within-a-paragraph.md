---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cb6k8Cb'
forumTopicId: 18244
localeTitle: 将 a 嵌套在段落中
---

## Description
<section id='description'>

你可以在其他文本元素内嵌套链接。

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

让我们来分解这个例子：
通常，文本是被包裹在<code>p</code>段落内：<br><code>&#60;p&#62; Here's a ... for you to follow. &#60;/p&#62;</code>
接下来是<code>anchor</code> <code>a</code> <code>&#60;a&#62;</code>（需要结束标记 <code>&#60;/a&#62;</code>）:<br> <code>&#60;a&#62; ... &#60;/a&#62;</code>
<code>target</code>是 <code>a</code> 的一个属性，用来指定链接的打开方式。属性值 <code>"_blank"</code> 的意思是链接会在新标签页打开。
<code>href</code>是 <code>a</code> 的另一个属性：用来指定链接的 URL：<br>`<a href="https://freecodecamp.org"> ... </a>`
 <code>a</code> 元素内的文本：<strong>"link to freecodecamp.org"</strong>，会显示为一个可以点击的链接：<br>  <code>&#60;a href=" ... "&#62;link to freecodecamp.org&#60;/a&#62;</code>
例子的最后输出将会是这样：<br><p>Here's a <a target="_blank" href="http://freecodecamp.one"> link to freecodecamp.org</a> for you to follow.</p>
</section>

## Instructions
<section id='instructions'>

用一个段落（<code>p</code>）标签来包裹<code>main</code>元素里的<code>a</code>节点。新段落的文本为：“View more cat photos”，其中 "cat photos" 是一个链接，其余是纯文本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你需要一个指向 "https://freecatphotoapp.com" 的 <code>a</code> 。'
    testString: assert(($("a[href=\"https://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0));
  - text: '<code>a</code> 的文本应为：cat photos。'
    testString: assert($("a").text().match(/cat\sphotos/gi));
  - text: '在 <code>a</code> 的外部创建一个新段落，这样页面就有 3 个段落了。'
    testString: assert($("p") && $("p").length > 2);
  - text: '<code>a</code> 应嵌套在新段落内。'
    testString: assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")));
  - text: '段落应该包含文本 View more（记得 more 后面有一个空格）。'
    testString: assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)));
  - text: '<code>a</code> 不应该包含文本 View more。'
    testString: assert(!$("a").text().match(/View\smore/gi));
  - text: '确保每个段落有结束标记。'
    testString: assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);
  - text: '确保每个段落有结束标记。'
    testString: assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  
  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
  
  <img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫">
  
  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>
  <p>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</p>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

</section>

