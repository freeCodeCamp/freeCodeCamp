---
id: 587d8249367417b2b2512c42
title: 问题跟踪器
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

构建一个 JavaScript 全栈应用，在功能上与 <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a> 类似。 可以采用下面的任意一种方式完成这个挑战：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成你的项目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" target="_blank" rel="noopener noreferrer nofollow">我们的 Replit 初始化项目</a>来完成你的项目。
-   使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。 也可以将项目的源码链接提交到 GitHub Link 字段中。

# --instructions--

-   在 `/routes/api.js` 中完成必要的路由
-   在 `tests/2_functional-tests.js` 中创建所有的功能测试
-   复制 `sample.env` 文件到 `.env` 并按需设置变量
-   在 `.env` 文件中取消注释 `NODE_ENV=test` 来运行测试
-   使用 `npm run test` 命令在 console 中运行测试。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），并输入“open shell”，打开 Replit 控制台

在 `tests/2_functional-tests.js` 中编写下以下测试：

-   用所有字段创建 issue：POST 请求到 `/api/issues/{project}`
-   用必填字段创建 issue：POST 请求到 `/api/issues/{project}`
-   用缺失必填字段创建 issue：POST 请求到 `/api/issues/{project}`
-   查看项目里的 issue：GET 请求到 `/api/issues/{project}`
-   用 filter 过滤 project 里的 issue：GET 请求到 `/api/issues/{project}`
-   用多个 filter 过滤 project 里的 issue：GET 请求到 `/api/issues/{project}`
-   更新 issue 里的一个字段：PUT 请求到 `/api/issues/{project}`
-   更新 issue 里的多个字段：PUT 请求到 `/api/issues/{project}`
-   在缺少 `_id` 字段的情况下更新 issue：PUT 请求到 `/api/issues/{project}`
-   在没有字段更新的情况下更新 issue：PUT 请求到 `/api/issues/{project}`
-   传入一个无效的 `_id` 来更新 issue：PUT 请求到 `/api/issues/{project}`
-   删除一个 issue：DELETE 请求到 `/api/issues/{project}`
-   传入一个无效的 `_id` 来删除 issue：DELETE 请求到 `/api/issues/{project}`
-   在缺失 `_id` 的情况下来删除 issue：DELETE 请求到 `/api/issues/{project}`

# --hints--

你可以提交你自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

你可以发送 `POST` 请求到 `/api/issues/{projectname}`，表单数据包含必填字段 `issue_title`、`issue_text`、`created_by` 和可选字段 `assigned_to` 以及 `status_text`。

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

`POST` 请求到 `/api/issues/{projectname}` 将返回创建的对象，必须包含所有提交的全部字段。 如果没有填选填字段将作为空字符串返回。 此外，包含 `created_on`（日期/时间）、`updated_on`（日期/时间）、`open`（布尔型，`true` 用于打开 - 默认值， `false` 用于关闭）、`_id`。

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

如果你发送一个 `POST` 请求到 `/api/issues/{projectname}`，并且缺少必要的字段，将返回错误 `{ error: 'required field(s) missing' }`。

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

你可以发送一个 `GET` 请求到 `/api/issues/{projectname}` 请求所有指定 `projectname` 的 issues 数组，会展示每个 issue 的所有字段。

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

你可以发送一个 `GET` 请求到 `/api/issues/{projectname}`，通过 URL 查询传入字段名和值过滤请求（如，`/api/issues/{project}?open=false`）。 你可以一次传入一个或多个字段/值对。

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

你可以发送一个 `PUT` 请求到 `/api/issues/{projectname}`，带有一个 `_id` 以及一个或多个字段进行更新。 成功后，`updated_on` field 应该被更新，返回的应该是 `{  result: 'successfully updated', '_id': _id }`。

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

当 `PUT` 请求发送给 `/api/issues/{projectname}` 的请求体不包含 `_id` 时，应返回`{ error: 'missing _id' }`。

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

当 `PUT` 请求发送给 `/api/issues/{projectname}` 的请求体不包含任何更新的字段，应返回 `{ error: 'no update field(s) sent', '_id': _id }`。 在任何其他错误，应返回 `{ error: 'could not update', '_id': _id }`。

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

你可以发送一个 `DELETE` 请求到 `/api/issues/{projectname}`，带有一个 `_id` 来删除 issue。 如果没有发送 `_id`，返回值为 `{ error: 'missing _id' }`。 成功后，返回值为 `{ result: 'successfully deleted', '_id': _id }`。 失败时，返回值为 `{ error: 'could not delete', '_id': _id }`。

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

所有 14 项功能测试都已完成并通过。

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
