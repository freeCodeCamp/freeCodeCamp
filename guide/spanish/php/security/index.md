---
title: Security
localeTitle: Seguridad
---
## Seguridad

Al escribir código PHP es muy importante tener en cuenta los conceptos de seguridad para evitar escribir código vulnerable.

### Tipos de vulnerabilidades

*   [Falsificación de solicitudes de sitios cruzados](/php/security/cross-site-request-forgery) Una vulnerabilidad en la aplicación causada por el programador que no comprueba desde dónde se envió una solicitud: este ataque se envía a un usuario de alto nivel de privilegios para obtener un acceso de nivel superior a la aplicación.
*   [Secuencias de comandos entre sitios](/php/security/cross-site-scripting) Una vulnerabilidad en la aplicación causada por el programador que no elimina la entrada antes de enviar la entrada al navegador (por ejemplo, un comentario en un blog). Se usa comúnmente para ejecutar javascript malicioso en el navegador para realizar ataques como el robo de cookies de sesión entre otras acciones maliciosas para obtener privilegios de mayor nivel en la aplicación.
*   [Inclusión de archivos locales](/php/security/local-file-inclusion) Una vulnerabilidad en la aplicación causada por el programador que requiere una entrada de archivo proporcionada por el usuario y no la desinfecta antes de acceder al archivo solicitado. Esto resulta en un archivo que se incluye donde no debería haber sido.
*   [Inclusión remota de archivos](/php/security/remote-file-inclusion) Una vulnerabilidad en la aplicación causada por el programador que requiere una entrada de archivo proporcionada por el usuario y no la desinfecta antes de acceder al archivo solicitado. Esto da como resultado que un archivo se extraiga de un servidor remoto y se incluya donde no debería haber estado.
*   [Secuestro de sesión](/php/security/session-hijacking) Una vulnerabilidad causada por un atacante que obtiene acceso al identificador de sesión de un usuario y puede usar la cuenta de otro usuario haciéndose pasar por él. Esto se usa a menudo para obtener acceso a la cuenta de un usuario administrativo.
*   [Adquisición de identificador de sesión La adquisición de](/php/security/session-identifier-acquirement) identificador de sesión es una vulnerabilidad causada por un atacante que puede adivinar el identificador de sesión de un usuario o explotar vulnerabilidades en la propia aplicación o el navegador del usuario para obtener un identificador de sesión.
*   [Inyección de SQL](/php/security/sql-injection) Una vulnerabilidad en la aplicación causada por el programador que no sanea la entrada antes de incluirla en una consulta en la base de datos. Esto lleva a que el atacante tenga lectura completa y, con frecuencia, acceso de escritura a la base de datos. Con este tipo de acceso un atacante puede hacer cosas muy malas.

#### Más información:

[Página de ataques de Wiki OWASP](https://www.owasp.org/index.php/Category:Attack)