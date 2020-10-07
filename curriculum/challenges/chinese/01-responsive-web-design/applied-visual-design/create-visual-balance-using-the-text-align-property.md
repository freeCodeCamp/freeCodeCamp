---
id: 587d7791367417b2b2512ab3
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
title: 使用 text-align 属性创建视觉平衡
---

## Description
<section id='description'>
这部分课程主要关于应用视觉设计。开始的挑战展示了一些核心的原则，代码基于一个指定的卡片布局。
web 内容大部分都是文本。CSS 里面的 <code>text-align</code> 属性可以控制文本的对齐方式。
<code>text-align: justify;</code> 可以让除最后一行之外的文字两端对齐，即每行的左右两端都紧贴行的边缘。
<code>text-align: center;</code> 可以让文本居中对齐。
<code>text-align: right;</code> 可以让文本右对齐。
<code>text-align: left;</code> 是 <code>text-align</code> 的默认值，它可以让文本左对齐。
</section>

## Instructions
<section id='instructions'>
居中对齐 <code>h4</code> 标签文本，文本内容为 “Google”。两端对齐段落标签文本，文本介绍了 Google 的创立。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该在 <code>h4</code> 标签上使用 text-align 属性设置文本居中对齐。'
    testString: assert($('h4').css('text-align') == 'center');
  - text: '你应该在 <code>p</code> 标签上使用 text-align 属性设置文本两端对齐。'
    testString: assert($('p').css('text-align') == 'justify');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    
  }
  p {
    
  }
  .links {
    margin-right: 20px;
    
  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google 由在斯坦福大学攻读理工博士的拉里·佩奇和谢尔盖·布林共同创建。</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              