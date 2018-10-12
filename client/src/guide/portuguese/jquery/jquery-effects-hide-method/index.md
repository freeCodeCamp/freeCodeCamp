---
title: jQuery Effects Hide Method
localeTitle: jQuery Effects Hide Method
---
## jQuery Hide Method

Em sua forma mais simples, **.hide ()** oculta o elemento correspondente imediatamente, sem animação. Por exemplo:

```javascript
$(".myclass").hide() 
```

irá esconder todos os elementos cuja classe é _myclass_ . Qualquer seletor jQuery pode ser usado.

### .hide () como um método de animação

Graças às suas opções, **.hide ()** pode animar a largura, a altura e a opacidade dos elementos correspondentes simultaneamente.

*   A duração pode ser fornecida em milissegundos ou usando os literais lentos (600 ms) e rápidos (200ms). por exemplo:

```javascript
$("#myobject").hide(800) 
```

*   Uma função pode ser especificada para ser chamada assim que a animação estiver completa, uma vez por cada elemento correspondente. Este retorno de chamada é principalmente útil para encadear diferentes animações. Por exemplo

```javascript
$("p").hide( "slow", function() { 
      $(".titles").hide("fast"); 
      alert("No more text!"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .toggle() method 
 
 To show / hide elements you can use ```toggle()``` method. If element is hidden ```toggle()``` will show it and vice versa. 
 Usage: 
```

javascript $ (". myclass"). toggle () \`\` \`

### método .slideDown ()

Este método anima a altura dos elementos correspondentes. Isso faz com que partes inferiores da página deslizem para baixo, abrindo caminho para os itens revelados. Uso:

```javascript
$(".myclass").slideDown(); //will expand the element with the identifier myclass for 400 ms. 
 $(".myclass").slideDown(1000); //will expand the element with the identifier myclass for 1000 ms. 
 $(".myclass").slideDown("slow"); //will expand the element with the identifier myclass for 600 ms. 
 $(".myclass").slideDown("fast"); //will expand the element with the identifier myclass for 200 ms. 
```

#### Mais Informações:

JQuery hide () método no [site oficial](http://api.jquery.com/hide/)