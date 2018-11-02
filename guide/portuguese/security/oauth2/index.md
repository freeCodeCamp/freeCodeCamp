---
title: OAuth2 Protocol
localeTitle: Protocolo OAuth2
---
## OAuth 2.0

[OAuth 2.0](https://tools.ietf.org/html/rfc6749) é um protocolo de autorização padrão do setor, que permite que um aplicativo de terceiros tenha acesso limitado aos recursos em nome do proprietário do recurso (usuários do sistema)

OAuth está sendo amplamente usado em muitas empresas de internet como Google, Facebook, Slack, etc.

**Índice**

*   Conhecimento básico
*   Fluxo do Protocolo
*   Tipos de concessão de autorização
*   Referências

### Conhecimento básico

#### [Papéis](https://tools.ietf.org/html/rfc6749#section-1.1)

*   **Proprietário do Recurso** : Pessoa que está usando o produto ou serviço (por exemplo: você é proprietário do recurso na sua Conta do Google)
*   **Servidor de Recursos** : Servidor que hospeda dados protegidos de clientes (por exemplo: Gmail que hospeda seus emails)
*   **Cliente** : Aplicativo solicitando acesso aos dados no servidor de recursos
*   **Servidor de Autorização** : Servidor que lida com o pedido de autorização, emite o token de acesso ao cliente solicitante. Este servidor pode ser o mesmo que o servidor de recursos ou pode ser um servidor separado

#### Fichas

Existem dois tipos de tokens definidos no OAuth 2.0

*   **[Token de Acesso](https://tools.ietf.org/html/rfc6749#section-1.4)** : Os tokens de acesso são a parte crítica do OAuth, pois permitem o acesso aos dados do usuário de qualquer aplicativo que contenha esse token. Este token tem um tempo de vida limitado definido pelo servidor de autorização.
*   **[Atualizar token](https://tools.ietf.org/html/rfc6749#section-1.5)** : Este token é emitido como parte do token de acesso, já que o token de acesso tem vida útil limitada; às vezes, o aplicativo cliente precisa acessar dados do usuário por mais tempo (por exemplo, serviços de integração), nesse caso, o aplicativo cliente pode solicitar token de atualização. para renovar o token de acesso para obter um novo que precise reautorizar o usuário.

#### [Access Token Scope](https://tools.ietf.org/html/rfc6749#section-3.3)

O parâmetro escopo na solicitação de autorização por cliente permite que o aplicativo cliente especifique que tipo de recursos ou dados deseja acessar, os escopos disponíveis são determinados pelo servidor de autorização e, uma vez autorizados, os escopos solicitados são anexados ao token de acesso, o token de acesso limitou o acesso aos dados do usuário em vez do acesso total.

### [Fluxo do Protocolo](https://tools.ietf.org/html/rfc6749#section-1.2)

![Fluxo do protocolo OAuth2](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)

### Tipos de concessão de autorização

OAuth2 definiu 4 tipos de concessões para obter tokens de acesso, dependendo da natureza do cliente.

*   Código de autorização
*   Fluxo Implícito
*   Credenciais do proprietário do recurso
*   Credenciais do cliente

#### Concessão do código de autorização

Natureza do cliente:

O cliente que puder armazenar com segurança o segredo do cliente (normalmente, um servidor da Web) pode usar essa concessão para autorização. Isso também permite obter token de acesso de longa duração com a ajuda do token de atualização.

Por exemplo: um aplicativo da Web solicita acesso às informações do usuário da Conta do Google

Fluxo abstrato

![Fluxo do Código de Autorização](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/authorization-code-flow.png)

Exemplo de código:

pedido de autorização
```
GET /oauth2/authorize?response_type=code 
 &client_id=client123&scope=profile 
 &redirect_uri=https://client.com/callback HTTP/1.1 
 Host: auth.server.com 
```

```
HTTP/1.1 302 Found 
 Location: https://client.com/callback#code=sb8s6doy9bsd9sd&state=abcde 
```

postar o código de autorização de recebimento, solicitar ao servidor de autorização com código,
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=authorization_code 
 &code=sb8s6doy9bsd9sd 
 &redirect_uri=https://client.com/callback 
 &client_id=client123 
 &client_secret=secret 
 &scope=profile 
```

resposta
```
HTTP/1.1 200 OK 
 Content-Type: application/json;charset=UTF-8 
 Cache-Control: no-store 
 Pragma: no-cache 
 { 
  "access_token":"gsi8d6fosb9d6fos6df", 
  "token_type":"bearer", 
  "expires_in":3600 
 } 
```

#### Fluxo Implícito

Natureza do cliente:

Aplicativo cliente que está sendo executado no navegador, geralmente aplicativos frontend (por exemplo: SPA). Esta concessão não emite token de atualização.

Por exemplo: um aplicativo de frontend javascript em execução no navegador

Fluxo Abstrato:

![Fluxo do Código de Autorização](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/implicit-flow.png)

Amostra de código:
```
GET /oauth2/authorize?response_type=token 
 &client_id=client123 
 &redirect_uri=https://client.com/callback HTTP/1.1 
 Host: auth.server.com 
```

```
HTTP/1.1 302 Found 
 Location: https://client.com/callback#access_token=98y2b38&token_type=bearer&expires_in=3600&state=abcde 
```

#### Credenciais do proprietário do recurso

Natureza do cliente:

Nesse fluxo, o proprietário do recurso compartilha suas credenciais (a senha) com o cliente e depois com o servidor de autorização, portanto, essa concessão é usada quando sua confiança é absoluta entre o aplicativo cliente e o servidor de autorização. Portanto, esse fluxo não é permitido principalmente para aplicativos clientes de terceiros.

Por exemplo: aplicativos móveis do Facebook usando esse fluxo para autorizar com o Facebook Server

Fluxo Abstrato:

![Credenciais do proprietário do recurso](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/resource-owner-password-flow.png)

Amostra de código:
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=password 
 &username=john 
 &password=abcde 
```

#### Fluxo de Credenciais do Cliente

Natureza do cliente:

Esse tipo de autorização é usado quando o próprio cliente é proprietário de um recurso (ou seja, o cliente deseja acessar seu limite de uso ou informações relacionadas a ele). Não há autorização do usuário final nesse fluxo.

Por exemplo: aplicativo do cliente solicitando dados não do usuário de servidores do Google (por exemplo: fusos horários, mapas, etc)

Fluxo Abstrato:

![Credenciais do cliente](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/client-credentials-flow.png)

Amostra de código:
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=client_credentials 
 &client_id=client123 
 &client_secret=xyz123 
```

### Referências

Para mais leitura, consulte

*   [Rascunho do OAuth2](https://tools.ietf.org/html/rfc6749)
*   [Entendendo o OAuth2](http://www.bubblecode.net/en/2016/01/22/understanding-oauth2/)
*   [Criando seu próprio servidor de conexão openId](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/)