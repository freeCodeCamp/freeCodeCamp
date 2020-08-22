---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
challengeType: 4
isHidden: false
isRequired: true
forumTopicId: 301505
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://exercise-tracker.freecodecamp.repl.co/' target='_blank'>https://exercise-tracker.freecodecamp.repl.co/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-exercisetracker' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can provide my own project, not the example URL.
    testString: "getUserInput => {
      const url = getUserInput('url');
      assert(!(new RegExp('.*/exercise-tracker\\.freecodecamp\\.repl\\.co')).test(getUserInput('url')));
    }
    "

  - text: I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and <code>_id</code>.
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
  - text: I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
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
  - text: 'I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. App will return the user object with the exercise fields added.'
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
  - text: I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). App will return the user object with added array log and count (total exercise count).
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
  - text: 'I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)'
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
