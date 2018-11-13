---
title: State vs Props
localeTitle: Состояние и свойства
---
## Состояние и свойства

Когда мы начинаем работать с компонентами React, мы часто слышим два термина. Это `state` и `props` . Итак, в этой статье мы рассмотрим, что это такое и чем они отличаются.

## Состояние:

*   Состояние - это то, что принадлежит компоненту. Оно принадлежит к тому конкретному компоненту, где оно определено. Например, возраст человека - это состояние этого человека.
*   Состояние изменчиво. Но оно может быть изменено только тем компонентом, который им владеет. Так я могу изменить свой возраст, а не кто-либо еще.
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

## Свойства:

*   Свойства похожи на аргументы метода. Они передаются в компонент, в котором используются.
*   Свойства неизмененны. Они доступны только для чтения.

См. Пример ниже, чтобы получить представление о реквизитах:

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

В приведенном выше примере `const person = <Person character = "good"></Person>` мы передаем свойство `character` со значением `good` в компонент `Person`.

На выходе получаем «Я хороший человек», на самом деле так и есть.

Есть ещё много всего, что стоит узнать о состоянии и свойствах. Многие вещи можно узнать, только погрузившись в кодирование. Поэтому пробуйте, пишите код, делайте ошибки, учитесь.

При необходимости найдите меня на [твиттере](https://twitter.com/getifyJr) .

Счастливого кодинга !!!
