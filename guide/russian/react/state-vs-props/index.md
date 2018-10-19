---
title: State vs Props
localeTitle: Государство против реквизита
---## Государство против реквизита

Когда мы начинаем работать с компонентами React, мы часто слышим два термина. Это `state` и `props` . Итак, в этой статье мы рассмотрим, что это такое и как они отличаются.

## Государственный:

*   Состояние - это то, что принадлежит компоненту. Он принадлежит к тому конкретному компоненту, где он определен. Например, возраст человека - это состояние этого человека.
*   Состояние изменчиво. Но он может быть изменен только тем компонентом, который ему владеет. Поскольку я могу изменить свой возраст, а не кого-либо еще.
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

В приведенном выше примере `age` - это состояние компонента `Person` .

## Реквизит:

*   Опоры похожи на аргументы метода. Они передаются компоненту, в котором используется этот компонент.
*   Реквизит неизменен. Они доступны только для чтения.

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

В приведенном выше примере `const person = <Person character = "good"></Person>` мы передаем `character = "good"` prop к компоненту `Person` .

Это дает результат как «Я хороший человек», на самом деле я.

Гораздо больше узнать о государстве и реквизитах. Многие вещи можно узнать, фактически погрузившись в кодирование. Так что заставляйте свои руки грязно кодировать.

При необходимости вытащите меня на [твиттере](https://twitter.com/getifyJr) .

Счастливое кодирование !!!