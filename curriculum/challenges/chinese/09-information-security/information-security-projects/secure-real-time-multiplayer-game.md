---
id: 5e601c775ac9d0ecd8b94aff
title: 安全的实时多人游戏
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

使用 HTML Canvas API 和 Socket.io 开发一个功能上类似于 <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a> 的 2D 实时多人游戏。 在这个项目中，你将使用以下方法之一编写你的代码：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成你的项目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成你的项目
-   使用您选择的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。 也可以将项目的源码链接提交到 GitHub Link 字段中。

# --instructions--

创建一个安全的多人游戏，每名玩家可以移动他们的角色，并且这个游戏至少提供了一个可收集的道具，玩家的排名是根据他们的分数计算的。

有关详细信息，请参考下面的测试。

请确保你的游戏是安全的！ 包含以下安全措施：

- 客户端不能猜测/嗅探 MIME 类型
- 防止 XSS 攻击
- 不要在客户端中缓存网站的任何信息
- 在请求头中声明网站是由 `PHP 7.4.3` 提供技术支持

**注意：** `helmet@^3.21.3` 是需求中所要求的。 这意味着你将需要使用之前版本的 Helmet 文档，来了解如何实现需求。

# --hints--

你可以提交你自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

多名玩家可以连接到同一台服务器玩这个游戏。

```js

```

每名玩家都有一个角色。

```js

```

每名玩家都由 `Player.mjs` 中的 `Player` 类创建的对象表示

```js

```

至少，每个玩家对象都应该包含一个唯一的 `id`、一个`score`，以及代表玩家当前位置的 `x` 和 `y` 坐标。

```js

```

游戏中至少有一种可收集道具。 在 `Collectible.mjs` 中完成 `Collectible` 类来实现这一点。

```js

```

至少，由 `Collectible` 类创建的每个可收集物品对象应该包含一个唯一的 `id`、一个 `value` 和代表物品的当前位置 `x` 和 `y` 坐标。

```js

```

玩家可以使用 WASD 和/或箭头键移动他们的角色。 完成 `Player.mjs` 中的 `movePlayer` 方法来实现这一功能。

```js

```

`movePlayer` 方法应该接受两个参数：一个由 “up”、“down”、“left” 或 “right” 组成的字符串，以及一个表示玩家位置应该改变的像素数量的数字。 `movePlayer` 应该调整被调用的玩家对象的 `x` 和 `y` 坐标。

```js

```

玩家的分数应该用来计算他们与其他玩家相比的排名。 完成 `Player` 类中的 `calculateRank` 方法来实现这个功能。

```js

```

`calculateRank` 方法应该接受一个代表所有连接的玩家的对象数组，并返回字符串 `Rank: currentRanking/totalPlayers`（排名：当前排名/总玩家数）。 举个例子，在一个两人游戏中，如果玩家 A 有 3 分，玩家 B 有 5 分，那么玩家 A 的 `calculateRank` 应该返回 `Rank: 2/2`。

```js

```

玩家可以与收集道具发生碰撞。 完成 `Player.mjs` 中的 `collision` 方法实现这一功能。

```js

```

`collision` 方法应该接受可收集物品的对象作为参数。 如果玩家的角色与道具重合，`collision` 方法应该返回 `true`。

```js

```

所有玩家保持同步。

```js

```

玩家可以在任何时候退出游戏。

```js

```

防止客户端尝试猜测/嗅探 MIME 类型。

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

网站上的任何东西都不会被缓存到客户端中。

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

在请求头中声明该网站由 “PHP 7.4.3” 提供技术支持，尽管它并非如此（作为一种安全措施）。

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
