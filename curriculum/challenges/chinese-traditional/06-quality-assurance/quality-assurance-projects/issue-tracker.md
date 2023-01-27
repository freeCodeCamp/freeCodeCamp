---
id: 587d8249367417b2b2512c42
title: 問題跟蹤器
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

構建一個 JavaScript 全棧應用，在功能上與 <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a> 類似。 可以採用下面的任意一種方式完成這個挑戰：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" target="_blank" rel="noopener noreferrer nofollow">我們的 Replit 初始化項目</a>來完成你的項目。
-   使用一個你喜歡的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

# --instructions--

-   在 `/routes/api.js` 中完成必要的路由
-   在 `tests/2_functional-tests.js` 中創建所有的功能測試
-   複製 `sample.env` 文件到 `.env` 並按需設置變量
-   在 `.env` 文件中取消註釋 `NODE_ENV=test` 來運行測試
-   使用 `npm run test` 命令在 console 中運行測試。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），並輸入“open shell”，打開 Replit 控制檯

在 `tests/2_functional-tests.js` 中編寫下以下測試：

-   用所有字段創建 issue：POST 請求到 `/api/issues/{project}`
-   用必填字段創建 issue：POST 請求到 `/api/issues/{project}`
-   用缺失必填字段創建 issue：POST 請求到 `/api/issues/{project}`
-   查看項目裏的 issue：GET 請求到 `/api/issues/{project}`
-   用 filter 過濾 project 裏的 issue：GET 請求到 `/api/issues/{project}`
-   用多個 filter 過濾 project 裏的 issue：GET 請求到 `/api/issues/{project}`
-   更新 issue 裏的一個字段：PUT 請求到 `/api/issues/{project}`
-   更新 issue 裏的多個字段：PUT 請求到 `/api/issues/{project}`
-   在缺少 `_id` 字段的情況下更新 issue：PUT 請求到 `/api/issues/{project}`
-   在沒有字段更新的情況下更新 issue：PUT 請求到 `/api/issues/{project}`
-   傳入一個無效的 `_id` 來更新 issue：PUT 請求到 `/api/issues/{project}`
-   刪除一個 issue：DELETE 請求到 `/api/issues/{project}`
-   傳入一個無效的 `_id` 來刪除 issue：DELETE 請求到 `/api/issues/{project}`
-   在缺失 `_id` 的情況下來刪除 issue：DELETE 請求到 `/api/issues/{project}`

# --hints--

你可以提交你自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

你可以發送 `POST` 請求到 `/api/issues/{projectname}`，表單數據包含必填字段 `issue_title`、`issue_text`、`created_by` 和可選字段 `assigned_to` 以及 `status_text`。

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

`POST` 請求到 `/api/issues/{projectname}` 將返回創建的對象，必須包含所有提交的全部字段。 如果沒有填選填字段將作爲空字符串返回。 此外，包含 `created_on`（日期/時間）、`updated_on`（日期/時間）、`open`（布爾型，`true` 用於打開 - 默認值， `false` 用於關閉）、`_id`。

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

如果你發送一個 `POST` 請求到 `/api/issues/{projectname}`，並且缺少必要的字段，將返回錯誤 `{ error: 'required field(s) missing' }`。

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

你可以發送一個 `GET` 請求到 `/api/issues/{projectname}` 請求所有指定 `projectname` 的 issues 數組，會展示每個 issue 的所有字段。

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

你可以發送一個 `GET` 請求到 `/api/issues/{projectname}`，通過 URL 查詢傳入字段名和值過濾請求（如，`/api/issues/{project}?open=false`）。 你可以一次傳入一個或多個字段/值對。

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

你可以發送一個 `PUT` 請求到 `/api/issues/{projectname}`，帶有一個 `_id` 以及一個或多個字段進行更新。 成功後，`updated_on` field 應該被更新，返回的應該是 `{  result: 'successfully updated', '_id': _id }`。

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

當 `PUT` 請求發送給 `/api/issues/{projectname}` 的請求體不包含 `_id` 時，應返回`{ error: 'missing _id' }`。

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

當 `PUT` 請求發送給 `/api/issues/{projectname}` 的請求體不包含任何更新的字段，應返回 `{ error: 'no update field(s) sent', '_id': _id }`。 在任何其他錯誤，應返回 `{ error: 'could not update', '_id': _id }`。

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

你可以發送一個 `DELETE` 請求到 `/api/issues/{projectname}`，帶有一個 `_id` 來刪除 issue。 如果沒有發送 `_id`，返回值爲 `{ error: 'missing _id' }`。 成功後，返回值爲 `{ result: 'successfully deleted', '_id': _id }`。 失敗時，返回值爲 `{ error: 'could not delete', '_id': _id }`。

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

所有 14 項功能測試都已完成並通過。

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
