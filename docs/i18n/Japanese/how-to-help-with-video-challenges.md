# ビデオチャレンジを支援する方法

ビデオの課題は、freeCodeCampカリキュラムの新しいタイプの課題です。

ビデオのチャレンジは、特定のトピックに関する全長ビデオコースの小さなセクションです。 動画チャレンジページには、YouTube 動画が埋め込まれています。 各チャレンジページには、動画に関連する複数選択の質問があります。 コース内の次のビデオチャレンジに進む前に、ユーザーが質問に正しく答える必要があります。

ビデオチャレンジのページは、freeCodeCampチームのメンバーによって作成されます。 YouTube動画は、FreeCodeCampチームのメンバーによってもアップロードされます。 ビデオの課題の多くは、まだそれらに関連する質問がありません。

ビデオセクションに関連する複数の選択肢の質問を作成し、ビデオ課題のマークダウンファイルに質問を追加することで助けることができます。


## チャレンジテンプレート

以下はチャレンジマークダウンファイルのテンプレートです。

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
---

## Description

<section id='description'>
An optional description with helpful information related to the video.
</section>

## Tests

<section id='tests'>

```yml
question:
  text: 'Question'
  answers:
    - 'Answer One'
    - 'Answer Two'
    - 'Answer Three'
  solution: 3
````

</section>
````

## Creating questions for video challenges

### Access the video challenge markdown files

You can find the markdown files for video challenges at the following locations in the curriculum:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Pick a challenge markdown file from the options above.

### チャレンジに関連するビデオをスキムし、複数選択の質問を作成する

まず、ビデオIDを見つける。

例えば、ビデオチャレンジマークダウンファイルのヘッダから以下のコードでは、videoIdは「nVAAxZ34khk」です。

例えば、ビデオチャレンジマークダウンファイルのヘッダから以下のコードでは、videoIdは「nVAAxZ34khk」です。 GitHub では、情報をテーブル形式でレイアウトする必要があります。
````
---
id: 5e9a093a74c4063ca6f7c14d title: データ分析例 A challengeType: 11
videoId: nVAaxZ34khk
---
```

次に、そのビデオIDでYouTubeのビデオにアクセスします。 The url for the video will be:
https://www.youtube.com/watch?v=[videoId]    (add videoId to the URL without square brackets)

In the example above, the url is https://www.youtube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that videoId and think of a multiple choice question based on the content of the video.

### マークダウンファイルに質問を追加する

GitHubインターフェースを介して、ローカルまたは直接質問を追加することができます。 ローカルで質問を追加するには、format@@0(how-to-setup-freecodecamp-locally.md) が必要です。 GitHubでファイルを見つけて、編集ボタンをクリックして、ブラウザで質問を追加することもできます。

GitHubでファイルを見つけて、編集ボタンをクリックして、ブラウザで質問を追加することもできます。

If a question has not yet been added to a particular video challenge, it will have the following default question:

```yml
question:
  text: |
    Question
  answers:
    - |
      one
    - |
      two
    - |
      three
  solution: 3
```

質問で「質問」という単語を更新します。 答えのある「one」、「two」、「three」を更新します。 答えが正しいソリューション番号を更新してください。 同じ形式でより多くの可能性のある回答を追加できます。 質問と回答は引用符で囲むことができます。

#### マークダウンを使用して質問をフォーマットする

問題のテキストはマークダウンとして解析されます。 正しくフォーマットされていることを確認する最も簡単な方法は、質問を `text: |`で開始することです。

```yml
質問:
  テキスト: |
    質問
```

次に、質問が新しい行にあり、 `テキスト:|`よりも1つのレベルにインデントされていることを確認する必要があります。

同じアプローチを回答に使用することができますので、質問全体が

```yml
question:
  text: |
    Question
  answers:
  - |
    First answer
  - |
    Second
  - |
    third
  solution: 2
```

それぞれの答えが妥当であることを確認してくださいが、正しい答えは1つだけです。

#### HTML の使用

質問と回答には、新しい行の `<br>` のような特定の HTML タグを含めることができます。 HTML タグは、質問がなければ表現できない場合には控えめに使用する必要があります。

### 質問の例

#### HTML のない例

````yml
question:
  text: |
    この JavaScript コードはコンソールに何を記録しますか?
    ```js
    console.log('hello world');
    ````


    回答を選択してください！
  回答:
    - | hello *world*
    - | **hello** ワールド
    - | hello world solution: 3
````

````yml
question:
  text: |
    What will print out after running this code:
    ```py
    width = 15
    height = 12.0
    print(height/3)
    ````
  回答:
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 solution: 3
````

#### Example with HTML

```yml
question:
  text: |
    What will print out after running this code:
    <pre><code>width = 15<br>height = 12.0<br>print(height/3)<code></pre>
  answers:
    - |
      39
    - |
      4
    - |
      4.0
    - |
      5.0
    - |
      5
  solution: 3
````

最後の例は、HTML が使えることを示していますが、それがないバージョンほど読みやすくないことを示しています。

より多くの例については、次のビデオコースのマークダウンファイルを参照できます。 すべてのチャレンジにはすでに質問があります: [Python for everyone course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## プルリクエストを開く

1つ以上の質問を作成した後、新しいブランチに変更をコミットし、 [プルリクエスト](how-to-open-a-pull-request.md) を開くことができます。
