---
id: bd7158d8c442eddfaeb5bd0f
title: Build a Pomodoro Clock
isRequired: true
challengeType: 3
isHidden: false
forumTopicId: 301373
---

## Description
<section id='description'>
<strong>Objective:</strong> Build a <a href='https://codepen.io' target='_blank'>CodePen.io</a> app that is functionally similar to this: <a href='https://codepen.io/freeCodeCamp/full/XpKrrW' target='_blank'>https://codepen.io/freeCodeCamp/full/XpKrrW</a>.
Fulfill the below <a href='https://en.wikipedia.org/wiki/User_story' target='_blank'>user stories</a> and get all of the tests to pass. Give it your own personal style.
You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
<strong>User Story #1:</strong> I can see an element with <code>id="break-label"</code> that contains a string (e.g. "Break Length").
<strong>User Story #2:</strong> I can see an element with <code>id="session-label"</code> that contains a string (e.g. "Session Length").
<strong>User Story #3:</strong> I can see two clickable elements with corresponding IDs: <code>id="break-decrement"</code> and <code>id="session-decrement"</code>.
<strong>User Story #4:</strong> I can see two clickable elements with corresponding IDs: <code>id="break-increment"</code> and <code>id="session-increment"</code>.
<strong>User Story #5:</strong> I can see an element with a corresponding <code>id="break-length"</code>, which by default (on load) displays a value of 5.
<strong>User Story #6:</strong> I can see an element with a corresponding <code>id="session-length"</code>, which by default displays a value of 25.
<strong>User Story #7:</strong> I can see an element with a corresponding <code>id="timer-label"</code>, that contains a string indicating a session is initialized (e.g. "Session").
<strong>User Story #8:</strong> I can see an element with corresponding <code>id="time-left"</code>. NOTE: Paused or running, the value in this field should always be displayed in <code>mm:ss</code> format (i.e. 25:00).
<strong>User Story #9:</strong> I can see a clickable element with a corresponding <code>id="start_stop"</code>.
<strong>User Story #10:</strong> I can see a clickable element with a corresponding <code>id="reset"</code>.
<strong>User Story #11:</strong> When I click the element with the id of <code>reset</code>, any running timer should be stopped, the value within <code>id="break-length"</code> should return to <code>5</code>, the value within <code>id="session-length"</code> should return to 25, and the element with <code>id="time-left"</code> should reset to it's default state.
<strong>User Story #12:</strong> When I click the element with the id of <code>break-decrement</code>, the value within <code>id="break-length"</code> decrements by a value of 1, and I can see the updated value.
<strong>User Story #13:</strong> When I click the element with the id of <code>break-increment</code>, the value within <code>id="break-length"</code> increments by a value of 1, and I can see the updated value.
<strong>User Story #14:</strong> When I click the element with the id of <code>session-decrement</code>, the value within <code>id="session-length"</code> decrements by a value of 1, and I can see the updated value.
<strong>User Story #15:</strong> When I click the element with the id of <code>session-increment</code>, the value within <code>id="session-length"</code> increments by a value of 1, and I can see the updated value.
<strong>User Story #16:</strong> I should not be able to set a session or break length to <= 0.
<strong>User Story #17:</strong> I should not be able to set a session or break length to > 60.
<strong>User Story #18:</strong> When I first click the element with <code>id="start_stop"</code>, the timer should begin running from the value currently displayed in <code>id="session-length"</code>, even if the value has been incremented or decremented from the original value of 25.
<strong>User Story #19:</strong> If the timer is running, the element with the id of <code>time-left</code> should display the remaining time in <code>mm:ss</code> format (decrementing by a value of 1 and updating the display every 1000ms).
<strong>User Story #20:</strong> If the timer is running and I click the element with <code>id="start_stop"</code>, the countdown should pause.
<strong>User Story #21:</strong> If the timer is paused and I click the element with <code>id="start_stop"</code>, the countdown should resume running from the point at which it was paused.
<strong>User Story #22:</strong> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of <code>timer-label</code> should display a string indicating a break has begun.
<strong>User Story #23:</strong> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the <code>id="break-length"</code> element.
<strong>User Story #24:</strong> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of <code>timer-label</code> should display a string indicating a session has begun.
<strong>User Story #25:</strong> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the <code>id="session-length"</code> element.
<strong>User Story #26:</strong> When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 <code>audio</code> tag and have a corresponding <code>id="beep"</code>.
<strong>User Story #27:</strong> The audio element with <code>id="beep"</code> must be 1 second or longer.
<strong>User Story #28:</strong> The audio element with id of <code>beep</code> must stop playing and be rewound to the beginning when the element with the id of <code>reset</code> is clicked.
You can build your project by forking <a href='https://codepen.io/freeCodeCamp/pen/MJjpwO' target='_blank'>this CodePen pen</a>. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code>
Once you're done, submit the URL to your working project with all its tests passing.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests: []

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
