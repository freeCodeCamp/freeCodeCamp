---
title: Using Browsec for Securing Your Connection to Freecodecampcom
localeTitle: Usando o Browsec para proteger sua conexão com o Freecodecampcom
---
### Por que preciso de um plugin ou complemento?

Ultimamente alguns dos campistas começaram a enfrentar problemas estranhos, a saber, "Modificação de Conteúdo" por alguns Provedores de Serviços de Internet (ISP), levando ao site do [FreeCodeCamp.com](http://freecodecamp.com) (FCC) sendo quebrado algumas vezes.

Isso veio à luz com alguns dos problemas registrados pelos campistas:

*   [\# 5999: Anúncios de injeção de ISPs indianos interrompem o site](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/5999)
*   [\# 6122: Problema sério usando o IDE do FCC, console mostrando erro…](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6122)
*   [\# 6381: Não é possível visualizar o editor de código no navegador](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6381)

## TL: DR: O que há de errado, de novo?

Bem, para alguns campistas, este é um caso clássico de [homem no ataque do meio](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) .

Por exemplo, como visto na edição \# 5999 , o ISP de alguns campistas da Índia está deliberadamente injetando anúncios nos sites visitados do usuário que estão causando problemas.

Embora, em outros casos, os ISPs às vezes usem uma estratégia semelhante para armazenar em cache os sites visitados pelos consumidores, para que possam veicular o conteúdo em cache para outros consumidores que visitam os mesmos sites, isso economiza custos de largura de banda e disponibiliza sites mais rapidamente.

Mas quando isso não é feito corretamente (ou é feito de forma maliciosa, como no primeiro caso), isso modifica o conteúdo essencial para sites, e os impede de funcionar corretamente.

## Qual é a correção, então?

Simples, precisamos criptografar nossa conexão com o site da FCC. Ao criptografar nosso tráfego, contornamos a capacidade do ISP de modificar ou armazenar em cache nosso conteúdo conforme ele passa pela infraestrutura.

Isso pode ser feito com um complemento de navegador útil chamado [Browsec](https://browsec.com/en/) .

### Como o add-on funciona?

O add-on cria uma conexão VPN entre o seu dispositivo e o mundo exterior. Ou seja, o Sr. Peeping Tom (ISP), não pode mexer com sua conexão com o site da FCC. É tecnicamente o mesmo que se você não estivesse em sua casa, mas acessando o site da FCC nos EUA, na Holanda ou em outros lugares semelhantes.

_Nos bastidores, ele criptografa a transmissão de dados e oculta seu IP._

## Eu sou vendido, mostre-me os passos.

Ai está!

### Para o Google Chrome:

#### Etapa 1: instale a extensão do browsec.

Você pode [baixar e instalar o plugin browsec](https://chrome.google.com/webstore/detail/browsec/omghfjlpggmjjaagoclmmobgdodcjboh) para Chrome na WebStore oficial.

![Imagem de 'Browsec on Google Chrome WebStore'](//discourse-user-assets.s3.amazonaws.com/original/2X/6/61bd52ed78c56369e62ca376b6dd9e56abcb6363.png)

#### Etapa 2: limpe os cookies do navegador e o cache (opcional).

É bom limpar o cache do navegador pela primeira vez para usar o browsec, para que o navegador carregue todos os arquivos do zero.

#### Etapa 3: reinicie seu navegador e visite [FreeCodeCamp.com](http://freecodecamp.com)

Basta fechar o navegador e reiniciá-lo. Verifique a extensão de browsec, para o seu local de endpoint desejado.

### Para o Mozilla Firefox:

Faça o download de uma versão portátil do Firefox, com o complemento incluído, no [site](https://browsec.com/en/dashboard/main) da [Browsec](https://browsec.com/en/dashboard/main) .

![Imagem de 'Browsec on Google Chrome WebStore'](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b30fbf3bade330044e18b3c37409f2437a3810c1.png)

É isso aí! Codificação Feliz! Se isso funcionar, informe-nos no [Chat de Ajuda](https://gitter.im/FreeCodeCamp/Help)

## FAQs

### Como eu sei se estou enfrentando um ataque "man in the middle"?

Quando você visita o site da FCC, ou faz os desafios, se você olhar para o console do desenvolvedor do seu navegador (Pressione F12> guia Console), você deve ver erros semelhantes, como abaixo.

![Imagem de 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4949599e3143f454fc5a7174a81e65fa68d04c77.png)

![Imagem de 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/0/039acb319bae57f31ebd78aa3c8987f324a37f84.png)

![Imagem de 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/2/25dcc04ecddc422fb7ba113ddac3378d5decd905.png)

Estes são casos clássicos do problema.

### Espere um minuto, posso usar algum mecanismo alternativo para o Browsec?

Sim, por que não, você pode usar qualquer cliente VPN disponível no mercado, mas tenha em mente que o Browsec é gratuito e funciona muito bem!

### Ei e outros navegadores, Internet Explorer, Safari, etc?

Hmm, vá para qualquer add-on VPN que você pode encontrar para estes navegadores, [Tor](https://www.torproject.org/) , é um desses clientes, mas eles vêm com assinaturas pagas, você pode basicamente usar qualquer anonymizer que você quiser, no entanto Chrome e Browsec são experimentados e testados e já trabalhou para a maioria dos campistas no passado.

### Posso usar o anonimato para usar sites que não sejam da FCC?

Claro que sim. Por que não? No entanto, lembre-se de que isso não o torna invisível para a lei, então tenha cuidado com o que você está fazendo! ![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 ":piscadela:")

### E se isso não funcionar para mim?

Por favor, deixe-nos saber no [Chat de Ajuda](https://gitter.im/FreeCodeCamp/Help) , vamos tentar o nosso melhor para encontrar uma solução alternativa.

#### _aviso Legal_

**_FreeCodeCamp NÃO endossa nenhum dos softwares mencionados neste artigo, por favor use-os a seu próprio critério. Alguns clientes VPN podem rastrear sua atividade, e também pode haver efeitos colaterais, como baixa velocidade ou atraso no carregamento da página._**