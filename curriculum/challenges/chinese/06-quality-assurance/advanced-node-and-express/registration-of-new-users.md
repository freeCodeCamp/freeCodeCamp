---
id: 58966a17f9fc0f352b528e6d
challengeType: 2
forumTopicId: 301561
title: 注册新用户
---

## Description
<section id='description'>

现在我们需要为新用户添加注册帐号的功能，首先我们需要在主页的 res.render 接收的变量对象中添加 <code>showRegistration: true</code>。此时刷新页面，你会看到页面上已经显示了我们在 index.pug 文件中定义的注册表单。这个表单设置了请求路径 <em>/register</em>，并将请求方法设置成 <b>POST</b>，所以我们需要在服务器接受 <b>POST</b> 请求，且在数据库中创建用户对象。

用户注册的逻辑如下：注册新用户 > 认证新用户 > 重定向到 /profile。

对于步骤一的注册新用户，详细逻辑如下：用 findOne 命令查询数据库 > 如果返回了用户对象，则表示用户存在，然后返回主页；如果用户未定义且没有报错，则会将包含用户名和密码的用户对象通过 <code>insertOne</code> 添加到数据库，只要没有报错则会继续下一步：认证新用户——我们已经在 /login 路由的 POST 请求中写好了这部分逻辑。

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              // The inserted document is held within
              // the ops property of the doc
              next(null, doc.ops[0]);
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

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e' target='_blank'>这里</a> 的答案。

**注意：**接下来的挑战可能会在运行 _picture-in-picture_（画中画）模式的浏览器中出现问题。如果你使用的线上 IDE 提供在 IDE 内预览 app 的功能，请考虑打开新的标签页预览。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 注册路由和显示主页。
    testString: "getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /showRegistration:( |)true/gi, 'You should be passing the variable showRegistration as true to your render function for the homepage'); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, 'You should have a route accepted a post request on register that querys the db with findone and the query being username: req.body.username'); }, xhr => { throw new Error(xhr.statusText); })"
  - text: 注册功能应可以正常运行。
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const user = `freeCodeCampTester${Date.now()}`;
      const xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          test(this);
        } else {
          throw new Error(`${this.status} ${this.statusText}`);
        }
      };
      xhttp.open('POST', url+'/register', true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(`username=${user}&password=${user}`);  

      function test(xhttpRes) {
        const data = xhttpRes.responseText;
        assert.match(data, /Profile/gi, 'Register should work, and redirect successfully to the profile.');
      }
    }
    "
  - text: 登录功能应可以正常运行。
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const user = `freeCodeCampTester${Date.now()}`;
      const xhttpReg = new XMLHttpRequest();
      xhttpReg.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          login();
        } else {
          throw new Error(`${this.status} ${this.statusText}`);
        }
      };
      xhttpReg.open('POST', url+'/register', true);
      xhttpReg.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttpReg.send(`username=${user}&password=${user}`);

      function login() {
        const xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            test(this);
          } else {
            throw new Error(`${this.status} ${this.statusText}`);
          }
        };
        xhttp.open('POST', url+'/login', true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`username=${user}&password=${user}`);  
      }
      function test(xhttpRes) {
        const data = xhttpRes.responseText;
        assert.match(data, /Profile/gi, 'Login should work if previous test was done successfully and redirect successfully to the profile.');
        assert.match(data, new RegExp(user, 'g'), 'The profile should properly display the welcome to the user logged in');
      }
    }
    "
  - text: 退出登录功能应可以正常运行。
    testString: "getUserInput => $.ajax({url: getUserInput('url')+ '/logout', type: 'GET', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, 'Logout should redirect to home'); }, xhr => { throw new Error(xhr.statusText); })"
  - text: 退出登录后，profile 页面应无法访问。
    testString: "getUserInput => $.ajax({url: getUserInput('url')+ '/profile', type: 'GET', crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, 'Profile should redirect to home when we are logged out now again'); }, xhr => { throw new Error(xhr.statusText); })"

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
