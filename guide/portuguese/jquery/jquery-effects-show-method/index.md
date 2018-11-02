---
title: jQuery Effects Show Method
localeTitle: jQuery Effects Show Method
---
## jQuery Effects Show Method

Em sua forma mais simples, o **.show ()** exibe o elemento correspondente imediatamente, sem animação. Por exemplo:

```javascript
$(".myclass").show(); 
```

mostrará todos os elementos cuja classe é _myclass_ . Qualquer seletor jQuery pode ser usado.

No entanto, esse método não substitui `!important` no estilo CSS, como `display: none !important` .

### .show () como um método de animação

Graças às suas opções, o **.show ()** pode animar a largura, a altura e a opacidade dos elementos correspondentes simultaneamente.

*   A duração pode ser fornecida em milissegundos ou usando os literais lentos (600 ms) e rápidos (200ms). por exemplo:

```javascript
$("#myobject").show("slow"); 
```

*   Uma função pode ser especificada para ser chamada assim que a animação estiver completa, uma vez por cada elemento correspondente. por exemplo

```javascript
$("#title").show( "slow", function() { 
    $("p").show("fast"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .slideDown() method 
 This method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items. 
 Usage: 
```

javascript $ (". myclass"). slideDown (); // expandirá o elemento com o identificador myclass por 400 ms. $ (". myclass"). slideDown (1000); // expandirá o elemento com o identificador myclass por 1000 ms. $ (". myclass"). slideDown ("lento"); // expandirá o elemento com o identificador myclass por 600 ms. $ (". myclass"). slideDown ("rápido"); // expandirá o elemento com o identificador myclass por 200 ms. \`\` \`

#### Mais Informações:

JQuery Show () método no [site oficial](http://api.jquery.com/show/)