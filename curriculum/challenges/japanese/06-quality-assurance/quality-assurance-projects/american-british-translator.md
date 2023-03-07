---
id: 5e601c0d5ac9d0ecd8b94afe
title: アメリカ英語とイギリス英語の変換機
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

<a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a> と同じような機能を持つ、フルスタック JavaScript アプリを構築してください。 プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
-   <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。 必要に応じて、プロジェクトのソースコードへのリンクも「GitHub のリンク」欄に提出してください。

# --instructions--

-   すべてのロジックを `/components/translator.js` に記述してください。
-   `/routes/api.js` で `/api/translate` ルートを完成させてください。
-   `tests/1_unit-tests.js` および `tests/2_functional-tests.js` に、すべてのユニットテスト/機能テストを作成してください。
-   アプリで変換すべきスペルと用語については、`/components` にある JavaScript ファイルを参照してください。
-   Replit でテストを実行するには、`.env` ファイル内で `NODE_ENV` を `test` (引用符は付けない) に設定してください。
-   コンソールでテストを実行するには、コマンド `npm run test` を使用してください。 Replit コンソールを開くには、Ctrl+Shift+P (Macの場合はCmd) を押して「open shell」と入力してください。

`tests/1_unit-tests.js` に以下のテストを記述してください。

-   `Mangoes are my favorite fruit.` をイギリス英語に変換してください
-   `I ate yogurt for breakfast.` をイギリス英語に変換してください
-   `We had a party at my friend's condo.` をイギリス英語に変換してください
-   `Can you toss this in the trashcan for me?` をイギリス英語に変換してください
-   `The parking lot was full.` をイギリス英語に変換してください
-   `Like a high tech Rube Goldberg machine.` をイギリス英語に変換してください
-   `To play hooky means to skip class or work.` をイギリス英語に変換してください
-   `No Mr. Bond, I expect you to die.` をイギリス英語に変換してください
-   `Dr. Grosh will see you now.` をイギリス英語に変換してください
-   `Lunch is at 12:15 today.` をイギリス英語に変換してください
-   `We watched the footie match for a while.` をアメリカ英語に変換してください
-   `Paracetamol takes up to an hour to work.` をアメリカ英語に変換してください
-   `First, caramelise the onions.` をアメリカ英語に変換してください
-   `I spent the bank holiday at the funfair.` をアメリカ英語に変換してください
-   `I had a bicky then went to the chippy.` をアメリカ英語に変換してください
-   `I've just got bits and bobs in my bum bag.` をアメリカ英語に変換してください
-   `The car boot sale at Boxted Airfield was called off.` をアメリカ英語に変換してください
-   `Have you met Mrs Kalyani?` をアメリカ英語に変換してください
-   `Prof Joyner of King's College, London.` をアメリカ英語に変換してください
-   `Tea time is usually around 4 or 4.30.` をアメリカ英語に変換してください
-   `Mangoes are my favorite fruit.` の変換部分をハイライト表示してください
-   `I ate yogurt for breakfast.` の変換部分をハイライト表示してください
-   `We watched the footie match for a while.` の変換部分をハイライト表示してください
-   `Paracetamol takes up to an hour to work.` の変換部分をハイライト表示してください

次のテストを `tests/2_functional-tests.js` に記述してください。

-   text フィールドと locale フィールドを指定した変換: `/api/translate` への POST リクエスト
-   text フィールドと、無効な locale フィールドを指定した変換: `/api/translate` への POST リクエスト
-   text フィールドが不足している変換: `/api/translate` への POST リクエスト
-   locale フィールドが不足している変換: `/api/translate` への POST リクエスト
-   空のテキストの変換: `/api/translate` への POST リクエスト
-   変換不要テキストの変換: `/api/translate` への POST リクエスト

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提出する必要があります。

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

`text` に変換するテキスト、`locale` に `american-to-british` または `british-to-american` のいずれかを含むボディを使用して、`/api/translate` へ `POST` できます。 返されるオブジェクトには、送信した `text` と、変換後のテキストを含む `translation` が含まれている必要があります。

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/translate` ルートでは、アメリカ英語とイギリス英語の時間の記述方法を扱えるようにしてください。 たとえば、10 時 30 分は、イギリス英語では「10.30」、アメリカ英語では「10:30」と記述します。 `span` 要素に時間の文字列全体を含める必要があります。たとえば、`<span class="highlight">10:30</span>` などとします。

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/translate` ルートでは、アメリカ英語とイギリス英語の肩書や敬称の略記を扱えるようにしてください。 たとえば、Doctor Wright は、イギリス英語では「Dr Wright」、アメリカ英語では「Dr. Wright」と 略記します。 アプリが変換できるようにすべき肩書については、`/components/american-to-british-titles.js` を参照してください。

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

変換されたスペルや用語が緑色で表示されるように、`<span class="highlight">...</span>` タグで囲んでください。

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

1 つ以上の必須フィールドが不足している場合は、`{ error: 'Required field(s) missing' }` を返します。

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`text` が空の場合は、`{ error: 'No text to translate' }` を返します。

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`locale` が指定のロケール 2 種類のいずれとも一致しない場合は、`{ error: 'Invalid value for locale field' }` を返します。

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`text` が変換を必要としない場合は、`translation` の値として `"Everything looks good to me!"` を返します。

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

24 件のユニットテストがすべて記述され、成功する状態になっています。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

6 件の機能テストがすべて記述され、成功する状態になっています。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
