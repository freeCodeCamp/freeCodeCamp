---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
forumTopicId: 301558
localeTitle: Внедрение социальной аутентификации III
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . Конечной частью стратегии является обработка профиля, возвращенного из GitHub. Нам нужно загрузить объект базы данных пользователей, если он существует, или создать его, если это не так, и заполнить поля из профиля, а затем вернуть объект пользователя. GitHub предоставляет нам уникальный <em>идентификатор</em> в каждом профиле, который мы можем использовать для поиска, чтобы сериализовать пользователя (уже реализовано). Ниже приведен пример реализации, которую вы можете использовать в своем проекте: она входит в функцию, которая является вторым аргументом для новой стратегии, прямо под <code>console.log(profile);</code> в настоящее время: <pre> db.collection ( &#39;socialusers&#39;). findAndModify (
    {id: profile.id},
    {},
    {$ SetOnInsert: {
        id: profile.id,
        name: profile.displayName || &#39;Джон Доу&#39;,
        фото: profile.photos [0] .value || »,
        email: profile.emails [0] .value || «Нет общедоступной электронной почты»,
        created_on: новая дата (),
        провайдер: profile.provider || &quot;
    } $ Установить: {
        last_login: новая дата ()
    }, $ Вкл: {
        login_count: 1
    }},
    {upsert: true, new: true},
    (err, doc) =&gt; {
        return cb (null, doc.value);
    }
); </pre> С помощью findAndModify он позволяет вам искать объект и обновлять его, а также обновлять объект, если он не существует, и каждый раз получать новый объект обратно в нашей функции обратного вызова. В этом примере мы всегда устанавливаем last_login так же, как и сейчас, мы всегда увеличиваем значение login_count на 1, и только когда мы вставляем новый объект (новый пользователь), мы заполняем большинство полей. Также следует отметить использование значений по умолчанию. Иногда возвращаемый профиль не будет заполнен всей информацией или он будет выбран пользователем, чтобы оставаться закрытым; поэтому в этом случае мы должны обработать его, чтобы предотвратить ошибку. Теперь вы сможете войти в свое приложение - попробуйте! Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить пример готового кода этого мини-проекта <a href="https://glitch.com/#!/project/guttural-birch">здесь</a> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: GitHub strategy setup complete
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /GitHubStrategy[^]*db.collection/gi, 'Strategy should use now use the database to search for the user'); assert.match(data, /GitHubStrategy[^]*socialusers/gi, 'Strategy should use "socialusers" as db collection'); assert.match(data, /GitHubStrategy[^]*return cb/gi, 'Strategy should return the callback function "cb"'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
