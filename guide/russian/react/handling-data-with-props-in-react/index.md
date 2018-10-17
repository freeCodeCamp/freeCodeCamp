---
title: Handling Data with Props in React
localeTitle: Обработка данных с помощью реквизита в действии
---
## Обработка данных с помощью реквизита в действии

Реквизиты обеспечивают способ передачи и доступа к данным в компонентах React.

Данные передаются для компонентов React как атрибут в JSX.

```javascript
<MyComponent someAttribute={data.value} /> 
```

В JSX фигурные скобки указывают на выражение JavaScript, которое должно возвращать значение. Переданные данные доступны через реквизиты в определенном компоненте.

```javascript
const MyComponent = props => { 
  <p>{props.someAttribute}</p> 
 }; 
```

Теперь давайте рассмотрим пример в CodePen.

### Начиная

Если вы еще этого не сделали, зайдите и зарегистрируйтесь для [бесплатной учетной записи CodePen](https://codepen.io/accounts/signup/user/free) .

Создайте новое перо, выбрав «Создать»> «Новая пера» рядом с вашим профилем профиля CodePen.

Затем мы добавим соответствующие библиотеки для рендеринга наших компонентов React.

Откройте панель настроек JavaScript, выбрав «Настройки»> «JavaScript». Выберите «Babel» в разделе «Препроцессор JavaScript».

Затем добавим наши библиотеки React. В разделе «Внешний JavaScript» выберите раскрывающийся список «Быстрое добавление» и добавьте библиотеки «React» и «React DOM».

### Использование реквизита

Сначала давайте определим некоторые фиктивные данные в нашем файле JavaScript.

```javascript
const blogData = { 
  title: 'My blog title', 
  body: 'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.' 
 }; 
```

Затем давайте определим наши компоненты блога.

```javascript
const Heading = () => { 
  return ( 
    <h1>My Blog</h1> 
  ); 
 }; 
 
 const Blog = props => { 
  return ( 
    <div> 
      <h2>{props.title}</h2> 
      <p>{props.body}</p> 
    </div> 
  ); 
 }; 
```

Заметил, как мы использовали объект реквизита для рендеринга значений заголовка и тела, которые будут переданы компоненту Blog. Реквизиты доступны только для чтения или неизменяемы, поэтому нам не нужно беспокоиться об изменении значений реквизита.

Перед тем, как написать наш компонент App, мы должны защитить наш компонент будет определение типа переменной, которая передается каждому реквизита. Мы определим это с помощью React.PropTypes. Добавьте в свой файл JavaScript следующее.

```javascript
Blog.propTypes = { 
  title: React.PropTypes.string, 
  body: React.PropTypes.string 
 }; 
```

Здесь мы определяем, что данные, переданные нашему компоненту Blog, будут строками для заголовка и тела. Ознакомьтесь с [документацией React](https://reactjs.org/docs/typechecking-with-proptypes.html) для списка всех propTypes.

Теперь давайте сделаем это вместе в компоненте приложения и передадим наши данные.

```javascript
const App = props => { 
  return ( 
    <div> 
      <Heading /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
    </div> 
  ); 
 }; 
```

Наконец, давайте отрисуем наше приложение (обязательно добавьте тэг root `<div>` в HTML-файл):

```javascript
ReactDOM.render( 
  <App />, 
  document.getElementById('root') 
 ); 
```

Теперь вы должны видеть, что наши компоненты блога визуализируются с помощью фиктивных данных, передаваемых через реквизиты.

Вы можете увидеть пример CodePen [здесь](https://codepen.io/trey-davis/pen/MvdZGX) .