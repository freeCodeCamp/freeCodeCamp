---
title: Pass a Callback as Props
localeTitle: Передача обратного вызова в качестве реквизита
---
## Передача обратного вызова в качестве реквизита

### Описание

*   Добавьте компонент `GetInput` в метод рендеринга в MyApp, затем передайте ему prop, называемый `inpu` t, назначенный `inputValue` из состояния MyApp. Также создайте `handleChange` называемое `handleChange` и передайте ему обработчик `handleChange` ввода.
*   Добавьте `RenderInput` в метод рендеринга в MyApp, затем создайте опору с именем `input` и передайте `inputValue` из состояния в него.

### Советы

*   `state` является свойством класса `Myapp` , поэтому используйте 'this.state' для получения значения объекта
*   Чтобы узнать больше о состоянии и реквизитах, прочитайте « [Состояние и жизненный цикл», «](https://reactjs.org/docs/state-and-lifecycle.html) [Компоненты и реквизит»](https://reactjs.org/docs/components-and-props.html) .

### Решение

```javascript
class MyApp extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      inputValue: '' 
    } 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ 
      inputValue: event.target.value 
    }); 
  } 
  render() { 
    return ( 
       <div> 
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/> 
        } 
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/> 
        } 
       </div> 
    ); 
  } 
 }; 

```