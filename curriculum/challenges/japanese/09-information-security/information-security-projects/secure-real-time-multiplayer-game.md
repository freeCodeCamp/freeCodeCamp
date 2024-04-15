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
-   Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete your project.
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

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

複数のプレイヤーがサーバーに接続してプレイすることができます。

```js

```

プレイヤーはそれぞれアバターを持ちます。

```js

```

各プレイヤーは、`Player.mjs` の `Player` クラスによって作成されるオブジェクトにより表現されます。

```js

```

各プレーヤーオブジェクトには、最低限として、固有の `id`、`score`、プレーヤーの現在の位置を示す `x` および `y` 座標を含める必要があります。

```js

```

ゲームには少なくとも 1 種類のコレクションアイテムがあります。 それを実装するために、`Collectible.mjs` で `Collectible` クラスを作成してください。

```js

```

`Collectible` クラスにより作成された各コレクションアイテムオブジェクトには、最低限として、固有の `id`、`value`、アイテムの現在の位置を示す `x` および `y` 座標を含める必要があります。

```js

```

プレイヤーは、WASD キーや矢印キーを使用してアバターを動かすことができます。 それを実装するために、`Player.mjs` で `movePlayer` メソッドを作成してください。

```js

```

`movePlayer` メソッドは、"up"、"down"、"left"、"right" のいずれかの文字列と、プレーヤーの位置を変更するピクセル量を表す数値の、2 つの引数を受け取る必要があります。 `movePlayer` は、呼び出し元のプレイヤーオブジェクトの `x` 座標と `y` 座標を調整する必要があります。

```js

```

プレーヤーのスコアを使用して、他のプレーヤーとの相対順位を計算する必要があります。 それを実装するために、`Player` クラスの `calculateRank` メソッドを完成させてください。

```js

```

`calculateRank` メソッドは、すべての接続中のプレイヤーを表すオブジェクトの配列を受け取り、文字列 `Rank: currentRanking/totalPlayers` を返す必要があります。 たとえば、プレイヤーが 2 人のゲームで、プレイヤー A のスコアが 3、プレイヤー B のスコアが 5 の場合、プレイヤー A の `calculateRank` は `Rank: 2/2` を返す必要があります。

```js

```

プレイヤーはコレクションアイテムにぶつかって接触することができます。 それを実装するために、`Player.mjs` で `collision` メソッドを作成してください。

```js

```

`collision` メソッドは、コレクションアイテムのオブジェクトを引数として受け取る必要があります。 プレイヤーのアバターがアイテムに接触した場合、`collision` メソッドは `true` を返す必要があります。

```js

```

すべてのプレイヤーは同期が保たれます。

```js

```

プレイヤーはいつでもゲームから離れることができます。

```js

```

クライアントによる MIME タイプの推測や参照の試行を防いでください。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

クロスサイトスクリプティング (XSS) 攻撃を防いでください。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

ウェブサイトからクライアントにキャッシュされるものは何もありません。

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

ヘッダーには、サイトで "PHP 7.4.3" が使用されていることを記述します。ただし実際には使用されていません (セキュリティ対策が目的です)。

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
