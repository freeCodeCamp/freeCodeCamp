---
title: Click Method
localeTitle: Clique em Método
---
# Clique em Método

O método jQuery Click aciona uma função quando um elemento é clicado. A função é conhecida como "manipulador", pois manipula o evento click. Funções podem impactam o elemento HTML que está vinculado ao clique usando o método jQuery Click ou podem alterar algo totalmente. A forma mais utilizada é:

```javascript
$("#clickMe").click(handler) 
```

O método click usa a função handler como argumento e a executa toda vez que o elemento `#clickMe` é clicado. A função de manipulador recebe um parâmetro conhecido como [eventObject](http://api.jquery.com/Types/#Event) que pode ser útil para controlar a ação.

#### Exemplos

Este código mostra um alerta quando um usuário clica em um botão:

```html

<button id="alert">Click Here</button> 
```

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
```

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

O [eventObject](http://api.jquery.com/Types/#Event) tem alguns métodos integrados, incluindo o `preventDefault()` , que faz exatamente o que ele diz - pára o evento padrão de um elemento. Aqui, impedimos que a tag âncora atue como um link:

```html

<a id="myLink" href="www.google.com">Link to Google</a> 
```

```javascript
$("#myLink").click(function (event) { 
  event.preventDefault(); 
 }); 
```

[jsFiddle](https://jsfiddle.net/dy457gbh/)

#### Mais maneiras de jogar com o método de clique

A função de manipulador também pode aceitar dados adicionais na forma de um objeto:

```javascript
jqueryElement.click(usefulInfo, handler) 
```

Os dados podem ser de qualquer tipo.

```javascript
$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){ 
    alert(event.data.firstWord); 
    alert(event.data.secondWord); 
 }); 
```

Invocar o método de clique sem uma função de manipulador aciona um evento de clique:

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
 
 $("#alert").click(); 
```

Agora, sempre que a página for carregada, o evento de clique será acionado quando inserirmos ou recarregarmos a página e mostrarmos o alerta atribuído.

Além disso, você deve preferir usar .on ('click',…) sobre .click (…) porque o primeiro pode usar menos memória e trabalhar para elementos adicionados dinamicamente.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### Erros comuns

O evento click só é vinculado a elementos atualmente no DOM no momento da vinculação, portanto, todos os elementos adicionados posteriormente não serão vinculados. Para ligar todos elementos no DOM, mesmo se forem criados mais tarde, use o método `.on()` .

Por exemplo, este exemplo de método de clique:

```javascript
$( "element" ).click(function() { 
  alert("I've been clicked!"); 
 }); 
```

Pode ser alterado para isso no exemplo do método:

```javascript
$( document ).on("click", "element", function() { 
  alert("I've been clicked!"); 
 }); 
```

#### Mais Informações:

Para mais informações, por favor visite o [site oficial](https://api.jquery.com/click/#click) .