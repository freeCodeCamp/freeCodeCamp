---
title: Add To Homescreen
localeTitle: Adicionar à tela inicial
---
## Adicionar à tela inicial

Aqui, o banner de instalação de aplicativos da web é focado no aplicativo da web, com o recurso de adicionar à tela inicial.

### Suporte do navegador para adicionar à tela inicial

Adicionar à funcionalidade Homescreen é atualmente suportado por:

*   cromada
*   Safari iOS

Você pode ver o status mais recente do suporte ao navegador deste recurso [aqui](https://caniuse.com/#feat=web-app-manifest) .

### No Android

No Android, o banner "adicionar à tela inicial" é exibido automaticamente se você atender a determinados requisitos. É assim que deve ser no Android:

| Adicionar ao prompt da tela inicial | Quando o aplicativo foi lançado | | : ----------------------: | : ---------------: | | ![prompt](https://user-images.githubusercontent.com/15358452/31663686-860779f0-b375-11e7-85c9-1387d9b3bfcf.png "Adicionar ao prompt de tela inicial no android") | ![launch](https://user-images.githubusercontent.com/15358452/31663690-89b0d998-b375-11e7-8a84-f3e33be9a2c2.png "Lançamento da Homescreen") |

#### Requisitos

*   inclua um arquivo `manifest.json` com as seguintes propriedades:
*   `short name`
*   `name`
*   `192x192` tamanho do ícone `png`
*   `start_url`
*   incluir um trabalhador de serviço que seja registrado e ativado
*   o site servido via HTTPS (você ainda pode tentar isso com localhost sem HTTPS)
*   o website atende à heurística de engajamento definida pelo Google Chrome

#### manifest.json

```json
{ 
  "name": "FreeCodeCamp", 
  "short_name": "FreeCodeCamp", 
  "theme_color": "#00FF00", 
  "background_color": "#00FF00", 
  "display": "standalone", 
  "Scope": "/", 
  "start_url": "/", 
  "icons": [ 
    { 
      "src": "assets/images/icons/icon-72x72.png", 
      "sizes": "72x72", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-96x96.png", 
      "sizes": "96x96", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-128x128.png", 
      "sizes": "128x128", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-144x144.png", 
      "sizes": "144x144", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-152x152.png", 
      "sizes": "152x152", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-192x192.png", 
      "sizes": "192x192", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-384x384.png", 
      "sizes": "384x384", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-512x512.png", 
      "sizes": "512x512", 
      "type": "image/png" 
    } 
  ], 
  "splash_pages": null 
 } 
```

*   `name` é o nome do aplicativo da web. (Isso será mostrado na tela de lançamento)
*   `short name` é o nome abreviado do aplicativo da web. (Será mostrado abaixo o ícone do menu do telefone)
*   `theme_color` é a cor da parte superior do navegador.
*   `background_color` é a cor de fundo da tela de inicialização.
*   `display` é a maneira como o aplicativo da web deve exibir uma vez iniciado no telefone.
*   `start_url` define o URL inicial do site.
*   `icons` é uma matriz que armazena todas as localizações, tamanhos e tipos de imagens.

### Em outros dispositivos

Embora esse método não funcione no iOS e no Windows, há um método de fallback.

**iOS**

No iOS, o botão "adicionar à tela inicial" deve ser adicionado manualmente. Adicione as seguintes metatags à seção principal do seu HTML para suportar o ícone do aplicativo da web para iOS.

```html

<meta name="apple-mobile-web-app-capable" content="yes"> 
 <meta name="apple-mobile-web-app-status-bar-style" content="green"> 
 <meta name="apple-mobile-web-app-title" content="FreeCodeCamp"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-72x72.png" sizes="72x72"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-96x96.png" sizes="96x96"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-128x128.png" sizes="128x128"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-144x144.png" sizes="144x144"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-152x152.png" sizes="152x152"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-192x192.png" sizes="192x192"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-384x384.png" sizes="384x384"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-512x512.png" sizes="512x512"> 
```

**janelas**

No windows phone, adicione as seguintes metatags à seção head do seu HTML:

```html

<meta name="msapplication-TileImage" content="/assets/images/icons/icon-144x144.png"> 
 <meta name="msapplication-TileColor" content="green"> 
```

### Referências

1.  [superoo7, "Uma visão de alto nível do Progressive Web App" Publicado: 18 de dezembro de 2017.](https://steemit.com/web/@superoo7/a-high-level-view-of-progressive-web-app)
2.  [Matt Gaunt e Paul Kinlan, "Web App Instalar Banners" Publicado: 14 de novembro de 2017.](https://developers.google.com/web/fundamentals/app-install-banners/)