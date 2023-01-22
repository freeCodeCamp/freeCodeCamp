---
id: bd7158d8c443edefaeb5bd0e
title: URL 短縮マイクロサービス
challengeType: 4
forumTopicId: 301509
dashedName: url-shortener-microservice
---

# --description--

<a href="https://url-shortener-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://url-shortener-microservice.freecodecamp.rocks</a> と同じような機能を持つ、フルスタック JavaScript アプリを構築してください。 プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   <a href="https://github.com/freeCodeCamp/boilerplate-project-urlshortener/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
-   <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-urlshortener" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.

# --instructions--

**HINT:** Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function `dns.lookup(host, cb)` from the `dns` core module to verify a submitted URL.

# --hints--

You should provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

You can POST a URL to `/api/shorturl` and get a JSON response with `original_url` and `short_url` properties. Here's an example: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (res.ok) {
    const { short_url, original_url } = await res.json();
    assert.isNotNull(short_url);
    assert.strictEqual(original_url, `${url}/?v=${urlVariable}`);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

When you visit `/api/shorturl/<short_url>`, you will be redirected to the original URL.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  let shortenedUrlVariable;
  const postResponse = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (postResponse.ok) {
    const { short_url } = await postResponse.json();
    shortenedUrlVariable = short_url;
  } else {
    throw new Error(`${postResponse.status} ${postResponse.statusText}`);
  }
  const getResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable
  );
  if (getResponse) {
    const { redirected, url } = getResponse;
    assert.isTrue(redirected);
    assert.strictEqual(url,fullUrl);
  } else {
    throw new Error(`${getResponse.status} ${getResponse.statusText}`);
  }
};
```

If you pass an invalid URL that doesn't follow the valid `http://www.example.com` format, the JSON response will contain `{ error: 'invalid url' }`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=ftp:/john-doe.invalidTLD`
  });
  if (res.ok) {
    const { error } = await res.json();
    assert.isNotNull(error);
    assert.strictEqual(error.toLowerCase(), 'invalid url');
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
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
