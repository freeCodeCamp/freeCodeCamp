---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
localeTitle: '用 # 号来创建链接占位符'
---

## Description
<section id='description'>
有时你想为网站添加一个 <code>a</code>，但如果你还不确定要将它链接到哪儿，这时可以使用链接占位符。
在后面的课程中我们会学到：如何轻松通过<code>JavaScript</code>更改链接指向的地址。
</section>

## Instructions
<section id='instructions'>
<code>href</code>属性的当前值是指向 "https://freecatphotoapp.com"，将<code>href</code>属性的值替换为<code>#</code>，就可以创建固定链接。
例如: <code>href="#"</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>a</code> 的<code>href</code>属性应为 "#"。'
    testString: assert($("a").attr("href") === "#");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>点击这里可以获取更多<a href="https://freecatphotoapp.com" target="_blank">猫咪图片</a>。</p>
  
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
              