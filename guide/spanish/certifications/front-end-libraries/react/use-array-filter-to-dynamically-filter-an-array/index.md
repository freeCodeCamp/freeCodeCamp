---
title: Use Array.filter() to Dynamically Filter an Array
localeTitle: Utilice Array.filter () para filtrar dinámicamente una matriz
---
## Utilice Array.filter () para filtrar dinámicamente una matriz

## Sugerencia 1:

Use `.filter()` para crear una nueva matriz que solo muestre usuarios en línea.

`this.state.users.filter(i => i.online == true)`

## Sugerencia 2:

Use `.map()` del ejercicio anterior para enumerar a los usuarios en línea y darles una clave única.

`usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>)`

## Solución:

Ambos métodos combinados primero filtrarán la matriz y luego los enumerarán individualmente.

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