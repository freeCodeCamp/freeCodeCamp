---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
videoUrl: ''
localeTitle: 新用户注册
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。现在我们需要允许我们网站上的新用户注册一个帐户。在主页的res.render上，向传递的对象添加一个新变量 - <code>showRegistration: true</code> 。刷新页面时，您应该会看到已在index.pug文件中创建的注册表单！此表单设置为<b>POST</b> on <em>/ register，</em>因此我们应该设置此接受POST并在数据库中创建用户对象。注册路由的逻辑应如下所示：注册新用户&gt;验证新用户&gt;重定向到/配置文件步骤1的逻辑，注册新用户，应如下所示：使用findOne命令查询数据库&gt;如果用户返回然后它存在并重定向回到主页<em>或者</em>如果用户未定义且没有发生错误，则使用用户名和密码将“insertOne”输入数据库，只要没有错误发生，然后调用<em>next</em>转到步骤2，验证新的user，我们已经在POST / login路由中编写了逻辑。 <pre> app.route（ &#39;/寄存器&#39;）
  .post（（req，res，next）=&gt; {
      db.collection（&#39;users&#39;）。findOne（{username：req.body.username}，function（err，user）{
          if（错误）{
              下一个（ERR）;
          } else if（user）{
              res.redirect（ &#39;/&#39;）;
          } else {
              db.collection（ &#39;用户&#39;）。insertOne（
                {username：req.body.username，
                 密码：req.body.password}，
                （错误，doc）=&gt; {
                    if（错误）{
                        res.redirect（ &#39;/&#39;）;
                    } else {
                        next（null，user）;
                    }
                }
              ）
          }
      }）}，
    passport.authenticate（&#39;local&#39;，{failureRedirect：&#39;/&#39;}），
    （req，res，next）=&gt; {
        res.redirect（ &#39;/简档&#39;）;
    }
）; </pre>当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed">在这里查看</a>到目前为止完成的项目。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 注册路线并在家中显示
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/_api/server.js'') .then(data => { assert.match(data, /showRegistration:( |)true/gi, ''You should be passing the variable "showRegistration" as true to your render function for the homepage''); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, ''You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username"''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 注册应该工作
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/register'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''},crossDomain: true, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 登录应该工作
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/login'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''}, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB''); assert.match(data, /freeCodeCampTester/gi, ''The profile should properly display the welcome to the user logged in''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 注销应该有效
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/logout'', type: ''GET'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Logout should redirect to home''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 注销后配置文件不再有效
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/profile'', type: ''GET'', crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Profile should redirect to home when we are logged out now again''); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
