---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
forumTopicId: 301579
localeTitle: Синхронизировать и синхронизировать пароли
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Хеширование синхронно так же легко сделать, но может вызвать отставание, если использовать его на стороне сервера с высокой стоимостью или с хешированием, сделанным очень часто. Хеширование с помощью этого метода так же просто, как вызов <code>var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);</code> <hr> Добавьте этот метод хэширования к вашему коду, а затем запишите результат на консоль. Опять же, используемые переменные уже определены на сервере, поэтому вам не нужно их корректировать. Вы можете заметить, что даже если вы используете тот же пароль, что и в асинхронной функции, результат в консоли отличается - это связано с тем, что соль произвольно генерируется каждый раз, как видно из первых 22 символов в третьей строке хэша , Теперь, чтобы сравнить ввод пароля с новым хэшем синхронизации, вы должны использовать метод compareSync: <code>var result = bcrypt.compareSync(myPlaintextPassword, hash);</code> с результатом будет логическое значение true или false. Добавьте эту функцию и войдите в консоль в результате, чтобы увидеть ее работу. Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы столкнулись с ошибками во время этих проблем , вы посмотрите на пример завершенного код можно <a href="https://gist.github.com/JosephLivengood/9a2698fb63e42d9d8b4b84235c08b4c4">здесь</a> .
</section>

## Instructions
<section id='instructions'>
Add the function in and log the result to the console to see it working.
Submit your page when you think you've got it right.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sync hash generated and correctly compared
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, 'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'); assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, 'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
