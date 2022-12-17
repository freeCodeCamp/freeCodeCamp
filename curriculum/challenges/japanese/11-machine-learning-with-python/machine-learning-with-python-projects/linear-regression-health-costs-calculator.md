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

In this challenge, you will predict healthcare costs using a regression algorithm.

You are given a dataset that contains information about different people including their healthcare costs. Use the data to predict healthcare costs based on new data.

The first two cells of this notebook import libraries and the data.

Make sure to convert categorical data to numbers. Use 80% of the data as the `train_dataset` and 20% of the data as the `test_dataset`.

`pop` off the "expenses" column from these datasets to create new datasets called `train_labels` and `test_labels`. Use these labels when training your model.

Create a model and train it with the `train_dataset`. Run the final cell in this notebook to check your model. The final cell will use the unseen `test_dataset` to check how well the model generalizes.

To pass the challenge, `model.evaluate` must return a Mean Absolute Error of under 3500. This means it predicts health care costs correctly within $3500.

The final cell will also predict expenses using the `test_dataset` and graph the results.

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
