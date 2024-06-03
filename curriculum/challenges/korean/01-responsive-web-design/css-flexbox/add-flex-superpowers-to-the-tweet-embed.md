---
id: 587d78ab367417b2b2512af1
title: 트윗 임베드에 플렉스 능력 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
dashedName: add-flex-superpowers-to-the-tweet-embed
---

# --description--

실례로 사용될 트윗 임베드가 오른쪽에 있습니다. 일부 요소들은 다른 레이아웃으로 더 나아 보일 것입니다. 이전 과제에서 `display: flex`를 설명했습니다. 트윗 임베드의 위치 조정을 위해 그 안에 있는 여러 컴포넌트에 이를 추가할 것입니다.

# --instructions--

다음 모든 아이템에 `display: flex` 속성을 추가하시오 - 셀렉터는 이미 CSS에 설정되어 있음에 주의하십시오.

`header`, 헤더의 `.profile-name`, 헤더의 `.follow-btn`, 헤더의 `h3` and `h4`, `footer`, 푸터의 `.stats`.

# --hints--

`.follow-btn`는 페이지에 렌더링 되어야 합니다. 광고 차단기 같은 모든 확장 프로그램은 꺼야 합니다.

```js
assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');
```

`header`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

```js
assert($('header').css('display') == 'flex');
```

`footer`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

```js
assert($('footer').css('display') == 'flex');
```

`h3`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

```js
assert($('h3').css('display') == 'flex');
```

`h4`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

```js
assert($('h4').css('display') == 'flex');
```

`.profile-name`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

```js
assert($('.profile-name').css('display') == 'flex');
```

`.follow-btn`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

```js
assert($('.follow-btn').css('display') == 'flex');
```

`.stats`는 `flex`로 설정된 `display` 속성을 가져야 합니다.

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
  <img src="https://cdn.freecodecamp.org/curriculum/legacy-css-flexbox/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
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
  <img src="https://cdn.freecodecamp.org/curriculum/legacy-css-flexbox/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
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
