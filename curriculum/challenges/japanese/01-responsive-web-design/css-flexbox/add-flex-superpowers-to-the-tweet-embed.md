---
id: 587d78ab367417b2b2512af1
title: 埋め込みツイートに flex の強力なパワーを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
dashedName: add-flex-superpowers-to-the-tweet-embed
---

# --description--

実践的な例として使用する埋め込みツイートが右側にあります。 いくつかの要素はレイアウトを変えると見栄えがより良くなりそうです。 前回のチャレンジで `display: flex` を説明しました。 ここでは、埋め込みツイート内のコンポーネントにそれを追加して、位置の調整を行いましょう。

# --instructions--

CSS プロパティ `display: flex` を以下のすべてのアイテムに追加してください。セレクターは既に CSS に設定されていることに注意してください。

`header`、ヘッダーの `.profile-name`、ヘッダーの `.follow-btn`、ヘッダーの `h3` および `h4`、`footer`、フッターの `.stats`

# --hints--

`.follow-btn` がページ上に表示されている必要があります。 必ず広告ブロッカーなどの拡張機能をオフにしてください。

```js
assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');
```

`header` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('header').css('display') == 'flex');
```

`footer` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('footer').css('display') == 'flex');
```

`h3` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('h3').css('display') == 'flex');
```

`h4` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('h4').css('display') == 'flex');
```

`.profile-name` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('.profile-name').css('display') == 'flex');
```

`.follow-btn` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('.follow-btn').css('display') == 'flex');
```

`.stats` は `display` プロパティを `flex` に設定する必要があります。

```js
assert($('.stats').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
  }
  header .follow-btn {

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {

    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {

  }
  footer .stats {

    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```

# --solutions--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
   display: flex;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```
