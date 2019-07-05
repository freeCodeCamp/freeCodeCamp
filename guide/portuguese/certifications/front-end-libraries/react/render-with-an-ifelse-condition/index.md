---
title: Render with an If/Else Condition
localeTitle: Renderizar com uma condição If / else
---
## Renderizar com uma condição If / else

### Método

Dentro do método de renderização do componente, escreva if / else que cada um possui seu próprio método de retorno que possui JSX diferente. Isso dá aos programadores a capacidade de processar diferentes interfaces de usuário de acordo com várias condições.

Primeiro, envolva o método de retorno atual dentro de uma instrução if e defina a condição para verificar se a variável 'display' é verdadeira. Lembre-se, você acessa o estado usando `this.state` .

### Solução

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

Em seguida, crie uma instrução else que retorne o mesmo JSX **sem** o elemento `h1` .

```jsx
else { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
    </div> 
  ) 
 } 

```