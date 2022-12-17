---
id: 5e46f8d6ac417301a38fb92d
title: 剪刀石头布
challengeType: 10
forumTopicId: 462376
dashedName: rock-paper-scissors
---

# --description--

在这个挑战中，你将创建一个程序来玩石头、剪刀、布。 一个随机选取的程序通常会有 50% 的时间获胜。 要通过这一挑战，你的程序必须与四个不同的机器人进行对战，并达到至少 60% 胜率。

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-rock-paper-scissors" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

我们仍在开发机器学习课程的交互式课程部分。 现在，你需要使用其他资源来学习如何通过这一挑战。

# --instructions--

在文件 `RPS.py` 中，你会看到一个名为 `player` 的函数。 该函数接受一个参数，该参数是一个字符串，描述了对手的最后一步（“R”、“P” 或 “S”）。 该函数应返回一个字符串，表示它要播放的下一步动作（“R”、“P”或“S”）。

玩家函数将接收一个空字符串作为比赛中第一场比赛的参数，因为之前没有比赛。

文件 `RPS.py` 显示了一个你需要更新的示例函数。 示例函数使用两个参数定义（`player(prev_play, opponent_history = [])`）。 该函数从不使用第二个参数调用，因此它是完全可选的。 示例函数包含第二个参数（`opponent_history = []`）的原因，是因为这是在连续调用 `player` 函数之间保存状态的唯一方法。 如果你想跟踪对手历史，你只需要 `opponent_history` 参数。

*提示：为了打败所有四个对手，你的程序可能需要有多种策略，这些策略会根据对手的棋局而改变。*

## 开发

不要修改 `RPS_game.py`。 在 `RPS.py` 中编写所有代码。 对于开发，你可以使用 `main.py` 来测试你的代码。

`main.py` 从 `RPS_game.py` 导入游戏功能和机器人。

要测试你的代码，请使用 `play` 函数玩游戏。 `play` 函数有四个参数：

- 两个玩家互相对战（玩家实际上是函数）
- 对战中的比赛场数
- 一个可选参数来查看每场比赛的日志。 将其设置为 `True` 以查看这些消息。

```py
play(player1, player2, num_games[, verbose])
```

例如，如果你希望 `player` 和 `quincy` 互相对战 1000 场比赛，并且你想查看每场比赛的结果，你将这样调用该函数：

```py
play(player, quincy, 1000, verbose=True)
```

单击“运行”按钮，`main.py` 将运行。

## 测试

这个项目的单元测试在 `test_module.py` 中。 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 如果你移除 `main.py` 中最后一行的注释，则只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并在下面提交。

# --hints--

它应该通过所有的 Python 测试。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
