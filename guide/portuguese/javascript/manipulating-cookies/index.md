---
title: Manipulating Cookies
localeTitle: Manipulando Cookies
---
## Manipulando Cookies

Obter ou definir cookies é uma operação direta que pode ser obtida acessando a propriedade cookie no objeto de documento do navegador.

Você encontra um site de receita incrível e informativo para cozinhar uma refeição estrangeira para seus convidados, mas é em idioma estrangeiro, felizmente você é capaz de alterar o idioma no site do site usando uma lista suspensa de seleção. Um par de dias depois você visita o mesmo site novamente para fazer um prato para sua mãe, mas agora você vê o site em sua língua nativa por padrão.

_O site lembra o idioma selecionado na sua última visita e o armazena na forma de um **cookie** . Agora, ele selecionou automaticamente seu idioma preferido lendo esse cookie._

`userLanguage:french`

Os cookies são usados ​​para armazenar dados em forma de `name:value` par de `name:value` na parte do lado do cliente. Ele permite que um site armazene informações específicas do usuário no navegador para uso posterior. A informação armazenada poderia ser `sessionID` , `userCountry` , `visitorLanguage` etc.

Outra maneira de armazenar os dados no lado do cliente é o `localstorage` .

### Definir Cookie

Um cookie pode ser definido usando a sintaxe abaixo, mas uma biblioteca, como a mencionada no final, é altamente recomendada para tornar o desenvolvimento mais fácil para todos. Ao definir o cookie, você também pode definir o vencimento dele. Se ignorado, o cookie será apagado quando o navegador for fechado.

**Lembre-se de que um conjunto de cookies de um determinado domínio só pode ser lido por esse domínio e apenas por subdomínios.**

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/'; 
 
 //Using JS cookie library 
 Cookies.set('userLanguage', 'french', { expires: 7, path: '/' }); 
```

_Cookie expira em 7 dias_

### Obter Cookie

```javascript
// Using vanilla javascript 
 console.log(document.cookie) 
 
 // => "_ga=GA1.2.1266762736.1473341790; userLanguage=french" 
 
 // Using JS cookie library 
 Cookies.get('userLanguage'); 
 
 // => "french" 
```

### Excluir Cookie

Para excluir um cookie, defina a data de validade como algo no passado.

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'; 
 
 //Using JS cookie library 
 Cookies.remove('userLanguage'); 
```

_Se você estiver jogando muito com cookies em seu projeto, por favor, use uma biblioteca como esta [JS Cookie](https://github.com/js-cookie/js-cookie) e poupe muito tempo._

#### Mais Informações:

*   [Cookie explicado](https://www.quirksmode.org/js/cookies.html)
*   [Guia de cookies MDN](https://developer.mozilla.org/en-US/docs/Web/API/document/cookie)
*   [Vídeo de Cookie Udacity](https://www.youtube.com/watch?v=xdH9zsW1CK0)
*   [Cookies HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)