---
id: 672bb02009ffc0797ca567ab
title: What Are Best Practices for Progress Indication on Forms, Registration, and Setup?
challengeType: 19
dashedName: what-are-best-practices-for-progress-indication-on-forms-registration-and-setup
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS and JavaScript that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

Progress indication is a way to show users how far they are in a process. It can be used in forms, registration, and setup processes. The goal is to help users understand where they are in the process and how much more they need to do.

For example, you can use a progress indication bar to show users what is left to do when filling forms. You don't want to create a situation where the user needs to fill out a lengthy form and they don't know how many more steps they need to complete. Transparency is key so the user knows whether they have enough time to sit down and complete the form or if they need to come back later.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form id="multiStepForm">
  <div class="form-progress">
    <label class="progress-label">Form progress</label>
    <div class="progress-container">
      <div class="progress-bar"></div>
      <div class="progress-text">Step 1 of 3</div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Personal Information</legend>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <label for="address">Street Address:</label>
    <input type="text" id="address" name="address" required>

    <label for="city">City:</label>
    <input type="text" id="city" name="city" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Review & Submit</legend>
    <p>Please review your information before submitting.</p>

    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>
<script src="index.js"></script>

```

```css
.form-progress {
  max-width: 500px;
  margin: 20px auto 30px;
  font-family: Arial, sans-serif;
}

.progress-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.progress-container {
  position: relative;
  background-color: #555; 
  border-radius: 8px;
  height: 30px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  width: 0; 
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  user-select: none;
}

form {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0 0 20px;
}

legend {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  color: #222;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 18px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .form-progress, form {
    max-width: 90%;
    margin: 20px auto;
  }
}
```

```js
const form = document.getElementById('multiStepForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const progressText = form.querySelector('.progress-text');
const totalSteps = steps.length;

let currentStep = 0;

function updateProgress() {
  const percent = ((currentStep + 1) / totalSteps) * 100;
  progressBar.style.width = percent + '%';
  progressText.textContent = `Step ${currentStep + 1} of ${totalSteps}`;
}

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  updateProgress();
}

form.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

form.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

showStep(currentStep);

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted!');
});

```

:::

When designing a progress indication section, there are a few best practices to keep in mind. The first consideration is to keep it simple. You don't want to overwhelm the user with too much information where they get frustrated and leave the site.

The second consideration is to make it possible to go back to previous steps. This is important because users may want to go back and check their previous answers or make changes.

Another consideration is to make the progress indication section easy to find. If the user can't find it, they won't know how far they are in the process.

The last consideration is to have clear section titles, percentages, or steps. If you just have a progress bar with no context, the user won't know what it means.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<form id="progressForm">
  <div class="form-progress" aria-label="Form progress">
    <label class="progress-label">Step <span id="currentStep">1</span> of <span id="totalSteps">4</span> (<span id="percentage">25%</span>)</label>
    <div class="progress-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25">
      <div class="progress-bar"></div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Basic Information</legend>
    <p>Please enter your basic information.</p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Contact Details</legend>
    <p>How can we reach you?</p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <p>Where do you live?</p>
    <label for="address">Street:</label>
    <input type="text" id="address" name="address" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 4 -->
  <fieldset class="form-step">
    <legend>Review</legend>
    <p>Review your answers before submitting.</p>

    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>
<script src="index.js"></script>
```

```css
.form-progress {
  max-width: 500px;
  margin: 20px auto 30px;
  font-family: Arial, sans-serif;
}

.progress-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.progress-container {
  position: relative;
  background-color: #555;
  border-radius: 8px;
  height: 30px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  width: 0;
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  user-select: none;
}

form {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0 0 20px;
}

legend {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  color: #222;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 18px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .form-progress, form {
    max-width: 90%;
    margin: 20px auto;
  }
}
```

```js
const form = document.getElementById('progressForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const currentStepSpan = document.getElementById('currentStep');
const totalStepsSpan = document.getElementById('totalSteps');
const percentageSpan = document.getElementById('percentage');

const totalSteps = steps.length;
let currentStep = 0;

totalStepsSpan.textContent = totalSteps;

function updateProgress() {
  const percent = Math.round(((currentStep + 1) / totalSteps) * 100);
  progressBar.style.width = percent + '%';
  currentStepSpan.textContent = currentStep + 1;
  percentageSpan.textContent = percent + '%';

  // Update ARIA attribute
  form.querySelector('.progress-container').setAttribute('aria-valuenow', percent);
}

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  updateProgress();
}

form.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

form.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted! Thanks!');
});

showStep(currentStep);

```

:::

These are just a few best practices to keep in mind when designing progress indication on forms, registration, and setup processes. Study a few examples on big websites and see how they implement progress indication. Then test your design with real users to see how well it works.

# --questions--

## --text--

What is the primary goal of using a progress indication in forms or registration processes?

## --answers--

To entertain users while they complete the form.

### --feedback--

Focus on the purpose of providing users with information about their progress.

---

To inform users about how far they are in the process and what is left to do.

---

To reduce the number of steps in the process.

### --feedback--

Focus on the purpose of providing users with information about their progress.

---

To speed up the form submission process.

### --feedback--

Focus on the purpose of providing users with information about their progress.

## --video-solution--

2

## --text--

Why is it important to allow users to go back to previous steps in a form or registration process?

## --answers--

To let users change their answers or review previous entries.

---

To make the form more complex.

### --feedback--

Think about why users might need to revisit earlier parts of the process.

---

To limit the number of steps in the process.

### --feedback--

Think about why users might need to revisit earlier parts of the process.

---

To increase the time users spend on the site.

### --feedback--

Think about why users might need to revisit earlier parts of the process.

## --video-solution--

1

## --text--

What should you consider when placing a progress indication section on a webpage?

## --answers--

It should be as small as possible to avoid distracting the user.

### --feedback--

Consider how users will interact with and understand the progress indication.

---

It should be easy to find and clearly labeled with context like section titles or percentages.

---

It should be hidden until the user reaches the final step.

### --feedback--

Consider how users will interact with and understand the progress indication.

---

It should only include a visual progress bar with no text.

### --feedback--

Consider how users will interact with and understand the progress indication.

## --video-solution--

2
