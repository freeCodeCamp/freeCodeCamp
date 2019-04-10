---
title: Semantic UI
localeTitle: IU semântica
---
## IU semântica

#### Introdução

Semantic UI é um framework de desenvolvimento front-end similar ao bootstrap projetado para temas. Ele contém componentes semânticos pré-construídos que ajudam a criar layouts bonitos e responsivos usando HTML amigável para humanos.

De acordo com o website da Semantic UI, o framework utiliza HTML conciso, JavaScript intuitivo e depuração simplificada para tornar o desenvolvimento de front-end uma experiência divertida e prazerosa. E integra-se com o React, Angular, Meteor, Ember e muitos outros frameworks para ajudar a organizar a camada de interface do usuário junto com a lógica do aplicativo.

#### Histórico de versões

O primeiro pré-lançamento aparece no github em setembro de 2013, criado por [Jack Lukic](https://github.com/jlukic) .

O Semantic UI `1.x` foi lançado pela primeira vez em novembro de 2014, com a quebra de alterações em pré-lançamentos anteriores.

O Semantic UI `2.x` foi lançado pela primeira vez em junho de 2015 e introduziu o novo ui, várias correções de bugs, aprimoramentos e melhorias de temas padrão.

#### Suporte de Navegador

A versão atual `2.2.x` suporta os seguintes navegadores

*   Últimas 2 versões FF, Chrome, Safari Mac
*   IE 11+
*   Android 4.4+, Chrome para Android 44+
*   iOS Safari 7+
*   Microsoft Edge 12+

#### Instalação

Existem várias maneiras de instalar a Semantic UI, algumas das formas mais simples são as seguintes:

1.  **Via Content Delivery Network (CDN)**

É de longe o mais fácil para iniciantes. Crie um arquivo HTML como abaixo

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Semantic UI</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"> 
    <!-- Add custom stylesheet here --> 
  </head> 
  <body> 
 
    <!-- Write your html code here --> 
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script> 
  </body> 
 </html> 
```

`NOTE:` O link CDN acima na linha 5, incluirá todos os componentes disponíveis na interface semântica. Se você deseja instalar um componente específico, [clique aqui](https://cdnjs.com/libraries/semantic-ui) para ver seu respectivo link CDN.

2.  **Usando ferramentas de compilação**

Isto assumirá que você está usando o Ubuntu Linux OS com o `node` e `npm` instalados, para outros sistemas operacionais [clique aqui](https://semantic-ui.com/introduction/getting-started.html)

No diretório do seu projeto, instale o gulp globalmente usando npm
```
npm install -g gulp 
```

Instalar a interface semântica
```
npm install semantic-ui --save 
 cd semantic/ 
 gulp build 
```

Incluir no HTML

```html

<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"> 
 <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> 
 <script src="semantic/dist/semantic.min.js"></script> 
```

Atualizar via npm
```
npm update 
```

3.  **Integrando com outros Frameworks**

Você pode integrar a Semantic UI a outras estruturas de desenvolvimento front-end, como React, Angular, Ember ou Meteor. [Clique aqui](https://semantic-ui.com/introduction/integrations.html) para mais informações e instruções de integração.

#### Mais Informações

Semantic UI tem uma documentação completa e muito bem organizada, que irá colocá-lo em funcionamento em pouco tempo. Os links a seguir serão úteis na jornada da sua interface semântica.

*   [Web site de interface semântica](https://semantic-ui.com/)
*   [Introdução à UI semântica](https://semantic-ui.com/introduction/getting-started.html)
*   [Exemplos de modelos de interface semântica](https://semantic-ui.com/usage/layout.html#pages)
*   [Personalizando e criando temas de interface semântica](http://learnsemantic.com/)