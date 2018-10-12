---
title: Store Data in Web Browsers Storage
localeTitle: Armazenar dados no armazenamento de navegadores da Web
---
Para gerenciar os dados manipulados pelo seu aplicativo da Web, você não precisa necessariamente de um banco de dados. Os respectivos recursos de Armazenamento do Navegador são suportados pelo Chrome (versão 4 e superior), Mozilla Firefox (versão 3.5 e superior) e Internet Explorer (versão 8 e superior) e uma variedade de outros navegadores, incluindo os de iOS e Android.

Existem duas possibilidades principais para o armazenamento do navegador:

## 1\. localStorage

Qualquer conteúdo / dados salvos no objeto `localStorage` estará disponível depois que o navegador for reiniciado (fechado e aberto novamente). Para **_salvar um item_** no `localStorage` , você pode usar o método `setItem()` . Este método deve receber uma chave e um valor.
```
Example: localStorage.setItem("mykey","myvalue"); 
```

Para **_recuperar o item do localStorage_** , o método `getItem` deve ser usado. O método `getItem` deve receber a chave dos dados que você gostaria de recuperar:
```
  Example: localStorage.getItem("mykey"); 
```

Você pode remover um item do `localStorage` usando o método `removeItem()` . Este método deve receber a chave do item a ser removido:
```
  Example: localStorage.removeItem("mykey"); 
```

Para limpar todo o `localStorage` , você deve usar o método `clear()` no objeto `localStorage` :
```
  Example: localStorage.clear(); 
```

## 2\. sessionStorage

Itens salvos no objeto `sessionStorage` permanecerão até que o navegador seja fechado pelo usuário. Em seguida, o armazenamento será limpo.

Você pode salvar um item para `sessionStorage` , por favor use o método `setItem()` no objeto `sessionStorage` :
```
Example: sessionStorage.setItem("mykey","myvalue"); 
```

Para **_recuperar o item do sessionStorage_** , o método `getItem` deve ser usado. O método `getItem` deve receber a chave dos dados que você gostaria de recuperar:
```
  Example: sessionStorage.getItem("mykey"); 
```

Você pode remover um item do `sessionStorage` usando o método `removeItem()` . Este método deve receber a chave do item a ser removido:
```
  Example: sessionStorage.removeItem("mykey"); 
```

Para limpar todo o `sessionStorage` , você deve usar o método `clear()` no objeto `sessionStorage` :
```
  Example: sessionStorage.clear(); 
```

## Salvando matrizes para localStorage e sessionStorage

Você não pode salvar apenas valores únicos no `localStorage` e `sessionStorage` , mas também pode salvar o conteúdo de um array.

Neste exemplo, temos uma matriz com números:
```
var ourArray =[1,2,3,4,5]; 
```

Agora podemos salvá-lo em `localStorage` ou `sessionStorage` usando o método `setItem()` :
```
localStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

ou, para `sessionStorage` :
```
sessionStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

Para ser salvo, o array deve primeiro ser convertido em uma string. No exemplo mostrado acima, estamos usando o método `JSON.stringify` para fazer isso.

Ao recuperar nossos dados do `localStorage` ou `sessionStorage` , converta-os de volta em uma matriz:
```
var storedArray = localStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 
```

ou, para `sessionStorage` :
```
var storedArray = sessionStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 

```