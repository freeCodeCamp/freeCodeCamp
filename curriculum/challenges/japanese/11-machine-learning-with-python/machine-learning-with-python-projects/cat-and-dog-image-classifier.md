---
id: 5e46f8dcac417301a38fb92e
title: 猫と犬の画像分類プログラム
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

このプロジェクトには <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow">Google Colaboratory</a> を使用して取り組んでください。

上記のリンクにアクセスした後、自分のアカウントまたはローカルに、ノートブックのコピーを作成してください。 プロジェクトを完了し、テストが成功したら (テストはリンクに含まれています)、下記入力欄からプロジェクトリンクを提出してください。 Google Colaboratory のリンクを送信する場合は、リンクの共有設定を必ず「リンクを知っている全員」に設定してください。

機械学習カリキュラム用の対話型教育コンテンツは、現在開発中です。 現状、この認定講座では動画チャレンジを受講できます。 プロジェクトに取り組むにあたり、場合によってはその他の学習資料を探して参考にする必要もあります。これは実際の仕事でプロジェクトに取り組む場合も同様です。

# --instructions--

このチャレンジでは、犬と猫の画像を分類するコードを作成します。 TensorFlow 2.0 と Keras を使用して、猫と犬の画像を 63% 以上の精度で正しく分類する畳み込みニューラルネットワークを作成します (70% の精度を達成すればボーナスポイント！)。

コードは一部がすでに作成済みですが、このチャレンジを完了するためにはさらにコードを記述する必要があります。 それぞれのテキストセルの手順を読み、コードセルで何を実行する必要があるかを理解してください。

1 番目のコードセルでは、必要なライブラリをインポートします。 2 番目のコードセルでは、データをダウンロードし、キー変数を設定します。 3 番目のセルから、自分でコードを記述します。

ダウンロードしたデータセットファイルの構造は次のようになっています (テストディレクトリにはサブディレクトリがなく、画像にはラベルが付いていません):

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

データのエポックやバッチサイズを好きなように変えることもできますが、必須ではありません。

以下ではそれぞれのセル番号に対応した手順を示します。セル番号はセルの最初にコメントで示しています (`# 3` など)。

## セル 3

ここからは自分でコードを記述します。 このセル内の各変数を正しく設定してください (`None` でないようにしてください)。

3 つのそれぞれの画像データセット (トレーニング、検証、テスト) について画像ジェネレータを作成します。 `ImageDataGenerator` を使用して画像を読み取ってデコードし、浮動小数点テンソルに変換します。 `rescale` 引数を使用して (この時点では他の引数は使用しません)、テンソルを 0～255 の値から 0～1 の値にスケール変更します。

`*_data_gen` 変数には、`flow_from_directory` メソッドを使用します。 バッチサイズ、ディレクトリ、ターゲットサイズ (`(IMG_HEIGHT, IMG_WIDTH)`)、クラスモード、その他必要なものを渡します。 `test_data_gen` の場合が最もトリッキーです。 `test_data_gen` では、必ず `shuffle=False` を `flow_from_directory` メソッドに渡してください。 This will make sure the final predictions stay in the order that our test expects. `test_data_gen` に関しては、ディレクトリ構造をよく見ることも重要です。


コードを実行すると、出力は次のようになります。

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## セル 4

`plotImages` 関数は、画像をプロットする場合に何回か使用します。 この関数は画像の配列と確率リストを受け取りますが、確率リストは省略可能です。 このコードはすでに作成済みです。 `train_data_gen` 変数を正しく作成してこのセルを実行すると、5 つのランダムなトレーニング画像がプロットされます。

## セル 5

`ImageDataGenerator` を使用して `train_image_generator` を再作成します。

トレーニングのサンプルが少ないので、過剰適合が起きるリスクがあります。 この問題を解決する方法の 1 つとして、ランダムな変換を使用し、既存のトレーニングサンプルからより多くのトレーニングデータを作成することができます。

4～6 個のランダム変換を引数として `ImageDataGenerator` に追加します。 必ず前と同じスケール変更を実行してください。

## セル 6

このセルでは何もする必要はありません。 以前と同様に `train_data_gen` が作成されますが、新しい `train_image_generator` が使用されます。 次に、異なるバリエーションを使用して単一の画像が 5 回プロットされます。

## セル 7

このセルでは、クラス確率を出力するニューラルネットワークのモデルを作成します。 ここでは Keras Sequential モデルを使用してください。 おそらく、Conv2D レイヤーと MaxPooling2D レイヤーのスタックと、その上に ReLU 活性化関数によって活性化された全結合層が含まれます。

オプティマイザと損失を設定する引数を渡して、モデルをコンパイルします。 また、`metrics=['accuracy']` を渡して、各トレーニングのエポックのトレーニングと検証の精度を表示します。

## セル 8

`model` の `fit` メソッドを使用してネットワークをトレーニングします。 `x`、`steps_per_epoch`、`epochs`、`validation_data`、`validation_steps` のそれぞれの引数を渡してください。

## セル 9

このセルを実行して、モデルの精度と損失を視覚化します。

## セル 10

ここであなたのモデルを使用して、新規の画像が猫なのか犬なのかを予測します。

このセルでは、各テスト画像 (`test_data_gen`から生成したもの) が犬または猫である確率を取得します。 `probabilities` は整数のリストである必要があります。

`plotImages` 関数を呼び出して、各テスト画像に対応するテスト画像と確率を渡します。

セルを実行すると、50 枚すべてのテスト画像と、画像が猫または犬である「確からしさ」を示すラベルが表示されます。 この精度は、前述のグラフ (前のセルの実行後) に表示される精度に対応します。 トレーニング画像が多いほど、精度が高くなる可能性があります。

## セル 11

この最後のセルを実行して、チャレンジに合格したかどうかを確認します。

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
