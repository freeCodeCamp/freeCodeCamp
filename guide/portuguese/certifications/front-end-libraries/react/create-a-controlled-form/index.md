---
title: Create a Controlled Form
localeTitle: Crie um formulário controlado
---
## Crie um formulário controlado

Criar um formulário controlado é o mesmo processo que criar uma entrada controlada, exceto que você precisa manipular um evento de envio.

Primeiro, crie uma entrada controlada que armazene seu valor no estado, para que haja uma única fonte de verdade. (Isso é o que você fez no desafio anterior.) Crie um elemento de entrada, configure seu atributo de valor para a variável de entrada localizada no estado. Lembre-se, o estado pode ser acessado por `this.state` . Em seguida, defina o atributo `onChange` do elemento de entrada para chamar a função 'handleChange'.

### Solução

```jsx
<input value={this.state.input} onChange={this.handleChange}/> 
```

Em seguida, crie o método handleSubmit para o seu componente. Primeiro, porque o formulário está sendo enviado, você terá que evitar que a página seja atualizada. Em segundo lugar, chame o método `setState()` , passando um objeto dos diferentes pares de valor-chave que você deseja alterar. Neste caso, você deseja definir 'submit' para o valor da variável 'input' e definir 'input' para uma string vazia.

```jsx
handleSubmit(event) { 
  event.preventDefault(); 
  this.setState({ 
    input: '', 
    submit: this.state.input 
  }); 
 } 
```

Agora que seus dados estão sendo manipulados no estado, podemos usar esses dados. Crie um elemento `h1` . Dentro do seu elemento `h1` , coloque sua variável 'submit'. Lembre-se de que 'submit' está localizado dentro do estado, então você precisará usar `this.state` . Além disso, colocar a variável no JSX requer chaves `{ }` porque é JavaScript.

```jsx
<h1>{this.state.submit}</h1> 

```