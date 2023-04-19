---
id: 6331d233b51aeedd1a2bd645
title: "如何求解 X：補充"
challengeType: 15
videoId: lFTCVUCbNoM
dashedName: how-to-solve-for-x-extra
---

# --description--

這個視頻將更深入，有更多的例子說明如何使用 SymPy 求解。 它還將解釋函數如何生成隨機問題。

這是<a href="https://colab.research.google.com/drive/1Jv6WxW93J_1GZao8DkNb4X0D93oVibbs" target="_blank" rel="noopener noreferrer nofollow">和視頻配套的 Colab 筆記本</a>。用它來爲你正在創建的代數 Colab 筆記本添加更多內容。

# --question--

## --任務--

將視頻中更多求解 x 的方法的代碼添加到你的代數 Colab 筆記本中。

---

打開以下 Colab 筆記本，運行單元格，然後<a href="https://colab.research.google.com/drive/1XjmHoERFKcvol7FPidQE-wgdvR82HV45" target="_blank" rel="noopener noreferrer nofollow">練習解決一步和兩步的代數問題</a>。作爲獎勵，看看生成練習題的代碼。

## --text--

如果你導入 sympy 並定義 x 爲變量，下面的代碼會有什麼輸出？

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
