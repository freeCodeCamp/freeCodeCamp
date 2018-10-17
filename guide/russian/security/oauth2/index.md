---
title: OAuth2 Protocol
localeTitle: Протокол OAuth2
---
## OAuth 2.0

[OAuth 2.0](https://tools.ietf.org/html/rfc6749) является стандартным протоколом авторизации, который позволяет стороннему приложению иметь ограниченный доступ к ресурсам от имени владельца ресурса (пользователей системы)

OAuth широко используется во многих крупных интернет-компаниях, таких как Google, Facebook, Slack и т. Д.

**Оглавление**

*   Базовые знания
*   Поток протокола
*   Типы разрешений авторизации
*   Рекомендации

### Базовые знания

#### [Роли](https://tools.ietf.org/html/rfc6749#section-1.1)

*   **Владелец ресурса** : Лицо, использующее продукт или услугу (например: владелец ресурса в своем аккаунте Google)
*   **Сервер ресурсов** : Сервер, на котором хранятся данные, защищенные клиентами (например, Gmail, на котором размещаются ваши электронные письма)
*   **Клиент** : Приложение, запрашивающее доступ к данным на сервере ресурсов
*   **Сервер авторизации** : Сервер, который обрабатывает запрос авторизации, выдаёт маркер доступа запрашивающему клиенту. Этот сервер может быть таким же, как сервер ресурсов, или может быть отдельным сервером

#### Лексемы

В OAuth 2.0 есть два типа токенов

*   **[Токен доступа](https://tools.ietf.org/html/rfc6749#section-1.4)** : Токены доступа являются важной частью OAuth, поскольку он позволяет получать доступ к пользовательским данным из любого приложения, которое содержит этот токен. Этот токен имеет ограниченный срок службы, определенный сервером авторизации.
*   **[Обновить токен](https://tools.ietf.org/html/rfc6749#section-1.5)** : Этот токен выдается как часть токена доступа, поскольку токен доступа имеет ограниченный срок службы, иногда клиентскому приложению требуется доступ к пользовательским данным в течение более длительного времени (например, услуги интеграции), в этом случае клиентское приложение может запросить токен обновления, который позволяет им чтобы обновить токен доступа, чтобы получить более новый, который требует повторного авторизации пользователя.

#### [Область доступа к токену](https://tools.ietf.org/html/rfc6749#section-3.3)

Параметр области в запросе авторизации клиентом позволяет клиентскому приложению указывать, какой тип ресурсов или данных они хотят получить доступ, доступные области определяются сервером авторизации и после авторизации запрашиваемые области привязаны к токену доступа, дают токен доступа ограничивает доступ к пользовательским данным вместо полного доступа.

### [Поток протокола](https://tools.ietf.org/html/rfc6749#section-1.2)

![Протокол OAuth2](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)

### Типы разрешений авторизации

OAuth2 определил 4 типа грантов для получения токенов доступа в зависимости от характера клиента.

*   Код авторизации
*   Неявный поток
*   Учетные данные владельца ресурса
*   Учетные данные клиента

#### Грант авторизационного кода

Характер клиента:

Клиент, который может безопасно хранить секрет клиента (как правило, веб-сервер), может использовать этот грант для авторизации. Это также позволяет получить долгоживущий токен доступа с помощью токена обновления.

Например: запрос веб-приложения для доступа к информации пользователя учетной записи Google

Абстрактный поток

![Поток кода авторизации](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/authorization-code-flow.png)

Пример кода:

запрос авторизации
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

после получения авторизационного кода, запрос на авторизационный сервер с кодом,
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

ответ
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

#### Неявный поток

Характер клиента:

Клиентское приложение, запущенное в браузере, обычно использует внешние приложения (например: SPA). Этот грант не выдает токен обновления.

Например: внешнее приложение javascript, запущенное в браузере

Абстрактный поток:

![Поток кода авторизации](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/implicit-flow.png)

Образец кода:
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

#### Учетные данные владельца ресурса

Характер клиента:

В этом потоке владелец ресурса делит свои учетные данные (пароль) с клиентом, а затем на сервер авторизации, поэтому этот грант используется, когда они являются абсолютным доверием между клиентским приложением и сервером авторизации. Таким образом, этот поток в основном не разрешен для сторонних клиентских приложений.

Например: мобильные приложения Facebook, используя этот поток для авторизации с помощью Facebook Server

Абстрактный поток:

![Учетные данные владельца ресурса](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/resource-owner-password-flow.png)

Образец кода:
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=password 
 &username=john 
 &password=abcde 
```

#### Поток клиентских учетных данных

Характер клиента:

Этот тип авторизации используется, когда клиент сам является владельцем ресурса (т.е. клиент хочет получить доступ к своему пределу использования или связанной с ним информации). В этом потоке нет авторизации конечного пользователя.

Например: клиентское приложение, запрашивающее данные не пользователей с серверов google (например: часовые пояса, карты и т. Д.),

Абстрактный поток:

![Учетные данные клиента](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/client-credentials-flow.png)

Образец кода:
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=client_credentials 
 &client_id=client123 
 &client_secret=xyz123 
```

### Рекомендации

Для получения дополнительной информации см.

*   [OAuth2 Draft](https://tools.ietf.org/html/rfc6749)
*   [Понимание OAuth2](http://www.bubblecode.net/en/2016/01/22/understanding-oauth2/)
*   [Создание собственного сервера подключений openId](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/)