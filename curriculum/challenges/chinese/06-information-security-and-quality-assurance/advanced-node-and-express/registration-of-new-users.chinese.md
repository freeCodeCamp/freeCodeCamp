---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
isHidden: false
forumTopicId: 301561
localeTitle: 注册新用户
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。
现在我们需要为新用户添加注册帐号的功能，首先我们需要在主页的 res.render 接收的变量对象中添加<code>showRegistration: true</code>。此时刷新页面，你会看到页面上已经显示了我们在 index.pug 文件中定义的注册表单。这个表单设置了请求路径 <em>/register</em>，并将请求方法设置成 <b>POST</b>，所以我们需要在服务器接受 <b>POST</b> 请求，且在数据库中创建用户对象。
用户注册的逻辑如下：注册新用户 > 认证新用户 > 重定向到 /profile。
对于步骤一的注册新用户，详细逻辑如下：用 findOne 命令查询数据库 > 如果返回了用户对象，则表示用户存在，然后返回主页；如果用户未定义且没有报错，则会将包含用户名和密码的用户对象通过<code>insertOne</code>添加到数据库，只要没有报错则会继续下一步：认证新用户——我们已经在 /login 路由的 POST 请求中写好了这部分逻辑。

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

完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在<a href='https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed'>这里</a>检查你的项目完成情况。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 注册路由和显示主页。
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/_api/server.js'') .then(data => { assert.match(data, /showRegistration:( |)true/gi, ''You should be passing the variable "showRegistration" as true to your render function for the homepage''); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, ''You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username"''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 注册功能应可以正常运行。
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/register'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''},crossDomain: true, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 登录功能应可以正常运行。
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/login'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''}, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB''); assert.match(data, /freeCodeCampTester/gi, ''The profile should properly display the welcome to the user logged in''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 退出登录功能应可以正常运行。
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/logout'', type: ''GET'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Logout should redirect to home''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 退出登录后，profile 页面应无法访问。
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/profile'', type: ''GET'', crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Profile should redirect to home when we are logged out now again''); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
