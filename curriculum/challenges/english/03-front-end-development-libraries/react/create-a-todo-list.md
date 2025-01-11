---
id: 5a24c314108439a4d403618e
title: Create a Todo List App
challengeType: 6
forumTopicId: 923432
dashedName: create-a-todo-list
---

# --description--

In this exercise, you will create a simple **TODO List** application. The application will allow users to add tasks, mark tasks as completed, and delete tasks. You will need to manage a list of tasks in the component's state and allow interaction with the list through buttons.

# --instructions--

1. **Initialize State**: 
    Use the constructor to initialize the state with an empty tasks array and an empty currentTask. Each task should be an object with the following properties: 
      - `id`: A unique identifier for each task. 
      - `text`: The text of the task. 
      - `completed`: A boolean that tracks whether the task is completed or not.

2. **Adding Tasks**: 
   - Create an input field and a button to allow users to add new tasks.
   - When the button is clicked, the new task should be added to the state with the `text` entered by the user and `completed` set to `false`.

3. **Marking Tasks as Completed**: 
   - Each task should have a checkbox next to it. When the checkbox is clicked, it should toggle the `completed` status of the task.
   
4. **Deleting Tasks**: 
   - Each task should have a "Delete" button. When clicked, the task should be removed from the state.

5. **Rendering Tasks**: 
   - Render the list of tasks below the input and button. Each task should be displayed with its text, a checkbox, and a delete button.

6. **Optional Bonus**:
   - Add a feature to filter tasks, such as showing only completed tasks or only active tasks.

# --hints--

`TodoList` should return a `div` element which contains.An `input` element for typing tasks.A button with text content `Add Task`.A button with text content `Reset Tasks`.An unordered list (`ul`) displaying the tasks, each with a remove button.

```js
assert( 
  (() => {
     const mockedComponent = Enzyme.mount(React.createElement(TodoList));
     const addButton = mockedComponent.find('button.add').text() === 'Add Task'; 
     const resetButton = mockedComponent.find('button.reset').text() === 'Reset Tasks'; 
     const inputField = mockedComponent.find('input').length === 1; 
     const listItem = mockedComponent.find('ul li').length === 0;
     return addButton && resetButton && inputField && listItem; 
     })() 
     );
```

The state of `TodoList` should initialize with an empty tasks array and an empty currentTask.

```js
const mockedComponent = Enzyme.mount(React.createElement(TodoList));
assert(mockedComponent.state().tasks.length === 0);
assert(mockedComponent.state().currentTask === '');
```

Typing a new task and clicking the add button should add the task to the list.

```js
const mockedComponent = Enzyme.mount(React.createElement(TodoList));
mockedComponent.setState({ currentTask: 'Learn React' });
mockedComponent.find('button.add').simulate('click');
mockedComponent.update();
assert(mockedComponent.state().tasks.length === 1);
assert(mockedComponent.find('ul li').at(0).text().includes('Learn React'));
assert(mockedComponent.find('ul li button.remove').length === 1);
```

Clicking the remove button next to a task should remove it from the list.

```js
const mockedComponent = Enzyme.mount(React.createElement(TodoList));
mockedComponent.setState({ tasks: ['Learn React'] });
mockedComponent.find('button.remove').simulate('click');
assert(mockedComponent.state().tasks.length === 0);
```

Clicking the reset button should clear the list of tasks.

```js
const mockedComponent = Enzyme.mount(React.createElement(TodoList));
mockedComponent.setState({ tasks: ['Learn React', 'Build a ToDo List App'] });
mockedComponent.find('button.reset').simulate('click');
assert(mockedComponent.state().tasks.length === 0);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TodoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: ""
    };
    // Change code below this line

    // Change code above this line
  }

  // Change code below this line

  // Change code above this line

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentTask}
          onChange={this.handleChange}
        />
        <button className='add' onClick={this.addTask}>Add Task</button>
        <button className='reset' onClick={this.resetTasks}>Reset Tasks</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button className='remove' onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

```

# --solutions--

```jsx
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.resetTasks = this.resetTasks.bind(this);
  }

  handleChange(event) {
    this.setState({
      currentTask: event.target.value
    });
  }

  addTask() {
    this.setState(state => ({
      tasks: [...state.tasks, state.currentTask],
      currentTask: ""
    }));
  }

  removeTask(index) {
    this.setState(state => {
      const tasks = state.tasks.filter((task, i) => i !== index);
      return { tasks };
    });
  }

  resetTasks() {
    this.setState({
      tasks: []
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentTask}
          onChange={this.handleChange}
        />
        <button className='add' onClick={this.addTask}>Add Task</button>
        <button className='reset' onClick={this.resetTasks}>Reset Tasks</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className='remove' onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

```