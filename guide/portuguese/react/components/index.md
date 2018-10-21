---
title: Components
localeTitle: Componentes
---
# Componentes

Componentes são os blocos de construção do React.
Os componentes basicamente dividem a nossa aplicação várias outras partes menores.
Há inúmeros benefícios nessa abordagem, tais como:
- Maior reuso;
- Mais organização;
- Melhor manutenção;
- Entre outros

##Reuso

A seguir vamos ver um exemplo de como funcionaria a componentização de um formulário.
Primeiro criamos os itens dos formulários:

```jsx
class Login extends React.Component { 
  render() { 
    return( 
      <input type='text' /> 
    ); 
  } 
} 

class Password extends React.Component { 
  render() { 
    return( 
      <input type='password' /> 
    ); 
  } 
} 

class Button extends React.Component { 
  render() { 
    return( 
      <button type='submit'>Clique aqui!</button> 
    ); 
  } 
} 
```
Depois chamamos estes componentes-filho dentro de um componente-pai.

```jsx
class Form extends React.Component { 
  render() { 
    return( 
      <div> 
        <Login />
        <Password />
        <Button>
      </div> 
    ); 
  } 
 } 
```

Note que tudo está envolvido por uma `<div>`. O React só trabalha com um único retorno, sendo assim, se quisermos retornar mais de um elemento precisamos agrupá-los em uma única tag.

### Mais Informações:

[Componentes e Adereços](https://reactjs.org/docs/components-and-props.html)
