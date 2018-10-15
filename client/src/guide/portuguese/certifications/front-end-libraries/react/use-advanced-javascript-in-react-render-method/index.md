---
title: Use Advanced JavaScript in React Render Method
localeTitle: Use JavaScript avançado no método Renderização de Reação
---
## Use JavaScript avançado no método Renderização de Reação

### Método

Enquanto você está dentro do método de renderização e não dentro do método de retorno, você pode escrever JavaScript **sem** envolvê-lo dentro de chaves.

Primeiro, você terá que definir a constante 'answer' para um valor. Acesse o array 'possibleAnswers' usando o valor 'randomIndex', que está localizado dentro do estado do seu componente. Lembre-se, você acessa o estado usando `this.state` .

### Solução

```js
const answer = possibleAnswers[this.state.randomIndex]; 
```

Em seguida, insira sua resposta 'const' nas tags p. Certifique-se de envolvê-lo com chaves `{ }` .

```jsx
<p> 
  {answer} 
 </p> 

```