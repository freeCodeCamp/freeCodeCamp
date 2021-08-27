---
id: 587d7789367417b2b2512aa4
title: 使用 audio 元素提高音頻內容的可訪問性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

HTML5 的 `audio` 標籤用於呈現音頻內容或音頻流，它也具有語義化特性。 音頻內容也需要備用文本，供聾啞人或聽力困難的人使用。 這可以通過頁面上的文本或與字幕鏈接來實現。

`audio` 標籤支持 `controls` 屬性， 用於顯示瀏覽器默認播放、停止和其他控制，以及支持鍵盤功能。 這是一個布爾值屬性，意味着它不需要一個值，它在標籤上存在即開啓設置。

舉個例子：

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**注意：** 多媒體內容通常同時包含音頻與視頻部分， 它需要同步的字幕，使視覺或聽覺障礙用戶可以獲取它的內容。 一般情況下，網頁開發者不負責創建字幕或逐字稿，但是需要將它們添加到多媒體中。

# --instructions--

是時候讓 Camper Cat 休息一下，並與朋友 Zersiax (@zersiax) 會面了。 Zersiax 是一位屏幕閱讀器用戶，同時也是無障礙設計的高手。 爲了體驗屏幕閱讀器的朗讀效果，請在 `p` 標籤之後添加一個 `audio` 標籤， 具有 `controls` 屬性。 然後在 `audio` 標籤裏面放一個帶有 `src` 屬性的 `source` 標籤，屬性值爲 `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3`。將 `type` 屬性設置爲 `"audio/mpeg"`.

**注意：** 音頻片段的播放速度可能會快到令我們難以理解，但是對於屏幕閱讀器用戶來說這是正常速度。

# --hints--

應該包含一個 `audio` 標籤。

```js
assert($('audio').length === 1);
```

確保 `audio` 元素有結束標籤。

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

`audio` 標籤應存在 `controls` 屬性。

```js
assert($('audio').attr('controls'));
```

代碼中應存在 `source` 標籤。

```js
assert($('source').length === 1);
```

`source` 標籤應位於 `audio` 標籤中。

```js
assert($('audio').children('source').length === 1);
```

`source` 標籤中 `src` 的屬性值應該與教程中的鏈接一致。

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

`source` 標籤中應具有 `type` 屬性，其屬性值應爲 audio/mpeg。

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
