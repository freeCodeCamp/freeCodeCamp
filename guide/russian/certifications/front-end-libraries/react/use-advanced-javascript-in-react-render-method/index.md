---
title: Use Advanced JavaScript in React Render Method
localeTitle: Использовать расширенный JavaScript в методе React Render
---
## Использовать расширенный JavaScript в методе React Render

### метод

Хотя вы находитесь внутри метода render, а не внутри метода return, вы можете писать JavaScript, **не** обертывая его внутри фигурных скобок.

Во-первых, вам нужно будет установить постоянный «ответ» на значение. Получите доступ к массиву «possibleAnswers», используя значение «randomIndex», которое находится в состоянии вашего компонента. Помните, вы `this.state` доступ к состоянию, используя `this.state` .

### Решение

```js
const answer = possibleAnswers[this.state.randomIndex]; 
```

Затем вставьте свой ответ const в p-теги. Обязательно оберните его фигурными фигурными скобками `{ }` .

```jsx
<p> 
  {answer} 
 </p> 

```