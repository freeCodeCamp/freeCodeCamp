---
title: HTML5 Web Storage
localeTitle: Armazenamento na Web em HTML5
---
## Armazenamento na Web em HTML5

O armazenamento na Web permite que aplicativos da Web armazenem até 5 MB de informações no armazenamento do navegador por origem (por domínio e protocolo).

### Tipos de armazenamento na web

Existem dois objetos para armazenar dados no cliente:

`window.localStorage` : armazena dados sem data de validade e permanece até ser removido.

```javascript
// Store Item 
 localStorage.setItem("foo", "bar"); 
 
 // Get Item 
 localStorage.getItem("foo"); //returns "bar" 
```

`window.sessionStorage` : armazena dados para uma sessão, em que os dados são perdidos quando a aba do navegador / navegador é fechada.

```javascript
// Store Item 
 sessionStorage.setItem("foo", "bar"); 
 
 // Get Item 
 sessionStorage.getItem("foo"); //returns "bar" 
```

Como a implementação atual suporta apenas mapeamentos string-para-string, é necessário serializar e desserializar outras estruturas de dados.

Você pode fazer isso usando JSON.stringify () e JSON.parse ().

Por exemplo, para o JSON fornecido
```
var jsonObject = { 'one': 1, 'two': 2, 'three': 3 }; 
```

Primeiro convertemos o objeto JSON em string e salvamos no armazenamento local:
```
localStorage.setItem('jsonObjectString', JSON.stringify(jsonObject)); 
```

Para obter o objeto JSON da sequência armazenada no armazenamento local:
```
var jsonObject = JSON.parse(localStorage.getItem('jsonObjectString')); 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) [Rochas HTML5](https://www.html5rocks.com/en/features/storage) [Escolas W3](https://www.w3schools.com/html/html5_webstorage.asp)