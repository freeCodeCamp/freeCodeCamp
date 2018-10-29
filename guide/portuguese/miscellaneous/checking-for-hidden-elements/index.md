---
title: Checking for Hidden Elements
localeTitle: Verificando Elementos Ocultos
---
Há momentos em que você pode precisar verificar se um elemento está visível ou oculto na tela, para que você possa executar alguma ação nele, considerando seu estado. Eu estava procurando algumas soluções no Stack Overflow para tentar verificar se um elemento estava visível e não fiquei satisfeito com as respostas que recebi.

Uma resposta foi usar a biblioteca jQuery e, em seguida, verificar se o elemento possui a pseudoclass de `:visible` usando este formato: `$(element).is(':visible')` . Isso funciona para elementos ocultos usando `display: none;` neles, mas não funciona em nenhum elemento cuja `visibility` esteja `hidden` . Também não funciona se o elemento pai for o único elemento que está oculto da exibição. Se qualquer elemento pai do elemento testado estiver oculto, usando `visibility` ou `display` , o elemento que está sendo testado retornará como visível, apesar de não estar visível na tela.

## A solução

Eu criei uma função JavaScript pura que resolve esse problema que não tem dependências e é uma solução compatível com vários navegadores. Esta função analisará o elemento primeiro para ver se suas propriedades de `display` ou `visibility` estão sendo mostradas como `none` ou `hidden` respectivamente. Então, se eles voltarem ao normal, ele verifica todos os elementos pai até o corpo do documento. Se um elemento pai do elemento que está sendo testado estiver oculto, isso significa que o elemento que está sendo testado não está visível no documento.

[Aqui está um exemplo de CodePen que demonstra esse comportamento e até mostra a comparação sendo usada a solução jQuery e minha solução JavaScript pura](http://codepen.io/marcusparsons/pen/bpNqgY) . Observe no CodePen que mesmo que o elemento esteja claramente oculto, o uso do `.is(':visible')` do jQuery não é uma opção viável para realmente verificar qualquer elemento quanto à visibilidade.

E aqui está a função que criei:
```
function isVisible (element) { 
    //start with initial element to check visibility and display 
    var el = document.querySelector(element); 
    //display and visibility vary per browser and must be sought in different ways depending on the browser 
    var t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
    var t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
    //if either of these are true, then the element is not visible 
    if (t1 === "hidden" || t2 === "none") { 
        return false; 
    } 
    //This regex is used to scan the parent nodes all the way up to the body element 
    while (!(/body/i).test(el)) { 
        //get the next parent node 
        el = el.parentNode; 
        //grab the values, if available, 
        t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
        t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
        if (t1 === "hidden" || t2 === "none") { 
            return false; 
        } 
    } 
    //if all scans are not successful, then the element is visible 
    return true; 
 } 
```

E para usar a função, você só precisa chamá-la com uma string de consulta para selecionar o elemento a ser testado.
```
<body> 
    <p style="visibility: hidden;" id="myP">My paragraph</p> 
    <script type="text/javascript"> 
        //include isVisible function 
        alert('Is my paragraph visible? ' + isVisible('#myP')); 
    </script> 
 </body> 
```

E o alerta resultante será: `Is my paragraph visible? false`