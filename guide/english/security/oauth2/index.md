---
title: OAuth2 Protocol
---
## OAuth 2.0

<a href='https://tools.ietf.org/html/rfc6749' target='_blank' rel='nofollow'>OAuth 2.0</a> is an industry standard authorization protocol, which enables third party applications limited access to resources on behalf of a resource owner (users of the system).

OAuth is widely being used in many major internet companies like Google, Facebook, Slack etc

**Table of Contents**
- Basic Knowledge
- Protocol Flow
- Authorization Grant Types
- References

### Basic Knowledge

#### <a href='https://tools.ietf.org/html/rfc6749#section-1.1' target='_blank' rel='nofollow'>Roles</a>
- **Resource Owner**:
  Person who is using the product or service (eg: you are Resource Owner in your Google Account)
- **Resource Server**:
  Server hosting customers protected data (eg: Gmail hosting your emails)
- **Client**:
  Application requesting access to data in resource server
- **Authorization Server**:
  Server which handles authorization request, issue access token to requesting client. This server can be same as the resource server or can be a separate server

#### Tokens

There are two types of tokens defined in OAuth 2.0

- **<a href='https://tools.ietf.org/html/rfc6749#section-1.4' target='_blank' rel='nofollow'>Access Token</a>**:
  Access Tokens are the critical part of OAuth since it enables access to user data from any application which holds this token. This token has a limited lifetime defined by the authorization server.
- **<a href='https://tools.ietf.org/html/rfc6749#section-1.5' target='_blank' rel='nofollow'>Refresh Token</a>**:
  This token is issued as part of the access token, since the access token has limited lifetime, sometimes client application need to access user data for longer time (Eg: integration services), in this case client application can request refresh token, which allow them to renew the access token to get newer one which needing to reauthorize the user.



#### <a href='https://tools.ietf.org/html/rfc6749#section-3.3' target='_blank' rel='nofollow'>Access Token Scope</a>

The scope parameter in authorization request by client, lets client application to specify what type of resources or data they wanted to access, the available scopes are determined by the authorization server and once authorized, the requested scopes are attached to the access token, the give the access token limited access to user data instead of full access.


### <a href='https://tools.ietf.org/html/rfc6749#section-1.2' target='_blank' rel='nofollow'>Protocol Flow</a>

![OAuth2 Protocol Flow](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)



### Authorization Grant Types

OAuth2 defined 4 types of grants to obtain access tokens depending upon the nature of client.

- Authorization Code
- Implicit Flow
- Resource Owner Credentials
- Client Credentials


#### Authorization Code Grant

Nature of Client:

Client who can able to securely store client secret (typically a web server), can use this Grant for authorization. This also allow to obtain long-lived access token with the help for refresh token.

Eg: A Web application request access to Google Account user's information

Abstract Flow

![Authorization Code Flow](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/authorization-code-flow.png)

Code Example:

authorization request
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

post receiving authorization code , make request to authorization server with code,

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

response
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


#### Implicit Flow

Nature of Client:

Client application which is running in the browser, typically frontend applications (eg: SPA). This Grant doesn't issue refresh token.

Eg: A frontend javascript application running in the browser

Abstract Flow:

![Authorization Code Flow](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/implicit-flow.png)

Code Sample:

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

#### Resource Owner Credentials

Nature of Client:

In this flow, the resource owner shares their credentials (the password) with the client and then to the authorization server, so this grant is used when their is absolute trust between the client application and the authorization server. Thus this flow is mostly not allowed for third party client applications.

Eg: Facebook mobile apps using this flow to authorize with Facebook Server

Abstract Flow:

![Resource Owner Credentials](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/resource-owner-password-flow.png)

Code Sample:

```
POST /oauth2/token HTTP/1.1
Host: auth.server.com
Content-Type: application/x-www-form-urlencoded

grant_type=password
&username=john
&password=abcde
```


#### Client Credentials Flow

Nature of client:

This type of authorization is used when client is itself a resource owner, (i.e client wants to access its usage limit or information related to it). There is no end user authorization in this flow.

Eg: Client application requesting non user data from google servers (eg: timezones, maps etc)


Abstract Flow:

![Client Credentials](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/client-credentials-flow.png)

Code Sample:

```
POST /oauth2/token HTTP/1.1
Host: auth.server.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=client123
&client_secret=xyz123
```

### References

For more reading, refer

- <a href='https://tools.ietf.org/html/rfc6749' target='_blank' rel='nofollow'>OAuth2 Draft</a>
- <a href='http://www.bubblecode.net/en/2016/01/22/understanding-oauth2/' target='_blank' rel='nofollow'>Understanding OAuth2</a>
- <a href='http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/' target='_blank' rel='nofollow'>Creating your own openId connect server</a>
