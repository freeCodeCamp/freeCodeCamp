---
id: 587d8249367417b2b2512c3f
title: 使用 helment.contentSecurityPolicy() 設置內容安全策略
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

在這個挑戰中，我們要重點討論現代瀏覽器中一種能有效減輕安全風險和防禦很多種類型常見攻擊的安全防護。 通過設置和配置內容安全策略，你可以防止在頁面中無意中注入任何內容。 這會讓你的應用遠離 XSS 漏洞、惡意追蹤、惡意 frames 和很多其他攻擊。 CSP 通過配置資源白名單來避免這些問題。 你可以給任何一種類型的頁面資源（腳本、樣式文件、字體、frames、媒體文件等）做這個配置。 它支持很多指令，所以網站管理員可以做細緻的控制。 更多詳情請參考 HTML 5 Rocks 和 KeyCDN。 不幸的是，一些舊的瀏覽器不支持 CSP。

默認的指令很容易受到攻擊, 所以設置 defaultSrc 指令作爲降級方案很重要。 Helmet 同時支持 defaultSrc 和 default-src 命名規範。 降級方案可以應用在大部分指令上。

# --instructions--

在這個練習中，使用 `helmet.contentSecurityPolicy()`。 通過添加一個 `directives` 對象來配置它。 在該對象中，將 `defaultSrc` 設置爲 `["'self'"]`（允許的來源列表必須是一個數組），以便默認只信任你的網站地址。 同時設置 `scriptSrc` 指令，以便你只允許從你的網站（`'self'`）和域名 `'trusted-cdn.com'` 下載腳本。

提示：在 `'self'` 關鍵詞中，單引號也是關鍵詞的一部分，所以你應該用雙引號來包起它才能正常工作。

# --hints--

應正確安裝 helmet.contentSecurityPolicy() 中間件。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

你的 csp 配置不正確。 defaultSrc 應爲 ["'self'"]，並且 scriptSrc 應爲 ["'self'", 'trusted-cdn.com']

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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
