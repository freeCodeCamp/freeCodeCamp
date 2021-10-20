---
id: 587d7789367417b2b2512aa4
title: 使用 audio 元素提高音频内容的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

HTML5 的 `audio` 标签用于呈现音频内容或音频流，它也具有语义化特性。 音频内容也需要备用文本，供聋哑人或听力困难的人使用。 这可以通过页面上的文本或与字幕链接来实现。

`audio` 标签支持 `controls` 属性， 用于显示浏览器默认播放、停止和其他控制，以及支持键盘功能。 这是一个布尔值属性，意味着它不需要一个值，它在标签上存在即开启设置。

举个例子：

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**注意：** 多媒体内容通常同时包含音频与视频部分， 它需要同步的字幕，使视觉或听觉障碍用户可以获取它的内容。 一般情况下，网页开发者不负责创建字幕或逐字稿，但是需要将它们添加到多媒体中。

# --instructions--

是时候让 Camper Cat 休息一下，并与朋友 Zersiax (@zersiax) 会面了。 Zersiax 是一位屏幕阅读器用户，同时也是无障碍设计的高手。 为了体验屏幕阅读器的朗读效果，请在 `p` 标签之后添加一个 `audio` 标签， 具有 `controls` 属性。 然后在 `audio` 标签里面放一个带有 `src` 属性的 `source` 标签，属性值为 `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3`。将 `type` 属性设置为 `"audio/mpeg"`.

**注意：** 音频片段的播放速度可能会快到令我们难以理解，但是对于屏幕阅读器用户来说这是正常速度。

# --hints--

应该包含一个 `audio` 标签。

```js
assert($('audio').length === 1);
```

确保 `audio` 元素有结束标签。

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

`audio` 标签应存在 `controls` 属性。

```js
assert($('audio').attr('controls'));
```

代码中应存在 `source` 标签。

```js
assert($('source').length === 1);
```

`source` 标签应位于 `audio` 标签中。

```js
assert($('audio').children('source').length === 1);
```

`source` 标签中 `src` 的属性值应该与教程中的链接一致。

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

`source` 标签中应具有 `type` 属性，其属性值应为 audio/mpeg。

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
