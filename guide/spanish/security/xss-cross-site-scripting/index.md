---
title: XSS Cross Site Scripting
localeTitle: XSS Cross Site Scripting
---
## XSS Cross Site Scripting

Cross Site Scripting (XSS) es un tipo de inyección de código. Es una de las vulnerabilidades más comunes en la web.

XSS generalmente implica ingresar código en un formulario, parámetro de URL o en cualquier otro lugar que acepte la entrada de usuario que se muestra a los usuarios. Por ejemplo, imagine un sitio web que muestre su perfil de usuario e ingresó la `<script>alert("HELLO!");</script>` como su nombre de usuario. Si el sitio no impidió XSS, todas las personas que visitaron su perfil obtendrían una ventana emergente de alerta.

#### Diferentes tipos de XSS

Hay 3 tipos diferentes de XSS.

*   Almacenado XSS
*   Reflexivo xss
*   DOM basado en XSS

#### Peligros de XSS

Por supuesto, el ejemplo anterior no presenta ningún peligro inmediato para aquellos que ven su perfil. Pero, ¿y si tuvieras intenciones más siniestras? Puede ejecutar algunos javascript para mostrar un registro falso en la página y recopilar nombres de usuario y contraseñas para otros usuarios del sitio, o simplemente leer la cookie de sesión si no es segura. Podría obligarlos a visitar otros sitios web o realizar una acción.

#### Defender contra XSS

*   Nunca confíes en los datos del usuario
*   Valide los datos que no son de confianza (verifique si hay datos válidos, si no son válidos, rechace en lugar de procesar)
*   Valores seguros de lista blanca (en lugar de lista negra)
*   Siempre codificar salida
*   Codifique para el contexto correcto (los atributos HTML / HTML / CSS / JSS son todos diferentes)
*   Proteger cookies (solo HTTP y seguro solo pueden ser leídas por el servidor)
*   Implementar una política de seguridad de contenido

#### Más información:

Lea más información sobre XSS y los pasos que puede tomar para protegerse es de:

[Secuencias de comandos entre sitios (XSS](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS) )

[Hoja de referencia de prevención de OWASP XSS (secuencias de comandos entre sitios)](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)

[Hacks plaining Lección de XSS](https://www.hacksplaining.com/exercises/xss-stored)