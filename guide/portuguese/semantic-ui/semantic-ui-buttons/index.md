---
title: Semantic UI Buttons
localeTitle: Botões de interface semântica
---
## Botões de interface semântica

Um botão indica uma possível ação do usuário. A Semantic UI fornece uma sintaxe fácil de usar que simplifica não apenas o estilo de um botão, mas também a semântica da linguagem natural.

#### Como usar

A classe de interface semântica é simplesmente adicionada a um elemento de botão, vários exemplos foram dados abaixo para indicar como usá-lo.

#### Tipos

*   Botão Padrão

Botão padrão da interface semântica
```
<button class="ui button">Standard Button</button> 
```

*   Botão de ênfase

Um botão com um nível diferente de ênfase
```
<button class="ui primary button"> 
```

Outras classes de ênfase são `secondary` , `positive` e `negative`

*   Botão animado

Um botão com animação, mostrando o conteúdo oculto
```
<div class="ui animated fade button" tabindex="0"> 
  <div class="visible content">Sign-up for a Pro account</div> 
  <div class="hidden content">$12.99 a month</div> 
 </div> 
```

A `tabindex="0"` propriedade da propriedade `tabindex="0"` acima torna o teclado do botão focável, já que a tag `<button>` não foi usada.

*   Botão rotulado

Um botão ao lado de um rótulo
```
<div class="ui labeled button" tabindex="0"> 
  <div class="ui button"><i class="heart icon"></i> Like</div> 
  <a class="ui basic label">2,048</a> 
 </div> 
```

o elemento `<i>` é usado para especificar um ícone, aqui está um ícone de coração `<i class="heart icon"></i>` ao lado do rótulo básico `<a class="ui basic label">2,048</a>`

*   Botão do ícone

Um botão de interface semântica pode ser apenas um ícone
```
<button class="ui icon button"> 
  <i class="camera icon"></i> 
 </button> 
```

O acima é apenas um ícone da câmera

#### Grupos

Botões de interface semântica podem existir em um grupo
```
<div class="ui buttons"> 
  <button class="ui button">One</button> 
  <button class="ui button">Two</button> 
  <button class="ui button">Three</button> 
 </div> 
```

#### Conteúdo

Botões da interface semântica podem conter condicionais
```
<div class="ui buttons"> 
  <button class="ui positive button">Yes</button> 
  <div class="or" data-text="or"></div> 
  <button class="ui negative button">No</button> 
 </div> 
```

#### Estados

Os botões da interface semântica podem existir em estados diferentes, `active` , `disabled` , `loading` . Basta adicionar um nome de estado ao atributo `class` `of` elemento \`.
```
<button class="ui loading button">Loading</button> 
```

#### Variações

Existem botões UI semânticas em uma variedade de tamanhos `mini` , `tiny` , `small` , `medium` , `large` , `big` , `huge` e `massive` .
```
<button class="ui massive button">Massive Button</button> 
```

Há muito mais sobre os botões da interface semântica, visite o link fornecido na seção Mais informações para saber mais.

#### Mais Informações:

*   [Botões de interface do usuário semântica](https://semantic-ui.com/elements/button.html)