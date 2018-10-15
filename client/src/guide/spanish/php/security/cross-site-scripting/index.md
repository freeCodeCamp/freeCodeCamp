---
title: Cross Site Scripting
localeTitle: Cross Site Scripting
---
## Cross Site Scripting

Cross Site Scripting es un tipo de vulnerabilidad en una aplicación web causada porque el programador no desinfecta la entrada antes de enviar la entrada al navegador web (por ejemplo, un comentario en un blog). Se usa comúnmente para ejecutar javascript malicioso en el navegador web para realizar ataques como el robo de cookies de sesión entre otras acciones maliciosas para obtener privilegios de mayor nivel en la aplicación web.

### Ejemplo de Cross Site Scripting Attack

Un blog permite a los usuarios diseñar sus comentarios con etiquetas HTML, sin embargo, el script que impulsa el blog no elimina las etiquetas `<script>` permite a cualquier usuario ejecutar javascript en la página. Un atacante puede usar esto en su beneficio para ejecutar javascript malicioso en el navegador. Podrían infectar a los usuarios con malware, robar cookies de sesión y más.

```HTML
<script> 
  alert('Cross Site Scripting!'); 
 </script> 
```

### Defendiendo su sitio web de ataques de scripts entre sitios en PHP

En PHP hay dos funciones principales, `htmlspecialchars()` y `strip_tags()` , integradas para protegerse de los ataques de scripts entre sitios.

La función `htmlspecialchars($string)` evitará que una cadena HTML se muestre como HTML y la mostrará como texto sin formato en el navegador web. **Ejemplo de código htmlspecialchars ()**

```PHP
<?php 
 $usercomment = "<string>alert('Cross Site Scripting!');</script>"; 
 echo htmlspecialchars($usercomment); 
```

El otro enfoque es la función `strip_tags($string, $allowedtags)` que elimina todas las etiquetas HTML, excepto las etiquetas HTML que ha incluido en la lista blanca. Es importante tener en cuenta que con la función `strip_tags()` tiene que tener más cuidado, esta función no impide que el usuario incluya javascript como enlace, tendrá que desinfectarlo por nuestra cuenta.

**Ejemplo de código de strip\_tags ()**

```php
<?php 
 $usercomment = "<string>alert('Cross Site Scripting!');</script>"; 
 $allowedtags = "<p><a><h1><h2><h3>"; 
 echo strip_tags($usercomment, $allowedtags); 
```

**Configuración del encabezado de protección X-XSS:**

En PHP, puede enviar el encabezado de `X-XSS-Protection` que le indicará a los navegadores que comprueben si hay un ataque de secuencias de comandos cruzado reflejado y que la página no se cargue. Esto no impide que todos los ataques de secuencias de comandos entre sitios solo se reflejen y se deben usar en combinación con otros métodos.

```PHP
<?php 
 header("X-XSS-Protection: 1; mode=block"); 
```

**Escribiendo tu propia función de saneamiento.** Otra opción, si desea tener más control sobre cómo funciona el saneamiento, es escribir su propia función de desinfección de HTML, esto no se recomienda para los principiantes de PHP, ya que un error haría que su sitio web sea vulnerable.

### Defendiendo su sitio web de ataques de scripts entre sitios con una Política de seguridad de contenido

Un enfoque eficaz para prevenir ataques de scripts entre sitios, que pueden requerir muchos ajustes en el diseño y la base de código de su aplicación web, es usar una política de seguridad de contenido.

#### Establecer una política de seguridad de contenido como un encabezado HTTP

La forma más común de configurar una Política de seguridad de contenido es configurándola directamente en el encabezado HTTP. Esto lo puede hacer el servidor web editando su configuración o enviándolo a través de PHP.

**Ejemplo de un conjunto de políticas de seguridad de contenido en un encabezado HTTP**

```php
<?php 
 header("content-security-policy: default-src 'self'; img-src https://*; child-src 'none';"); 
```

#### Establecer una política de seguridad de contenido como etiquetas Meta

Puede incluir su Política de seguridad de contenido en el HTML de la página y configurar página por página. Este método requiere que lo establezca en cada página o perderá el beneficio de la política.

**Ejemplo de una política de seguridad de contenido establecida en una etiqueta meta HTML**

```HTML
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';"> 
```

#### Más información:

*   [Wiki OWASP - Secuencias de comandos de sitios cruzados](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
*   [php.net strip\_tags () manual](https://secure.php.net/manual/en/function.strip-tags.php)
*   [php.net htmlspecialchars () manual](https://secure.php.net/manual/en/function.htmlspecialchars.php)
*   [MDN - Política de seguridad de contenido (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)