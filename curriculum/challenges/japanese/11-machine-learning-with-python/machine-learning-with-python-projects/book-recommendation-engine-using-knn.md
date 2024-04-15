---
id: 5e46f8e3ac417301a38fb92f
title: KNN を使用した書籍推薦エンジン
challengeType: 10
forumTopicId: 462378
dashedName: book-recommendation-engine-using-knn
---

# --description--

このプロジェクトには <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-book-recommendation-engine/blob/master/fcc_book_recommendation_knn.ipynb" target="_blank" rel="noopener noreferrer nofollow">Google Colaboratory</a> を使用して取り組んでください。

上記のリンクにアクセスした後、自分のアカウントまたはローカルに、ノートブックのコピーを作成してください。 プロジェクトを完了し、テストが成功したら (テストはリンクに含まれています)、下記にプロジェクトリンクを送信してください。 Google Colaboratory のリンクを送信する場合は、リンクの共有設定を必ず「リンクを知っている全員」に設定してください。

機械学習カリキュラム用の対話型教育コンテンツは、現在開発中です。 現状、この認定講座では動画チャレンジを受講できます。 プロジェクトに取り組むにあたり、場合によってはその他の学習資料を探して参考にする必要もあります。これは実際の仕事でプロジェクトに取り組む場合も同様です。

# --instructions--

このチャレンジでは、**K 近傍法**を使用して書籍推薦アルゴリズムを作成します。

<a href="http://www2.informatik.uni-freiburg.de/~cziegler/BX/" target="_blank" rel="noopener noreferrer nofollow">ブッククロッシングのデータセット</a>を使用してください。 このデータセットには、90,000 人のユーザーによる 270,000 冊の本に関する 110 万件の (10 段階の) 評価が含まれています。

データをインポートしてクリーニングしたら、`sklearn.neighbors` の `NearestNeighbors` を使用して、指定された本と似た本を表示するモデルを作成してください。 Nearest Neighbors アルゴリズムは、distance (距離) を測定してインスタンスの「近さ」を求めます。

本のタイトルを (データセットから) 引数として 1 つ取り、それと似た 5 冊の本に、引数の本からの distance を添えたリストを返す `get_recommends` という名前の関数を作成してください。

このコードは:

```py
get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")
```

次のものを返します。

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

`get_recommends()` が返すデータがリストであることに注目してください。 リストの最初の要素は関数に渡された本のタイトルです。 リストの 2 番目の要素は 5 つのリストを持つリストです。 5 つのリストはそれぞれ推薦本と、推薦本から関数に渡された本までの distance を含みます。

(オプション作業) データセットをグラフにしてみると、ほとんどの書籍が頻繁には評価されていないことがわかります。 意味のある統計にするため、評価が 200 未満のユーザーと 100 未満の書籍をデータセットから削除してください。

最初の 3 つのセルでは、必要と思われるライブラリと使用するデータをインポートします。 最後のセルはテスト用です。 これらのセルの間にすべてのコードを記述してください。

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
