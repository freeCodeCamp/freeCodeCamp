---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0

videoUrl: ''
localeTitle: Add Images to Your Website
---

## Description
<section id='description'>
用<code>img</code>元素来为你的网站添加图片，其中<code>src</code>属性指向一个图片的地址。
例如：
<code>&#60img src="https://www.your-image-source.com/your-image.jpg"&#62</code>
注意：<code>img</code>元素是没有结束标记的。
所有的<code>img</code>元素必须有<code>alt</code>属性，<code>alt</code>属性的文本是当图片无法加载时显示的替代文本，这对于通过屏幕阅读器来浏览网页的用户非常重要。
注意：如果图片是纯装饰性的，用一个空的<code>alt</code>是最佳实践。
理想情况下，<code>alt</code>属性不应该包含特殊字符，除非需要。
让我们给上面例子的<code>img</code>添加<code>alt</code>属性。
<code>&#60img src="https://www.your-image-source.com/your-image.jpg" alt="作者站在沙滩上竖起两个大拇指"&#62</code>
</section>

## Instructions
<section id='instructions'>
让我们给网站添加图片：
在<code>h2</code>元素前，插入一个<code>img</code>元素
现在设置<code>src</code>属性指向这个地址：
<code>http://cdn.freecodecamp.cn/relaxing-cat.jpg</code>
最后不要忘记给图片添加一个<code>alt</code>文本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 网页应该有一张图片。
    testString: assert($("img").length > 0, '网页应该有一张图片。');
  - text: 这张图片应该是一只小猫。
    testString: assert(new RegExp("\/\/cdn.freecodecamp.cn\/relaxing-cat.jpg|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), '这张图片应该是一只小猫。');
  - text: 图片必须有<code>alt</code>属性。
    testString: assert(code.match(/alt\s*?=\s*?(\"|\').*(\"|\')/), '图片必须有<code>alt</code>属性。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  ,  <p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>,  <p>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</p>,</main>
```





</div>





</section>

              