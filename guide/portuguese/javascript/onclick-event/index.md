---
title: Onclick Event
localeTitle: Evento Onclick
---
## Evento Onclick

O evento `onclick` em JavaScript permite que você, como programador, execute uma função quando um elemento é clicado.

### Exemplo

```javascript
<button onclick="myFunction()">Click me</button> 
 
 <script> 
  function myFunction() { 
    alert('Button was clicked!'); 
  } 
 </script> 
```

No exemplo simples acima, quando um usuário clica no botão, ele verá um alerta no navegador, mostrando que o `Button was clicked!` .

### Adicionando `onclick` dinamicamente

O evento `onclick` também pode ser adicionado programaticamente a qualquer elemento usando o código a seguir no exemplo a seguir:

```javascript
<p id="foo">click on this element.</p> 
 
 <script> 
  var p = document.getElementById("foo"); // Find the paragraph element in the page 
  p.onclick = showAlert; // Add onclick function to element 
 
  function showAlert(event) { 
    alert("onclick Event triggered!"); 
  } 
 </script> 
```

### Nota

É importante notar que usando o onclick podemos adicionar apenas uma função de ouvinte. Se você quiser adicionar mais, apenas use addEventListener (), que é a maneira preferida para adicionar listener de eventos.

No exemplo acima, quando um usuário clica no elemento de `paragraph` no `html` , ele verá um alerta mostrando o `onclick Event triggered` .

### Impedindo a ação padrão

No entanto, se anexarmos `onclick` a links ( `a` tag do HTML), poderemos impedir que a ação padrão ocorra:

```javascript
<a href="https://guide.freecodecamp.org" onclick="myAlert()">Guides</a> 
 
 <script> 
  function myAlert(event) { 
    event.preventDefault(); 
    alert("Link was clicked but page was not open"); 
  } 
 </script> 
```

No exemplo acima, `event.preventDefault()` comportamento padrão de `a` elemento (link de abertura) usando `event.preventDefault()` dentro de nossa função de retorno de chamada `onclick` .

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

#### Outros recursos

[jQuery .on () Anexo do manipulador de eventos](https://api.jquery.com/on/)