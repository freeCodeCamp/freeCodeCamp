---
id: 5e46f8edac417301a38fb930
title: 線形回帰による医療費の計算プログラム
challengeType: 10
forumTopicId: 462379
dashedName: linear-regression-health-costs-calculator
---

# --description--

このプロジェクトには <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-linear-regression-health-costs-calculator/blob/master/fcc_predict_health_costs_with_regression.ipynb" target="_blank" rel="noopener noreferrer nofollow">Google Colaboratory</a> を使用して取り組んでください。

このリンクにアクセスした後、自分のアカウントに、またはローカルに、ノートブックのコピーを作成してください。 プロジェクトを完了し、テストが成功したら (テストはリンクに含まれています)、下記にプロジェクトリンクを送信してください。 Google Colaboratory のリンクを送信する場合は、リンクの共有設定を必ず「リンクを知っている全員」に設定してください。

機械学習カリキュラム向けの対話型教育コンテンツを引き続き開発中です。 現在、この認定講座のビデオチャレンジを受講できます。 また、実際のプロジェクトの取り組みと同様に、場合によってはその他の学習資料を探す必要もあります。

# --instructions--

このチャレンジでは、回帰アルゴリズムを使用して医療費を予測します。

医療費を含むさまざまな人々に関する情報を含むデータセットが与えられます。 データを使用し、新しいデータに基づいて医療費を予測してください。

このノートブックの最初の 2 つのセルでは、ライブラリとデータをインポートします。

必ず分類データを数値に変換してください。 データの 80% を `train_dataset` として、20% を `test_dataset` としてそれぞれ使用します。

これらのデータセットから "expenses" 列 を `pop` で取り出して、`train_labels` と `test_labels` という新しいデータセットを作成します。 これらのラベルをモデルのトレーニング時に使用します。

モデルを作成し、`train_dataset` を使用してトレーニングします。 このノートブックの最後のセルを実行して、モデルを確認します。 最後のセルでは、表示されない `test_dataset` を使用して、モデルがどの程度適切に一般化されるかを確認します。

チャレンジに合格するには、`model.evaluate` が返す絶対誤差が 3500 未満となる必要があります。 つまり、誤差 3500 ドル以内で医療費を正しく予測できる必要があります。

また最後のセルでは、`test_dataset` を使用して経費を予測し、結果をグラフに表示します。

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
