---
id: bd7158d8c443edefaeb5bdff
title: 請求頭解析器微服務
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

構建一個 JavaScript 的全棧應用，在功能上與這個應用相似：<a href="https://request-header-parser-microservice.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://request-header-parser-microservice.freecodecamp.rocks/</a>。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-headerparser/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-headerparser" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.

# --hints--

You should provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

A request to `/api/whoami` should return a JSON object with your IP address in the `ipaddress` key.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/whoami` should return a JSON object with your preferred language in the `language` key.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/whoami` should return a JSON object with your software in the `software` key.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.software && data.software.length > 0),
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
