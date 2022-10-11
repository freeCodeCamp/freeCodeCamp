---
id: 5e601c775ac9d0ecd8b94aff
title: 安全的实时多人游戏
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

使用 HTML Canvas API 和 [Socket.io](https://socket.io/) 开发一个 2D 实时多人游戏，其功能与此类似：<https://secure-real-time-multiplayer-game.freecodecamp.rocks/>。 在这个项目中，你将使用以下方法之一编写你的代码：

-   克隆[这个 GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/)，并在本地完成你的项目。
-   使用[我们的 Replit 初始项目](https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game)来完成你的项目。
-   使用您选择的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

完成本项目后，请将一个正常运行的 demo（项目演示）托管在可以公开访问的平台。 然后在 `Solution Link` 框中提交你的项目 URL。 此外，还可以将项目的源码提交到 `GitHub Link` 中。

# --instructions--

**注意** ：`helmet@^3.21.3` 是用户故事所必需的。 这意味着你需要使用以前版本的 Helmet 的文档，了解如何实现用户故事的信息。

# --hints--

提交自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

多个玩家可以连接到一台服务器游玩。

```js

```

每个玩家都有头像。

```js

```

每个玩家都由在 `Player.mjs` 中创建的 `Player` 类对象来代表。

```js

```

至少，每个玩家对象应该包含一个唯一的 `id`、一个 `score`，以及代表玩家当前位置的 `x` 和 `y` 坐标。

```js

```

游戏至少有一种类型的可收藏物品。 在 `Collectible.mjs` 中完成 `Collectible` 类来实现这一点。

```js

```

至少，每个由 `Collectible` 类创建的可收集物品对象应该包含一个唯一的 `id`、一个 `value`，以及代表该物品当前位置的 `x` 和 `y` 坐标。

```js

```

玩家可以使用 WASD 或方向键移动头像。 完成 `Player.mjs` 中的 `movePlayer` 方法来实现这一功能。

```js

```

`movePlayer` 方法应该接受两个参数：一个是 “up”、“down”、“left” 或 “right” 的字符串，另一个是玩家角色位置应该改变的像素数量。 `movePlayer` 应该调整它所调用的玩家对象的 `x` 和 `y` 坐标。

```js

```

用玩家的分数来计算他们相对其他玩家的名次。 在 `Player` 类中完成 `calculateRank` 方法来实现这个。

```js

```

`calculateRank` 方法应该接受一个代表所有在线玩家的对象数组，并返回字符串 `Rank: currentRanking/totalPlayers`。 例如，在一局有两个玩家的游戏中，如果玩家 A 的分数是 3，玩家 B 的分数是 5，那么玩家 A 的 `calculateRank` 应该返回 `Rank: 2/2`。

```js

```

玩家可以与可收集物品发生碰撞。 完成 `Player.mjs` 中的 `collision` 方法来实现这一点。

```js

```

`collision` 方法应该接受一个可收集物品的对象作为参数。 如果玩家的头像与物品相交，`collision` 方法应该返回 `true`。

```js

```

所有玩家都保持游戏状态同步。

```js

```

玩家可以随时断开与游戏的连接。

```js

```

阻止客户端试图猜测/嗅探 MIME 类型。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

防止跨站脚本（XSS）攻击。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

客户端没有缓存任何网站内容。

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

请求头显示该网站是由 “PHP 7.4.3” 驱动的，尽管实际并非如此（作为一种安全防御措施）。

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
