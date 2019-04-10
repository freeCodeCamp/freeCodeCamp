---
title: Create a Controlled Input
localeTitle: Criar uma entrada controlada
---
## Criar uma entrada controlada

Aqui a ideia é criar uma entrada controlada onde o texto é atualizado do seu estado, não do navegador.

Então, para começar, temos um esqueleto no qual temos uma classe chamada `ControlledInput` e uma variável de estado chamada `input` . Agora, tudo o que você precisa fazer é pegar esse estado e, quando uma alteração na caixa de entrada é observada, disparar uma função que altera o valor dentro dessa caixa de entrada e no parágrafo abaixo dela.

Então, o primeiro passo será fazer uma função que altere a `input` variável de estado.
```
handleChange(event) { 
    this.setState({ 
      input: event.target.value 
    }); 
 } 
```

Agora, seu próximo passo envolverá a criação de uma caixa de entrada e o acionará quando alguém digitar alguma coisa. Felizmente, temos um evento chamado `onChange()` para atender a essa finalidade. PS - Aqui está outra maneira de vincular `this` a uma função
```
<input onChange = {this.handleChange.bind(this)}/> 
```

Mas isso simplesmente não servirá ao seu propósito. Embora você possa sentir que está funcionando. Então, o que está acontecendo aqui é atualizações de texto do navegador e não do estado. Então, para corrigir isso, vamos adicionar um atributo de `value` e configurá-lo para `this.state.input` para o elemento de entrada que fará com que a entrada seja controlada pelo estado.
```
<input value = {this.state.input} onChange = {this.handleChange.bind(this)}/> 
```

Pode ser um pouco difícil de digerir, mas para deixar tudo mais claro, tente remover toda a coisa do `onChange` para que seu código se pareça com isso
```
<input value = {this.state.input}/> 
```

Agora execute os testes novamente, você é capaz de digitar alguma coisa? A resposta para isto será "NO" já que sua caixa de entrada está recebendo valor da `input` variável de estado já que não há mudança na `input` estado (uma string vazia inicialmente) que só acontecerá quando você acionar a função `handleChange()` só acontece quando você tem um manipulador de eventos como `onChange()` portanto, a string dentro da caixa de entrada permanecerá como é, ou seja, uma string vazia.