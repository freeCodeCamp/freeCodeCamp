---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: أضف Flex Flexpowers إلى Tweet تضمين
---

## Description
<section id="description"> إلى اليمين يتم تضمين التغريدة الذي سيتم استخدامه كمثال عملي. بعض العناصر تبدو أفضل مع تخطيط مختلف. أظهر التحدي الأخير <code>display: flex</code> . هنا سوف تقوم بإضافته إلى العديد من المكونات في tweet embed لبدء ضبط موضعها. </section>

## Instructions
<section id="instructions"> إضافة <code>display: flex</code> خاصية CSS <code>display: flex</code> لكل العناصر التالية - لاحظ أن المحددات قد تم إعدادها بالفعل في CSS: <code>header</code> ، رأس الملف <code>.profile-name</code> ، رأس الصفحة. <code>.follow-btn</code> ، <code>h3</code> و <code>h4</code> في الرأس ، <code>footer</code> ، <code>.stats</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: لديك <code>header</code> ينبغي أن يكون <code>display</code> الممتلكات المحددة لثني.
    testString: 'assert($("header").css("display") == "flex", "Your <code>header</code> should have a <code>display</code> property set to flex.");'
  - text: ''
    testString: 'assert($("footer").css("display") == "flex", "Your <code>footer</code> should have a <code>display</code> property set to flex.");'
  - text: يجب أن يكون لديك <code>h3</code> خاصية <code>display</code> مضبوطة.
    testString: 'assert($("h3").css("display") == "flex", "Your <code>h3</code> should have a <code>display</code> property set to flex.");'
  - text: ''
    testString: 'assert($("h4").css("display") == "flex", "Your <code>h4</code> should have a <code>display</code> property set to flex.");'
  - text: يجب أن يحتوي <code>.profile-name</code> ملفك الشخصي على خاصية <code>display</code> مضبوطة على flex.
    testString: 'assert($(".profile-name").css("display") == "flex", "Your <code>.profile-name</code> should have a <code>display</code> property set to flex.");'
  - text: ''
    testString: 'assert($(".follow-btn").css("display") == "flex", "Your <code>.follow-btn</code> should have a <code>display</code> property set to flex.");'
  - text: يجب أن يكون لدى <code>.stats</code> خاصية <code>display</code> مضبوطة على flex.
    testString: 'assert($(".stats").css("display") == "flex", "Your <code>.stats</code> should have a <code>display</code> property set to flex.");'

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

```js
// solution required
```
</section>
