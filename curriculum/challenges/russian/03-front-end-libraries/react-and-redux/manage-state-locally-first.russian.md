---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
isRequired: false
forumTopicId: 301431
localeTitle: Управление состоянием локально сначала
---

## Description
<section id='description'>
Здесь вы закончите создание компонента <code>DisplayMessages</code> .
</section>

## Instructions
<section id='instructions'>
Во-первых, в методе <code>render()</code> компонент визуализирует элемент <code>input</code> элемент <code>button</code> элемент <code>ul</code> . Когда элемент <code>input</code> изменяется, он должен вызвать метод <code>handleChange()</code> . Кроме того, элемент <code>input</code> должен отображать значение <code>input</code> , находящееся в состоянии компонента. Элемент <code>button</code> должен запускать метод <code>submitMessage()</code> при нажатии. Во-вторых, напишите эти два метода. Метод <code>handleChange()</code> должен обновлять <code>input</code> с помощью <code>input</code> пользователем. Метод <code>submitMessage()</code> должен конкатенировать текущее сообщение (сохраненное на <code>input</code> ) в массив <code>messages</code> в локальном состоянии и очистить значение <code>input</code> . Наконец, используйте <code>ul</code> для сопоставления массива <code>messages</code> и отображения его на экране в виде списка элементов <code>li</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The <code>DisplayMessages</code> component should initialize with a state equal to <code>{ input: "", messages: [] }</code>.'
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return ( typeof initialState === 'object' && initialState.input === '' && initialState.messages.length === 0); })());
  - text: The <code>DisplayMessages</code> component should render a <code>div</code> containing an <code>h2</code> element, a <code>button</code> element, a <code>ul</code> element, and <code>li</code> elements as children.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const state = () => { mockedComponent.setState({messages: [''__TEST__MESSAGE'']}); return waitForIt(() => mockedComponent )}; const updated = await state(); assert(updated.find(''div'').length === 1 && updated.find(''h2'').length === 1 && updated.find(''button'').length === 1 && updated.find(''ul'').length === 1 && updated.find(''li'').length > 0); }; '
  - text: <code>.map</code> was used on the <code>messages</code> array.
    testString: assert(code.match(/this\.state\.messages\.map/g));
  - text: The <code>input</code> element should render the value of <code>input</code> in local state.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const testValue = ''__TEST__EVENT__INPUT''; const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); assert(updated.find(''input'').props().value === testValue); }; '
  - text: Calling the method <code>handleChange</code> should update the <code>input</code> value in state to the current input.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = ''__TEST__EVENT__MESSAGE__''; const changed = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const afterInput = await changed(); assert(initialState.input === '''' && afterInput.state().input === ''__TEST__EVENT__MESSAGE__'');  }; '
  - text: Clicking the <code>Add message</code> button should call the method <code>submitMessage</code> which should add the current <code>input</code> to the <code>messages</code> array in state.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage_1 = ''__FIRST__MESSAGE__''; const firstChange = () => { causeChange(mockedComponent, testMessage_1); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstSubmit = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterSubmit_1 = await firstSubmit(); const submitState_1 = afterSubmit_1.state(); const testMessage_2 = ''__SECOND__MESSAGE__''; const secondChange = () => { causeChange(mockedComponent, testMessage_2); return waitForIt(() => mockedComponent )}; const secondResult = await secondChange(); const secondSubmit = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterSubmit_2 = await secondSubmit(); const submitState_2 = afterSubmit_2.state(); assert(initialState.messages.length === 0 && submitState_1.messages.length === 1 && submitState_2.messages.length === 2 && submitState_2.messages[1] === testMessage_2); }; '
  - text: The <code>submitMessage</code> method should clear the current input.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = ''__FIRST__MESSAGE__''; const firstChange = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstState = firstResult.state(); const firstSubmit = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterSubmit = await firstSubmit(); const submitState = afterSubmit.state(); assert(firstState.input === testMessage && submitState.input === ''''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }

        { /* change code above this line */ }
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
```

</section>
