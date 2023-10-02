---
id: 5e46f8edac417301a38fb930
title: 線性迴歸健康成本計算器
challengeType: 10
forumTopicId: 462379
dashedName: linear-regression-health-costs-calculator
---

# --description--

你將<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-linear-regression-health-costs-calculator/blob/master/fcc_predict_health_costs_with_regression.ipynb" target="_blank" rel="noopener noreferrer nofollow">使用 Google Colaboratory 來完成這個項目</a>。

進入該鏈接後，在你自己的賬戶或本地創建一個筆記本的副本。 一旦你完成項目並通過測試（包括在該鏈接），請在下面提交你的項目鏈接。 如果你提交的是 Google Colaboratory 的鏈接，請確保打開鏈接共享時選擇 “anyone with the link”。

我們仍在開發機器學習課程的交互式課程部分。 現在，你可以通過這個認證中的視頻挑戰。 你可能還需要尋找額外的學習資源，類似於你在真實世界項目中的工作。

# --instructions--

在這個挑戰中，你將使用迴歸算法預測醫療費用。

你會得到一個數據集，其中包含不同人的信息，包括他們的醫療費用。 用數據來預測基於新數據的醫療費用。

此筆記本的前兩個單元格導入庫和數據。

確保將分類數據轉換爲數字。 將 80% 的數據用作 `train_dataset`，將 20% 的數據用作 `test_dataset`。

使用 `pop` 從這些數據集中移出“費用”列中，來創建名爲 `train_labels` 和 `test_labels` 的新數據集。 訓練模型時使用這些標籤。

創建一個模型並使用 `train_dataset` 對其進行訓練。 運行本筆記本中的最後一個單元來檢查你的模型。 最後一個單元格將使用看不見的 `test_dataset` 來檢查模型的泛化程度。

要通過挑戰，`model.evaluate` 必須返回低於 3500 的平均絕對誤差。 這意味着它可以正確地預測醫療保健費用在 3500 美元以內。

最後一個單元格還將使用 `test_dataset` 預測費用並繪製結果圖。

# --hints--

它應該通過所有 Python 測試。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
