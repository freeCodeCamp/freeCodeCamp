---
title: jQuery Animate
localeTitle: jQuery Animate
---
## jQuery Animate

O método de animação do jQuery facilita a criação de animações simples, usando apenas algumas linhas de código. A estrutura básica é a seguinte:

```javascript
$(".selector").animate(properties, duration, callbackFunction()); 
```

Para o argumento de `properties` você precisa passar um objeto javascript, com as propriedades CSS que deseja animar como chaves, e os valores que deseja animar como valores. Enquanto `duration` você precisa inserir a quantidade de tempo em milissegundos que a animação deve receber. O `callbackFunction()` é executado assim que a animação termina.

### Exemplo

Um exemplo simples ficaria assim:

```javascript
$(".awesome-animation").animate({ 
    opacity: 1, 
    bottom: += 15 
 }, 1000, function() { 
    $(".different-element").hide(); 
 }); 
```

#### Mais Informações:

Para mais informações, por favor visite o [site oficial](http://api.jquery.com/animate/)