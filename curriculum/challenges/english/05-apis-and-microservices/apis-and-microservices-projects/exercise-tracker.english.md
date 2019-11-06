---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
challengeType: 4
isRequired: true
forumTopicId: 301505
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://fuschia-custard.glitch.me/' target='_blank'>https://fuschia-custard.glitch.me/</a>.
Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Glitch using <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and <code>_id</code>.
    testString: "getUserInput => {
      const url = getUserInput('url');
      fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      }).then(
        res => {
          if (res.ok) {
            res.json().then(data => {
              assert.exists(data._id);
              assert.exists(data.username);
            });
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        },
        e => {
          throw new Error(e);
        }
      );
    }
    "
  - text: I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
    testString: "getUserInput => {
      const url = getUserInput('url');
      fetch(url + '/api/exercise/users').then(
        res => res.json().then(data => assert.isArray(data)),
        e => {
          throw new Error(e);
        }
      );
    }
    "
  - text: 'I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. App will return the user object with the exercise fields added.'
    testString: "getUserInput => {
      const url = getUserInput('url');
      fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      }).then(
        async res => {
          if (res.ok) {
            const { _id, username } = await res.json();
            const expected = {
              username,
              description: 'test',
              duration: 60,
              _id,
              date: new Date().toDateString()
            };

            fetch(url + '/api/exercise/add', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `userId=${_id}&description=${expected.description}&duration=${expected.duration}`
            }).then(async res => {
              if (res.ok) {
                const exercise = await res.json();
                assert.deepEqual(exercise, expected);
              } else {
                throw new Error(`${res.status} ${res.statusText}`);
              }
            });
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        },
        e => {
          throw new Error(e);
        }
      );
    }
    "
  - text: I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). App will return the user object with added array log and count (total exercise count).
    testString: "getUserInput => {
      const url = getUserInput('url');
      fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      }).then(
        async res => {
          if (res.ok) {
            const { _id, username } = await res.json();
            const expected = {
              username,
              description: 'test',
              duration: 60,
              _id,
              date: new Date().toDateString()
            };

            fetch(url + '/api/exercise/add', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `userId=${_id}&description=${expected.description}&duration=${expected.duration}`
            }).then(async res => {
              if (res.ok) {
                fetch(url + `/api/exercise/log?userId=${_id}`).then(
                  async res => {
                    if (res.ok) {
                      const { log } = await res.json();
                      assert.isArray(log);
                      assert.equal(1, log.length);
                    } else {
                      throw new Error(`${res.status} ${res.statusText}`);
                    }
                  },
                  e => {
                    throw new Error(e);
                  }
                );
              } else {
                throw new Error(`${res.status} ${res.statusText}`);
              }
            });
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        },
        e => {
          throw new Error(e);
        }
      );
    }
    "
  - text: 'I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)'
    testString: "getUserInput => {
      const url = getUserInput('url');
      fetch(url + '/api/exercise/new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=fcc_test_${Date.now()}`.substr(0, 29)
      }).then(
        async res => {
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
                url + `/api/exercise/log?userId=${_id}&from=1990-12-31&to=1990-01-03`
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
        },
        e => {
          throw new Error(e);
        }
      );
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
