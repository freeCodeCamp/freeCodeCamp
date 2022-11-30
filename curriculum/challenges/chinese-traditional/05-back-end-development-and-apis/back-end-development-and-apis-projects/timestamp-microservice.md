---
id: bd7158d8c443edefaeb5bdef
title: 時間戳微服務
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

構建一個功能類似於此的全棧 JavaScript 應用程序：<a href="https://timestamp-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://timestamp-microservice.freecodecamp.rocks</a>。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp"  target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.

**Note:** Time zones conversion is not a purpose of this project, so assume all sent valid dates will be parsed with `new Date()` as GMT dates.

# --hints--

You should provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

A request to `/api/:date?` with a valid date should return a JSON object with a `unix` key that is a Unix timestamp of the input date in milliseconds (as type Number)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/:date?` with a valid date should return a JSON object with a `utc` key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Your project can handle dates that can be successfully parsed by `new Date(date_string)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011, GMT').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

If the input date string is invalid, the api returns an object having the structure `{ error : "Invalid Date" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

An empty date parameter should return the current time in a JSON object with a `unix` key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

An empty date parameter should return the current time in a JSON object with a `utc` key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
