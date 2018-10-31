---
title: Focus
localeTitle: Foco
---
## Foco

### Definição

O `:focus` representa um elemento que recebeu um estado de foco, acionado por um evento do teclado. A ação do gatilho vem pressionando a tecla **TAB** , que cria visualmente um anel ao redor de um elemento.

### Sintaxe

`:focus`

### Exemplo
```
a:focus { 
  color: red; 
 } 
```

### Saída

[JSfiddle Link](https://jsfiddle.net/ejae7vb3/1/)

#### Mais Informações:

[MDN - Rede de Desenvolvedores Mozilla | : foco - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

A pseudo-classe CSS de focus é usada para selecionar o elemento que tem foco (como uma entrada de formulário).

Geralmente é acionado quando o usuário clica ou toca em um elemento ou o seleciona com a tecla "tab" do teclado.

Sintaxe:

```css
:focus 
```

## Exemplo

HTML:

```html

<form> 
  <input type="text" value="The background will turn yellow when you click on it."> 
 </form> 
```

CSS:

```css
input:focus { 
   background-color: yellow; 
 } 
```

#### Mais Informações:

Para mais informações, visite [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

[W3.org | Documentação CSS](https://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)