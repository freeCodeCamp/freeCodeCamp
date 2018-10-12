---
title: Render HTML Elements to the DOM
localeTitle: Renderizar elementos HTML no DOM
---
# Renderizar elementos HTML no DOM

Para renderizar um elemento para o DOm, usamos a seguinte sintaxe

```javascript
ReactDOM.render(<item to be rendered>, <where to be rendered>); 
```

## Solução

Seguindo a sintaxe, adicionaríamos essa linha de código para renderizar o elemento JSX para o div com o id do nó de desafio.

```javascript
ReactDOM.render(JSX,document.getElementById('challenge-node')); 

```