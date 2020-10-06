---
id: 5a8b073d06fa14fcfde687aa
challengeType: 4
forumTopicId: 301505
title: 运动跟踪器
---

## Description
<section id='description'>
构建一个功能类似于 <a href='https://fuschia-custard.glitch.me/' target='_blank'>https://fuschia-custard.glitch.me/</a> 的 JavaScript 全栈应用。
在开发这个项目时，我们推荐你在 <a href='https://glitch.com/'>Glitch</a> 上编码。编码完成之后，你可以把应用主页的链接复制到屏幕的输入框中，测试你的代码是否能通过项目需求。当然你也可以基于其他的平台来完成自己的项目，只要提供一个公开的主页便于我们测试就行。
参考示例：你可以通过 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-exercisetracker/'>这个链接</a> 访问在 Glitch 上的项目，或者从 GitHub 上 clone <a href='https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/'>这个仓库的代码</a>。如果你使用 Glitch，请记住将项目链接保存到妥当的地方。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 提供独立的项目, 而不是例程 url.
    testString: "getUserInput => {
      const url = getUserInput('url');
      assert(!(new RegExp('.*/fuschia-custard\\.glitch\\.me\\.*')).test(getUserInput('url')));
    }
    "

  - text: 通过指定 `/api/exercise/new-user` 的 username 参数来创建用户, 并且返回一个具有 username 和 _id 的对象。
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const res = await fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      });

      if (res.ok) {
        const { _id, username } = await res.json();
          assert.exists(_id);
          assert.exists(username);
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "
  - text: 通过指定 `api/exercise/users` 的参数为创建用户时相同的信息，来获取到一个用户的数组。
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const res = await fetch(url + '/api/exercise/users');

      if (res.ok) {
        const data = await res.json();
        assert.isArray(data);
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "
  - text: 通过指定 `/api/exercise/add` 的 userId、description、duration 和 date（可选）参数, 去添加一条练习记录。 当没有传入 date 的时候，默认采用当前日期。 应用程序将返回添加了练习字段的用户对象。
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const res = await fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      });

      if (res.ok) {
        const { _id, username } = await res.json();
        const expected = {
          username,
          description: 'test',
          duration: 60,
          _id,
          date: 'Mon Jan 01 1990'
        };

        const addRes = await fetch(url + '/api/exercise/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `userId=${_id}&description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
        });
        if (addRes.ok) {
          const actual = await addRes.json();
          assert.deepEqual(actual, expected);
        } else {
          throw new Error(`${addRes.status} ${addRes.statusText}`);
        }
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "
  - text: 通过指定 `/api/exercise/log` 的 userId 参数，可以获取任意用户的练习日志和总的练习次数。
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const res = await fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      });

      if (res.ok) {
        const { _id, username } = await res.json();
        const expected = {
          username,
          description: 'test',
          duration: 60,
          _id,
          date: new Date().toDateString()
        };

        const addRes = await fetch(url + '/api/exercise/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `userId=${_id}&description=${expected.description}&duration=${expected.duration}`
        });
        if (addRes.ok) {
          const logRes = await fetch(url + `/api/exercise/log?userId=${_id}`);
          if (logRes.ok) {
            const { log } = await logRes.json();
            assert.isArray(log);
            assert.equal(1, log.length);
          } else {
            throw new Error(`${logRes.status} ${logRes.statusText}`);
          }
        } else {
          throw new Error(`${addRes.status} ${addRes.statusText}`);
        }
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "
  - text: 我还可以通过传递可选参数 from & to 或 limit 来检索任何用户的部分日志。(日期格式如： yyyy-mm-dd, limit = int)
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const res = await fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      });

      if (res.ok) {
        const { _id, username } = await res.json();
        const expected = {
          username,
          description: 'test',
          duration: 60,
          _id,
          date: new Date().toDateString()
        };

        const addExerciseRes = await fetch(url + '/api/exercise/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `userId=${_id}&description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
        });
        const addExerciseTwoRes = await fetch(url + '/api/exercise/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `userId=${_id}&description=${expected.description}&duration=${expected.duration}&date=1990-01-02`
        });
        if (addExerciseRes.ok && addExerciseTwoRes.ok) {
          const logRes = await fetch(
            url + `/api/exercise/log?userId=${_id}&from=1989-12-31&to=1990-01-03`
          );
          if (logRes.ok) {
            const { log } = await logRes.json();
            assert.isArray(log);
            assert.equal(2, log.length);
          } else {
            throw new Error(`${logRes.status} ${logRes.statusText}`);
          }

          const limitRes = await fetch(
            url + `/api/exercise/log?userId=${_id}&limit=1`
          );
          if (limitRes.ok) {
            const { log } = await limitRes.json();
            assert.isArray(log);
            assert.equal(1, log.length);
          } else {
            throw new Error(`${limitRes.status} ${limitRes.statusText}`);
          }
        } else {
          throw new Error(`${res.status} ${res.statusText}`);
        }
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

</section>
