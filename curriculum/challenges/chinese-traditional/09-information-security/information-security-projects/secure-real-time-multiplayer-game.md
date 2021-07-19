---
id: 5e601c775ac9d0ecd8b94aff
title: 安全的實時多人遊戲
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

使用 HTML Canvas API 和 [Socket.io](https://socket.io/) 開發一個 2D 實時多人遊戲，其功能與此類似：<https://secure-real-time-multiplayer-game.freecodecamp.rocks/>。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆[這個 GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/)，並在本地完成你的項目。
-   使用[我們的 Replit 初始項目](https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game)來完成你的項目。
-   使用您選擇的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後在 `Solution Link` 框中提交你的項目 URL。 此外，還可以將項目的源碼提交到 `GitHub Link` 中。

# --instructions--

**注意** ：`helmet@^3.21.3` 是用戶故事所必需的。 這意味着你需要使用以前版本的 Helmet 的文檔，瞭解如何實現用戶故事的信息。

# --hints--

提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

多個玩家可以連接到一臺服務器遊玩。

```js

```

每個玩家都有頭像。

```js

```

每個玩家都由在 `Player.mjs` 中創建的 `Player` 類對象來代表。

```js

```

至少，每個玩家對象應該包含一個唯一的 `id`、一個 `score`，以及代表玩家當前位置的 `x` 和 `y` 座標。

```js

```

遊戲至少有一種類型的可收藏物品。 在 `Collectible.mjs` 中完成 `Collectible` 類來實現這一點。

```js

```

至少，每個由 `Collectible` 類創建的可收集物品對象應該包含一個唯一的 `id`、一個 `value`，以及代表該物品當前位置的 `x` 和 `y` 座標。

```js

```

玩家可以使用 WASD 或方向鍵移動頭像。 完成 `Player.mjs` 中的 `movePlayer` 方法來實現這一功能。

```js

```

`movePlayer` 方法應該接受兩個參數：一個是 “up”、“down”、“left” 或 “right” 的字符串，另一個是玩家角色位置應該改變的像素數量。 `movePlayer` 應該調整它所調用的玩家對象的 `x` 和 `y` 座標。

```js

```

用玩家的分數來計算他們相對其他玩家的名次。 在 `Player` 類中完成 `calculateRank` 方法來實現這個。

```js

```

`calculateRank` 方法應該接受一個代表所有在線玩家的對象數組，並返回字符串 `Rank: currentRanking/totalPlayers`。 例如，在一局有兩個玩家的遊戲中，如果玩家 A 的分數是 3，玩家 B 的分數是 5，那麼玩家 A 的 `calculateRank` 應該返回 `Rank: 2/2`。

```js

```

玩家可以與可收集物品發生碰撞。 完成 `Player.mjs` 中的 `collision` 方法來實現這一點。

```js

```

`collision` 方法應該接受一個可收集物品的對象作爲參數。 如果玩家的頭像與物品相交，`collision` 方法應該返回 `true`。

```js

```

所有玩家都保持遊戲狀態同步。

```js

```

玩家可以隨時斷開與遊戲的連接。

```js

```

阻止客戶端試圖猜測/嗅探 MIME 類型。

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

客戶端沒有緩存任何網站內容。

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

請求頭顯示該網站是由 “PHP 7.4.3” 驅動的，儘管實際並非如此（作爲一種安全防禦措施）。

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
