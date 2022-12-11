---
id: 587d8247367417b2b2512c39
title: >-
  使用 helmet.xssFilter() 降低跨站點腳本（XSS）攻擊的風險
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

跨站腳本（XSS）是一種常見的攻擊類型，惡意腳本被注入到易受攻擊的頁面，目的是竊取敏感數據，如會話 cookies 或密碼。

降低 XSS 攻擊風險的基本規則很簡單："永遠不要相信用戶的輸入"。 作爲一個開發者，你應該始終對所有來自外部的輸入進行消毒。 這包括來自表單、GET 查詢URL，甚至來自 POST 請求體的數據。 淨化意味着你應該找到並編碼可能有危險的字符，例如 &lt;, >。

現代瀏覽器通過採用更好的軟件策略來幫助降低風險。 通常情況下，這些都是可以通過 http 頭文件來配置的。

X-XSS-Protection HTTP 消息頭是一種基本的保護。 瀏覽器使用啓發式過濾器檢測潛在的注入腳本。 如果請求頭被啓用，瀏覽器會改變腳本代碼，使其失效。 它得到的支持仍然有限。

# --instructions--

使用 `helmet.xssFilter()` 來淨化發送到服務器的輸入。

# --hints--

helmet.xssFilter() 中間件應正確安裝。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
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
