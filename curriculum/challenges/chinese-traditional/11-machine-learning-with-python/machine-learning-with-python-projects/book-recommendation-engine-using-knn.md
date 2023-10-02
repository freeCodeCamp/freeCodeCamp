---
id: 5e46f8e3ac417301a38fb92f
title: 基於 KNN 的圖書推薦引擎
challengeType: 10
forumTopicId: 462378
dashedName: book-recommendation-engine-using-knn
---

# --description--

你將<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-book-recommendation-engine/blob/master/fcc_book_recommendation_knn.ipynb" target="_blank" rel="noopener noreferrer nofollow">使用 Google Colaboratory 來完成這個項目</a>。

進入該鏈接後，在你自己的賬戶或本地創建一個筆記本的副本。 一旦你完成項目並通過測試（包括在該鏈接），請在下面提交你的項目鏈接。 如果你提交的是 Google Colaboratory 的鏈接，請確保打開鏈接共享時選擇 “anyone with the link”。

我們仍在開發機器學習課程的交互式課程部分。 現在，你可以通過這個認證中的視頻挑戰。 你可能還需要尋找額外的學習資源，類似於你在真實世界項目中的工作。

# --instructions--

在這個挑戰中，你將使用 **K-Nearest Neighbors** 創建一個圖書推薦算法。

你將使用 <a href="http://www2.informatik.uni-freiburg.de/~cziegler/BX/" target="_blank" rel="noopener noreferrer nofollow">Book-Crossings 數據集</a>。 該數據集包括 90,000 名用戶對 270,000 冊書籍的 110 萬份評分（評分從 1 至 10）。

導入並清理數據後，使用 `sklearn.neighbors` 中的 `NearestNeighbors` 開發一個模型，顯示與給定書籍相似的書籍。 最近鄰算法測量距離以確定實例的“接近度”。

創建一個名爲 `get_recommends` 的函數，它將書名（來自數據集）作爲參數，並返回 5 本書的列表以及它們與書參數的距離。

這個代碼：

```py
get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")
```

應該返回：

```py
[
  'The Queen of the Damned (Vampire Chronicles (Paperback))',
  [
    ['Catch 22', 0.793983519077301], 
    ['The Witching Hour (Lives of the Mayfair Witches)', 0.7448656558990479], 
    ['Interview with the Vampire', 0.7345068454742432],
    ['The Tale of the Body Thief (Vampire Chronicles (Paperback))', 0.5376338362693787],
    ['The Vampire Lestat (Vampire Chronicles, Book II)', 0.5178412199020386]
  ]
]
```

請注意，從 `get_recommends()` 返回的數據是一個列表。 列表中的第一個元素是傳遞給函數的書名。 列表中的第二個元素是另外五個列表的列表。 五個列表中的每一個都包含一本推薦書以及從推薦書到傳遞給函數的書的距離。

如果你繪製數據集的圖表（可選），你會注意到大多數書籍的評價並不頻繁。 爲了確保統計學上的顯著性，從數據集中刪除評分低於 200 的用戶和評分低於 100 的書籍。

前三個單元格導入你可能需要的庫和要使用的數據。 最後一個單元用於測試。 在這些單元格之間寫下所有代碼。

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
