---
id: 5e601c775ac9d0ecd8b94aff
title: 安全的實時多人遊戲
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

使用 HTML Canvas API 和 Socket.io 開發一個功能上類似於 <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a> 的 2D 實時多人遊戲。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目
-   使用您選擇的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

# --instructions--

創建一個安全的多人遊戲，每名玩家可以移動他們的角色，並且這個遊戲至少提供了一個可收集的道具，玩家的排名是根據他們的分數計算的。

有關詳細信息，請參考下面的測試。

請確保你的遊戲是安全的！ 包含以下安全措施：

- 客戶端不能猜測/嗅探 MIME 類型
- 防止 XSS 攻擊
- 不要在客戶端中緩存網站的任何信息
- 在請求頭中聲明網站是由 `PHP 7.4.3` 提供技術支持

**注意：** `helmet@^3.21.3` 是需求中所要求的。 這意味着你將需要使用之前版本的 Helmet 文檔，來了解如何實現需求。

# --hints--

你可以提交你自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

多名玩家可以連接到同一臺服務器玩這個遊戲。

```js

```

每名玩家都有一個角色。

```js

```

每名玩家都由 `Player.mjs` 中的 `Player` 類創建的對象表示

```js

```

至少，每個玩家對象都應該包含一個唯一的 `id`、一個`score`，以及代表玩家當前位置的 `x` 和 `y` 座標。

```js

```

遊戲中至少有一種可收集道具。 在 `Collectible.mjs` 中完成 `Collectible` 類來實現這一點。

```js

```

至少，由 `Collectible` 類創建的每個可收集物品對象應該包含一個唯一的 `id`、一個 `value` 和代表物品的當前位置 `x` 和 `y` 座標。

```js

```

玩家可以使用 WASD 和/或箭頭鍵移動他們的角色。 完成 `Player.mjs` 中的 `movePlayer` 方法來實現這一功能。

```js

```

`movePlayer` 方法應該接受兩個參數：一個由 “up”、“down”、“left” 或 “right” 組成的字符串，以及一個表示玩家位置應該改變的像素數量的數字。 `movePlayer` 應該調整被調用的玩家對象的 `x` 和 `y` 座標。

```js

```

玩家的分數應該用來計算他們與其他玩家相比的排名。 完成 `Player` 類中的 `calculateRank` 方法來實現這個功能。

```js

```

`calculateRank` 方法應該接受一個代表所有連接的玩家的對象數組，並返回字符串 `Rank: currentRanking/totalPlayers`（排名：當前排名/總玩家數）。 舉個例子，在一個兩人遊戲中，如果玩家 A 有 3 分，玩家 B 有 5 分，那麼玩家 A 的 `calculateRank` 應該返回 `Rank: 2/2`。

```js

```

玩家可以與收集道具發生碰撞。 完成 `Player.mjs` 中的 `collision` 方法實現這一功能。

```js

```

`collision` 方法應該接受可收集物品的對象作爲參數。 如果玩家的角色與道具重合，`collision` 方法應該返回 `true`。

```js

```

所有玩家保持同步。

```js

```

玩家可以在任何時候退出遊戲。

```js

```

防止客戶端嘗試猜測/嗅探 MIME 類型。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

防止跨站腳本（XSS）攻擊。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

網站上的任何東西都不會被緩存到客戶端中。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

在請求頭中聲明該網站由 “PHP 7.4.3” 提供技術支持，儘管它並非如此（作爲一種安全措施）。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
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
