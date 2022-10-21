---
id: 58966a17f9fc0f352b528e6d
title: 註冊新用戶
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

現在我們需要爲新用戶添加註冊帳號的功能。 首先我們需要在主頁的 `res.render` 接收的變量對象中添加 `showRegistration: true`。 此時刷新頁面，你會看到頁面上已經顯示了我們在 `index.pug` 文件中定義的註冊表單。 這個表單設置了請求路徑 `/register`，並將請求方法設置成 **POST**，所以我們需要在服務器接受 **POST** 請求，且在數據庫中創建用戶對象。

用戶註冊的邏輯：註冊新用戶 > 認證新用戶 > 重定向到 /profile。

對於步驟一的註冊新用戶，詳細邏輯是這樣的：用 findOne 命令查詢數據庫 > 如果返回了用戶對象，則表示用戶存在，然後返回主頁；*或者*如果用戶未定義且沒有報錯，則會將包含用戶名和密碼的用戶對象通過 “insertOne” 添加到數據庫，只要沒有報錯則會繼續*下一步*：認證新用戶——我們已經在 */login* 路由的 POST 請求中寫好了這部分邏輯。

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

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

**注意：**接下來的挑戰可能會在運行 *picture-in-picture*（畫中畫）模式的瀏覽器中出現問題。 如果你使用的線上 IDE 提供在 IDE 內預覽 app 的功能，請考慮打開新的標籤頁預覽。

# --hints--

註冊路由和顯示主頁。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showRegistration:( |)true/gi,
        'You should be passing the variable showRegistration as true to your render function for the homepage'
      );
      assert.match(
        data,
        /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi,
        'You should have a route accepted a post request on register that querys the db with findone and the query being username: req.body.username'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

註冊功能應可以正常運行。

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      test(this);
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttp.open('POST', url + '/register', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`username=${user}&password=${user}`);
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Register should work, and redirect successfully to the profile.'
    );
  }
};
```

登錄功能應可以正常運行。

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttpReg = new XMLHttpRequest();
  xhttpReg.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      login();
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttpReg.open('POST', url + '/register', true);
  xhttpReg.setRequestHeader(
    'Content-type',
    'application/x-www-form-urlencoded'
  );
  xhttpReg.send(`username=${user}&password=${user}`);
  function login() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        test(this);
      } else {
        throw new Error(`${this.status} ${this.statusText}`);
      }
    };
    xhttp.open('POST', url + '/login', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`username=${user}&password=${user}`);
  }
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Login should work if previous test was done successfully and redirect successfully to the profile.'
    );
    assert.match(
      data,
      new RegExp(user, 'g'),
      'The profile should properly display the welcome to the user logged in'
    );
  }
};
```

退出登錄功能應可以正常運行。

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/logout',
    type: 'GET',
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(data, /Home/gi, 'Logout should redirect to home');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

退出登錄後，profile 頁面應無法訪問。

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/profile',
    type: 'GET',
    crossDomain: true,
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(
        data,
        /Home/gi,
        'Profile should redirect to home when we are logged out now again'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
