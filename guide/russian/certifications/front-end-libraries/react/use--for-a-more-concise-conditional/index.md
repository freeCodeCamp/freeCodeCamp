---
title: Use && for a More Concise Conditional
localeTitle: Используйте && для более сжатого условного
---
## Используйте && для более сжатого условного

Приведенный пример
```
{condition && <p>markup</p>} 
```

который демонстрируется ниже, используя условие this.state.dinnerCooked boolean. Если логическое значение true, разметка, включенная в {}, будет отображаться, если не отобразится
```
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      dinnerCooked: true 
    } 
  } 
  render() { 
    return ( 
       <div> 
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed 
       </div> 
    ); 
  } 
 }; 
 
 ## Hint: 
 
 You don't have to do a full ```if/then``` statement. Just write the condition you are checking. 
 
 ## Solution: 
 
 As you can see, you don't have to write the full ```if/then``` statement. We only need to check the condition and see if it returns ```true``` or ```false```. In this case, we are checking the value of ```display```. If the value is ```true```, then you return the value to the right of ```&&```, which is ```<h1>Displayed!</h1>```. If the condition is ```false```, it returns nothing. 
```

JSX класс MyComponent расширяет React.Component { конструктор (реквизит) { супер (реквизит); this.state = { Ужин: ложный }  
} render () {  
вернуть (

{this.state.dinnerCooked &&

# Ужин готов!

} // Содержимое тега h1 НЕ будет отображаться display: true } this.toggleDisplay = this.toggleDisplay.bind (this); } toggleDisplay () { this.setState ({ display:! this.state.display }); } render () { // изменить код ниже этой строки вернуть (

Переключить дисплей {this.state.display &&

# Показано!

}

); } }; \`\` \` Объяснение из [документации ReactJS.org](https://reactjs.org/docs/conditional-rendering.html)

Вы можете вставлять любые выражения в JSX, обертывая их фигурными фигурными скобками. Это включает в себя логический & JavaScript-оператор JavaScript. Это может быть удобно для условного включения элемента

Это работает, потому что в JavaScript истинное выражение && всегда оценивает выражение, а выражение false && всегда оценивается как false.

Поэтому, если условие истинно, элемент справа после && появится на выходе. Если он неверен, React игнорирует и пропускает его.