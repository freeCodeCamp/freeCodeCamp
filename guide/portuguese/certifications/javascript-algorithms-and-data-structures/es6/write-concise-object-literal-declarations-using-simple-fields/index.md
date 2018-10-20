---
title: Write Concise Object Literal Declarations Using Simple Fields
localeTitle: Escrever declarações concisas de objetos concisos usando campos simples
---
## Escrever declarações concisas de objetos concisos usando campos simples

Aqui, temos a tarefa de retornar um objeto que aceita os parâmetros da função como seus atributos.

# Sugestão 1:

Livre-se dos dois pontos e das palavras duplicadas.

## Alerta de spoiler - Solução à frente

## Solução

```javascript
const createPerson = (name, age, gender) => { 
  "use strict"; 
  // change code below this line 
  return { 
    name, 
    age, 
    gender 
  }; 
  // change code above this line 
 }; 

```