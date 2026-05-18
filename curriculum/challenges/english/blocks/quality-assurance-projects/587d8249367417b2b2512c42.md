---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

Build a full-stack JavaScript app that is functionally similar to this: <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete your project locally.
-   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

# --instructions--

-   Complete the necessary routes in `/routes/api.js`
-   Create all of the functional tests in `tests/2_functional-tests.js`
-   Copy the `sample.env` file to `.env` and set the variables appropriately
-   To run the tests automatically, add `NODE_ENV=test` in your `.env` file
-   To run the tests in the console, use the command `npm run test`

Write the following tests in `tests/2_functional-tests.js`:

-   Create an issue with every field: POST request to `/api/issues/{project}`
-   Create an issue with only required fields: POST request to `/api/issues/{project}`
-   Create an issue with missing required fields: POST request to `/api/issues/{project}`
-   View issues on a project: GET request to `/api/issues/{project}`
-   View issues on a project with one filter: GET request to `/api/issues/{project}`
-   View issues on a project with multiple filters: GET request to `/api/issues/{project}`
-   Update one field on an issue: PUT request to `/api/issues/{project}`
-   Update multiple fields on an issue: PUT request to `/api/issues/{project}`
-   Update an issue with missing `_id`: PUT request to `/api/issues/{project}`
-   Update an issue with no fields to update: PUT request to `/api/issues/{project}`
-   Update an issue with an invalid `_id`: PUT request to `/api/issues/{project}`
-   Delete an issue: DELETE request to `/api/issues/{project}`
-   Delete an issue with an invalid `_id`: DELETE request to `/api/issues/{project}`
-   Delete an issue with missing `_id`: DELETE request to `/api/issues/{project}`

# --hints--

You can provide your own project, not the example URL.

```js
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(code));
```

You can send a `POST` request to `/api/issues/{projectname}` with form data containing the required fields `issue_title`, `issue_text`, `created_by`, and optionally `assigned_to` and `status_text`.

```js
  try {
    let test_data = {
      issue_title: 'Faux Issue Title',
      issue_text: 'Functional Test - Required Fields Only',
      created_by: 'fCC'
    };
    const response = await fetch(code + '/api/issues/fcc-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(test_data)
    });
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.json();
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

The `POST` request to `/api/issues/{projectname}` will return the created object, and must include all of the submitted fields. Excluded optional fields will be returned as empty strings. Additionally, include `created_on` (date/time), `updated_on` (date/time), `open` (boolean, `true` for open - default value, `false` for closed), and `_id`.

```js
  try {
    let test_data = {
      issue_title: 'Faux Issue Title 2',
      issue_text: 'Functional Test - Every field filled in',
      created_by: 'fCC',
      assigned_to: 'Chai and Mocha'
    };
    const response = await fetch(code + '/api/issues/fcc-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(test_data)
    });
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.json();
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
```

If you send a `POST` request to `/api/issues/{projectname}` without the required fields, returned will be the error `{ error: 'required field(s) missing' }`

```js
  try {
    let test_data = { created_by: 'fCC' };
    const response = await fetch(code + '/api/issues/fcc-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ created_by: 'fCC' })
    });
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.json();
    assert.isObject(data);
    assert.property(data, 'error');
    assert.equal(data.error, 'required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

You can send a `GET` request to `/api/issues/{projectname}` for an array of all issues for that specific `projectname`, with all the fields present for each issue.

```js
  try {
    let test_data = { issue_text: 'Get Issues Test', created_by: 'fCC' };
    const url =
      code +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const response1 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { issue_title: 'Faux Issue 1' }))
    });
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    assert.isObject(data1);
    const response2 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { issue_title: 'Faux Issue 2' }))
    });
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    assert.isObject(data2);
    const response3 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { issue_title: 'Faux Issue 3' }))
    });
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    assert.isObject(data3);
    const getResponse = await fetch(url);
    if (!getResponse.ok) {
      throw Error(await getResponse.text());
    }
    const getIssues = await getResponse.json();
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
```

You can send a `GET` request to `/api/issues/{projectname}` and filter the request by also passing along any field and value as a URL query (ie. `/api/issues/{project}?open=false`). You can pass one or more field/value pairs at once.

```js
  try {
    let test_data = {
      issue_title: 'To be Filtered',
      issue_text: 'Filter Issues Test'
    };
    const url =
      code +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const response1 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' }))
    });
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    const response2 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' }))
    });
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    const response3 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Eric' }))
    });
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    const response4 = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(test_data, { created_by: 'Carol', assigned_to: 'Eric' }))
    });
    if (!response4.ok) {
      throw Error(await response4.text());
    }
    const data4 = await response4.json();
    const getSingleResponse = await fetch(url + '?created_by=Alice');
    if (!getSingleResponse.ok) {
      throw Error(await getSingleResponse.text());
    }
    const getSingle = await getSingleResponse.json();
    assert.isArray(getSingle);
    assert.lengthOf(getSingle, 3);
    const getMultipleResponse = await fetch(url + '?created_by=Alice&assigned_to=Bob');
    if (!getMultipleResponse.ok) {
      throw Error(await getMultipleResponse.text());
    }
    const getMultiple = await getMultipleResponse.json();
    assert.isArray(getMultiple);
    assert.lengthOf(getMultiple, 2);
    const copyId = getMultiple[0]._id;
    const getByIdResponse = await fetch(url + `?_id=${copyId}`);
    if (!getByIdResponse.ok) {
      throw Error(await getByIdResponse.text());
    }
    const getById = await getByIdResponse.json();
    assert.isArray(getById);
    assert.lengthOf(getById, 1);
    assert.equal(getById[0]._id, copyId, 'should be able to query a document by _id')
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

You can send a `PUT` request to `/api/issues/{projectname}` with an `_id` and one or more fields to update. On success, the `updated_on` field should be updated, and returned should be `{  result: 'successfully updated', '_id': _id }`.

```js
  try {
    let initialData = {
      issue_title: 'Issue to be Updated',
      issue_text: 'Functional Test - Put target',
      created_by: 'fCC'
    };
    const url = code + '/api/issues/fcc-project';
    const createResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(initialData)
    });
    if (!createResponse.ok) {
      throw Error(await createResponse.text());
    }
    const itemToUpdate = await createResponse.json();
    const updateResponse = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: itemToUpdate._id, issue_text: 'New Issue Text' })
    });
    if (!updateResponse.ok) {
      throw Error(await updateResponse.text());
    }
    const updateSuccess = await updateResponse.json();
    assert.isObject(updateSuccess);
    assert.deepEqual(updateSuccess, {
      result: 'successfully updated',
      _id: itemToUpdate._id
    });
    const getUpdatedResponse = await fetch(url + '?_id=' + itemToUpdate._id);
    if (!getUpdatedResponse.ok) {
      throw Error(await getUpdatedResponse.text());
    }
    const getUpdatedId = await getUpdatedResponse.json();
    assert.isArray(getUpdatedId);
    assert.isObject(getUpdatedId[0]);
    assert.isAbove(
      Date.parse(getUpdatedId[0].updated_on),
      Date.parse(getUpdatedId[0].created_on)
    );
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

When the `PUT` request sent to `/api/issues/{projectname}` does not include an `_id`, the return value is `{ error: 'missing _id' }`.

```js
  try {
    const url = code + '/api/issues/fcc-project';
    const response = await fetch(url, { method: 'PUT' });
    if (!response.ok) {
      throw Error(await response.text());
    }
    const badUpdate = await response.json();
    assert.isObject(badUpdate);
    assert.property(badUpdate, 'error');
    assert.equal(badUpdate.error, 'missing _id');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

When the `PUT` request sent to `/api/issues/{projectname}` does not include update fields, the return value is `{ error: 'no update field(s) sent', '_id': _id }`. On any other error, the return value is `{ error: 'could not update', '_id': _id }`.

```js
  try {
    const url = code + '/api/issues/fcc-project';
    const response1 = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: '5f665eb46e296f6b9b6a504d' })
    });
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const badUpdate = await response1.json();
    assert.deepEqual(badUpdate, {
      error: 'no update field(s) sent',
      _id: '5f665eb46e296f6b9b6a504d'
    });
    const response2 = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' })
    });
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const badIdUpdate = await response2.json();
    assert.deepEqual(badIdUpdate, {
      error: 'could not update',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

You can send a `DELETE` request to `/api/issues/{projectname}` with an `_id` to delete an issue. If no `_id` is sent, the return value is `{ error: 'missing _id' }`. On success, the return value is `{ result: 'successfully deleted', '_id': _id }`. On failure, the return value is `{ error: 'could not delete', '_id': _id }`.

```js
  try {
    let initialData = {
      issue_title: 'Issue to be Deleted',
      issue_text: 'Functional Test - Delete target',
      created_by: 'fCC'
    };
    const url = code + '/api/issues/fcc-project';
    const createResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(initialData)
    });
    if (!createResponse.ok) {
      throw Error(await createResponse.text());
    }
    const itemToDelete = await createResponse.json();
    assert.isObject(itemToDelete);
    const deleteResponse = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: itemToDelete._id })
    });
    if (!deleteResponse.ok) {
      throw Error(await deleteResponse.text());
    }
    const deleteSuccess = await deleteResponse.json();
    assert.isObject(deleteSuccess);
    assert.deepEqual(deleteSuccess, {
      result: 'successfully deleted',
      _id: itemToDelete._id
    });
    const noIdResponse = await fetch(url, { method: 'DELETE' });
    if (!noIdResponse.ok) {
      throw Error(await noIdResponse.text());
    }
    const noId = await noIdResponse.json();
    assert.isObject(noId);
    assert.deepEqual(noId, { error: 'missing _id' });
    const badIdDeleteResponse = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' })
    });
    if (!badIdDeleteResponse.ok) {
      throw Error(await badIdDeleteResponse.text());
    }
    const badIdDelete = await badIdDeleteResponse.json();
    assert.isObject(badIdDelete);
    assert.deepEqual(badIdDelete, {
      error: 'could not delete',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

All 14 functional tests are complete and passing.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
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
```

