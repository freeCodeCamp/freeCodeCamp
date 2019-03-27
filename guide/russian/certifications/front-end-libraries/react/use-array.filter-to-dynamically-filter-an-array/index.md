---
title: Use Array.filter() to Dynamically Filter an Array
localeTitle: Используйте Array.filter () для динамического фильтра массива
---
## Используйте Array.filter () для динамического фильтра массива

## Подсказка 1:

Используйте `.filter()` чтобы создать новый массив, который показывает только пользователей онлайн.

`this.state.users.filter(i => i.online == true)`

## Подсказка 2:

Используйте `.map()` из предыдущего предыдущего упражнения, чтобы указать онлайн-пользователей и дать им уникальный ключ.

`usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>)`

## Решение:

Оба комбинированных метода сначала отфильтровывают массив, а затем перечисляют их по отдельности.

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      users: [ 
        { 
          username: 'Jeff', 
          online: true 
        }, 
        { 
          username: 'Alan', 
          online: false 
        }, 
        { 
          username: 'Mary', 
          online: true 
        }, 
        { 
          username: 'Jim', 
          online: false 
        }, 
        { 
          username: 'Sara', 
          online: true 
        }, 
        { 
          username: 'Laura', 
          online: true 
        } 
      ] 
    } 
  } 
  render() { 
    const usersOnline = this.state.users.filter(i => i.online == true); // change code here 
    const renderOnline = usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>); // change code here 
    return ( 
       <div> 
         <h1>Current Online Users:</h1> 
         <ul> 
           {renderOnline} 
         </ul> 
       </div> 
    ); 
  } 
 }; 

```