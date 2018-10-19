---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: Добавьте суперсилы Flex во вставку твита
---

## Description
<section id="description"> Справа находится вставка твита, которая будет использоваться в качестве практического примера. Некоторые элементы могли бы выглядеть лучше при другом расположении. Последняя задача продемонстрировала <code>display: flex</code> . Здесь вы добавите его к нескольким компонентам в tweet embed, чтобы начать настройку их позиционирования. </section>

## Instructions
<section id="instructions"> Добавьте свойство CSS <code>display: flex</code> для всех следующих элементов - обратите внимание, что селекторы уже настроены в CSS: <code>header</code>,<code>.profile-name</code> для header,<code>.follow-btn</code> для header, заголовки <code>h3</code> и <code>h4</code>, <code>footer</code> , и <code>.stats</code> для footer. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш <code>header</code> должен иметь свойство <code>display</code> установленное в flex.
    testString: 'assert($("header").css("display") == "flex", "Your <code>header</code> should have a <code>display</code> property set to flex.");'
  - text: Ваш <code>footer</code> должен иметь свойство <code>display</code> установленное в flex.
    testString: 'assert($("footer").css("display") == "flex", "Your <code>footer</code> should have a <code>display</code> property set to flex.");'
  - text: Ваш <code>h3</code> должен иметь свойство <code>display</code> установленное в flex.
    testString: 'assert($("h3").css("display") == "flex", "Your <code>h3</code> should have a <code>display</code> property set to flex.");'
  - text: Ваш <code>h4</code> должен иметь свойство <code>display</code> установленное в flex.
    testString: 'assert($("h4").css("display") == "flex", "Your <code>h4</code> should have a <code>display</code> property set to flex.");'
  - text: Ваше <code>.profile-name</code> должно иметь свойство <code>display</code> установленное в flex.
    testString: 'assert($(".profile-name").css("display") == "flex", "Your <code>.profile-name</code> should have a <code>display</code> property set to flex.");'
  - text: Ваш <code>.follow-btn</code> должен иметь свойство <code>display</code> <code>.follow-btn</code> установленное в flex.
    testString: 'assert($(".follow-btn").css("display") == "flex", "Your <code>.follow-btn</code> should have a <code>display</code> property set to flex.");'
  - text: У вашего <code>.stats</code> должно быть свойство <code>display</code> установленное в flex.
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
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
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
