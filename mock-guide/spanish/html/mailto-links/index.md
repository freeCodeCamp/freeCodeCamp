---
title: Mailto Links
localeTitle: Mailto Links
---
## Mailto Links

Un enlace de correo a correo es un tipo de hipervínculo ( `<a href=""></a>` ) con parámetros especiales que le permite especificar destinatarios adicionales, una línea de asunto y / o un texto del cuerpo.

### La sintaxis básica con un destinatario es:

```html

<a href="mailto:friend@something.com">Some text</a> 
```

### Más personalización!

#### Añadiendo un asunto a ese correo:

Si desea agregar un asunto específico a ese correo, tenga cuidado de agregar `%20` o `+` todas partes, hay un espacio en la línea del asunto. Una forma fácil de asegurarse de que está formateado correctamente es usar un [decodificador / codificador de URL](https://meyerweb.com/eric/tools/dencoder/) .

#### Añadiendo texto de cuerpo:

Del mismo modo, puede agregar un mensaje específico en la parte del cuerpo del correo electrónico: Nuevamente, los espacios deben ser reemplazados por `%20` o `+` . Después del parámetro del sujeto, cualquier parámetro adicional debe estar precedido por `&`

Ejemplo: diga que desea que los usuarios envíen un correo electrónico a sus amigos sobre su progreso en Free Code Camp:

Dirección: vacío

Asunto: Buenas noticias

Cuerpo: Me estoy convirtiendo en un desarrollador.

Su enlace html ahora:

```html

<a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a> 
```

Aquí, hemos dejado mailto vacío (mailto :?). Esto abrirá el cliente de correo electrónico del usuario y el usuario agregará la dirección del destinatario.

#### Añadiendo más destinatarios:

De la misma manera, puede agregar parámetros CC y bcc. ¡Separe cada dirección por una coma!

Los parámetros adicionales deben ir precedidos por `&` .

```html

<a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a> 
```

#### Más información:

[MDN - Enlaces de correo electrónico](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links)