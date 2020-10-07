---
id: 587d78ab367417b2b2512af3
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cJb8yuq'
forumTopicId: 301104
title: 使用 flex-direction 在嵌入推文中创建多行
---

## Description
<section id='description'>
嵌入推文示例中的<code>header</code>和<code>footer</code>有自己的子元素，使用<code>flex-direction</code>属性可以把这些子元素排成行。这个属性告诉 CSS 需要将这些子元素水平排列。
</section>

## Instructions
<section id='instructions'>
为<code>header</code>和<code>footer</code>添加 CSS 属性<code>flex-direction</code>并把值设为 row。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>header</code>应有<code>flex-direction</code>属性，其值应为 row。'
    testString: assert(code.match(/header\s*?{[^}]*?flex-direction:\s*?row;/g));
  - text: '<code>footer</code>应有<code>flex-direction</code>属性，其值应为 row。'
    testString: assert(code.match(/footer\s*?{[^}]*?flex-direction:\s*?row;/g));

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

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              