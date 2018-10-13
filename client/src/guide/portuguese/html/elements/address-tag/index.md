---
title: Address Tag
localeTitle: Tag de endereço
---
## Tag de endereço

Os controles de formulário do Bootstrap expandem nossos estilos de formulário Rebooted com classes. Use essas classes para ativar suas exibições personalizadas para obter uma renderização mais consistente em navegadores e dispositivos.

Certifique-se de usar um atributo de tipo apropriado em todas as entradas (por exemplo, email para endereço de email ou número de informações numéricas) para aproveitar os controles de entrada mais recentes, como verificação de email, seleção de números e muito mais.

Aqui está um exemplo rápido para demonstrar os estilos de formulário do Bootstrap. Continue lendo para obter documentação sobre as classes necessárias, o layout do formulário e muito mais.

#### Uso

```html

<form> 
  <div class="form-group"> 
    <label for="exampleInputEmail1">Email address</label> 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> 
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> 
  </div> 
  <div class="form-group"> 
    <label for="exampleInputPassword1">Password</label> 
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> 
  </div> 
  <div class="form-check"> 
    <label class="form-check-label"> 
      <input type="checkbox" class="form-check-input"> 
      Check me out 
    </label> 
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button> 
 </form> 

```