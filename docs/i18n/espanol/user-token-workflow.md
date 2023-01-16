# Cómo funciona el flujo de trabajo de los tokens de usuario

Los tokens de usuario se utilizan para identificar usuarios a terceros de modo que los desafíos completados con esos servicios pueden ser guardados en la cuenta de usuario.

## Cómo se crean

Por el momento, los tokens sólo se utilizan para presentar los retos de la base de datos relacional. A token gets created when a signed-in user clicks the "Click here to start the course" or "Click here to start the project" buttons to start one of the Relational Database courses or projects.

## Cuando se eliminan

Se eliminará un token de usuario cuando un usuario se desconecte de freeCodeCamp, restablezca su progreso, borra su cuenta, o borra manualmente el token usando el widget de la página de configuración.

## Cómo funcionan

Los tokens se almacenan en una colección de `UserToken` en la base de datos. Cada registro tiene un único `_id`, que es el token, y un `user_id` que enlaza a la cuenta del usuario desde la colección `user`. El token se codifica usando JWT y se envía al cliente cuando se crea. That encoded token is then given to third-party services that need it and sent to our API by them when a challenge is completed. Cuando nuestro API lo recibe, está decodificado para que podamos identificar al usuario que envía un desafío y guardar el desafío completado en sus `Desafíos completos`.
