---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0

videoUrl: ''
localeTitle: Define the Head and Body of an HTML Document
---

## Description
<section id='description'>
<code>html</code>的结构主要分为两大部分：<code>head</code>、<code>body</code>。关于网页的描述都应该放入<code>head</code>标签，网页的内容都应该放入<code>body</code>标签。
比如<code>link</code>、<code>meta</code>、<code>title</code>和<code>style</code>都应该放入<code>head</code>标签。
这是网页布局的一个例子：
<blockquote>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&nbsp;&nbsp;&lt;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- metadata elements --&gt;<br>&nbsp;&nbsp;&lt;/head&gt;<br>&nbsp;&nbsp;&lt;body&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- page contents --&gt;<br>&nbsp;&nbsp;&lt;/body&gt;<br>&lt;/html&gt;</blockquote>
</section>

## Instructions
<section id='instructions'>
给网页添加<code>head</code>和<code>body</code>，<code>head</code>元素应该包含<code>title</code>，<code>body</code>元素应该包含<code>h1</code>和<code>p</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 网页应该只有一个<code>head</code>元素。
    testString: assert($('head').length == 1, '网页应该只有一个<code>head</code>元素。');
  - text: 网页应该只有一个<code>body</code>元素。
    testString: assert($('body').length == 1, '网页应该只有一个<code>body</code>元素。');
  - text: <code>head</code>应该是<code>html</code>的子元素。
    testString: assert($('html').children('head').length == 1, '<code>head</code>应该是<code>html</code>的子元素。');
  - text: <code>body</code>应该是<code>html</code>的子元素。
    testString: assert($('html').children('body').length == 1, '<code>body</code>应该是<code>html</code>的子元素。');
  - text: <code>title</code>应该是<code>head</code>的子元素。
    testString: assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), '<code>title</code>应该是<code>head</code>的子元素。');
  - text: <code>h1</code>和<code>p</code>都应该是<code>body</code>的子元素。
    testString: assert($('body').children('h1').length == 1 && $('body').children('p').length == 1, '<code>h1</code>和<code>p</code>都应该是<code>body</code>的子元素。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<!DOCTYPE html>,<html>,  <title>世上最萌的猫咪</title>,  ,  <h1>世上最萌的猫咪</h1>,  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。 在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>,  ,</html>  
```





</div>





</section>

              