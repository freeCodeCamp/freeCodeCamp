---
title: Class Selector
localeTitle: Seletor de Classe
---
## Seletor de Classe

Um Class Selector é usado em um arquivo CSS para aplicar estilo aos elementos HTML com o nome da classe correspondente. Em HTML, você pode definir o nome da classe para qualquer elemento, adicionando um atributo "class".

Para selecionar elementos com uma classe específica, usamos um (.) Chamado de caractere de período, com o nome da classe.

Por exemplo .Centro { texto-alinhar: centro; cor vermelha; }

Aqui, todos os elementos HTML com `class="center"` serão vermelhos e alinhados ao centro.

Exemplos:

```html

<h1 class="test">This is a heading 1</h1> 
 <p class="test">This is a paragraph 1</p> 
 <h2 class="test">This is a heading 2</h2> 
 <p class="test">This is a paragraph 2</p> 
 <div class="test2 test3">This is a div 1</div> 
```

Como um nome de classe não é exclusivo, o atributo de classe HTML possibilita definir estilos iguais para elementos com o mesmo nome de classe. **Aqui está como você pode selecionar a classe em um arquivo CSS para os elementos de estilo (observe a notação):**

**Todos os elementos do `test` de classe serão aplicados com este estilo:**

```css
.test { 
  color: green; 
 } 
```

**Todos os elementos `<p>` do `test` de classe serão aplicados com este estilo:**

```css
p.test { 
  border: 1px solid black; 
  color: red; 
 } 
```

**Todos os elementos `<h1>` e `<h2>` do `test` de classe serão aplicados com este estilo:**

```css
h1.test, h2.test { 
  color: blue; 
 } 
```

**Todos os elementos que tiverem tanto a classe `test2` quanto o `test3` serão aplicados com este estilo:**

```css
.test2.test3 { 
  color: green; 
 } 
```

**Dicas: Sem espaço entre várias classes.**

#### Mais Informações:

Sintaxe CSS e Seletores: [w3schools](https://www.w3schools.com/css/css_syntax.asp)