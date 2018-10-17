---
title: Button Tag
localeTitle: Tag do botão
---
## Tag do botão

Uma tag `<button>` especifica um botão clicável no documento HTML. Entre as tags `<button>` , você pode colocar conteúdo, como texto ou imagens. Isso é diferente do botão criado usando a tag `<input>` , que usa apenas texto como conteúdo.

**Sintaxe:**

`<button type="submit">Click Here!</button>`

**Atributos:**

A seguir estão os atributos associados suportados pelo HTML 4:

| **Atributos** | **Valor** | **O que faz** | | --- | --- | --- | | desativado | desativado | Desativa o botão | | nome | nome | Especifica um nome para o botão. O nome é para referenciar o botão em formato HTML, JS, etc. | tipo | botão ou redefinir ou enviar | Define o tipo do botão. Um botão com tipo de `button` é um simples botão clicável, com o tipo de `submit` envia dados de formulário e, com o tipo de `reset` , redefine dados de formulário. | | valor | texto | Define um valor inicial para o botão. Esse valor é enviado junto com os dados do formulário. |

O HTML 5 suporta os seguintes atributos extras:

| **Atributos** | **Valor** | **O que faz** | | --- | --- | --- | | autofoco | autofoco | O botão deve obter automaticamente o foco quando a página é carregada. Por exemplo, consulte o Google. À medida que a página é carregada completamente, a caixa de texto obtém foco automaticamente. | | forma | form\_id | Especifica um ou mais formulários aos quais o botão pertence. | | formação | URL | Especifica para onde enviar os dados do formulário quando o botão do tipo de `submit` for pressionado. | | formmethod | obter ou postar | Especifica como enviar os dados do formulário. Apenas para o botão de tipo de `submit` . | | formtarget | `_blank` ou `_self` ou `_parent` ou `_top` ou framename | Especifica o local onde o resultado deve ser exibido após o envio dos dados do formulário. |

**Exemplo:**

```html

<html> 
  <head> 
    <title>Button Tag example</title> 
  </head> 
  <body> 
    <form> 
      First name:<br> 
      <input type="text" name="firstname" value="Free"> 
      <br> 
      Last name:<br> 
      <input type="text" name="lastname" value="CodeCamp"> 
      <br><br> 
      <input type="submit" value="Submit" formtarget="_self"> 
    </form> 
  </body> 
 </html> 
```

Todos os principais navegadores suportam a tag `<button>` . `<button>` tag `<button>` também suporta atributos de eventos em HTML. **Nota:** Navegadores diferentes podem enviar valores diferentes se você usar o elemento `<button>` . É aconselhável especificar o valor do botão ou usar a tag `<input>` para criar o botão em um formulário HTML.

**Outros recursos:**

*   Outros atributos:

| **Atributos** | **Link** | | --- | --- | | formenctype | https://www.w3schools.com/TAgs/att _button_ formenctype.asp | | formnovalidato | https://www.w3schools.com/TAgs/att _button_ formnovalidate.asp |

*   tag `<input>` : https://www.w3schools.com/TAgs/tag\_input.asp
*   Atributos do evento: https://www.w3schools.com/TAgs/ref\_eventattributes.asp
*   valores de atributo de `formtarget` : https://www.w3schools.com/TAgs/att _button_ formtarget.asp
*   Formulário HTML: