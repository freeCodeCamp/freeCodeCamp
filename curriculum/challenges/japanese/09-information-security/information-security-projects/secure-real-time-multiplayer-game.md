---
id: 5e601c775ac9d0ecd8b94aff
title: セキュアなリアルタイムマルチプレイヤーゲーム
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

HTML Canvas API と Socket.io を使用して、<a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a> と同じような機能を持つ 2D リアルタイムマルチプレイヤーゲームを開発します。 プロジェクトに取り組むにあたり、以下の方法のうち1つを用いてコードを記述します。

-   <a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
-   <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。 必要に応じて、プロジェクトのソースコードへのリンクも「GitHub のリンク」欄に提出してください。

# --instructions--

セキュアなマルチプレイヤーゲームを作成してください。このゲームでは、各プレイヤーがアバターを動かすことができます。また、少なくとも 1 つの収集可能なアイテムがあり、プレイヤーのランクが各自のスコアに基づいて計算されます。

詳細については、以下のテストを参照してください。

ゲームは必ずセキュアにしてください！ 以下のセキュリティ対策を組み込んでください:

- クライアントが MIME タイプを推測またはスニッフィング (盗み見) できないようにする
- XSS 攻撃を防止する
- クライアントにウェブサイトから何もキャッシュさせないようにする
- ヘッダーに、このサイトで `PHP 7.4.3` が使用されていることを記述する

**注**: このユーザーストーリーには `helmet@^3.21.3` が必要です。 そのため、ユーザーストーリーを実現するための情報として、Helmet の旧バージョンのドキュメントを参照する必要があります。

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提出してください。

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Multiple players can connect to a server and play.

```js

```

Each player has an avatar.

```js

```

Each player is represented by an object created by the `Player` class in `Player.mjs`.

```js

```

At a minimum, each player object should contain a unique `id`, a `score`, and `x` and `y` coordinates representing the player's current position.

```js

```

The game has at least one type of collectible item. Complete the `Collectible` class in `Collectible.mjs` to implement this.

```js

```

At a minimum, each collectible item object created by the `Collectible` class should contain a unique `id`, a `value`, and `x` and `y` coordinates representing the item's current position.

```js

```

Players can use the WASD and/or arrow keys to move their avatar. Complete the `movePlayer` method in `Player.mjs` to implement this.

```js

```

The `movePlayer` method should accept two arguments: a string of "up", "down", "left", or "right", and a number for the amount of pixels the player's position should change. `movePlayer` should adjust the `x` and `y` coordinates of the player object it's called from.

```js

```

The player's score should be used to calculate their rank among the other players. Complete the `calculateRank` method in the `Player` class to implement this.

```js

```

The `calculateRank` method should accept an array of objects representing all connected players and return the string `Rank: currentRanking/totalPlayers`. For example, in a game with two players, if Player A has a score of 3 and Player B has a score of 5, `calculateRank` for Player A should return `Rank: 2/2`.

```js

```

Players can collide with a collectible item. Complete the `collision` method in `Player.mjs` to implement this.

```js

```

The `collision` method should accept a collectible item's object as an argument. If the player's avatar intersects with the item, the `collision` method should return `true`.

```js

```

All players are kept in sync.

```js

```

Players can disconnect from the game at any time.

```js

```

Prevent the client from trying to guess / sniff the MIME type.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Prevent cross-site scripting (XSS) attacks.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Nothing from the website is cached in the client.

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

The headers say that the site is powered by "PHP 7.4.3" even though it isn't (as a security measure).

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
