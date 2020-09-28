---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2
forumTopicId: 301578
localeTitle: Хэш и сравнение паролей асинхронно
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Поскольку хэширование рассчитано на интенсивность вычислений, рекомендуется делать это асинхронно на вашем сервере, чтобы избежать блокировки входящих соединений, пока вы hash. Все, что вам нужно сделать для хэша, асинхронный пароль - это вызов <code>bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) =&gt; { /*Store hash in your db*/ });</code> <hr> Добавьте эту хэширующую функцию на свой сервер (мы уже определили переменные, используемые в этой функции для вас) и запишите ее на консоль, чтобы вы ее увидели! На этом этапе вы обычно сохраняете хэш в своей базе данных. Теперь, когда вам нужно выяснить, являются ли новые данные теми же данными, что и хэш, вы просто используете функцию сравнения <code>bcrypt.compare(myPlaintextPassword, hash, (err, res) =&gt; { /*res == true or false*/ });</code> , Добавьте это в свою существующую хэш-функцию (поскольку вам нужно дождаться завершения хэша до вызова функции сравнения) после того, как вы зарегистрируете завершенный хэш и запишите «res» на консоль в сравнении. Вы должны увидеть в консоли хэш, тогда напечатано «true»! Если вы измените «myPlaintextPassword» в функции сравнения на «someOtherPlaintextPassword», тогда он должен сказать false. <pre> bcrypt.hash(&#39;passw0rd!&#39;, 13, (err, hash) =&gt; {
  console.log(hash); //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare(&#39;passw0rd!&#39;, hash, (err, res) =&gt; {
      console.log(RES); // true
  });
}); </pre> Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>
Add this hashing function to your server(we've already defined the variables used in the function for you to use) and log it to the console for you to see! At this point you would normally save the hash to your database.
Now when you need to figure out if a new input is the same data as the hash you would just use the compare function. 

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

Add this into your existing hash function(since you need to wait for the hash to complete before calling the compare function) after you log the completed hash and log 'res' to the console within the compare. You should see in the console a hash then 'true' is printed! If you change 'myPlaintextPassword' in the compare function to 'someOtherPlaintextPassword' then it should say false.

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});
```

Submit your page when you think you've got it right.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Async hash generated and correctly compared
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, 'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, 'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
