---
id: 650300a25b6f72964ab8aca6
title: Step 18
challengeType: 0
dashedName: step-18
---

# --description--

To make the `id` more unique, add another hyphen and use <dfn>Date.now()</dfn>.

`Date.now()` returns the number of milliseconds elapsed since `January 1, 1970 00:00:00 UTC`.

```js
console.log(Date.now()); // 1628586800000
```

To see the new result, click on the `"Add New Task"` button. Then add a title of `WALK DOG` and click on the `"Add Task"` button. Open up the console to see the result.

# --hints--

You should add `-${Date.now()}` to `${titleInput.value.toLowerCase().split(' ').join('-')}`. Don't forget it needs to be inside the template string.

```js
assert.match(code, /\s*id:\s*`\$\{titleInput\.value\.toLowerCase\(\s*\)\.split\(\s*('|")\s{1}\1\s*\)\.join\(\s*('|")-\2\s*\)\}-\$\{Date\.now\(\s*\)\}`\s*/)
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Learn localStorage by Building a Todo App</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <main>
    <h1>Todo App</h1>
    <div class="todo-app">
      <button id="open-task-form-btn" class="btn large-btn">
        Add New Task
      </button>
      <form class="task-form hidden" id="task-form">
        <div class="task-form-header">
          <button id="close-task-form-btn" class="close-task-form-btn" type="button" aria-label="close">
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
          </button>
        </div>
        <div class="task-form-body">
          <label class="task-form-label" for="title-input">Title</label>
          <input required type="text" class="form-control" id="title-input" value="" />
          <label class="task-form-label" for="date-input">Date</label>
          <input type="date" class="form-control" id="date-input" value="" />
          <label class="task-form-label" for="description-input">Description</label>
          <textarea class="form-control" id="description-input" cols="30" rows="5"></textarea>
        </div>
        <div class="task-form-footer">
          <button id="add-or-update-task-btn" class="btn large-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
      <dialog id="confirm-close-dialog">
        <form method="dialog">
          <p class="discard-message-text">Discard unsaved changes?</p>
          <div class="confirm-close-dialog-btn-container">
            <button id="cancel-btn" class="btn">
              Cancel
            </button>
            <button id="discard-btn" class="btn">
              Discard
            </button>
          </div>
        </form>
      </dialog>
      <div id="tasks-container"></div>
    </div>
  </main>
  <script src="script.js"></script>
</body>

</html>
```

```css
:root {
  --white: #fff;
  --light-grey: #f5f6f7;
  --dark-grey: #0a0a23;
  --yellow: #f1be32;
  --golden-yellow: #feac32;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--dark-grey);
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: var(--light-grey);
  margin: 20px 0 40px 0;
}

.todo-app {
  background-color: var(--white);
  width: 300px;
  height: 350px;
  border: 5px solid var(--yellow);
  border-radius: 8px;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  cursor: pointer;
  width: 100px;
  margin: 10px;
  color: var(--dark-grey);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}

.large-btn {
  width: 80%;
  font-size: 1.2rem;
  align-self: center;
  justify-self: center;
}

.close-task-form-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.close-icon {
  width: 20px;
  height: 20px;
}

.task-form {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  height: 350px;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}

.task-form-header {
  display: flex;
  justify-content: flex-end;
}

.task-form-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.task-form-footer {
  display: flex;
  justify-content: center;
}

.task-form-label,
#title-input,
#date-input,
#description-input {
  display: block;
}

.task-form-label {
  margin-bottom: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

#title-input,
#date-input,
#description-input {
  width: 100%;
  margin-bottom: 10px;
  padding: 2px;
}

#confirm-close-dialog {
  padding: 10px;
  margin: 10px auto;
  border-radius: 15px;
}

.confirm-close-dialog-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.discard-message-text {
  font-weight: bold;
  font-size: 1.5rem;
}

#tasks-container {
  height: 100%;
  overflow-y: auto;
}

.task {
  margin: 5px 0;
}

.hidden {
  display: none;
}

@media (min-width: 576px) {
  .todo-app,
  .task-form {
    width: 400px;
    height: 450px;
  }

  .task-form-label {
    font-size: 1.5rem;
  }

  #title-input,
  #date-input {
    height: 2rem;
  }

  #title-input,
  #date-input,
  #description-input {
    padding: 5px;
    margin-bottom: 20px;
  }
}
```

```js
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});


taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    --fcc-editable-region--
    id: `${titleInput.value.toLowerCase().split(' ').join('-')}`,  
    --fcc-editable-region--
  };
  console.log(taskObj);
});
```
