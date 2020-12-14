---
id: 587d7789367417b2b2512aa4
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
title: 使用 audio 元素提高音频内容的可访问性
---

## Description
<section id='description'>
HTML5 的<code>audio</code>标签用于呈现音频内容，它也具有语义化特性。可以在<code>audio</code>上下文中为音频内容添加文字说明或者字幕链接，使听觉障碍用户也能获取音频中的信息。
<code>audio</code>支持<code>controls</code>属性，可以使浏览器为音频提供具有开始、暂停等功能的播放控件。<code>controls</code>属性是一个布尔属性，只要这个属性出现在<code>audio</code>标签中，浏览器就会开启播放控件。
举个例子：

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

<strong>注意：</strong><br>多媒体内容通常同时包含音频与视频部分，它需要同步音频与字幕，以使视觉或听觉障碍用户可以获取它的内容。一般情况下，网页开发者不需要创建音频与字幕，但是需要将它们添加到多媒体中。
</section>

## Instructions
<section id='instructions'>
是时候让 Camper Cat 休息一下，并与朋友 camper Zersiax (@zersiax) 会面。Zersiax 是一位屏幕阅读器用户，同时也是无障碍设计的高手。为了体验 Zersiax 的屏幕阅读器的朗读效果，请在<code>p</code>标签之后添加一个具有<code>controls</code>属性的<code>audio</code>标签。然后在<code>audio</code>标签内添加一个<code>source</code>标签，并且设置<code>src</code>属性为"https://s3.amazonaws.com/freecodecamp/screen-reader.mp3"，并且设置<code>type</code>属性为"audio/mpeg".
<strong>注意：</strong><br>音频片段的播放速度可能会快到另我们难以理解，但是对于屏幕阅读器用户来说这是正常速度。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码应该包含一个<code>audio</code>标签。'
    testString: assert($('audio').length === 1);
  - text: '确保你的<code>audio</code>标签是闭合的。'
    testString: assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g));
  - text: '<code>audio</code>标签应具有<code>controls</code>属性。'
    testString: assert($('audio').attr('controls'));
  - text: '你的代码应具有<code>source</code>标签。'
    testString: assert($('source').length === 1);
  - text: '<code>source</code>标签应该在<code>audio</code>标签中。'
    testString: assert($('audio').children('source').length === 1);
  - text: '<code>source</code>标签中<code>src</code>属性的值应该与教程中的链接一致。'
    testString: assert($('source').attr('src') === 'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3');
  - text: '<code>source</code>标签中应具有<code>type</code>属性，其值为 audio/mpeg。'
    testString: assert($('source').attr('type') === 'audio/mpeg');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    
    
    
  </main>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              