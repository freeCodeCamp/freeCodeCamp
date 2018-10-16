---
title: Location Object
localeTitle: Objeto de localização
---
## Objeto de localização

O objeto "Location" fornece uma API (Application Programming Interface) que permite a recuperação de um URL, a configuração de um URL ou o acesso a partes de um URL. Já está implementado por padrão nos objetos Window e Document. Nota: Não existe um padrão público que se aplique ao objeto de localização, mas todos os principais navegadores o suportam.

### Propriedades do objeto de localização

| Propriedade | Descrição | | ---------- | -------------------------------------- ------------------- | | hash | Define ou retorna a parte da âncora (#) de um URL | | host | Define ou retorna o nome do host e o número da porta de um URL | | hostname | Define ou retorna o nome do host de um URL | | href | Define ou retorna o URL inteiro | | origem | Retorna o protocolo, o nome do host e o número da porta de um URL | | nome do caminho | Define ou retorna o nome do caminho de um URL | | porta | Define ou retorna o número da porta de um URL | | protocolo | Define ou retorna o protocolo de um URL | | pesquisa | Define ou retorna a parte de querystring de um URL |

### Métodos de objeto de localização

| Método | Descrição | | ----------- | ------------------------------------- --------- | | assign () | Carrega um novo documento | | recarregar () | Recarrega o documento atual | | replace () | Substitui o documento atual por um novo |

### Exemplos

Os objetos de localização são acessíveis por:

```javascript
    console.log(window.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
    console.log(document.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
```

Você também pode definir o objeto Location de um elemento HTML `<a>` ou um elemento HTML `<area>` programaticamente com JavaScript.

```javascript
    var anchor = document.createElement('a'); 
    anchor.url = "https://guide.freecodecamp.org/javascript/location-object"; 
```

Quando você tiver um objeto com um conjunto de URLs (incluindo a janela), a API local permite acessar partes do URL.

```javascript
    console.log(anchor.protocol); 
    // > https: 
    console.log(anchor.host); 
    // > guide.freecodecamp.org (includes port number if applicable. Example: guide.freecodecamp.org:8080) 
```

Outras propriedades de "Localização" que você pode acessar são:

*   `anchor.hostname` - _guide.freecodecamp.org_
*   `anchor.port` - _8080_
*   `anchor.pathname` - _/ javascript / location-object_
*   `anchor.origin` - _https://developer.mozilla.org_

Se o seu URL contiver parâmetros ou hashes, você poderá acessá-los assim:

```javascript
    // If your URL is https://guide.freecodecamp.org/javascript?param=location#other-properties 
    console.log(window.location.search); 
    // > "?param=location" 
    console.log(document.location.hash); 
    // > "#other-properties" 
```

#### Mais Informações:

[W3C - objeto de localização](https://www.w3schools.com/jsref/obj_location.asp) [Localização](https://developer.mozilla.org/en-US/docs/Web/API/Location)