---
title: Window.localStorage
localeTitle: Window.localStorage
---
## window.localStorage

`localStorage` fornece uma maneira de seus aplicativos da Web armazenarem dados localmente no navegador do usuário.

Antes do HTML5, os dados do aplicativo precisavam ser armazenados em cookies. Os cookies são incluídos em todas as solicitações HTTP, diminuindo, assim, seu aplicativo da web transmitindo os mesmos dados. Os cookies também estão limitados a cerca de 4 KB de dados que podem não ser suficientes para armazenar os dados necessários.

`localStorage` limite de `localStorage` é maior que o dos cookies com até 10 MB de dados por domínio e as informações nunca são transferidas para o servidor.

### Tipos de localStorage

Existem dois tipos principais de armazenamento na web:

*   Armazenamento local: armazena dados sem data de expiração. Os dados no `localStorage` persistirão mesmo quando o navegador do usuário for fechado e reaberto.
*   Armazenamento de sessão: é semelhante ao `localStorage` , exceto pelo fato de armazenar dados apenas para uma sessão. Quando o usuário estiver com o navegador fechado, essa sessão será perdida e os dados persistentes serão excluídos do navegador.

### Métodos de armazenamento local HTML5

`localStorage` vem com alguns métodos JavaScript diferentes que facilitam muito o trabalho, vamos ver alguns:

_NB: Esses métodos se aplicam a ambos os tipos de armazenamento da Web (armazenamento local e armazenamento de sessão)_

Para definir dados, precisamos fazer o seguinte:

```javascript
localStorage.setItem('Name', 'somevalue'); 
```

Para recuperar alguns dados do armazenamento:

```javascript
localStorage.getItem('Name'); 
```

Para remover ou excluir alguns dados, podemos fazer isso:

```javascript
localStorage.removeItem('Name'); 
```

Para limpar todo o armazenamento (não apenas um item individual), podemos usar:

```javascript
localStorage.clear(); 
```

Para obter o número de propriedades no armazenamento:

```javascript
localStorage.length; 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)