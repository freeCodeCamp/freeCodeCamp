---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Использовать состояние для переключения элемента
---

## Description
<section id="description"> Вы можете использовать <code>state</code> в приложениях React более сложными способами, чем то, что вы видели до сих пор. Один пример - контролировать состояние значения, а затем визуализировать пользовательский интерфейс на основе этого значения. Существует несколько способов сделать это, и редактор кода показывает один метод. </section>

## Instructions
<section id="instructions"> <code>MyComponent</code> имеет свойство <code>visibility</code> которое инициализируется значением <code>false</code> . Метод рендеринга возвращает один вид, если значение <code>visibility</code> истинно, и другое представление, если оно ложно. В настоящее время не существует никакого способа обновления <code>visibility</code> собственности в компоненте <code>state</code> . Значение должно переключаться между истиной и ложью. На кнопке есть обработчик клика, который запускает метод класса, называемый <code>toggleVisibility()</code> . Определите этот метод, чтобы <code>state</code> <code>visibility</code> переключилось в противоположное значение при вызове метода. Если <code>visibility</code> <code>false</code> , метод устанавливает значение <code>true</code> и наоборот. Наконец, нажмите кнопку, чтобы увидеть условный рендеринг компонента на основе его <code>state</code> . <strong>Подсказка:</strong> не забудьте связать <code>this</code> ключевое слово с методом в конструкторе! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> должен вернуть элемент <code>div</code> содержащий <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("div").find("button").length, 1, "<code>MyComponent</code> should return a <code>div</code> element which contains a <code>button</code>.");'
  - text: Состояние <code>MyComponent</code> должно инициализироваться с использованием свойства <code>visibility</code> <code>MyComponent</code> <code>false</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state("visibility"), false, "The state of <code>MyComponent</code> should initialize with a <code>visibility</code> property set to <code>false</code>.");'
  - text: Нажатие на элемент кнопки должно переключать свойство <code>visibility</code> в состоянии между <code>true</code> и <code>false</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state("visibility")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const third = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue, "Clicking the button element should toggle the <code>visibility</code> property in state between <code>true</code> and <code>false</code>."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
