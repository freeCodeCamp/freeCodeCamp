---
id: 587d7789367417b2b2512aa4
title: 使用 audio 元素提高音频内容的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
---

# --description--

HTML5 的`audio`标签用于呈现音频内容，它也具有语义化特性。可以在`audio`上下文中为音频内容添加文字说明或者字幕链接，使听觉障碍用户也能获取音频中的信息。

`audio`支持`controls`属性，可以使浏览器为音频提供具有开始、暂停等功能的播放控件。`controls`属性是一个布尔属性，只要这个属性出现在`audio`标签中，浏览器就会开启播放控件。

举个例子：

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

**注意：**  
多媒体内容通常同时包含音频与视频部分，它需要同步音频与字幕，以使视觉或听觉障碍用户可以获取它的内容。一般情况下，网页开发者不需要创建音频与字幕，但是需要将它们添加到多媒体中。

# --instructions--

是时候让 Camper Cat 休息一下，并与朋友 camper Zersiax (@zersiax) 会面。Zersiax 是一位屏幕阅读器用户，同时也是无障碍设计的高手。为了体验 Zersiax 的屏幕阅读器的朗读效果，请在`p`标签之后添加一个具有`controls`属性的`audio`标签。然后在`audio`标签内添加一个`source`标签，并且设置`src`属性为"`https://s3.amazonaws.com/freecodecamp/screen-reader.mp3`"，并且设置`type`属性为"audio/mpeg".

**注意：**  
音频片段的播放速度可能会快到另我们难以理解，但是对于屏幕阅读器用户来说这是正常速度。

# --hints--

你的代码应该包含一个`audio`标签。

```js
assert($('audio').length === 1);
```

确保你的`audio`标签是闭合的。

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

`audio`标签应具有`controls`属性。

```js
assert($('audio').attr('controls'));
```

你的代码应具有`source`标签。

```js
assert($('source').length === 1);
```

`source`标签应该在`audio`标签中。

```js
assert($('audio').children('source').length === 1);
```

`source`标签中`src`属性的值应该与教程中的链接一致。

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

`source`标签中应具有`type`属性，其值为 audio/mpeg。

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --solutions--

