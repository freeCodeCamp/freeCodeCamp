---
başlık: WebSocket
---

## WebSocket

*Web Socket* gerçek zamanlı veri alışverişi için istemci ve sunucu arasında etkileşimli bir bağlantı oluşturmanıza olanak veren bir teknolojidir. WebSockets, bu teknolojiyi HTTP'den ayıran iki akışta çalışmanıza olanak tanır.

## WebSocket nasıl çalışır??

WebSocket cevap vermek için tekrarlanan çağrılara ihtiyaç duymaz. Bir istekte bulunmak ve cevap beklemek yeterlidir. Cevapları hazır olan sunucuyu dinleyebilirsiniz.

## WebSocket'i ne zaman kullanabilirim?

* Real-Time Uygulamalar
* Chat Uygulamaları
* IoT Uygulamalar
* Multiplayer Oyunlar


## WebSockets'i ne zaman kullanmamalıyız??

WebSocket zaten tarayıcıların% 95'inde desteklenmektedir, ancak bazen bu teknoloji gerekli değildir. Örneğin, gerçek zamanlı işlevselliğin gerekli olmadığı basit bir CMS oluşturuyorsanız WebSocket kullanmanıza gerek yoktur.

## WebSocket Örneği
> Frontend (İçe aktarmaya gerek yoktur, WebSocket [her büyük tarayıcı] tarafından desteklenir)
```javascript
const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = function(e){
    console.log('WebSocket\'ten mesaj geldi.');
    const parsedData = JSON.parse(e.data);
    handleData(parsedData);
};

ws.onopen = function(){
    console.log('Websocket açıldı.');
}
```

> Backend ([ws](https://github.com/websockets/ws) ve [express](https://expressjs.com/) NodeJS için en yaygın WebSocket frameworkleridir)
```javascript
const SocketServer = require('ws').Server;
const router = require('express').Router();

const server = express()
    .use('/', router)
    .listen(3000, () => console.log('3000 portu dinleniyor.'));

const wss = new SocketServer({ server });
```

## Daha fazla bilgi edin
[Resmi Mozilla API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
