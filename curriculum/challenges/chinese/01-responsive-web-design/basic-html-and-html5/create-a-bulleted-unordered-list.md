---
id: bad87fee1348bd9aedf08827
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
title: 创建一个无序列表
---

## Description
<section id='description'>
HTML 有一个特定的元素用于创建无序列表<code>unordered lists（缩写 ul）</code>。
无序列表以<code>&#60;ul&#62;</code>开始，中间包含一个或多个<code>&#60;li&#62;</code>元素，最后以<code>&#60;/ul&#62;</code>结尾。
例如: 

```html
<ul>
  <li>牛奶</li>
  <li>奶酪</li>
</ul>
```

将会创建一个包含牛奶和奶酪的无序列表。
</section>

## Instructions
<section id='instructions'>
删除页面底部的两个<code>p</code>元素，然后在底部创建一个无序列表，其中包含你认为猫咪最喜欢的三件东西。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>ul</code>无序列表。
    testString: assert($("ul").length > 0);
  - text: 你应该在<code>ul</code>无序列表中添加三个<code>li</code>条目。
    testString: assert($("ul li").length > 2);
  - text: 确保<code>ul</code>无序列表有结束标记。
    testString: assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length);
  - text: 确保每个<code>li</code>条目都有结束标记。
    testString: assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length);
  - text: 每个<code>li</code>元素都应该有一个空字符串或者空格。
    testString: assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫"></a>
  
  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>
  <p>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</p>
</main>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              