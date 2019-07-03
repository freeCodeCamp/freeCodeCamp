---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0

videoUrl: ''
localeTitle: Link to Internal Sections of a Page with Anchor Elements
---

## Description
<section id='description'>
锚点同样也可以用来在网页内不同区域的跳转。
设置锚点的<code>href</code>属性值为井号<code>#</code>加上想跳转区域对应的<code>id</code>属性值，这样就可以创建一个内部跳转。<code>id</code>是用来描述网页元素的一个属性，它的值在整个页面中唯一。
下面是用来创建内部锚点的例子：
<blockquote>&lt;a href="#contacts-header"&gt;Contacts&lt;/a&gt;<br>...<br>&lt;h2 id="contacts-header"&gt;Contacts&lt;/h2&gt;</blockquote>
当用户点击了<code>Contacts</code>链接，页面就会跳转到网页的<b>Contacts</b>区域。
</section>

## Instructions
<section id='instructions'>
通过修改<code>href</code>属性为<code>#footer</code>来更改外部链接为内部链接，同时修改文本<code>cat photos</code>为<code>Jump to Bottom</code>。
移除 <code>target="_blank"</code> 属性避免点击链接会打开新的元素页。
然后添加一个<code>&lt;footer&gt;</code>元素，它的<code>id</code>值为<code>footer</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 页面中应该只有一个锚点。
    testString: assert($('a').length == 1, '页面中应该只有一个锚点。');
  - text: 页面中应该只有一个<code>footer</code>元素。
    testString: assert($('footer').length == 1, '页面中应该只有一个<code>footer</code>元素。');
  - text: "锚点的<code>href</code>属性应为 '#footer'。"
    testString: assert($('a').eq(0).attr('href') == "#footer", '锚点的<code>href</code>属性应为 "#footer"。');
  - text: 锚点不应该有<code>target</code>属性。
    testString: assert(typeof $('a').eq(0).attr('target') == typeof undefined || $('a').eq(0).attr('target') == true, '锚点不应该有<code>target</code>属性。');
  - text: 锚点的文本应为<code>Jump to Bottom</code>。
    testString: assert($('a').eq(0).text().match(/Jump to Bottom/gi), '锚点的文本应为<code>Jump to Bottom</code>。');
  - text: "<code>footer</code>元素的<code>id</code>属性应为 'footer'。"
    testString: assert($('footer').eq(0).attr('id') == "footer", '<code>footer</code>元素的<code>id</code>属性应为 "footer"。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  <a href="http://freecatphotoapp.com" target="_blank">猫图</a>,  ,  <img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫">,  ,  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。 养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。 在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>,  <p>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。 在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。 养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</p>,  ,</main>,  ,<footer>Copyright Cat Photo App</footer>
```





</div>





</section>

              