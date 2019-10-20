---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
forumTopicId: 301554
localeTitle: Как объединить профиль
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Теперь, когда мы можем гарантировать, что пользователь, получающий аутентификацию <em>/ profile</em> , может использовать информацию, содержащуюся в «req.user» на нашей странице! Идем дальше и передаем объект, содержащий переменное <em>имя пользователя,</em> равное &#39;req.user.username&#39;, в метод рендеринга вида профиля. Затем перейдите в свой <code>h2.center#welcome Welcome, #{username}!</code> profile.pug и добавьте строку <code>h2.center#welcome Welcome, #{username}!</code> создавая элемент h2 с классом «center» и id «welcome», содержащий текст «Добро пожаловать» и имя пользователя! Также в профиле добавьте ссылку на <em>/</em> выйти. В этом маршруте будет установлена ​​логика для неавторитизации пользователя. <code>a(href=&#39;/logout&#39;) Logout</code> Отправьте свою страницу, если вы считаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Correctly added a Pug render variable to /profile
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, 'You should be passing the variable username with req.user.username into the render function of the profile page'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
