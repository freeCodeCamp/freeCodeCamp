---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: ''
localeTitle: 使用音频元素改善音频内容的可访问性
---

## Description
<section id="description">当HTML5的<code>audio</code>元素包含标记中的声音或音频流内容时，它会提供语义含义。音频内容还需要一个文本替代品，以便耳聋或听力障碍的人可以访问。这可以通过页面上的附近文本或转录本的链接来完成。 <code>audio</code>标签支持<code>controls</code>属性。这显示了浏览器的默认播放，暂停和其他控件，并支持键盘功能。这是一个布尔属性，意味着它不需要值，它在标签上的存在会打开设置。这是一个例子： <blockquote> &lt;audio id =“meowClip”controls&gt; <br> &lt;source src =“audio / meow.mp3”type =“audio / mpeg”/&gt; <br> &lt;source src =“audio / meow.ogg”type =“audio / ogg”/&gt; <br> &lt;/音频&gt; <br></blockquote> <strong>注意</strong> <br>多媒体内容通常具有视觉和听觉组件。它需要同步标题和成绩单，以便具有视觉和/或听觉障碍的用户可以访问它。通常，Web开发人员不负责创建字幕或脚本，但需要知道包含它们。 </section>

## Instructions
<section id="instructions">是时候从Camper Cat休息一下，与露营者Zersiax（@zersiax）会面，这是一个可访问性和屏幕阅读器用户的冠军。要听到屏幕阅读器的剪辑，请在<code>p</code>后添加<code>audio</code>元素。包含<code>controls</code>属性。然后将<code>source</code>标记放在<code>audio</code>标记内， <code>src</code>属性设置为“https://s3.amazonaws.com/freecodecamp/screen-reader.mp3”，并将<code>type</code>属性设置为“audio / mpeg”。 <strong>注意</strong> <br>音频剪辑可能听起来很快并且难以理解，但这对于屏幕阅读器用户来说是正常的速度。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有一个<code>audio</code>标记。
    testString: 'assert($("audio").length === 1, "Your code should have one <code>audio</code> tag.");'
  - text: 确保您的<code>audio</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Make sure your <code>audio</code> element has a closing tag.");'
  - text: <code>audio</code>标签应该具有<code>controls</code>属性。
    testString: 'assert($("audio").attr("controls"), "The <code>audio</code> tag should have the <code>controls</code> attribute.");'
  - text: 您的代码应该有一个<code>source</code>标记。
    testString: 'assert($("source").length === 1, "Your code should have one <code>source</code> tag.");'
  - text: 您的<code>source</code>标记应位于<code>audio</code>标记内。
    testString: 'assert($("audio").children("source").length === 1, "Your <code>source</code> tag should be inside the <code>audio</code> tags.");'
  - text: <code>source</code>标记上<code>src</code>属性的值应与指令中的链接完全匹配。
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.");'
  - text: 您的代码应在<code>source</code>标记上包含<code>type</code>属性，其值为audio / mpeg。
    testString: 'assert($("source").attr("type") === "audio/mpeg", "Your code should include a <code>type</code> attribute on the <code>source</code> tag with a value of audio/mpeg.");'

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

```js
// solution required
```
</section>
