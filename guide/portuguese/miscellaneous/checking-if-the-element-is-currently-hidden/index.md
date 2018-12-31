---
title: Checking if the Element Is Currently Hidden
localeTitle: Verificando se o elemento está atualmente oculto
---
Se você precisa verificar o status de visibilidade de algum elemento na página, você pode fazer isso facilmente com a biblioteca jQuery com o bloco simples de código como o abaixo.
```
var display = ( jQuery('#someElement').is(':visible') ); 
 var visibility = ( jQuery('#someElement').css('visibility') != 'hidden' ); 
 var status = ( display && visibility ); 
 console.log( status ); 
```

Portanto, se o elemento estiver atualmente visível na página, o **`console.log(status)`** retornará `true` e, em qualquer outro caso, retornará `false` . A declaração `false` seria retornada para estes dois casos:

*   if elemento possui `display:none;`
*   se o elemento tiver `visibility: hidden`

e para verificações mais avançadas como esta: **é o elemento visível na viewport agora** eu recomendaria usar o [plugin jQuery onScreen](http://benpickles.github.io/onScreen/)