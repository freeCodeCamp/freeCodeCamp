---
id: bad88fee1348bd9aedf08816
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
title: 用 a 实现网页内部跳转
---

## Description
<section id='description'>
<code>a</code> 元素还可以用来实现页面内不同区域的跳转，只需要把<code>a</code>元素的<code>href</code>值设置为井号<code>#</code>加欲跳转区域对应的<code>id</code>值即可。<code>id</code>是描述网页元素的一个属性，它的值在整个页面中唯一。
下面是用来创建内部 <code>a</code> 的例子：

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

当用户点击了<code>Contacts</code>链接，页面就会跳转到网页的<b>Contacts</b>区域。
</section>

## Instructions
<section id='instructions'>
通过修改<code>href</code>属性为<code>#footer</code>来更改外部链接为内部链接，同时修改文本<code>cat photos</code>为<code>Jump to Bottom</code>。
移除 target="_blank" 属性，它会使得链接在新标签页中打开。
然后添加一个<code>&lt;footer&gt;</code>元素，它的<code>id</code>值为<code>footer</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '页面中应该只有一个 <code>a</code> 。'
    testString: assert($('a').length == 1);
  - text: '页面中应该只有一个<code>footer</code>元素。'
    testString: assert($('footer').length == 1);
  - text: '<code>a</code> 的<code>href</code>属性应为 "#footer"。'
    testString: assert($('a').eq(0).attr('href') == "#footer");
  - text: '<code>a</code> 不应该有<code>target</code>属性。'
    testString: assert(typeof $('a').eq(0).attr('target') == typeof undefined || $('a').eq(0).attr('target') == true);
  - text: '<code>a</code> 的文本应为<code>Jump to Bottom</code>。'
    testString: assert($('a').eq(0).text().match(/Jump to Bottom/gi));
  - text: '<code>footer</code>元素的<code>id</code>属性应为 "footer"。'
    testString: assert($('footer').eq(0).attr('id') == "footer");

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
  
  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。 养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。 在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>
  <p>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。 在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。 养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</p>
  
</main>
  
<footer>Copyright Cat Photo App</footer>
```

</div>

</section>

## Solution
<section id='solution'>
</section>
              