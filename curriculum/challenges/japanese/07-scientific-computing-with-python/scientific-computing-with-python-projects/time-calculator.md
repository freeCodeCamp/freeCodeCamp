---
id: 5e444136903586ffb414c94d
title: 時刻計算プログラム
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

このプロジェクトは [Replit スターターコード](https://replit.com/github/freeCodeCamp/boilerplate-time-calculator)を使用して作業を行います。

Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- [「みんなで Python」ビデオコース](https://www.freecodecamp.org/news/python-for-everybody/) (14 時間)

- [「Python を学ぶ」ビデオコース](https://www.freecodecamp.org/news/learn-python-video-course/) (10 時間)

# --instructions--

下記に示す 2 つの必須パラメーターと 1 つのオプションパラメーターを受け取る関数 `add_time` を記述してください。

- 12 時制形式の開始時刻 (末尾に AM または PM)
- 時数と分数で示される経過時間
- (オプション) 開始の曜日 (大文字小文字の記述は自由)

関数は、経過時間を開始時刻に追加し、その結果を返す必要があります。

結果が翌日になる場合は、時刻の後に `(next day)` (翌日) を表示する必要があります。 結果が翌日以降になる場合は、時刻の後に `(n days later)` (n 日後) を表示する必要があります。ここで "n" は何日後かを示します。

関数にオプションの開始曜日パラメーターが与えられた場合は、結果の曜日を出力に表示する必要があります。 出力する曜日は、時刻の後、「n 日後」の前に表示する必要があります。

関数が扱うさまざまなケースの例を次に示します。 結果のスペースと句読点の表示に特に注意を払ってください。

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

Python ライブラリをインポートしないでください。 開始時刻は有効な時刻であると仮定します。 経過時間の分数は 60 未満の整数になりますが、時数は任意の整数になります。

## 開発

`time_calculator.py` でコードを記述してください。 開発には `main.py` を使用して `time_calculator()` 関数をテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「実行」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

正確に時間を追加し、すべてのテストに合格する必要があります。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
