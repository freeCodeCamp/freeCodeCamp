---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
forumTopicId: 301561
localeTitle: Регистрация новых пользователей
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте на <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>Glitch</a>, или клонированном из <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
Теперь нам нужно разрешить новому пользователю на нашем сайте зарегистрировать учетную запись. На res.render для домашней страницы добавьте новую переменную к переданному объекту- <code>showRegistration: true</code>. При обновлении страницы вы должны увидеть регистрационную форму, которая уже была создана в файле index.pug ! Эта форма настроена на <b>POST</b> на <em>/register</em> поэтому здесь мы должны настроить прием POST и создать объект пользователя в базе данных.
Логика регистрационного маршрута должна выглядеть следующим образом: Регистрация нового пользователя > аутентификация нового пользователя > перенаправление в /profile
Логика шага 1, регистрация нового пользователя, должна быть следующей: Запрос базы данных с помощью команды findOne > если пользователь возвращается, то он существует и перенаправляется обратно на home <em>или</em> если пользователь не определен и не возникает ошибок, то 'insertOne' в базу данных с именем пользователя и паролем и до тех пор, пока не возникнет ошибок, затем вызовите  <em>next</em>  чтобы перейти к Шагу 2, аутентифицируя нового пользователя, для которого мы уже написали логику в нашем POST /login маршруте.

```js
app.route('/register')
  .post((req, res, next) => {
    db.collection('users').findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        db.collection('users').insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              next(null, user);
            }
          }
        )
      }
    })
  },
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      res.redirect('/profile');
    }
  );
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Register route and display on home
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/_api/server.js'') .then(data => { assert.match(data, /showRegistration:( |)true/gi, ''You should be passing the variable "showRegistration" as true to your render function for the homepage''); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, ''You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username"''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Registering should work
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/register'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''},crossDomain: true, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Login should work
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/login'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''}, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB''); assert.match(data, /freeCodeCampTester/gi, ''The profile should properly display the welcome to the user logged in''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Logout should work
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/logout'', type: ''GET'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Logout should redirect to home''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Profile should no longer work after logout
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/profile'', type: ''GET'', crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Profile should redirect to home when we are logged out now again''); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>
