---
id: 6331d233b51aeedd1a2bd645
title: "如何求解 X：补充"
challengeType: 15
videoId: lFTCVUCbNoM
dashedName: how-to-solve-for-x-extra
---

# --description--

这个视频将更深入，有更多的例子说明如何使用 SymPy 求解。 它还将解释函数如何生成随机问题。

这是<a href="https://colab.research.google.com/drive/1Jv6WxW93J_1GZao8DkNb4X0D93oVibbs" target="_blank" rel="noopener noreferrer nofollow">和视频配套的 Colab 笔记本</a>。用它来为你正在创建的代数 Colab 笔记本添加更多内容。

# --question--

## --任务--

将视频中更多求解 x 的方法的代码添加到你的代数 Colab 笔记本中。

---

打开以下 Colab 笔记本，运行单元格，然后<a href="https://colab.research.google.com/drive/1XjmHoERFKcvol7FPidQE-wgdvR82HV45" target="_blank" rel="noopener noreferrer nofollow">练习解决一步和两步的代数问题</a>。作为奖励，看看生成练习题的代码。

## --text--

如果你导入 sympy 并定义 x 为变量，下面的代码会有什么输出？

```py
example = 3*x - 12
equation = Eq(example,0)
solution = solve(equation,x)
print(solution)
```

## --answers--

3

---

4

---

[4]

---

x = 4

## --video-solution--

3
