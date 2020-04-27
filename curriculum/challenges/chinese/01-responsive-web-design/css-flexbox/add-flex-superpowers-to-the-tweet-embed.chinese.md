---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
localeTitle: 在推文中添加弹性盒子布局
---

## Description
<section id='description'>
 我们以右边的嵌入推文为例。一些元素换一个布局方式或许更好看。上一个挑战演示了<code>display: flex</code>，现在你需要把它添加到推文内嵌的多个组件中，调整它们的位置。
</section>

## Instructions
<section id='instructions'>
为下列项目添加 CSS 属性<code>display: flex</code>。注意，CSS 选择器已写好：
<code>header</code>、header 的<code>.profile-name</code>、header 的<code>.follow-btn</code>、header 的<code>h3</code>和<code>h4</code>、<code>footer</code>以及 footer 的<code>.stats</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>header</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('header').css('display') == 'flex');
  - text: <code>footer</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('footer').css('display') == 'flex');
  - text: <code>h3</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('h3').css('display') == 'flex');
  - text: <code>h4</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('h4').css('display') == 'flex');
  - text: <code>.profile-name</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('.profile-name').css('display') == 'flex');
  - text: <code>.follow-btn</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('.follow-btn').css('display') == 'flex');
  - text: <code>.stats</code>的<code>display</code>属性应为 <code>flex</code>。
    testString: assert($('.stats').css('display') == 'flex');

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

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              