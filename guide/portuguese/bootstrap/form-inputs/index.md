---
title: Form Inputs
localeTitle: Entradas de formulário
---
## Entradas de formulário

O Bootstrap suporta os seguintes controles de formulário:

1.  entrada
2.  textarea
3.  caixa de seleção
4.  rádio
5.  selecione

## Exemplo de trechos de código

#### 1\. Entrada

O Bootstrap suporta todos os tipos de entrada HTML5: texto, senha, data e hora, data e hora-local, data, mês, hora, semana, número, e-mail, url, pesquisa, telefone e cor.

**Nota: As entradas NÃO serão totalmente estilizadas se o seu tipo não for declarado corretamente!**

O exemplo a seguir contém dois elementos de entrada; um do tipo text e um do tipo password:

```html

<div class="form-group"> 
  <label for="usr">Name:</label> 
  <input type="text" class="form-control" id="usr"> 
 </div> 
 <div class="form-group"> 
  <label for="pwd">Password:</label> 
  <input type="password" class="form-control" id="pwd"> 
 </div> 
```

#### 2\. Textarea

O exemplo a seguir contém uma área de texto:

```html

<div class="form-group"> 
  <label for="comment">Comment:</label> 
  <textarea class="form-control" rows="5" id="comment"></textarea> 
 </div> 
```

#### 3\. Caixas de Seleção

Caixas de seleção são usadas se você quiser que o usuário selecione qualquer número de opções em uma lista de opções predefinidas.

O exemplo a seguir contém três caixas de seleção. A última opção está desativada:

```html

<div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 1</label> 
 </div> 
 <div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 2</label> 
 </div> 
 <div class="checkbox disabled"> 
  <label> 
  <input type="checkbox" value="" disabled>Option 3</label> 
 </div> 
```

Use a classe **incheckbox inline** se quiser que as caixas de seleção apareçam na mesma linha:

```html

<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label> 
```

#### 4\. botões de rádio

Os botões de opção são usados ​​se você quiser limitar o usuário a apenas uma seleção de uma lista de opções predefinidas.

O exemplo a seguir contém três botões de opção. A última opção está desativada:

```html

<div class="radio"> 
  <label><input type="radio" name="optradio">Option 1</label> 
 </div> 
 <div class="radio"> 
  <label><input type="radio" name="optradio">Option 2</label> 
 </div> 
 <div class="radio disabled"> 
  <label><input type="radio" name="optradio" disabled>Option 3</label> 
 </div> 
```

Use a classe **.radio-inline** se quiser que as caixas de seleção apareçam na mesma linha:

```html

<label class="radio-inline"><input type="radio" name="optradio">Option 1</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 2</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 3</label> 
```

#### 5\. Selecione (lista)

Listas de seleção são usadas se você quiser permitir que o usuário escolha entre várias opções.

O exemplo a seguir contém uma lista suspensa (lista de seleção):

```html

<div class="form-group"> 
  <label for="sel1">Select list:</label> 
  <select class="form-control" id="sel1"> 
    <option>1</option> 
    <option>2</option> 
    <option>3</option> 
    <option>4</option> 
  </select> 
 </div> 
```

## Como tornar as entradas do Bootstrap acessíveis

Campos de entrada devem ter rótulos ou alguma outra forma de identificador, como tags WAI-ARIA para atender a Web Diretrizes de acessibilidade de conteúdo ou [WCAG](https://www.w3.org/WAI/tutorials/forms/) para breve. Em ordem para que os leitores de tela transmitam com precisão para um usuário quais rótulos estão associados a quais entradas os rótulos deve referenciar a entrada correspondente.

Isso pode ser feito usando o parâmetro `for` no HTML:

```html

<label for="email-input">Enter Email</label> 
 <input type="email" class="form-control" id="email-input" placeholder="Enter Email"> 
```

O rótulo `for` atributo **sempre faz** referência ao campo de entrada por seu **ID** . Isso informa ao leitor de tela que este rótulo é definitivamente para este campo de entrada que minimizará a confusão para qualquer usuário que esteja usando um leitor de tela para visitar um site.

### Mais Informações:

Exemplos de código são de [W3Schools - Bootstrap Form Inputs](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp) .