---
id: bd7158d8c442eddfaeb5bd0f
title: Build a 25 + 5 Clock
challengeType: 14
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Objective:** Build an app that is functionally similar to this: <a href="https://25--5-clock.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://25--5-clock.freecodecamp.rocks</a>.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** I can see an element with `id="break-label"` that contains a string (e.g. "Break Length").

**User Story #2:** I can see an element with `id="session-label"` that contains a string (e.g. "Session Length").

**User Story #3:** I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.

**User Story #4:** I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.

**User Story #5:** I can see an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.

**User Story #6:** I can see an element with a corresponding `id="session-length"`, which by default displays a value of 25.

**User Story #7:** I can see an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").

**User Story #8:** I can see an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in `mm:ss` format (i.e. 25:00).

**User Story #9:** I can see a clickable element with a corresponding `id="start_stop"`.

**User Story #10:** I can see a clickable element with a corresponding `id="reset"`.

**User Story #11:** When I click the element with the id of `reset`, any running timer should be stopped, the value within `id="break-length"` should return to `5`, the value within `id="session-length"` should return to 25, and the element with `id="time-left"` should reset to its default state.

**User Story #12:** When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.

**User Story #13:** When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.

**User Story #14:** When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.

**User Story #15:** When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.

**User Story #16:** I should not be able to set a session or break length to &lt;= 0.

**User Story #17:** I should not be able to set a session or break length to > 60.

**User Story #18:** When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.

**User Story #19:** If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).

**User Story #20:** If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.

**User Story #21:** If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.

**User Story #22:** When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.

**User Story #23:** When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.

**User Story #24:** When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.

**User Story #25:** When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.

**User Story #26:** When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have a corresponding `id="beep"`.

**User Story #27:** The audio element with `id="beep"` must be 1 second or longer.

**User Story #28:** The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.

# --hints--

You should have an element with `id="break-label"` that contains a string (e.g. "Break Length").

```js
const breakTitle = document.getElementById('break-label');
assert.isAbove(
  breakTitle.innerText.length,
  0,
  'Element does not contain a string'
);
```

You should have an element with `id="session-label"` that contains a string (e.g. "Session Length").

```js
const sessionTitle = document.getElementById('session-label');
assert.isAbove(
  sessionTitle.innerText.length,
  0,
  'Element does not contain a string'
);
```

You should have two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.

```js
assert.isNotNull(document.getElementById('break-decrement'));
assert.isNotNull(document.getElementById('session-decrement'));
```

You should have two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.

```js
assert.isNotNull(document.getElementById('break-increment'));
assert.isNotNull(document.getElementById('session-increment'));
```

You should have an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.

```js
const breakLength = document.getElementById('break-length');
assert.strictEqual(
  breakLength.nodeName.toLowerCase() === 'input'
    ? breakLength.value
    : breakLength.innerText,
  '5',
  'A value of 5 is not displayed by default'
);
```

You should have an element with a corresponding `id="session-length"`, which by default displays a value of 25.

```js
const sessionLength = document.getElementById('session-length');
assert.strictEqual(
  sessionLength.nodeName.toLowerCase() === 'input'
    ? sessionLength.value
    : sessionLength.innerText,
  '25',
  'A value of 25 is not displayed by default'
);
```

You should have an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").

```js
const timerLabel = document.getElementById('timer-label');
assert.isAbove(
  timerLabel.innerText.length,
  0,
  'Element does not contain a string'
);
```

You should have an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in `mm:ss` format (i.e. 25:00).

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const target = document.getElementById('time-left');
  assert.isNotNull(target);
  assert.strictEqual(
    timerRe.exec(target.innerText)[1],
    '25',
    'time-left is not formatted correctly'
  );
  // Set session length to 60
  Array(35).fill('session-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // wait for 1.5 seconds to allow any re-renders to catch up
  await timeout(1500);
  assert.strictEqual(
    timerRe.exec(target.innerText)[1],
    '60',
    'time-left is not formatted correctly'
  );
})();
```

You should have a clickable element with a corresponding `id="start_stop"`.

```js
assert.isNotNull(document.getElementById('start_stop'));
```

You should have a clickable element with a corresponding `id="reset"`.

```js
assert.isNotNull(document.getElementById('reset'));
```

When I click the element with the id of `reset`, any running timer should be stopped, the value within `id="break-length"` should return to `5`, the value within `id="session-length"` should return to 25, and the element with `id="time-left"` should reset to its default state.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timeLeftElement = document.getElementById('time-left');

  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  window.setTimeout = (fun) => {
    return savedSetTimeout(fun, 30);
  };
  window.setInterval = (fun) => {
    return savedSetInterval(fun, 30);
  };

  // decrement session and break length
  Array(60).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  Array(60).fill('break-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  window.setTimeout = savedSetTimeout;
  window.setInterval = savedSetInterval;

  // once timer has reached zero wait 1.5 seconds then reset and
  // see if every default value is reset
  await timeout(1500);

  Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  const timerLabelAfterReset =
    document.getElementById('timer-label').innerText;
  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const secondsAfterReset = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  // see if timer label changed back
  assert.strictEqual(
    timerLabelAfterReset,
    document.getElementById('timer-label') &&
    document.getElementById('timer-label').innerText,
    'Default timer label was not properly reset '
  );

  // wait another 1.5 seconds to be sure value has not changed
  // (25 + 5 clock is stopped)
  await timeout(1500);

  const breakLengthElement = document.getElementById('break-length');
  assert.strictEqual(
    breakLengthElement.nodeName.toLowerCase() === 'input'
      ? breakLengthElement.value
      : breakLengthElement.innerText,
    '5',
    'Default values for break length were not properly reset'
  );

  const sessionLengthElement = document.getElementById('session-length');
  assert.strictEqual(
    sessionLengthElement.nodeName.toLowerCase() === 'input'
      ? sessionLengthElement.value
      : sessionLengthElement.innerText,
    '25',
    'Default values for session length were not properly reset'
  );

  const secondsAfterAWhile = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.strictEqual(
    secondsAfterAWhile,
    secondsAfterReset,
    '25 + 5 has paused but time continued elapsing'
  );
})();
```

When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.

```js
Array(4).fill('break-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const breakLengthElement = document.getElementById('break-length');
assert.strictEqual(
  breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText,
  '1'
);
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
Array.of('break-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
assert.strictEqual(
  breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText,
  '4'
);
```

When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.

```js
Array(4).fill('break-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const breakLengthElement = document.getElementById('break-length');
assert.strictEqual(
  breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText,
  '8'
);
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
Array.of('break-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
assert.strictEqual(
  breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText,
  '6'
);
```

When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.

```js
Array(4).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const sessionLengthElement = document.getElementById('session-length');
assert.strictEqual(
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText,
  '21'
);
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
Array.of('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
assert.strictEqual(
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText,
  '24'
);
```

When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.

```js
Array(4).fill('session-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const sessionLengthElement = document.getElementById('session-length');
assert.strictEqual(
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText,
  '28'
);
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
Array.of('session-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
assert.strictEqual(
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText,
  '26'
);
```

I should not be able to set a session or break length to &lt;= 0.

```js
Array(10).fill('break-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const breakLengthElement = document.getElementById('break-length');
assert.strictEqual(
  breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText,
  '1',
  'Value in element with id of "break-length" is less than 1.'
);
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
Array(30).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const sessionLengthElement = document.getElementById('session-length');
assert.strictEqual(
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText,
  '1',
  'Value in element with id of "session-length" is less than 1.'
);
```

I should not be able to set a session or break length to > 60.

```js
Array(60).fill('break-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const breakLengthElement = document.getElementById('break-length');
assert.strictEqual(
  breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText,
  '60',
  'Value in element with id of "break-length" is greater than 60.'
);
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
Array(40).fill('session-increment').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const sessionLengthElement = document.getElementById('session-length');
assert.strictEqual(
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText,
  '60',
  'Value in element with id of "session-length" is greater than 60.'
);
```

When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.

```js
Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
const sessionLengthElement = document.getElementById('session-length');
assert.strictEqual(
  timerRe.exec(document.getElementById('time-left').innerText)[1],
  sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText
);

// stop the 25 + 5 clock
Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});
```

If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  await timeout(2500);

  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const secondsBefore = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  // wait 1.5 seconds then see if displayed time has changed
  // (decremented)
  await timeout(1500);

  const secondsAfter = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.isAbove(
    +secondsBefore,
    +secondsAfter,
    '25 + 5 clock has started but time displayed is not changing '
  );

  // stop the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
})();
```

If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const secondsBefore = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  // wait 1.5 seconds then see if displayed time has changed
  await timeout(1500);

  const secondsAfter = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.notStrictEqual(
    secondsAfter,
    secondsBefore,
    '25 + 5 has started but time displayed is not changing'
  );

  // Pause the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  // wait another 1.5 seconds to be sure value has not changed
  await timeout(1500);

  const secondsAfterPause = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.strictEqual(
    secondsAfterPause,
    secondsAfter,
    '25 + 5 clock has paused but time continued elapsing'
  );
})();
```

If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const secondsBefore = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  // wait 1.5 seconds then see if displayed time has changed
  await timeout(1500);

  const secondsAfter = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.notStrictEqual(
    secondsAfter,
    secondsBefore,
    '25 + 5 clock has started but time displayed is not changing'
  );

  // Pause the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  // wait another 1.5 seconds to be sure value has not changed
  await timeout(1500);

  const secondsAfterPause = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.strictEqual(
    secondsAfterPause,
    secondsAfter,
    '25 + 5 clock has paused but time continued elapsing'
  );

  // Resume the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  // wait another 1.5 seconds to be sure time is decrementing again
  await timeout(1500);

  const secondsAfterResume = timerRe.exec(
    document.getElementById('time-left').innerText
  )[2];

  assert.isBelow(
    +secondsAfterResume,
    +secondsAfterPause,
    '25 + 5 clock has resumed but displayed time is not changing '
  );

  // stop the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
})();
```

When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timeLeftElement = document.getElementById('time-left');
  const timerLabelElement = document.getElementById('timer-label');

  Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  window.setTimeout = (fun) => {
    return savedSetTimeout(fun, 30);
  };
  window.setInterval = (fun) => {
    return savedSetInterval(fun, 30);
  };

  // we decrement session time to the minimum (1 minute)
  Array(60).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  let tLabelA = timerLabelElement.innerHTML;

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  await timeout(1500);

  const breakLengthElement = document.getElementById('break-length');
  const breakLength = +(breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText);
  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const breakTime = +timerRe.exec(
    document.getElementById('time-left').innerText
  )[1];
  assert.isAtMost(
    breakTime,
    breakLength,
    "Break time didn't start with the correct value."
  );

  let tLabelB = timerLabelElement.innerHTML;

  assert.notStrictEqual(
    tLabelB,
    tLabelA,
    "Timer has reached zero but didn't switch to Break time"
  );
})();
```

When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timeLeftElement = document.getElementById('time-left');
  const timerLabelElement = document.getElementById('timer-label');

  Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  window.setTimeout = (fun) => {
    return savedSetTimeout(fun, 30);
  };
  window.setInterval = (fun) => {
    return savedSetInterval(fun, 30);
  };

  // we decrement session time to the minimum (1 minute)
  Array(60).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  let tLabelA = timerLabelElement.innerHTML;

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  // wait while timer label switches
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      observer.disconnect();
      resolve();
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timerLabelElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  const tLabelB = timerLabelElement.innerHTML;

  assert.notStrictEqual(
    tLabelB,
    tLabelA,
    "Timer has reached zero but didn't switch to Break time"
  );

  const breakLengthElement = document.getElementById('break-length');
  const breakLength = +(breakLengthElement.nodeName.toLowerCase() === 'input'
    ? breakLengthElement.value
    : breakLengthElement.innerText);
  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const breakTime = +timerRe.exec(
    document.getElementById('time-left').innerText
  )[1];
  assert.strictEqual(
    breakTime,
    breakLength,
    "Timer has switched to Break time, but it didn't start with " +
      'the correct value.'
  );

  // stop the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
})();
```

When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timeLeftElement = document.getElementById('time-left');
  const timerLabelElement = document.getElementById('timer-label');

  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  window.setTimeout = (fun) => {
    return savedSetTimeout(fun, 30);
  };
  window.setInterval = (fun) => {
    return savedSetInterval(fun, 30);
  };

  // decrement session length and break length to the minimum (1 minute)
  Array(60).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  Array(60).fill('break-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  const breakLabel = timerLabelElement.innerHTML;

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  await timeout(1500);

  const sessionLabel = timerLabelElement.innerHTML;

  assert.notStrictEqual(
    sessionLabel,
    breakLabel,
    "Timer has reached zero but didn't switch back to Session time."
  );

  // stop the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
})();
```

When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timeLeftElement = document.getElementById('time-left');
  const timerLabelElement = document.getElementById('timer-label');

  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  window.setTimeout = (fun) => {
    return savedSetTimeout(fun, 30);
  };
  window.setInterval = (fun) => {
    return savedSetInterval(fun, 30);
  };

  // decrement session length and break length to the minimum (1 minute)
  Array(60).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  Array(60).fill('break-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // start the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  // wait while timer label switches
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      observer.disconnect();
      resolve();
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timerLabelElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  let tLabelA = timerLabelElement.innerHTML;

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  // wait while timer label switches
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      observer.disconnect();
      resolve();
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timerLabelElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  const tLabelB = timerLabelElement.innerHTML;

  assert.notStrictEqual(
    tLabelB,
    tLabelA,
    "Timer has reached zero but didn't switch to Session time"
  );

  const sessionLengthElement = document.getElementById('session-length');
  const sessionLength = +(sessionLengthElement.nodeName.toLowerCase() === 'input'
    ? sessionLengthElement.value
    : sessionLengthElement.innerText);
  const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
  const currentTime = +timerRe.exec(
    document.getElementById('time-left').innerText
  )[1];
  assert.strictEqual(
    currentTime,
    sessionLength,
    'Timer has switched back to Session time, but it ' +
      "didn't start with the correct value."
  );

  // stop the 25 + 5 clock
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
})();
```

When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have a corresponding `id="beep"`.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const timeLeftElement = document.getElementById('time-left');

  assert.isNotNull(
    document.querySelector('audio#beep'),
    'There is no audio tag with ID "beep" on the page.'
  );

  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  window.setTimeout = (fun) => {
    return savedSetTimeout(fun, 30);
  };
  window.setInterval = (fun) => {
    return savedSetInterval(fun, 30);
  };

  // decrement session time to the minimum (1 minute)
  Array(60).fill('session-decrement').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });
  // start the 25 + 5 clock
  document.getElementById('beep').volume = 0;
  Array.of('start_stop').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
    if (key && typeof key.click === 'function') {
      key.click();
    }
  });

  // wait while timer reaches 00:00
  await new Promise((resolve, reject) => {
    var observer = new MutationObserver(() => {
      if (/^00[\.:,\/]00$/.test(timeLeftElement.innerText)) {
        observer.disconnect();
        resolve();
      }
    });
    // pass in the timeLeftElement node, as well as the observer options
    observer.observe(timeLeftElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  await timeout(1500);

  window.setTimeout = savedSetTimeout;
  window.setInterval = savedSetInterval;

  await timeout(200);

  assert.isFalse(
    document.getElementById('beep').paused,
    'Timer has reached zero but audio is not playing while it should.'
  );
})();
```

The audio element with `id="beep"` must be 1 second or longer.

```js
(async () => {
  const audio = document.querySelector('audio#beep');
  assert.isNotNull(
    audio,
    'There is no audio tag with ID "beep" on the page.'
  );

  if (audio.readyState === 0) {
    // Wait for the audio to load.
    await new Promise((resolve) => {
      const listener = audio.addEventListener('loadeddata', () => {
        if (audio.readyState > 0) {
          audio.removeEventListener('loadeddata', listener);
          resolve();
        }
      });
    });
  }

  assert.isAbove(
    document.getElementById('beep').duration,
    1,
    'Audio element with id="beep" is not at least 1 second long.'
  );
})();
```

The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.

```js
// Call document.getElementById('beep') each time to overcome framework cache
document.getElementById('beep').play();
Array.of('reset').map((buttonId) => document.getElementById(buttonId)).forEach((key) => {
  if (key && typeof key.click === 'function') {
    key.click();
  }
});

assert.isTrue(
  document.getElementById('beep').paused,
  'Audio element was not stopped when reset was clicked.'
);

assert.strictEqual(
  document.getElementById('beep').currentTime,
  0,
  'Audio element was not rewound when reset was clicked. HINT: use ' +
    'the currentTime property of the audio element to rewind.'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <body>
    <!--Change code below this line-->
      <p>Hello from HTML!</p>
    <!--Change code above this line-->
  </body>
</html>
```

```css

```

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Timer />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello from JSX !</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
// solution required
```
