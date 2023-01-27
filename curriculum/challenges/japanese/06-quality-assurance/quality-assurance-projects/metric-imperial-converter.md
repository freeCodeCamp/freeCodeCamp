---
id: 587d8249367417b2b2512c41
title: メートル法とヤード・ポンド法の換算機
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

<a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://metric-imperial-converter.freecodecamp.rocks/</a> と同じような機能を持つ、フルスタック JavaScript アプリを構築してください。 プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- <a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
- <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。 必要に応じて、プロジェクトのソースコードへのリンクも「GitHub のリンク」欄に提出してください。

# --instructions--

- `/controllers/convertHandler.js` で、必要な変換ロジックを完成させてください。
- `/routes/api.js` で、必要なルートを完成させてください。
- `sample.env` ファイルを `.env` ファイルにコピーし、変数を適切に設定してください。
- テストを実行するには、`.env` ファイルの `NODE_ENV=test` をコメント解除してください。
- コンソールでテストを実行するには、コマンド `npm run test` を使用してください。 Replit コンソールを開くには、Ctrl+Shift+P (Macの場合はCmd) を押して「open shell」と入力してください。

`tests/1_unit-tests.js` に以下のテストを記述してください。

- `convertHandler` は、整数の入力を正しく読み取る必要があります。
- `convertHandler` は、小数の入力を正しく読み取る必要があります。
- `convertHandler` は、分数の入力を正しく読み取る必要があります。
- `convertHandler` は、小数を使用した分数の入力を正しく読み取る必要があります。
- `convertHandler` は、二重分数 (`3/2/3` など) の場合にエラーを正しく返す必要があります。
- 数値が入力されていない場合、`convertHandler` は、デフォルトで数値 `1` を正しく入力する必要があります。
- `convertHandler` は、それぞれの有効な入力単位を正しく読み取る必要があります。
- `convertHandler` は、無効な入力単位の場合にエラーを正しく返す必要があります。
- `convertHandler` は、有効な入力単位ごとに正しい戻り値の単位を返す必要があります。
- `convertHandler` は、有効な入力単位ごとに説明の文字列を正しく返す必要があります。
- `convertHandler` は、`gal` を `L` に正しく変換する必要があります。
- `convertHandler` は、`L` を `gal` に正しく変換する必要があります。
- `convertHandler` は、`mi` を `km` に正しく変換する必要があります。
- `convertHandler` は、`km` を `mi` に正しく変換する必要があります。
- `convertHandler` は、`lbs` を `kg` に正しく変換する必要があります。
- `convertHandler` は、`kg` を `lbs` に正しく変換する必要があります。

次のテストを `tests/2_functional-tests.js` に記述してください。

- `10L` など、有効な入力を変換する: `/api/convert` への `GET` リクエスト
- `32g` など、無効な入力を変換する: `/api/convert` への`GET` リクエスト
- `3/7.2/4kg` など、無効な数値を変換する: `/api/convert` への `GET` リクエスト
- `3/7.2/4kilomegagram` など、数値も単位も無効な入力を変換する: `/api/convert` への `GET` リクエスト
- `kg` など、数値のない入力を変換する: `/api/convert` への `GET` リクエスト

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提出してください。

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

受け取った数値と単位を含む 1 つのパラメーターを設定して `/api/convert` への `GET` を実行し、変換を実行することができます。 (ヒント: 単位の始まりを示す最初の文字のインデックスを探して、入力を分割してください)

```js

```

`'gal'` を `'L'` に変換できます。その逆も可能です。 (1 gal は 3.78541 L)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

`'lbs'` を `'kg'` に変換できます。その逆も可能です。 (1 lbs は 0.453592 kg)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1lbs');
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10lbs');
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1kg');
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10kg');
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

`'mi'` を `'km'` に変換できます。その逆も可能です。 (1 mi は 1.60934 km)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1mi');
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10mi');
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1km');
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10km');
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

すべての入力単位は大文字と小文字の両方で受け付けられるようにする必要がありますが、`initUnit` と `returnUnit` はどちらも小文字で返す必要があります。ただし、リットルのみは例外で、大文字の `'L'` で表示する必要があります。

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10L');
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10KM');
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

測定単位が無効の場合は、`'invalid unit'` を返します。

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

数値が無効の場合は、`'invalid number'` を返します。

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2gal'
    );
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

単位と数値の両方が無効な場合は、`'invalid number and unit'` を返します。

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2min'
    );
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

パラメーターでは分数、小数または両方を使用できますが (5、1/2、2.5/6 など)、何も指定されていない場合はデフォルトで 1 になります。

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=mi');
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=1/5mi');
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(
      getUserInput('url') + '/api/convert?input=1.5/7km'
    );
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(
      getUserInput('url') + '/api/convert?input=3/2.7km'
    );
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

戻り値は、`initNum`、`initUnit`、`returnNum`、`returnUnit`、およびそれぞれの単位を `'{initNum} {initUnitString} converts to {returnNum} {returnUnitString}'` という形式 (結果は小数点 5 桁に丸める) で説明した `string` で構成されます。

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=2mi');
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

16 件のユニットテストがすべて記述され、成功する状態になっています。

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter(test => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach(test => {
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

5 件の機能テストがすべて記述され、成功する状態になっています。

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter(test => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach(test => {
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
