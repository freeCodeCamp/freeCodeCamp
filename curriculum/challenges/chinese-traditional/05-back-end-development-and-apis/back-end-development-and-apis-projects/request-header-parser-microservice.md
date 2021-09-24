---
id: bd7158d8c443edefaeb5bdff
title: 請求頭解析器微服務
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

構建一個 JavaScript 的全棧應用，在功能上與這個應用相似：<https://request-header-parser-microservice.freecodecamp.rocks/>。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆 [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-headerparser/) 並在本地完成項目。
-   使用[我們的 Replit 初始化項目](https://replit.com/github/freeCodeCamp/boilerplate-project-headerparser)來完成你的項目。
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後在 `Solution Link` 字段中提交它的 URL。 此外，還可以將項目的源碼提交到 `GitHub Link` 中。

# --hints--

提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

向 `/api/whoami` 發送請求，返回一個 JSON 對象，這個JSON 對象應該含有存放 IP 地址的 `ipaddress` 鍵中。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

向 `/api/whoami` 發送請求，返回一個 JSON 對象，這個 JSON 對象應該含有存放語言首選項的 `language` 鍵。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

向 `/api/whoami` 發送請求，返回一個 JSON 對象，這個 JSON 對象應該含有存放（發送請求的）軟件的 `software` 鍵。

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
