---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/c9W7MhM
forumTopicId: 301100
localeTitle: Добавьте суперспособности Flex к компоненту твита
---

## Description
<section id='description'>
Справа находится компонент твита, который будет использоваться в качестве практического примера. Некоторые его составные части выглядели бы лучше при другой компоновке. В предыдущей задаче вы познакомились со свойством <code>display: flex</code>. Здесь вы добавите его к нескольким составным частям компонента твита, чтобы начать настройку их позиционирования.
</section>

## Instructions
<section id='instructions'>
Добавьте CSS свойство <code>display: flex</code> для всех указанных ниже элементов: обратите внимание, что необходимые селекторы уже есть в коде CSS: <code>header</code>, вложенные в него <code>.profile-name</code>, <code>.follow-btn</code>, <code>h3</code> и <code>h4</code>; <code>footer</code> и вложенный в него <code>.stats</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>header</code> should have a <code>display</code> property set to flex.
    testString: assert($('header').css('display') == 'flex');
  - text: Your <code>footer</code> should have a <code>display</code> property set to flex.
    testString: assert($('footer').css('display') == 'flex');
  - text: Your <code>h3</code> should have a <code>display</code> property set to flex.
    testString: assert($('h3').css('display') == 'flex');
  - text: Your <code>h4</code> should have a <code>display</code> property set to flex.
    testString: assert($('h4').css('display') == 'flex');
  - text: Your <code>.profile-name</code> should have a <code>display</code> property set to flex.
    testString: assert($('.profile-name').css('display') == 'flex');
  - text: Your <code>.follow-btn</code> should have a <code>display</code> property set to flex.
    testString: assert($('.follow-btn').css('display') == 'flex');
  - text: Your <code>.stats</code> should have a <code>display</code> property set to flex.
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

</section>
