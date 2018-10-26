---
title: OAuth2 Protocol
localeTitle: Protocolo OAuth2
---
## OAuth 2.0

[OAuth 2.0](https://tools.ietf.org/html/rfc6749) es un protocolo de autorización estándar de la industria, que permite a las aplicaciones de terceros un acceso limitado a los recursos en nombre del propietario del recurso (usuarios del sistema)

OAuth se usa ampliamente en muchas de las principales compañías de Internet como Google, Facebook, Slack, etc.

**Tabla de contenido**

*   Conocimiento básico
*   Protocolo de flujo
*   Tipos de concesión de autorización
*   Referencias

### Conocimiento básico

#### [Roles](https://tools.ietf.org/html/rfc6749#section-1.1)

*   **Propietario del recurso** : Persona que utiliza el producto o servicio (por ejemplo: usted es el propietario del recurso en su cuenta de Google)
*   **Servidor de recursos** : Servidor que aloja a los clientes con datos protegidos (por ejemplo: Gmail que aloja sus correos electrónicos)
*   **Cliente** : Aplicación que solicita acceso a los datos en el servidor de recursos.
*   **Servidor de Autorización** : El servidor que maneja la solicitud de autorización, emite el token de acceso al cliente solicitante. Este servidor puede ser el mismo que el servidor de recursos o puede ser un servidor separado

#### Fichas

Hay dos tipos de tokens definidos en OAuth 2.0

*   **[Token de acceso](https://tools.ietf.org/html/rfc6749#section-1.4)** : Los tokens de acceso son la parte crítica de OAuth, ya que permite el acceso a los datos del usuario desde cualquier aplicación que contenga este token. Este token tiene una duración limitada definida por el servidor de autorización.
*   **[Actualizar Token](https://tools.ietf.org/html/rfc6749#section-1.5)** : Este token se emite como parte del token de acceso, ya que el token de acceso tiene una duración limitada, a veces la aplicación del cliente necesita acceder a los datos del usuario durante más tiempo (p. Ej., Servicios de integración), en este caso, la aplicación del cliente puede solicitar el token de actualización, lo que les permite para renovar el token de acceso para obtener uno más nuevo que necesite volver a autorizar al usuario.

#### [Alcance del token de acceso](https://tools.ietf.org/html/rfc6749#section-3.3)

El parámetro de alcance en la solicitud de autorización por el cliente, permite que la aplicación cliente especifique a qué tipo de recursos o datos desean acceder, los ámbitos disponibles están determinados por el servidor de autorización y, una vez autorizados, los ámbitos solicitados se adjuntan al token de acceso. el token de acceso limita el acceso a los datos del usuario en lugar del acceso completo.

### [Protocolo de flujo](https://tools.ietf.org/html/rfc6749#section-1.2)

![OAuth2 Protocol Flow](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)

### Tipos de concesión de autorización

OAuth2 definió 4 tipos de subvenciones para obtener tokens de acceso dependiendo de la naturaleza del cliente.

*   Código de Autorización
*   Flujo implícito
*   Credenciales del propietario del recurso
*   Credenciales del cliente

#### Código de Autorización

Naturaleza del cliente:

El cliente que puede almacenar de forma segura el secreto del cliente (normalmente un servidor web), puede usar esta concesión para autorización. Esto también permite obtener un token de acceso de larga duración con la ayuda del token de actualización.

Ej .: Una aplicación web solicita acceso a la información del usuario de la cuenta de Google.

Flujo abstracto

![Flujo de código de autorización](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/authorization-code-flow.png)

Ejemplo de código:

solicitud de autorización
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

código de autorización posterior a la recepción, solicitud al servidor de autorización con código,
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

respuesta
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

#### Flujo implícito

Naturaleza del cliente:

Aplicación cliente que se ejecuta en el navegador, normalmente aplicaciones frontend (por ejemplo: SPA). Esta subvención no emite token de actualización.

Ej .: Una aplicación frontend de javascript corriendo en el navegador.

Resumen de flujo:

![Flujo de código de autorización](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/implicit-flow.png)

Ejemplo de código:
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

#### Credenciales del propietario del recurso

Naturaleza del cliente:

En este flujo, el propietario del recurso comparte sus credenciales (la contraseña) con el cliente y luego con el servidor de autorización, por lo que esta concesión se utiliza cuando existe una confianza absoluta entre la aplicación cliente y el servidor de autorización. Por lo tanto, este flujo no está permitido en su mayoría para aplicaciones de clientes de terceros.

Por ejemplo: aplicaciones móviles de Facebook que utilizan este flujo para autorizar con el servidor de Facebook.

Resumen de flujo:

![Credenciales del propietario del recurso](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/resource-owner-password-flow.png)

Ejemplo de código:
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=password 
 &username=john 
 &password=abcde 
```

#### Flujo de credenciales del cliente

Naturaleza del cliente:

Este tipo de autorización se utiliza cuando el cliente es en sí mismo un propietario del recurso (es decir, el cliente desea acceder a su límite de uso o información relacionada). No hay autorización de usuario final en este flujo.

Ej .: Aplicación cliente que solicita datos de no usuarios de los servidores de Google (por ejemplo: zonas horarias, mapas, etc.)

Resumen de flujo:

![Credenciales del cliente](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/client-credentials-flow.png)

Ejemplo de código:
```
POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=client_credentials 
 &client_id=client123 
 &client_secret=xyz123 
```

### Referencias

Para más información, consulte

*   [OAuth2 Draft](https://tools.ietf.org/html/rfc6749)
*   [Entendiendo OAuth2](http://www.bubblecode.net/en/2016/01/22/understanding-oauth2/)
*   [Creando tu propio servidor de conexión openId](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/)