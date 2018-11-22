---
title: Bootstrap
localeTitle: Bootstrap
---
## Bootstrap

Bootstrap é uma estrutura de front-end popular para desenvolvimento web. Ele contém componentes pré-construídos e elementos de design para estilizar o conteúdo HTML. Os navegadores modernos, como Chrome, Firefox, Opera, Safari e Internet Explorer, suportam o Bootstrap.

O Bootstrap inclui um sistema de grade responsivo para layouts variados. É um excelente ponto de partida para a criação de um website compatível com dispositivos móveis. Também inclui funcionalidades opcionais de JavaScript, como conteúdo recolhível, carrosséis e modais.

#### Histórico de versões

O Twitter desenvolveu originalmente o framework Bootstrap como uma ferramenta interna. Eles lançaram isso como um projeto de código aberto em agosto de 2011.

O Bootstrap 2 foi lançado em janeiro de 2012. Uma das principais características foi a introdução do sistema de grade responsivo de 12 colunas. O Bootstrap 3 surgiu em agosto de 2013, mudando para um design plano e uma abordagem mobile-first. O Bootstrap 4 está disponível em versão beta a partir de agosto de 2017 e agora inclui Sass e Flexbox.

O Bootstrap 4 estava em desenvolvimento por dois anos antes de lançar algumas versões beta durante 2017, enquanto o primeiro lançamento estável foi lançado em janeiro de 2018. Algumas mudanças notáveis ​​incluem:

*   Movido de Less para Sass;
*   Movido para o Flexbox e sistema de grade melhorado;
*   Cartões adicionados (substituindo poços, miniaturas e painéis);
*   E muito mais!

No momento da escrita, o último lançamento do Bootstrap é \[4.1.3\] (http://blog.getbootstrap.com/2018/07/24/bootstrap-4-1-3/ ). Se você gostaria de acompanhar todas as novidades de anúncios, siga-as [aqui](http://blog.getbootstrap.com/) .

#### Instalação

Existem duas opções principais para adicionar o Bootstrap ao seu projeto da web. Você pode vincular-se a fontes disponíveis publicamente ou baixar a estrutura diretamente.

##### Vinculando a outra fonte

Você pode adicionar CSS Bootstrap usando um elemento `<link>` dentro da `<head>` da sua página da Web que faz referência a uma Content Delivery Network (CDN):

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

Adicionar os elementos JavaScript do Bootstrap é semelhante aos elementos `<script>` normalmente colocados na parte inferior do seu ' tag. Você pode precisar incluir algumas dependências primeiro. Preste atenção especial ao pedido listado:

```html

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> 
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 
```

_Nota: Estes são apenas exemplos e podem ser alterados sem aviso prévio. Por favor, consulte um CDN para links atuais para incluir em seu projeto._

##### Download / Instalação

Você pode baixar e instalar os arquivos de código-fonte do Bootstrap com Bower, Composer, Meteor ou npm. Isso permite maior controle e a opção de incluir ou excluir módulos conforme necessário.

`npm install bootstrap`

`gem 'bootstrap', '~> 4.1.3'`

_Nota: Estes são apenas exemplos e podem ser alterados sem aviso prévio. Por favor, consulte o [site](https://getbootstrap.com/)_ [Bootstrap](https://getbootstrap.com/) _para os links mais atualizados._

#### O sistema de grade de inicialização

O sistema de grade é um sistema de flexbox para dispositivos móveis, para criar rapidamente layouts de todas as formas e tamanhos adequados em todos os dispositivos. Ele é baseado em um layout de 12 colunas e tem vários níveis, um para cada intervalo de consulta de mídia.

O Bootstrap vem com classes de grade predefinidas para seu uso na marcação. Veja mais detalhes e exemplos em https://getbootstrap.com/docs/4.1/layout/grid/

### Recursos do Boostrap

*   O Bootstrap 3 suporta as versões mais recentes do Google Chrome, Firefox, Internet Explorer, Opera e Safari (exceto no Windows). Ele também suporta o IE8 e o mais recente ESR (Firefox Extended Support Release). \[12\]
    
*   Desde o 2.0, o Bootstrap suporta design web responsivo. Isso significa que o layout das páginas da web se ajusta dinamicamente, levando em conta as características do dispositivo usado (desktop, tablet, celular).
    
*   Começando com a versão 3.0, o Bootstrap adotou uma filosofia de design móvel, enfatizando o design responsivo por padrão.
    
*   A versão 4.0 adicionou suporte ao Sass e flexbox
    

#### Mais Informações:

O Bootstrap tem uma documentação completa com muitos [exemplos](https://getbootstrap.com/docs/4.0/examples/) e um [modelo HTML para começar](https://getbootstrap.com/docs/4.0/getting-started/introduction/) (este modelo só tem script incluído; ele não contém uma configuração do sistema de grade, se é isso que você está procurando).

Além disso, você pode encontrar tanto [gratuitos](https://bootswatch.com/) quanto [pagos](https://themes.getbootstrap.com/) temas que se baseiam no framework Bootstrap para fornecer uma aparência mais personalizada e elegante.

#### Recursos do Bootstrap:

* [Blog oficial do Bootstrap](http://blog.getbootstrap.com/) 
* [Inspiração do site Bootstrap](http://expo.getbootstrap.com/) 
* [Mostra de sites construídos usando o Bootstrap](http://builtwithbootstrap.com/) 
* [HTML linter para projetos usando Bootstrap](https://github.com/twbs/bootlint) 
* [Elementos de design e trechos de código para o Bootstrap](https://bootsnipp.com/) 
* [Código, tema e recursos adicionais para o Bootstrap](http://expo.getbootstrap.com/resources/)
