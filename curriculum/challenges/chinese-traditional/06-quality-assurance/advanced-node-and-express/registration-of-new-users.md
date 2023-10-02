---
id: 58966a17f9fc0f352b528e6d
title: 註冊新用戶
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

現在你需要允許你網站上的新用戶註冊一個賬戶。 在主頁的 `res.render` 中，給傳遞的對象添加一個新的變量——`showRegistration: true`。 當你刷新頁面時，你應該看到已經在 `index.pug` 文件中創建的註冊表格。 這個表單被設置爲在 `/register` 上使用 **POST** 方法，因此根據下面的邏輯創建路由並將用戶對象添加到數據庫中。

註冊路由的邏輯應如下：

1. 註冊新用戶
2. 驗證新用戶
3. 重定向到 `/profile`

第 1 步的邏輯應如下：

1. 使用 `findOne` 查詢數據庫
2. 如果出現錯誤，調用 `next` 並傳入錯誤對象。
3. 如果用戶結果返回，則重定向至主頁
4. 如果找不到用戶並且沒有發生錯誤，那麼使用 `insertOne` 在數據庫中插入用戶名和密碼。 只要沒有發生錯誤，就調用 `next` 進行第 2 步，認證新用戶，即你已經在 `POST /login` 路由中編寫的邏輯。

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, (err, user) => {
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

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#registration-of-new-users-11" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

**注意：**接下來的挑戰可能會在運行 *picture-in-picture*（畫中畫）模式的瀏覽器中出現問題。 如果你使用的線上 IDE 提供在 IDE 內預覽 app 的功能，請考慮打開新的標籤頁預覽。

# --hints--

你應該有 `/register` 路由並在主頁上顯示註冊表單。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showRegistration:( |)true/gi,
    'You should be passing the variable showRegistration as true to your render function for the homepage'
  );
  assert.match(
    data,
    /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi,
    'You should have a route that accepts a POST request on /register that queries the db with findOne and the query being username: req.body.username'
  );
}
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
