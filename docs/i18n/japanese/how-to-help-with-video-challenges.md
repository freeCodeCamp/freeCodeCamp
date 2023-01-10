# ビデオチャレンジを支援する方法

ビデオチャレンジは、freeCodeCamp カリキュラムの新しいタイプのチャレンジです。

ビデオチャレンジは、特定のトピックに関するノーカットビデオコースの小さなセクションです。 ビデオチャレンジページには、YouTube 動画が埋め込まれています。 各チャレンジページには、動画に関連する多肢選択問題があります。 コース内で次のビデオチャレンジに進む前に、ユーザーは質問に正しく答える必要があります。

ビデオチャレンジのページは、freeCodeCamp チームのメンバーによって作成されます。 YouTube 動画も、freeCodeCamp チームのメンバーによってアップロードされます。 しかし、多くのビデオチャレンジは、まだ関連する質問がありません。

ビデオセクションに関連する多肢選択式の質問を作成し、ビデオチャレンジマークダウンファイルに質問を追加する作業を手伝うことができます。

## チャレンジテンプレート

以下はチャレンジマークダウンファイルのテンプレートです。

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
forumTopicId: 12345
---

# --description--

チャレンジの説明 (マークダウンで記入)

```html
<div>example code</div>
````

# --question--

現在、このフィールドは多肢選択式 Python チャレンジが使用しています。

## --text--

質問のテキストをここに記述します。

## --answers--

回答 1

---

回答 2

---

他の回答

## --video-solution--

正解の番号をここに記述します。
````

## ビデオチャレンジに対する質問を作成する

### ビデオチャレンジマークダウンファイルにアクセスする

カリキュラム内の以下のロケーションにビデオチャレンジマークダウンファイルがあります。

- [Data Analysis with Python コース](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 コース](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy コース](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work コース](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

上記選択肢からチャレンジマークダウンファイルを選択してください。

### Skim through the video associated with the challenge and create a multiple-choice question

First, find the `videoId`.

For example, in the following code from the header of a video challenge markdown file, the `videoId` is "nVAaxZ34khk". GitHub では、情報はテーブル形式で表示されます。

````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

次に、その `videoId` で YouTube の動画にアクセスします。 The URL for the video will be:
https://www.youtube.com/watch?v=[videoId] (replace `videoId` in the URL with the video's ID - without square brackets)

In the example above, the URL is https://www.youtube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that `videoId` and think of a multiple-choice question based on the content of the video.

### マークダウンファイルに質問を追加してください

ローカルでまたは GitHub インターフェースを使用して質問を追加することができます。 ローカルで質問を追加するには、[freeCodeCamp をローカルに設定する](how-to-setup-freecodecamp-locally.md) 必要があります。 GitHub でファイルを見つけて、編集ボタンをクリックして、ブラウザで質問を追加することもできます。

特定のビデオチャレンジに質問がまだ追加されていない場合は、次のデフォルトの質問があります。


```md
# --question--

## --text--

質問のテキスト

## --answers--

Answer 1

---

Answer 2
---

他の回答

## --video-solution--

1
```

下記項目の下に質問テキストを追加 / 更新してください。

```
# --question--

## --text--
```

`## --answers--` の下に回答を追加 / 更新してください (`Answer 1`、`Answer 2` など)。 `## -video-solution--` の下にある番号を正解の番号に更新してください。 同じ形式で、他の回答も追加できます。 質問と回答は引用符で囲むことができます。

### 質問の例

````md
# --question--

## --text--

この JavaScript コードは、コンソールに何を記録しますか？

```js
console.log('hello world');
````

## --answers--

hello _world_

---

**hello** world

---

hello world

---

## --video-solution--

3
````

````md
# --question--

## --text--

以下のコードを実行すると何が出力されますか？

```py
width = 15
height = 12.0
print(height/3)
````

## --answers--

39

---

4

---

4.0

---

5.0

---

5

## --video-solution--

3 ````

以下のビデオコースのマークダウンファイルで、その他の例も参照できます。 すべてのチャレンジには既に質問があります: [Python for Everybody コース](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## プルリクエストをオープンする

1 つ以上の質問を作成した後、新しいブランチに変更をコミットすると、[プルリクエストをオープンする](how-to-open-a-pull-request.md) ことができます。
