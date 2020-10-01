---
id: bad87fee1348bd9aedf08828
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
title: 创建一个有序列表
---

## Description
<section id='description'>
HTML 有一个特定的元素用于创建有序列表<code>ordered lists（缩写 ol）</code>。
有序列表以<code>&#60;ol&#62;</code>开始，中间包含一个或多个<code>&#60;li&#62;</code>元素，最后以<code>&#60;/ol&#62;</code>结尾。

例如:

```html
<ol>
  <li>加菲猫</li>
  <li>哆啦A梦</li>
</ol>
```

将会创建一个包含加菲猫和哆啦A梦的有序列表。
</section>

## Instructions
<section id='instructions'>
创建一个有序列表，内容是猫咪最讨厌的三件东西，内容可以任意指定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '页面应该有一个无序列表，内容是猫咪最喜欢的三件东西。'
    testString: assert((/Top 3 things cats hate:/i).test($("ol").prev().text()));
  - text: '页面应该有一个有序列表，内容是猫咪最讨厌的三件东西。'
    testString: assert((/Things cats love:/i).test($("ul").prev().text()));
  - text: '页面应该只有一个<code>ul</code>元素。'
    testString: assert.equal($("ul").length, 1);
  - text: '页面应该只有一个<code>ol</code>元素。'
    testString: assert.equal($("ol").length, 1);
  - text: '<code>ul</code>无序列表应该包含3个<code>li</code>条目。'
    testString: assert.equal($("ul li").length, 3);
  - text: '<code>ol</code>有序列表应该包含3个<code>li</code>元素。'
    testString: assert.equal($("ol li").length, 3);
  - text: '确保<code>ul</code>无序列表有结束标记。'
    testString: assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length);
  - text: '确保<code>ol</code>有序列表有结束标记。'
    testString: assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length);
  - text: '确保每个<code>li</code>条目都有结束标记。'
    testString: assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length);
  - text: '无序列表里的 <code>li</code> 元素不应该为空。'
    testString: $('ul li').each((i, val) => assert(val.textContent.replace(/\s/g, '')));
  - text: '有序列表里的 <code>li</code> 元素不应该为空。'
    testString: $('ol li').each((i, val) => assert(!!val.textContent.replace(/\s/g, '')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
<p>点击查看更多<a href="#">猫咪图片</a>。</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫"></a>
  
  <p>猫咪最喜欢的三件东西：</p>
  <ul>
    <li>猫薄荷</li>
    <li>激光笔</li>
    <li>千层饼</li>
  </ul>
  <p>猫咪最讨厌的三件东西：</p>
  
</main>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              