---
id: 587d78ac367417b2b2512af5
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cnzdVC9'
forumTopicId: 301103
title: 使用 flex-direction 在嵌入推文中创建一列
---

## Description
<section id='description'>
在上一个挑战中，把嵌入推文的<code>header</code>和<code>footer</code>的<code>flex-direction</code>属性值设为 row（行）。相似地，把<code>.profile-name</code>选择器对应的元素竖着排列会好看一点。
</section>

## Instructions
<section id='instructions'>
在 header 的<code>.profile-name</code>元素添加 CSS 属性<code>flex-direction</code>，将其值设为 column。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>.profile-name</code>应有<code>flex-direction</code>属性，其值应为 column。'
    testString: assert($('.profile-name').css('flex-direction') == 'column');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
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

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              