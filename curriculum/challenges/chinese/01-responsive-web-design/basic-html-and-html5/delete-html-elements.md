---
id: bad87fed1348bd9aedf08833
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
title: 删除 HTML 元素
---

## Description
<section id='description'>
手机的屏幕空间是有限的。
让我们删除不必要的元素，开始设计我们的CatPhotoApp。
</section>

## Instructions
<section id='instructions'>
任务：删除<code>h1</code>元素以简化视图。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '删除<code>h1</code>元素。'
    testString: assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
  - text: '保留<code>h2</code>元素。'
    testString: assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
  - text: '保留<code>p</code>元素。'
    testString: assert(code.match(/<p>[\w\W]*<\/p>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              