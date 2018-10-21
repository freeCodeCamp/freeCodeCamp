---
title: What is an API
localeTitle: O que é uma API?
---
## O que é uma API?

API significa Application Programming Interface. As APIs ocultam a complexidade dos desenvolvedores, estendem os sistemas aos parceiros, organizam o código e tornam os componentes reutilizáveis. Não se preocupe com o AP, apenas foque no I. Uma API é uma interface. Você usa interfaces o tempo todo. Um sistema operacional de computador é uma interface. Botões em um elevador são uma interface. Um pedal de gás em um carro é uma interface.

Uma interface fica no topo de um sistema complicado e simplifica certas tarefas, um intermediário que evita que você precise conhecer todos os detalhes do que está acontecendo sob o capô. Uma API da web é o mesmo tipo de coisa. Ele fica no topo de um serviço da web, como o Twitter ou o YouTube, e simplifica certas tarefas para você. Ele traduz suas ações em detalhes técnicos para o sistema de computador na outra extremidade.

Se você já programou em uma linguagem orientada a objetos como Java ou C ++, uma API é bastante semelhante ao conceito de uma classe. Quando chamamos um método em um objeto (como `.toString()` ), não nos importamos com COMO o objeto está produzindo o resultado, tudo o que nos interessa é a string que obtemos no final. Uma chamada para uma API funciona da mesma maneira. Por exemplo, quando fazemos uma chamada para a API do Facebook para recuperar a foto do perfil de um usuário, não nos importamos com a forma como as informações são recuperadas do servidor. Acabamos de fazer a solicitação à API, deixar que ela lide com toda a complicada lógica de recuperação e obter nossa foto no final de tudo.

## Por que as APIs são úteis?

Ter acesso a uma API geralmente significa ter acesso a uma grande quantidade de dados organizados. O gatekeeper desses dados fornece uma permissão de desenvolvedor (na forma de uma _chave de API_ ) para consultar um servidor em busca de informações. Se a solicitação for bem-sucedida, o servidor responderá com uma mensagem semelhante a esta:

```javascript
{ 
  "coord": { 
    "lon":139, 
    "lat":35 
  }, 
  "wind": { 
    "speed":7.31, 
    "deg":187.002 
  }, 
  "rain": { 
    "3h":0 
  }, 
  "clouds": { 
    "all":92 
  } 
 } 
```

Fonte: [API Open Weather](https://openweathermap.org/current)

No exemplo acima, um desenvolvedor fez uma solicitação para o tempo atual em uma latitude e longitude específicas, e o servidor respondeu com um _objeto JSON_ sobre vento, chuva e nuvens para esse local. Os serviços que você usa todos os dias são feitos com toneladas de ciclos de solicitação e resposta como este.

**Aqui estão as 10 principais APIs para iniciantes**

1.  Dropbox: https://www.dropbox.com/developers
2.  Google Maps: https://developers.google.com/maps/web/
3.  Twitter: https://dev.twitter.com/docs
4.  YouTube: https://developers.google.com/youtube/v3/getting-started
5.  Soundcloud: http://developers.soundcloud.com/docs/api/guide#playing
6.  Listra: https://stripe.com/docs/tutorials/checkout
7.  Instagram: http://instagram.com/developer/
8.  Twilio: https://www.twilio.com/docs
9.  Yelp: http://www.yelp.com/developers/getting\_started
10.  Facebook: https://developers.facebook.com/docs/facebook-login/login-flow-for-web

#### Mais Informações:

*   [API para não programadores](https://schoolofdata.org/2013/11/18/web-apis-for-non-programmers/)
*   [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)
*   [Médio](https://medium.com/girl-geeks/top-10-apis-for-beginners-4d3c43be9386)