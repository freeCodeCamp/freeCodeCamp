---
id: 587d78ab367417b2b2512af3
title: Apply the flex-direction Property to Create Rows in the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: قم بتطبيق الخاصية ذات الاتجاه المرن لإنشاء صفوف في تطبيق Tweet Tweet
---

## Description
<section id="description"> يشتمل <code>header</code> <code>footer</code> في مثال التضمين على عناصر فرعية يمكن ترتيبها كصفوف باستخدام خاصية <code>flex-direction</code> . هذا يخبر CSS لمحاذاة الأطفال أفقيًا. </section>

## Instructions
<section id="instructions"> أضف <code>flex-direction</code> CSS للمجموعة إلى كل من <code>header</code> <code>footer</code> واضبط القيمة على الصف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>header</code> عبارة <code>flex-direction</code> خاصية <code>flex-direction</code> مضبوط على الصف.
    testString: 'assert(code.match(/header\s*?{[^}]*?flex-direction:\s*?row;/g), "The <code>header</code> should have a <code>flex-direction</code> property set to row.");'
  - text: ''
    testString: 'assert(code.match(/footer\s*?{[^}]*?flex-direction:\s*?row;/g), "The <code>footer</code> should have a <code>flex-direction</code> property set to row.");'

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

```js
// solution required
```
</section>
