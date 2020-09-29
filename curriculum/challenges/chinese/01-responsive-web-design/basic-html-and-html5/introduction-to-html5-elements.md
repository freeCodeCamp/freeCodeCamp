---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
localeTitle: HTML5 元素介绍
---

## Description
<section id='description'>
HTML5 引入了很多更具描述性的 HTML 元素，例如：<code>header</code>、<code>footer</code>、<code>nav</code>、<code>video</code>、<code>article</code>、<code>section</code>等等。
这些元素让 HTML 更易读，同时有助于搜索引擎优化和无障碍访问。
<code>main</code>元素让搜索引擎和开发者瞬间就能找到网页的主要内容。
举个栗子, 下面的 <code>main</code> 元素嵌套了两个子元素：

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

<strong>提示：</strong>在后面的应用无障碍课程中我们会接触到更多新的 HTML5 元素，以及明白它们的用处。
</section>

## Instructions
<section id='instructions'>
在现有的段落下创建一个新的段落，段落内容为：<code>养猫有的时候，就是介于爱与恨之间，当你钦羡别人萌宠这么可爱的时候，你一定没有想过，猫咪会到处掉毛，甚至会屯老鼠，啃鞋子，用爪子爬门，你不理它，它就挠你，你要对它发脾气，它会比你更来劲。所以，猫咪慎入，没有一定的准备，切勿随便去侍养动物。它们一旦认定你了，你就是它们的主人，如果你抛弃它们，它们必定心中重创。</code>
在第一个段落前添加<code>&#60main&#62</code>，在第二个段落后添加<code>&#60/main&#62</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '页面中应该有两个段落。'
    testString: assert($("p").length > 1);
  - text: '确保每个段落都有结束标记。'
    testString: assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);
  - text: '新建的段落应该包含关键词：猫咪。'
    testString: assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()));
  - text: '代码中应该包含<code>main</code>元素。'
    testString: assert($('main').length === 1);
  - text: '<code>main</code>元素应有两个 <code>p</code>元素作为它的子元素。'
    testString: assert($("main").children("p").length === 2);
  - text: '开始标记<code><main></code>应位于第一个段落之前。'
    testString: assert(code.match(/<main>\s*?<p>/g));
  - text: '结束标记<code></main></code>应位于第二段落之后。'
    testString: assert(code.match(/<\/p>\s*?<\/main>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>猫咪</h2>

<p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              