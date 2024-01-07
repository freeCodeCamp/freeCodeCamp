---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <a href="https://anonymous-message-board.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://anonymous-message-board.freecodecamp.rocks/</a>.

Working on this project will involve you writing your code using one of the following methods:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete your project locally.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard" target="_blank" rel="noopener noreferrer nofollow">our Replit starter project</a> to complete your project.
-   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit. 
-   Next, you will see a `.replit` window. 
-   Select `Use run command` and click the `Done` button. 

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

# --instructions--

1.  Set `NODE_ENV` to test without quotes when ready to write tests and DB to your databases connection string (in `.env`)
2.  Recommended to create controllers/handlers and handle routing in `routes/api.js`
3.  You will add any security features to `server.js`

Write the following tests in `tests/2_functional-tests.js`:

-   Creating a new thread: POST request to `/api/threads/{board}`
-   Viewing the 10 most recent threads with 3 replies each: GET request to `/api/threads/{board}`
-   Deleting a thread with the incorrect password: DELETE request to `/api/threads/{board}` with an invalid `delete_password`
-   Deleting a thread with the correct password: DELETE request to `/api/threads/{board}` with a valid `delete_password`
-   Reporting a thread: PUT request to `/api/threads/{board}`
-   Creating a new reply: POST request to `/api/replies/{board}`
-   Viewing a single thread with all replies: GET request to `/api/replies/{board}`
-   Deleting a reply with the incorrect password: DELETE request to `/api/replies/{board}` with an invalid `delete_password`
-   Deleting a reply with the correct password: DELETE request to `/api/replies/{board}` with a valid `delete_password`
-   Reporting a reply: PUT request to `/api/replies/{board}`

# --hints--

You can provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Only allow your site to be loaded in an iFrame on your own pages.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

Do not allow DNS prefetching.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Only allow your site to send the referrer for your own pages.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

You can send a POST request to `/api/threads/{board}` with form data including `text` and `delete_password`. The saved database record will have at least the fields `_id`, `text`, `created_on`(date & time), `bumped_on`(date & time, starts same as `created_on`), `reported` (boolean), `delete_password`, & `replies` (array).

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a POST request to `/api/replies/{board}` with form data including `text`, `delete_password`, & `thread_id`. This will update the `bumped_on` date to the comment's date. In the thread's `replies` array, an object will be saved with at least the properties `_id`, `text`, `created_on`, `delete_password`, & `reported`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const body = await fetch(url + '/api/threads/fcc_test');
  const thread = await body.json();

  const date = new Date();
  const text = `fcc_test_reply_${date}`;
  const delete_password = 'delete_me';
  const thread_id = thread[0]._id;
  const replyCount = thread[0].replies.length;

  const data = { text, delete_password, thread_id };
  const res = await fetch(url + '/api/replies/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);
    const parsed = await checkData.json();
    try {
      assert.equal(parsed.replies.length, replyCount + 1);
      assert.equal(parsed.replies[0].text, text);
      assert.equal(parsed._id, thread_id);
      assert.equal(parsed.bumped_on, parsed.replies[0].created_on);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a GET request to `/api/threads/{board}`. Returned will be an array of the most recent 10 bumped threads on the board with only the most recent 3 replies for each. The `reported` and `delete_password` fields will not be sent to the client.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test');

  if (res.ok) {
    const threads = await res.json();
    try {
      assert.equal(res.status, 200);
      assert.isAtMost(threads.length, 10);
      for (let i = 0; i < threads.length; i++) {
        assert.containsAllKeys(threads[i], ["_id", "text", "created_on", "bumped_on", "replies"]);
        assert.isAtMost(threads[i].replies.length, 3);
        assert.notExists(threads[i].delete_password);
        assert.notExists(threads[i].reported);
        for (let j = 0; j < threads[i].replies.length; j++) {
          assert.notExists(threads[i].replies[j].delete_password);
          assert.notExists(threads[i].replies[j].reported);
        }
      }
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a GET request to `/api/replies/{board}?thread_id={thread_id}`. Returned will be the entire thread with all its replies, also excluding the same fields from the client as the previous test.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  let res = await fetch(url + '/api/threads/fcc_test');
  const threads = await res.json();
  const thread_id = threads[0]._id;
  res = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);

  if (res.ok) {
    const thread = await res.json();
    try {
      assert.equal(res.status, 200);
      assert.isObject(thread);
      assert.containsAllKeys(thread, ["_id", "text", "created_on", "bumped_on", "replies"]);
      assert.isArray(thread.replies);
      assert.notExists(thread.delete_password);
      assert.notExists(thread.reported);
      for (let i = 0; i < thread.replies.length; i++) {
        assert.notExists(thread.replies[i].delete_password);
        assert.notExists(thread.replies[i].reported);
      }
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a DELETE request to `/api/threads/{board}` and pass along the `thread_id` & `delete_password` to delete the thread. Returned will be the string `incorrect password` or `success`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  let res = await fetch(url + '/api/threads/fcc_test');
  const threads = await res.json();
  const thread_id = threads[0]._id;
  let data = { thread_id, delete_password: "wrong_password" };
  const res_invalid = await fetch(url + '/api/threads/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  data = { thread_id, delete_password: "delete_me" };
  res = await fetch(url + '/api/threads/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const deleted = await res.text();
    const not_deleted = await res_invalid.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(deleted, "success");
      assert.equal(not_deleted, "incorrect password");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a DELETE request to `/api/replies/{board}` and pass along the `thread_id`, `reply_id`, & `delete_password`. Returned will be the string `incorrect password` or `success`. On success, the text of the `reply_id` will be changed to `[deleted]`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  const thread_data = {
    text: "fcc_test_thread",
    delete_password: "delete_me",
  };
  await fetch(`${url}/api/threads/fcc_test`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(thread_data)
  });
  let res = await fetch(`${url}/api/threads/fcc_test`);
  let threads = await res.json();
  const thread_id = threads[0]._id;
  
  const reply_data = { thread_id, text: "fcc_test_reply", delete_password: "delete_me" };
  await fetch(`${url}/api/replies/fcc_test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reply_data)
  });
  res = await fetch(`${url}/api/threads/fcc_test`);
  threads = await res.json();
  const reply_id = threads[0].replies[0]._id;

  const data = { thread_id, reply_id, delete_password: "delete_me" };
  res = await fetch(url + '/api/replies/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const deleted = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(deleted, "success");
      res = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);
      const thread = await res.json();
      assert.equal(thread._id, thread_id);
      assert.equal(thread.replies[0]._id, reply_id);
      assert.equal(thread.replies[0].text, "[deleted]");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a PUT request to `/api/threads/{board}` and pass along the `thread_id`. Returned will be the string `reported`. The `reported` value of the `thread_id` will be changed to `true`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const thread_id = threads[0]._id;
  const data = { thread_id };
  
  res = await fetch(`${url}/api/threads/fcc_test`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const reported = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(reported, "reported");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

You can send a PUT request to `/api/replies/{board}` and pass along the `thread_id` & `reply_id`. Returned will be the string `reported`. The `reported` value of the `reply_id` will be changed to `true`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const thread_id = threads[0]._id;
  const reply_id = threads[0].replies[0]._id;
  const data = { thread_id, reply_id };
  
  res = await fetch(`${url}/api/replies/fcc_test`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const reported = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(reported, "reported");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

All 10 functional tests are complete and passing.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 10);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
    assert.isAtLeast(test.assertions.length, 1);
  });
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
