---
id: 5e46f8dcac417301a38fb92e
title: 貓狗圖像分類器
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

你將<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow">使用 Google Colaboratory 來完成這個項目</a>。

進入該鏈接後，在你自己的賬戶或本地創建一個筆記本的副本。 一旦你完成項目並通過測試（包括在該鏈接），請在下面提交你的項目鏈接。 如果你提交的是 Google Colaboratory 的鏈接，請確保打開鏈接共享時選擇 “anyone with the link”。

我們仍在開發機器學習課程的交互式課程部分。 現在，你可以通過這個認證中的視頻挑戰。 你可能還需要尋找額外的學習資源，類似於你在真實世界項目中的工作。

# --instructions--

在這個挑戰中，你將完成代碼，對狗和貓的圖像進行分類。 你將使用 Tensorflow 2.0 和 Keras 創建一個卷積神經網絡，該網絡至少 63% 的時間可以正確分類貓和狗的圖像。 (如果你能達到 70% 的準確率，可以加分！）

有些代碼是給你的，但有些代碼你必須填寫才能完成這個挑戰。 閱讀每個文本單元中的指令，你就會知道你在每個代碼單元中要做什麼。

第一個代碼單元導入所需的庫。 第二個代碼單元下載數據並設置關鍵變量。 第三個單元格是你要寫自己代碼的第一個地方。

下載的數據集文件的結構看起來是這樣的（你會注意到，測試目錄沒有子目錄，圖像也沒有標示）。

```py
cats_and_dogs
|__ train:
    |______ cats: [cat.0.jpg, cat.1.jpg ...]
    |______ dogs: [dog.0.jpg, dog.1.jpg ...]
|__ validation:
    |______ cats: [cat.2000.jpg, cat.2001.jpg ...]
    |______ dogs: [dog.2000.jpg, dog.2001.jpg ...]
|__ test: [1.jpg, 2.jpg ...]
```

如果你願意，你可以調整歷時和批次大小，但這不是必須的。

下面的指令對應於特定的單元格編號，在單元格的頂部用註釋表示（如 `# 3`）。

## Cell 3

現在輪到你了！ 正確設置此單元格中的每個變量。 （它們不應再等於 `None`。）

爲三個圖像數據集（訓練、驗證、測試）中的每一個創建圖像生成器。 使用 `ImageDataGenerator` 讀取/解碼圖像並將它們轉換爲浮點張量。 使用 `rescale` 參數（目前沒有其他參數）將張量從 0 到 255 之間的值重新縮放到 0 到 1 之間的值。

對於 `*_data_gen` 變量，使用 `flow_from_directory` 方法。 傳入批處理大小、目錄、目標大小（`(IMG_HEIGHT, IMG_WIDTH)`）、類模式以及其他所需的內容。 `test_data_gen` 將是最棘手的一個。 對於 `test_data_gen`，確保將 `shuffle=False` 傳遞給 `flow_from_directory` 方法。 這將確保最終預測保持在我們的測試預期的順序。 對於 `test_data_gen`，觀察目錄結構也很有幫助。


運行代碼後，輸出應如下所示：

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## Cell 4

`plotImages` 函數將多次用於繪製圖像。 它需要一個圖像數組和一個概率列表，儘管概率列表是可選的。 此代碼已提供給你。 如果你正確地創建了 `train_data_gen` 變量，那麼運行這個單元將繪製五個隨機訓練圖像。

## Cell 5

使用 `ImageDataGenerator` 重新創建 `train_image_generator`。

由於訓練樣本數量很少，因此存在過度擬合的風險。 解決此問題的一種方法，是通過使用隨機變換，從現有訓練示例創建更多訓練數據。

添加 4-6 個隨機變換作爲 `ImageDataGenerator` 的參數。 確保重新縮放與以前相同。

## Cell 6

你無需爲此單元做任何事情。 `train_data_gen` 與以前一樣創建，但使用新的 `train_image_generator`。 然後，使用不同的變化對單個圖像進行五次不同的繪製。

## Cell 7

在此單元格中，爲輸出類別概率的神經網絡創建一個模型。 它應該使用 Keras Sequential 模型。 它可能會涉及一堆 Conv2D 和 MaxPooling2D 層，然後是一個由 ReLU 激活函數激活的全連接層。

編譯模型並傳遞參數以設置優化器和損失。 同時傳入 `metrics=['accuracy']` 以查看每個訓練週期的訓練和驗證精度。

## Cell 8

使用 `model` 上的 `fit` 方法來訓練網絡。 確保爲 `x`、`steps_per_epoch`、`epochs`、`validation_data` 和 `validation_steps` 傳入參數。

## Cell 9

運行這個單元來觀察模型的準確性和損失。

## Cell 10

現在是時候使用你的模型，來預測一個全新的圖像，是貓還是狗了。

在此單元格中，獲取每個測試圖像（來自 `test_data_gen`）是狗或貓的概率。 `probabilities` 應該是一個整數列表。

調用 `plotImages` 函數並傳入測試圖像和每個測試圖像對應的概率。

在你運行該單元后，你應該看到所有 50 張測試圖像，並有一個標籤顯示該圖像是貓還是狗的“確定”百分比。 準確度將對應於上圖中顯示的準確度（在運行上一個單元格之後）。 更多的訓練圖像可能會導致更高的準確性。

## Cell 11

運行這個最後的單元格，看看你是否通過了挑戰，或者你是否需要繼續努力。

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
