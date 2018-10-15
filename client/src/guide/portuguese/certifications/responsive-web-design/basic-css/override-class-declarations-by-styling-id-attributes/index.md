---
title: Override Class Declarations by Styling ID Attributes
localeTitle: Substituir Declarações de Classe por Atributos de ID de Estilo
---
## Substituir Declarações de Classe por Atributos de ID de Estilo

Para entender a substituição em CSS, você deve primeiro entender o princípio da precendência em CSS.

A principal regra a ser lembrada é que o CSS é lido de baixo para cima.

Um exemplo disso é:

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
 </style> 
 <h1 class="red-text blue-text">Example</h1> 
```

No exemplo acima, o texto `Example` ficará em azul porque a última classe adicionada era `blue-text` .

**É importante lembrar que um atributo `id` terá precedência sobre as classes, o que significa que ele é mais alto.**

Você pode criar um atributo `id` adicionando o `#` antes do nome da classe, como abaixo:

```html

<style> 
  #purple-text { 
    color: purple; 
  } 
 </style> 
```

Aqui está um exemplo para mostrar a você como **substituir declarações de classe por atributos de ID de estilo** :

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
  #green-color { 
    color: green; 
  } 
 </style> 
 <h1 id="green-color" class="red-text blue-text">Example</h1> 
```

Isso fará com que o texto `Example` fique verde porque o atributo `id` terá sempre precedência sobre `class` declarações de `class` .