---
id: 5e46f8d6ac417301a38fb92d
title: じゃんけん
challengeType: 10
forumTopicId: 462376
dashedName: rock-paper-scissors
---

# --description--

このチャレンジでは、じゃんけんするプログラムを作成します。 手をランダムに選択するプログラムの勝率は、通常は 50% になります。 このチャレンジに合格するには、プログラムで 4 つの異なるボットを相手に試合を行う必要があり、各試合で 60％ 以上の勝率を達成しなければなりません。

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-rock-paper-scissors/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

機械学習カリキュラム用の対話型教育コンテンツは、現在開発中です。 現在、このチャレンジに合格する方法を学ぶには他の資料を活用する必要があります。

# --instructions--

ファイル `RPS.py` には `player` という関数が用意されています。 この関数は、相手の前回の手を示す文字列 ("R" (グー)、"P" (パー)、または "S" (チョキ)) を引数として取ります。 関数は、次の手を表す文字列 ("R"、"P"、または "S") を返す必要があります。

最初の対戦では過去のプレイがないので、player 関数は引数として空の文字列を受け取ります。

ファイル `RPS.py` はサンプルの関数で、内容を変更する必要があります。 サンプル関数は 2 つの引数で定義されています (`player(prev_play, opponent_history = [])`)。 関数は第 2 引数を付けて呼び出されることがないので、第 2 引数は省略可能です。 サンプル関数に第 2 引数 (`opponent_history = []`) が含まれている理由は、`player` 関数を連続して呼び出す合間に状態を保存する唯一の方法だからです。 `opponent_history` 引数は、opponent_history を追跡したい場合にのみ必要です。

*ヒント: 4 つすべての対戦相手に勝つためには、プログラムで複数の戦略を用意しておき、対戦相手のプレイに応じて変更する必要があります。*

## 開発

`RPS_game.py` を変更しないでください。 あなたのコードはすべて `RPS.py` に記述してください。 開発には `main.py` を使用してコードをテストすることができます。

`main.py` は、`RPS_game.py` からゲーム関数とボットをインポートします。

コードをテストするには、`play` 関数を使用してゲームをプレイします。 `play` 関数は 4 つの引数を取ります:

- 互いに対戦する 2 人のプレーヤー (プレイヤーは実際には関数)
- その対戦でプレイするゲームの数
- 各ゲームのログを表示するオプション引数。 `True` に設定するとそれらのメッセージが表示されます。

```py
play(player1, player2, num_games[, verbose])
```

たとえば、`player` と `quincy` を 1000 回対戦させて、各ゲームの結果を表示したい場合は、次のように関数を呼び出します:

```py
play(player, quincy, 1000, verbose=True)
```

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 あらかじめ `test_module.py` から `main.py` にテストをインポートしてあります。 If you uncomment the last line in `main.py`, the tests will run automatically whenever you run `python main.py` in the console.

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

すべての Python テストが成功する必要があります。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
