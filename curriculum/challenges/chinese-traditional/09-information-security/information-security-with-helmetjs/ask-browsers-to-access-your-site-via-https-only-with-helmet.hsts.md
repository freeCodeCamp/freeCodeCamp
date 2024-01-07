---
id: 587d8248367417b2b2512c3c
title: 用 helmet.hsts() 使瀏覽器只能通過 HTTPS 訪問你的網站。
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

HTTP 嚴格傳輸安全（HSTS）是一種網絡安全策略，有助於保護網站免受協議降級攻擊和 cookie 劫持。 如果你的網站可以通過 HTTPS 訪問，你可以要求用戶的瀏覽器避免使用不安全的 HTTP。 通過設置標頭 Strict-Transport-Security，你告訴瀏覽器在指定時間內對未來的請求使用 HTTPS。 這將對初始請求之後的請求起作用。

# --instructions--

配置 `helmet.hsts()` 以在未來 90 天內使用 HTTPS。 傳遞配置對象 `{maxAge: timeInSeconds, force: true}`。 你可以創建一個變量 `ninetyDaysInSeconds = 90*24*60*60;` 來用於 `timeInSeconds`。 Replit 已經啓用了 hsts。 要覆蓋它的設置，你需要在配置對象中把 “force” 字段設置爲 true。 我們將攔截並在對其進行檢查測試後恢復 Replit 請求頭。

注意：在自定義網站上配置 HTTPS 需要獲得一個域名，以及一個 SSL/TLS 證書。

# --hints--

helmet.hsts() 中間件應該被正確安裝。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

maxAge 應該等於 7776000 秒（90 天）。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
      );
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
