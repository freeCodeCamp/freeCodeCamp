---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0

videoUrl: ''
localeTitle: Create an Ordered List
---

## Description
<section id='description'>
HTML 有一个特定的元素用于创建有序列表<code>ordered lists（缩写 ol）</code>。
有序列表以<code>&#60;ol&#62;</code>开始，中间包含一个或多个<code>&#60;li&#62;</code>元素，最后以<code>&#60;/ol&#62;</code>结尾。
例如:
<blockquote>&#60;ol&#62;<br>&nbsp;&nbsp;&#60;li&#62;加菲猫&#60;/li&#62;<br>&nbsp;&nbsp;&#60;li&#62;哆啦A梦&#60;/li&#62;<br>&#60;/ol&#62;</blockquote>
将会创建一个包含加菲猫和哆啦A梦的有序列表。
</section>

## Instructions
<section id='instructions'>
创建一个有序列表，内容是猫咪最讨厌的三件东西。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 页面应该有一个无序列表，内容是猫咪最喜欢的三件东西。
    testString: assert((/猫咪最喜欢的三件东西：/i).test($("ul").prev().text()), '页面应该有一个有序列表，内容是猫咪最喜欢的三件东西。');
  - text: 页面应该有一个有序列表，内容是猫咪最讨厌的三件东西。
    testString: assert((/猫咪最讨厌的三件东西：/i).test($("ol").prev().text()), '页面应该有一个有序列表，内容是猫咪最讨厌的三件东西。');
  - text: 页面应该只有一个<code>ul</code>元素。
    testString: assert.equal($("ul").length, 1, '页面应该只有一个<code>ul</code>元素。');
  - text: 页面应该只有一个<code>ol</code>元素。
    testString: assert.equal($("ol").length, 1, '页面应该只有一个<code>ol</code>元素。');
  - text: <code>ul</code>无序列表应该包含3个<code>li</code>条目。
    testString: assert.equal($("ul li").length, 3, '<code>ul</code>无序列表应该包含3个<code>li</code>条目。');
  - text: <code>ol</code>有序列表应该包含3个<code>li</code>元素。
    testString: assert.equal($("ol li").length, 3, '<code>ol</code>有序列表应该包含3个<code>li</code>条目。');
  - text: 确保<code>ul</code>无序列表有结束标记。
    testString: assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, '确保<code>ul</code>无序列表有结束标记。');
  - text: 确保<code>ol</code>有序列表有结束标记。
    testString: assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, '确保<code>ol</code>有序列表有结束标记。');
  - text: 确保每个<code>li</code>条目都有结束标记。
    testString: assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, '确保每个<code>li</code>条目都有结束标记。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>,  ,  <p>猫咪最喜欢的三件东西：</p>,  <ul>,    <li>猫薄荷</li>,    <li>激光笔</li>,    <li>千层饼</li>,  </ul>,  <p>猫咪最讨厌的三件东西：</p>,  ,</main>
```





</div>





</section>

              