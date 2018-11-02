---
title: Optimize Re-Renders with shouldComponentUpdate
localeTitle: Оптимизировать повторные рендеринги с shouldComponentUpdate
---
## Оптимизировать повторные рендеринги с shouldComponentUpdate

## Подсказка:

Проверьте, является ли значение `nextProps` четным.

## Решение:

Для этого решения вы будете использовать оператор `if/then` чтобы проверить, является ли значение `nextProps` четным. `nextProps` отличается от `props` тем, что это значение, которое еще не было отображено в пользовательском интерфейсе, поэтому в `shouldComponentUpdate()` вы, по сути, запрашиваете разрешение на обновление пользовательского интерфейса со значением `nextProps` .

```jsx
class OnlyEvens extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  shouldComponentUpdate(nextProps, nextState) { 
    console.log('Should I update?'); 
     // change code below this line 
      if (nextProps.value % 2 == 0) { 
        return true; 
      } 
      return false; 
     // change code above this line 
  } 
  componentWillReceiveProps(nextProps) { 
    console.log('Receiving new props...'); 
  } 
  componentDidUpdate() { 
    console.log('Component re-rendered.'); 
  } 
  render() { 
    return <h1>{this.props.value}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      value: 0 
    }; 
    this.addValue = this.addValue.bind(this); 
  } 
  addValue() { 
    this.setState({ 
      value: this.state.value + 1 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.addValue}>Add</button> 
        <OnlyEvens value={this.state.value}/> 
      </div> 
    ); 
  } 
 }; 

```