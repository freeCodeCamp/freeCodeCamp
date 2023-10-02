---
id: 587d8249367417b2b2512c42
title: 課題トラッカー
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

<a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a> と同じような機能を持つ、フルスタック JavaScript アプリを構築してください。 プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
-   <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。 必要に応じて、プロジェクトのソースコードへのリンクも「GitHub のリンク」欄に提出してください。

# --instructions--

-   `/routes/api.js` で、必要なルートを完成させてください。
-   `tests/2_functional-tests.js` にすべての機能テストを作成してください。
-   `sample.env` ファイルを `.env` ファイルにコピーし、変数を適切に設定してください。
-   テストを実行するには、`.env` ファイルの `NODE_ENV=test` をコメント解除してください。
-   コンソールでテストを実行するには、コマンド `npm run test` を使用してください。 Replit コンソールを開くには、Ctrl+Shift+P (Macの場合はCmd) を押して「open shell」と入力してください。

`tests/2_functional-tests.js` に次のテストを記述してください。

-   すべてのフィールドを指定して課題を作成する: `/api/issues/{project}` への POST リクエスト
-   必須フィールドのみを指定して課題を作成する: `/api/issues/{project}` への POST リクエスト
-   必須フィールドが不足した状態で課題を作成する: `/api/issues/{project}` への POST リクエスト
-   プロジェクトの課題を表示する: `/api/issues/{project}` への GET リクエスト
-   プロジェクトの課題を、フィルターを 1 つ指定して表示する: `/api/issues/{project}` への GET リクエスト
-   プロジェクトの課題を、フィルターを複数指定して表示する: `/api/issues/{project}` への GET リクエスト
-   課題のフィールドを 1 つ更新する: `/api/issues/{project}` への PUT リクエスト
-   課題の複数フィールドを更新する: `/api/issues/{project}` への PUT リクエスト
-   `_id` が不足している状態で課題を更新する: `/api/issues/{project}` への PUT リクエスト
-   更新すべきフィールドがない状態で課題を更新する: `/api/issues/{project}` への PUT リクエスト
-   無効な `_id` を使用して課題を更新する: `/api/issues/{project}` への PUT リクエスト
-   課題を削除する: `/api/issues/{project}` への DELETE リクエスト
-   無効な `_id` を使用して課題を削除する: `/api/issues/{project}` への DELETE リクエスト
-   `_id` が不足している状態で課題を削除する: `/api/issues/{project}` への DELETE リクエスト

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提出してください。

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

必須フィールド `issue_title`、`issue_text`、`created_by`、およびオプションフィールド `assigned_to` および `status_text` を含むフォームデータを使用して、`/api/issues/{projectname}` へ `POST` リクエストを送信することができます。

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'Faux Issue Title',
      issue_text: 'Functional Test - Required Fields Only',
      created_by: 'fCC'
    };
    const data = await $.post(
      getUserInput('url') + '/api/issues/fcc-project',
      test_data
    );
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/issues/{projectname}` への `POST` リクエストは、そのリクエストで作成されたオブジェクトを返します。また、送信したすべてのフィールドが含まれている必要があります。 除外したオプションフィールドは空の文字列として返します。 さらに、`created_on` (日付/時間)、`updated_on` (日付/時間)、`open` (ブール値、open の場合は `true` (こちらがデフォルト値) 、closed の場合は `false`) および `_id` を含めてください。

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'Faux Issue Title 2',
      issue_text: 'Functional Test - Every field filled in',
      created_by: 'fCC',
      assigned_to: 'Chai and Mocha'
    };
    const data = await $.post(
      getUserInput('url') + '/api/issues/fcc-project',
      test_data
    );
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
    assert.property(data, 'created_on');
    assert.isNumber(Date.parse(data.created_on));
    assert.property(data, 'updated_on');
    assert.isNumber(Date.parse(data.updated_on));
    assert.property(data, 'open');
    assert.isBoolean(data.open);
    assert.isTrue(data.open);
    assert.property(data, '_id');
    assert.isNotEmpty(data._id);
    assert.property(data, 'status_text');
    assert.isEmpty(data.status_text);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/issues/{projectname}` への `POST` リクエストを必須フィールドなしで送信した場合は、エラー `{ error: 'required field(s) missing' }` を返します。

```js
async (getUserInput) => {
  try {
    let test_data = { created_by: 'fCC' };
    const data = await $.post(getUserInput('url') + '/api/issues/fcc-project', {
      created_by: 'fCC'
    });
    assert.isObject(data);
    assert.property(data, 'error');
    assert.equal(data.error, 'required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/issues/{projectname}` へ `GET` リクエストを送信して、特定の `projectname` に対するすべての課題の配列 (課題ごとに存在するすべてのフィールドを含む) を取得できます。

```js
async (getUserInput) => {
  try {
    let test_data = { issue_text: 'Get Issues Test', created_by: 'fCC' };
    const url =
      getUserInput('url') +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const data1 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 1' })
    );
    assert.isObject(data1);
    const data2 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 2' })
    );
    assert.isObject(data2);
    const data3 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 3' })
    );
    assert.isObject(data3);
    const getIssues = await $.get(url);
    assert.isArray(getIssues);
    assert.lengthOf(getIssues, 3);
    let re = new RegExp('Faux Issue \\d');
    getIssues.forEach((issue) => {
      assert.property(issue, 'issue_title');
      assert.match(issue.issue_title, re);
      assert.property(issue, 'issue_text');
      assert.property(issue, 'created_by');
      assert.property(issue, 'assigned_to');
      assert.property(issue, 'status_text');
      assert.property(issue, 'open');
      assert.property(issue, 'created_on');
      assert.property(issue, 'updated_on');
      assert.property(issue, '_id');
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/issues/{projectname}` へ `GET` リクエストを送信し、任意のフィールドと値を URL クエリとして渡すことにより、リクエストをフィルターで絞り込むことができます (例: `/api/issues/{project}?open=false`)。 1 つ以上のフィールド/値のペアを一度に渡すことができます。

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'To be Filtered',
      issue_text: 'Filter Issues Test'
    };
    const url =
      getUserInput('url') +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const data1 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' })
    );
    const data2 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' })
    );
    const data3 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Eric' })
    );
    const data4 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Carol', assigned_to: 'Eric' })
    );
    const getSingle = await $.get(url + '?created_by=Alice');
    assert.isArray(getSingle);
    assert.lengthOf(getSingle, 3);
    const getMultiple = await $.get(url + '?created_by=Alice&assigned_to=Bob');
    assert.isArray(getMultiple);
    assert.lengthOf(getMultiple, 2);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`_id` と 1 つ 以上の更新対象のフィールドを指定して、`/api/issues/{projectname}` へ `PUT` リクエストを送信することができます。 成功した場合は、`updated_on` フィールドを更新し、`{  result: 'successfully updated', '_id': _id }` を返す必要があります。

```js
async (getUserInput) => {
  try {
    let initialData = {
      issue_title: 'Issue to be Updated',
      issue_text: 'Functional Test - Put target',
      created_by: 'fCC'
    };
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const itemToUpdate = await $.post(url, initialData);
    const updateSucccess = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: itemToUpdate._id, issue_text: 'New Issue Text' }
    });
    assert.isObject(updateSucccess);
    assert.deepEqual(updateSucccess, {
      result: 'successfully updated',
      _id: itemToUpdate._id
    });
    const getUpdatedId = await $.get(url + '?_id=' + itemToUpdate._id);
    assert.isArray(getUpdatedId);
    assert.isObject(getUpdatedId[0]);
    assert.isAbove(
      Date.parse(getUpdatedId[0].updated_on),
      Date.parse(getUpdatedId[0].created_on)
    );
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/issues/{projectname}` へ送信した `PUT` リクエストに `_id` が含まれていない場合、戻り値は `{ error: 'missing _id' }` です。

```js
async (getUserInput) => {
  try {
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const badUpdate = await $.ajax({ url: url, type: 'PUT' });
    assert.isObject(badUpdate);
    assert.property(badUpdate, 'error');
    assert.equal(badUpdate.error, 'missing _id');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/issues/{projectname}` へ送信した `PUT` リクエストに更新フィールドが含まれていない 場合、戻り値は `{ error: 'no update field(s) sent', '_id': _id }` です。 それ以外のエラーでは、戻り値は `{ error: 'could not update', '_id': _id }` です。

```js
async (getUserInput) => {
  try {
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const badUpdate = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: '5f665eb46e296f6b9b6a504d' }
    });
    assert.deepEqual(badUpdate, {
      error: 'no update field(s) sent',
      _id: '5f665eb46e296f6b9b6a504d'
    });
    const badIdUpdate = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' }
    });
    assert.deepEqual(badIdUpdate, {
      error: 'could not update',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`_id` を指定して `/api/issues/{projectname}` へ `DELETE` リクエストを送信して、課題を削除することができます。 `_id` が送信されなかった場合、戻り値は `{ error: 'missing _id' }` です。 成功した場合、戻り値は `{ result: 'successfully deleted', '_id': _id }` です。 失敗した場合、戻り値は `{ error: 'could not delete', '_id': _id }` です。

```js
async (getUserInput) => {
  try {
    let initialData = {
      issue_title: 'Issue to be Deleted',
      issue_text: 'Functional Test - Delete target',
      created_by: 'fCC'
    };
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const itemToDelete = await $.post(url, initialData);
    assert.isObject(itemToDelete);
    const deleteSuccess = await $.ajax({
      url: url,
      type: 'DELETE',
      data: { _id: itemToDelete._id }
    });
    assert.isObject(deleteSuccess);
    assert.deepEqual(deleteSuccess, {
      result: 'successfully deleted',
      _id: itemToDelete._id
    });
    const noId = await $.ajax({ url: url, type: 'DELETE' });
    assert.isObject(noId);
    assert.deepEqual(noId, { error: 'missing _id' });
    const badIdDelete = await $.ajax({
      url: url,
      type: 'DELETE',
      data: { _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' }
    });
    assert.isObject(badIdDelete);
    assert.deepEqual(badIdDelete, {
      error: 'could not delete',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

14 件の機能テストがすべて記述され、成功する状態になっています。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    assert.isAtLeast(getTests.length, 14, 'At least 14 tests passed');
    getTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
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
