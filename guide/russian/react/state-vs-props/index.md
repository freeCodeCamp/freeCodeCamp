---
title: State vs Props
localeTitle: Состояние vs свойства
---
## Состояние vs свойства

Когда мы начинаем работать с компонентами React, мы часто слышим два термина. Это `state` и `props` . Итак, в этой статье мы рассмотрим, что это такое и как они отличаются.

## Состояние:

*   Состояние - это то, что принадлежит компоненту. Он принадлежит к тому конкретному компоненту, где он определен. Например, возраст человека - это состояние этого человека.
*   Состояние изменчиво. Но он может быть изменен только тем компонентом, который им владеет. Поскольку я могу изменить свой возраст, а не кого-либо еще.

*   Вы можете изменить состояние, используя `this.setState()`

См. Приведенный ниже пример, чтобы получить представление о состоянии:


#### Person.js

```javascript

  import React from 'react'; 
 
  class Person extends React.Component{ 
    constructor(props) { 
      super(props); 
      this.state = { 
        age:0 
      this.incrementAge = this.incrementAge.bind(this) 
    } 
 
    incrementAge(){ 
      this.setState({ 
        age:this.state.age + 1; 
      }); 
    } 
 
    render(){ 
      return( 
        <div> 
          <label>My age is: {this.state.age}</label> 
          <button onClick={this.incrementAge}>Grow me older !!<button> 
        </div> 
      ); 
    } 
  } 
 
export default Person; 
```

В приведенном выше примере `age` - это состояние компонента `Person`.

## Props:

*   Props похожи на аргументы метода. Они передаются компоненту, в котором используется этот компонент.
*   Props неизменен. Они доступны только для чтения.

См. Пример ниже, чтобы получить представление о props:

#### Person.js

```javascript

import React from 'react'; 
 
class Person extends React.Component{ 
  render(){ 
    return( 
      <div> 
        <label>I am a {this.props.character} person.</label> 
      </div> 
    ); 
  } 
} 
 
export default Person; 
 
const person = <Person character = "good"></Person> 
```

В приведенном выше примере `const person = <Person character = "good"></Person>` мы передаем `character = "good"` prop к компоненту `Person`.

Это дает результат как «Я хороший человек», действительно это я.

Гораздо больше узнать о state и props. Многие вещи можно узнать, фактически погрузившись в кодирование. Так что заставляйте себя программировать.

При необходимости вы можете найти меня на [твиттере](https://twitter.com/getifyJr) .

Счастливого программирования!!!


