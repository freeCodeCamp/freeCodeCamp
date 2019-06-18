---
title: Render with an If/Else Condition
localeTitle: Отображать с условием If / Else
---
## Отображать с условием If / Else

### метод

Внутри метода рендеринга компонента записывайте операторы if / else, каждый из которых имеет собственный метод возврата, который имеет другой JSX. Это дает программистам возможность отображать различные пользовательские интерфейсы в соответствии с различными условиями.

Сначала оберните текущий метод return внутри оператора if и установите условие, чтобы проверить, является ли переменная 'display' истинной. Помните, вы `this.state` доступ к состоянию, используя `this.state` .

### Решение

```jsx
if (this.state.display === true) { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
      <h1>Displayed!</h1> 
    </div> 
  ); 
 } 
```

Затем создайте оператор else, который возвращает тот же JSX **без** элемента `h1` .

```jsx
else { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
    </div> 
  ) 
 } 

```