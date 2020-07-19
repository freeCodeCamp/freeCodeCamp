---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
localeTitle: 用 a 实现网页间的跳转
---

## Description
<section id='description'>
你可以用 <code>a</code>（Anchor，简写 a）来实现网页间的跳转。
<code>a</code> 需要一个<code>href</code>属性指向目的地，它还需要有 <code>a</code> 文本，例如：
<code>&#60;a href="https://freecodecamp.org">传送至 freecodecamp.org&#60;/a&#62;</code>
然后你的浏览器会显示一个可以点击的文本，点击该文本就会跳转到<code>https://freecodecamp.org</code>。
</section>

## Instructions
<section id='instructions'>
创建一个 <code>a</code>，它的<code>href</code>属性为<code>https://freecatphotoapp.com</code> ，它的文本为<code>cat photos</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>a</code>元素的 <code>a</code> 文本应为：<code>cat photos</code>。'
    testString: assert((/cat photos/gi).test($("a").text()));
  - text: '<code>a</code>元素的<code>href</code>属性应为："<code>http&#58;//freecatphotoapp<wbr>.com</code>"。'
    testString: assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")));
  - text: '确保<code>a</code>元素有结束标记。'
    testString: assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  
  
  
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
              