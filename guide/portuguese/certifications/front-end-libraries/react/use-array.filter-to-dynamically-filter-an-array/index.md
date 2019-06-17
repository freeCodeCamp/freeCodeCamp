---
title: Use Array.filter() to Dynamically Filter an Array
localeTitle: Use Array.filter () para filtrar dinamicamente uma matriz
---
## Use Array.filter () para filtrar dinamicamente uma matriz

## Sugestão 1:

Use `.filter()` para criar uma nova matriz que mostre apenas usuários online.

`this.state.users.filter(i => i.online == true)`

## Dica 2:

Use `.map()` do exercício anterior para listar os usuários on-line e dar a eles uma chave exclusiva.

`usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>)`

## Solução:

Ambos os métodos combinados primeiro filtrarão o array e os listarão individualmente.

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