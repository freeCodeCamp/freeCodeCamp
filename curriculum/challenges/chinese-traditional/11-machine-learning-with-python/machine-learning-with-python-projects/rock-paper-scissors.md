---
id: 5e46f8d6ac417301a38fb92d
title: 剪刀石頭布
challengeType: 10
forumTopicId: 462376
dashedName: rock-paper-scissors
---

# --description--

在這個挑戰中，你將創建一個程序來玩石頭、剪刀、布。 一個隨機選取的程序通常會有 50% 的時間獲勝。 要通過這一挑戰，你的程序必須與四個不同的機器人進行對戰，並達到至少 60% 勝率。

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-rock-paper-scissors" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

我們仍在開發機器學習課程的交互式課程部分。 現在，你需要使用其他資源來學習如何通過這一挑戰。

# --instructions--

在文件 `RPS.py` 中，你會看到一個名爲 `player` 的函數。 該函數接受一個參數，該參數是一個字符串，描述了對手的最後一步（“R”、“P” 或 “S”）。 該函數應返回一個字符串，表示它要播放的下一步動作（“R”、“P”或“S”）。

玩家函數將接收一個空字符串作爲比賽中第一場比賽的參數，因爲之前沒有比賽。

文件 `RPS.py` 顯示了一個你需要更新的示例函數。 示例函數使用兩個參數定義（`player(prev_play, opponent_history = [])`）。 該函數從不使用第二個參數調用，因此它是完全可選的。 示例函數包含第二個參數（`opponent_history = []`）的原因，是因爲這是在連續調用 `player` 函數之間保存狀態的唯一方法。 如果你想跟蹤對手歷史，你只需要 `opponent_history` 參數。

*提示：爲了打敗所有四個對手，你的程序可能需要有多種策略，這些策略會根據對手的棋局而改變。*

## 開發

不要修改 `RPS_game.py`。 在 `RPS.py` 中編寫所有代碼。 對於開發，你可以使用 `main.py` 來測試你的代碼。

`main.py` 從 `RPS_game.py` 導入遊戲功能和機器人。

要測試你的代碼，請使用 `play` 函數玩遊戲。 `play` 函數有四個參數：

- 兩個玩家互相對戰（玩家實際上是函數）
- 對戰中的比賽場數
- 一個可選參數來查看每場比賽的日誌。 將其設置爲 `True` 以查看這些消息。

```py
play(player1, player2, num_games[, verbose])
```

例如，如果你希望 `player` 和 `quincy` 互相對戰 1000 場比賽，並且你想查看每場比賽的結果，你將這樣調用該函數：

```py
play(player, quincy, 1000, verbose=True)
```

單擊“運行”按鈕，`main.py` 將運行。

## 測試

這個項目的單元測試在 `test_module.py` 中。 爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 如果你移除 `main.py` 中最後一行的註釋，則只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並在下面提交。

# --hints--

它應該通過所有的 Python 測試。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
