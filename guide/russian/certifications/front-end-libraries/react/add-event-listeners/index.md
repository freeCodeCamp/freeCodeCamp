---
title: Add Event Listeners
localeTitle: Добавить слушателей событий
---
## Добавить слушателей событий

Эта задача состоит в том, что вы модифицируете два метода жизненного цикла: componentDidMount и componentWillUnmount. Вы используете componentDidMount, когда хотите что-то настроить, в вашем случае, прослушиватель событий. Вы используете componentWillUnmount, когда вам нужно очистить это, ваш слушатель событий.

Вы добавите слушателя событий в метод componentDidMount, который будет прослушивать событие «keydown». Используйте document.addEventListener (событие, функция, необязательный (useCapture)). Затем удалите этот же прослушиватель событий, передав те же аргументы в document.removeEventListener (event, function, optional (useCapture)) в методе componentWillUnmount.

Примечание: document.addEventListener и document.removeEventListener возьмут в кавычку строку для своего события, а при передаче в функции вы ссылаетесь на функцию handleKeyPress () как this.handleKeyPress. Если вы вызываете функцию как this.handleKeyPress (), то прослушиватель событий сначала оценит функцию и вернет значение неопределенного.

```javascript
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: '' 
    }; 
    this.handleEnter = this.handleEnter.bind(this); 
    this.handleKeyPress = this.handleKeyPress.bind(this); 
  } 
  // change code below this line 
  componentDidMount() { 
    document.addEventListener("keydown", this.handleKeyPress) 
  } 
  componentWillUnmount() { 
    document.removeEventListener("keydown", this.handleKeyPress) 
  } 
  // change code above this line 
  handleEnter() { 
    this.setState({ 
      message: this.state.message + 'You pressed the enter key! ' 
    }); 
  } 
  handleKeyPress(event) { 
    if (event.keyCode === 13) { 
      this.handleEnter(); 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.message}</h1> 
      </div> 
    ); 
  } 
 }; 
```

### Ресурсы

[React Components](https://reactjs.org/docs/react-component.html) , [Общие Lifecycles](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) , [State и Lifecycles](https://reactjs.org/docs/state-and-lifecycle.html) , [document.addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) , [События HTML DOM](https://www.w3schools.com/jsref/dom_obj_event.asp)