---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
forumTopicId: 18246
localeTitle: 元素嵌套
---

## Description
<section id='description'>
<code>div</code>元素，也叫 Content Division Element（内容划分元素）元素，是一个包裹其他元素的通用容器。
它也是 HTML 中出现频率最高的元素。
和其他普通元素一样，你可以用<code>&#60;div&#62;</code>来标记一个<code>div</code>元素的开始，用<code>&#60;/div&#62;</code>来标记一个<code>div</code>元素的结束。
</section>

## Instructions
<section id='instructions'>
把无序列表、有序列表和段落都嵌套进同一个<code>div</code>元素。
提示：你可以在第一个<code>&#60p&#62</code>之前插入<code>div</code>开始标记，在<code>&#60/ol&#62</code>之后插入<code>div</code>结束标记，这样，所有的列表都位于<code>div</code>之内。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '把所有的<code>p</code>元素嵌入<code>div</code>元素中。'
    testString: assert($("div").children("p").length > 1);
  - text: '把<code>ul</code>元素嵌入<code>div</code>元素中。'
    testString: assert($("div").children("ul").length > 0);
  - text: '把<code>ol</code>元素嵌入<code>div</code>元素中。'
    testString: assert($("div").children("ol").length > 0);
  - text: '确保<code>div</code>元素有结束标记。'
    testString: assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length);

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
  <ol>
    <li>跳蚤</li>
    <li>打雷</li>
    <li>同类</li>
  </ol>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor">室内</label>
    <label><input type="radio" name="indoor-outdoor">室外</label><br>
    <label><input type="checkbox" name="personality">忠诚</label>
    <label><input type="checkbox" name="personality">懒惰</label>
    <label><input type="checkbox" name="personality">积极</label><br>
    <input type="text" placeholder="猫咪图片地址" required>
    <button type="submit">提交</button>
  </form>
</main>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              