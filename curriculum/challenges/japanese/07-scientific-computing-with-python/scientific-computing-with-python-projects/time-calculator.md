---
id: 5e444136903586ffb414c94d
title: 時刻計算プログラム
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用します</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

# --instructions--

次の 2 つの必須パラメーターと 1 つのオプションパラメーターを受け取る関数 `add_time` を記述してください。

- 12 時間制形式の開始時刻 (末尾に AM または PM)
- 時数と分数で示される経過時間
- (オプション) 開始の曜日 (大文字小文字は区別しない)

関数は、開始時刻に経過時間を足して、その結果を返すようにしてください。

結果が翌日になる場合は、時刻の後に `(next day)` を表示してください。 結果が翌日よりさらに後になる場合は、時刻の後に `(n days later)` を表示してください。この "n" は何日後かを示す数です。

関数にオプションの開始曜日パラメーターが与えられた場合は、結果の曜日を出力に表示してください。 出力の曜日は、時刻の後、「n 日後」の前に表示する必要があります。

関数が扱うさまざまなケースの例を以下に示します。 結果のスペースと句読点の表示に特に注意してください。

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

Python ライブラリはインポートしないでください。 開始時刻は有効な時刻であると仮定して構いません。 経過時間の分数は 60 未満の整数になりますが、時数は任意の整数になります。

## 開発

`time_calculator.py` にコードを記述してください。 開発時に `main.py` を使用して `time_calculator()` 関数をテストできます。 「Run」ボタンをクリックすると `main.py` が実行されます。

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「Run」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

正確に開始時刻と経過時間を足して、すべてのテストを成功させる必要があります。

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
