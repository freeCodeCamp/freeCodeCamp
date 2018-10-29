---
title: Add Flex Superpowers to the Tweet Embed
localeTitle: Adicione Superpotências Flex ao Tweet Incorporado
---
## Adicione Superpotências Flex ao Tweet Incorporado

Com base no [desafio anterior](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes/index.md) , você precisará adicionar a propriedade aos seletores certos. Aqui o truque é identificar o seletor certo, então tudo o que você precisa para adicionar o _display: flex;_ propriedade.

O cabeçalho garantirá que os botões de imagem, nome, manuseio e acompanhamento sejam reposicionados horizontalmente.

```CSS
header { 
    display: flex; 
 } 
```

Alinha o nome e o identificador para parecer uma frase.

```CSS
header .profile-name { 
    display:flex; 
    margin-left: 10px; 
  } 
```

Adicionar a propriedade ao botão seguir junto com a margem centralizará o botão no tamanho correto.

```CSS
header .follow-btn { 
    display:flex; 
    margin: 0 0 0 auto; 
  } 
```

A mesma ideia é usada nos elementos de rodapé.