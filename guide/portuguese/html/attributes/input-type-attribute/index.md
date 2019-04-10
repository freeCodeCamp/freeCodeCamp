---
title: Input Type Attribute
localeTitle: Atributo de tipo de entrada
---
## Atributo de tipo de entrada

O atributo de tipo de entrada especifica o tipo de entrada que o usuário deve colocar em seu formulário.

### texto

Uma linha de um texto.

```html

    <form> 
      <label for="login">Login:</label> 
      <input type="text" name="login"> 
    </form> 
```

### senha

Uma linha de um texto. O texto é exibido automaticamente como uma série de pontos ou asteriscos (depende do navegador e do sistema operacional).

```html

    <form> 
      <label for="password">Password:</label> 
      <input type="password" name="password"> 
    </form> 
```

### o email

O HTML verifica se a entrada corresponde ao formato do endereço de e-mail (alguma coisa @ alguma coisa).

```html

    <form> 
      <label for="email">E-mail address:</label> 
      <input type="email" name="email"> 
    </form> 
```

### número

Permitir apenas entrada numérica. Você também pode especificar o valor mínimo e máximo permitido. O exemplo abaixo verifica se a entrada é um número entre 1 e 120.

```html

    <form> 
      <label for="age">Age:</label> 
      <input type="number" name="age" min="1" max="120"> 
    </form> 
```

### rádio

Apenas uma opção pode ser selecionada pelo usuário. O grupo de botões de opção precisa ter o mesmo atributo de nome. Você pode selecionar automaticamente uma opção usando a propriedade `checked` (no exemplo abaixo do valor Azul está selecionado).

```html

    <form> 
      <label><input type="radio" name="color" value="red">Red</label> 
      <label><input type="radio" name="color" value="green">Green</label> 
      <label><input type="radio" name="color" value="blue" checked>Blue</label> 
    </form> 
```

### caixa de seleção

O usuário pode selecionar zero ou mais opções no grupo de caixas de seleção. Você também pode usar a propriedade `checked` aqui para uma ou mais opções.

```html

    <form> 
      <label><input type="checkbox" name="lang" value="english">english</label> 
      <label><input type="checkbox" name="lang" value="spanish">spanish</label> 
      <label><input type="checkbox" name="lang" value="french">french</label> 
    </form> 
```

### botão

A entrada é exibida como botão, o texto que deve ser exibido no botão está no atributo value.

```html

    <form> 
      <input type="button" value="click here"> 
    </form> 
```

### enviar

Exibe o botão de envio. O texto que deve ser exibido no botão está no atributo value. Depois de clicar no botão, o HTML faz a validação e, se passar, o formulário é submetido.

```html

    <form> 
      <input type="submit" value="SUBMIT"> 
    </form> 
```

### restabelecer

Exibe o botão de reset. O texto que deve ser exibido no botão está no atributo value. Depois de clicar no botão, todos os valores do formulário são excluídos.

```html

    <form> 
      <input type="reset" value="CANCEL"> 
    </form> 
```

Existem mais tipos de elementos. Para mais informações visite MSDN ou w3schools .