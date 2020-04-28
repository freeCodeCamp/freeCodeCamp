---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
localeTitle: 给图片添加链接
---

## Description
<section id='description'>
你可以通过把元素嵌套进 <code>a</code> 里使其变成一个链接。
把你的图片嵌套进 <code>a</code>。举例如下：
<code>&#60;a href="#"&#62;&#60;img src="http://cdn.freecodecamp.cn/running-cats.jpg" alt="三只萌萌的小猫"&#62;&#60;/a&#62;</code>
把 <code>a</code> 的<code>href</code>属性设置为<code>#</code>，就可以创建固定链接。
</section>

## Instructions
<section id='instructions'>
把现存的图片嵌套进 <code>a</code> 中。
当鼠标悬停在图片上时，鼠标的光标如果从箭头指针变成手形指针，那么此时图片就是一个链接了。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '把现存的图片嵌套进 <code>a</code> 中。'
    testString: assert($("a").children("img").length > 0);
  - text: '<code>a</code> 的<code>href</code>属性应为<code>#</code>。'
    testString: assert(new RegExp("#").test($("a").children("img").parent().attr("href")));
  - text: '确保每个 <code>a</code> 都有结束标记。'
    testString: assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
<p>点击查看更多<a href="#">猫咪图片</a>。</p>
  
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
              