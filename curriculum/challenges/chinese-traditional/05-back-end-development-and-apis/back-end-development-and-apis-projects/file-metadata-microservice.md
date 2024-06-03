---
id: bd7158d8c443edefaeb5bd0f
title: 文件元數據微服務
challengeType: 4
forumTopicId: 301506
dashedName: file-metadata-microservice
---

# --description--

構建一個功能類似於此的全棧 JavaScript 應用程序：<a href="https://file-metadata-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://file-metadata-microservice.freecodecamp.rocks</a>。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-filemetadata/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-filemetadata/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete your project.
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

# --instructions--

** 提示：**可以使用 `multer` npm 包來處理上傳文件。

# --hints--

你應該提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

你可以提交一個包含上傳文件的表單。

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[type="file"]'));
};
```

表單文件輸入字段的 `name` 屬性設置成 `upfile`。

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[name="upfile"]'));
};
```

當你提交一個文件時，在 JSON 響應中收到文件的 `name`、`type` 和 `size`，以 bytes（字節）爲單位。

```js
async (getUserInput) => {
  const formData = new FormData();
  const fileData = await fetch(
    'https://cdn.freecodecamp.org/weather-icons/01d.png'
  );
  const file = await fileData.blob();
  formData.append('upfile', file, 'icon');
  const data = await fetch(getUserInput('url') + '/api/fileanalyse', {
    method: 'POST',
    body: formData
  });
  const parsed = await data.json();
  assert.property(parsed, 'size');
  assert.equal(parsed.name, 'icon');
  assert.equal(parsed.type, 'image/png');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
