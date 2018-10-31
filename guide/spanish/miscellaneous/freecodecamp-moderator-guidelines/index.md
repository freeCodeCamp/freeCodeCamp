---
title: Freecodecamp Moderator Guidelines
localeTitle: Pautas para el moderador de Freecodecamp
---
# Los pilares de la moderación

Por encima de todo, recuerde que su propósito como moderador es servir a nuestra comunidad:

*   Escucha
*   Ser servicial
*   No abuses de tu poder

# Moderador de Gitter

Así es como los moderadores tratan las violaciones de nuestro [Código de conducta](https://www.freecodecamp.com/code-of-conduct) en Gitter:

1.  Los moderadores prohibirán a la persona ofensiva inmediatamente.
    
2.  Los moderadores les enviarán este mensaje:
    
    > Este es un mensaje estándar que le notifica que tuve que prohibirle temporalmente las salas de chat de freeCodeCamp.
    > 
    > Soy un moderador que actúa en nombre de nuestra comunidad de código abierto. Puedo considerar liberarte, pero necesito que hagas algo primero.
    > 
    > 1\. Lea nuestro [**`Code of Conduct`**]([https://www.freecodecamp.com/code-of-conduct) ).  
    > 2\. Por favor, confirme que lo ha leído.  
    > 3\. Explícame por qué crees que te he prohibido.
    
3.  En función de su respuesta, los moderadores decidirán si desean cancelar la sesión de la campista ofensiva. Si el campista ofensivo no ha sido prohibido por ese moderador antes, y si parece respetuoso y se disculpa, el moderador puede desbancarlos. Como cuestión de política, los moderadores serán corteses durante este proceso, sin importar qué tan mal se haya comportado el campista ofensor.
    
4.  Los moderadores escribirán un breve resumen del evento y cómo respondieron en la [sala de administración](https://gitter.im/freeCodeCamp/admin) . Aquí hay un ejemplo de cómo podrían ser estos resúmenes:
    
    > Prohibí @ nombre de usuario Para el envío de spam y les envió el Código de Conducta. Dijeron que lo lamentaban y que, honestamente, no se habían dado cuenta de que lo que estaban haciendo se consideraba spam. Yo les quité las brechas.
    > 
    > He desatendido @ nombre de usuario . Les envié el Código de Conducta. Sólo hoy se dieron cuenta de que estaban prohibidos y se disculparon por lo que hicieron.
    > 
    > He prohibido @ nombre de usuario por acoso. Se pusieron desagradables conmigo. Recomiendo que contactemos a Gitter para una prohibición global.
    

Para prohibir a alguien, escribe lo siguiente en la sala de chat:

> `/ban @username`

Si cooperan, más tarde puedes anularlos con:

> `/unban @username`

Esto solo funciona para esa habitación individual, por lo que es posible que deba prohibirlos en más de un lugar.

Si un campista continúa saltando de sala en sala causando problemas, los moderadores pueden solicitar una prohibición global en la [sala de administración](https://gitter.im/freecodecamp/admin) .

### Eliminar mensajes de Gitter

Los moderadores tienen la capacidad de borrar mensajes en Gitter. Solo deben ejercer esta habilidad en tres situaciones muy específicas:

1.  Alguien ha publicado una imagen pornográfica o gráficamente violenta.
2.  Alguien ha publicado un enlace o código que es de naturaleza maliciosa y podría dañar a otros campistas que hagan clic en él.
3.  Alguien ha inundado el chat con una gran cantidad de mensajes de spam en una medida tan extrema (generalmente con bots) que hace que el chat sea completamente inutilizable.

En todas las demás situaciones, incluso en las que se viola el código de conducta, los moderadores no deben eliminar el mensaje, ya que se trata de un registro histórico importante.

### No uses `@/all`

No use _`@/all`_ bajo ninguna circunstancia. Cada persona en esa sala de chat recibirá una notificación. En algunos casos, decenas de miles de personas.

En cambio, si desea que las personas vean un anuncio, use un tamaño de texto de encabezado. Puede hacer esto colocando un `#` delante de su primera oración.

### No advertir o amenazar con prohibir

Si alguien está rompiendo el código de conducta, no los advierta ni amenace con prohibirlos. En vez de eso, prohíbalas en silencio, luego envíe un mensaje privado y proceda de acuerdo con el protocolo anterior. Nadie más en la sala necesita saber que usted prohibió a la persona.

### No te jactes de ser un moderador

No te veas como esta por encima de la comunidad. Tú eres la comunidad. Y la comunidad ha confiado en usted para ayudar a proteger algo raro que todos compartimos: un lugar acogedor para los nuevos desarrolladores.

Si presume de ser un moderador, las personas pueden sentirse incómodas a su alrededor, de la misma manera que las personas pueden sentirse incómodas ante un oficial de policía, incluso si no están haciendo nada mal. Esto es sólo la naturaleza humana.

### No contradigas a otros moderadores.

Si no está de acuerdo con la acción de un moderador, hable con ellos en privado o pregúntelo en el chat de mod. Nunca anule una prohibición. En su lugar, tenga una discusión sensata en el chat de mod, y convenza al moderador de que ellos mismos deben revertir su prohibición.

Recuerda: todos estamos en el mismo equipo. Queremos dignificar el papel de los moderadores y presentar un frente unificado.

# Moderación de GitHub

Los moderadores son voluntarios que tienen la capacidad de cerrar problemas y aceptar o rechazar solicitudes de extracción.

Los moderadores tienen dos responsabilidades principales con respecto a GitHub:

1.  Evaluando y respondiendo a problemas
2.  Solicitudes de control de calidad y fusión

### Evaluando y respondiendo a problemas

freeCodeCamp es un proyecto de código abierto activo. Recibimos docenas de problemas cada día, todos los cuales deben ser evaluados y etiquetados.

Hay varias clases generales de problemas:

1.  **Solicitudes de ayuda de código** , que no son apropiadas para problemas.  
    Si un problema es claramente alguien que solicita ayuda, pegue el siguiente mensaje y luego cierre el problema.
    
    > Gracias por reportar este problema.
    > 
    > Este es un mensaje estándar que le notifica que este problema parece ser una solicitud de ayuda. En lugar de pedir ayuda aquí, haga clic en el botón **"Ayuda"** en el desafío en freeCodeCamp, que lo llevará a la sala de chat de ayuda para ese desafío específico. También puede ver nuestra [**lista completa de salas de chat oficiales**](https://forum.freecodecamp.com/t/free-code-camp-official-chat-rooms/19390) ).
    > 
    > Si cree que estoy equivocado al cerrar este problema, vuelva a abrirlo y agregue más aclaraciones. Gracias, y feliz codificación.
    
2.  **Problemas de** errores **o aclaraciones** Confirme el error usted mismo si es posible. Busque detalles adicionales según sea necesario, como Pasos para reproducir. Una vez que el problema se ha reproducido, o al menos se considera legítimo, la etiqueta lo `confirmed` . Entonces:
    
    *   Si se trata de un cambio simple a un desafío existente, márquelo como la `help wanted` y, opcionalmente, solo para `first-timers-only` . Utilice otras etiquetas según corresponda.
        
    *   Si el problema es más importante, marca como `bug` .
        
    *   [Guía de uso de etiquetas](https://forum.freecodecamp.com/t/free-code-camp-issue-labels/19556)
        
        Si existe alguna ambigüedad en cuanto al curso de acción apropiado sobre un tema, siéntase libre de etiquetar **`@freeCodeCamp/moderators`** para obtener opiniones de otros moderadores. Marcar como `Discussing` .
        
3.  **Problemas duplicados** Si un problema es el mismo que otro problema informado, el problema informado anterior debe tener prioridad. Marque como `Duplicate` , pegue el siguiente mensaje reemplazando `#XXXXX` con el número de problema, luego cierre el problema.
    
    > Gracias por reportar este problema.
    > 
    > Este es un mensaje estándar que le notifica que este problema parece ser muy similar al número #XXXXX , por lo que lo estoy cerrando como un duplicado.
    > 
    > Si cree que estoy equivocado al cerrar este problema, vuelva a abrirlo y agregue más aclaraciones. Gracias, y feliz codificación.
    
4.  **Solucionado en la puesta en escena** Algunos problemas se han solucionado en la estadificación, pero no tienen otro problema en el mismo tema. Pegue el siguiente mensaje, luego cierre el problema:
    
    > Gracias por reportar este problema.
    > 
    > Este es un mensaje estándar que le notifica que este problema está presente en la producción, pero que se ha solucionado en la preparación. Por eso, estoy cerrando este tema. Cuando la puesta en escena vuelva a producirse, su problema se resolverá.
    > 
    > Si cree que estoy equivocado al cerrar este problema, vuelva a abrirlo y agregue más aclaraciones. Gracias, y feliz codificación.
    
5.  **Bike Shedding** Bike Shedding es un ejemplo de [la ley de la trivialidad](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) de [Parkinson](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) . Algunas cuestiones simplemente no valen la pena arreglarlas. Si cree que un problema no vale la pena, `bikeshedding` como `bikeshedding` , pegue y complete el siguiente mensaje, luego cierre el problema:
    
    > Gracias por reportar este problema.
    > 
    > _Dé una breve explicación de por qué se trata de una suspensión de motocicletas, una forma de [la ley de la trivialidad](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) de [Parkinson](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) , así que la estoy cerrando._
    > 
    > Si cree que estoy equivocado al cerrar este problema, vuelva a abrirlo y agregue más aclaraciones. Gracias, y feliz codificación.
    

### Moderación de solicitudes de extracción

Las solicitudes de extracción (PR) son la forma en que los colaboradores de freeCodeCamp envían los cambios al repositorio para su consideración. Es importante que estos RR.PP. tengan el formato correcto y se sometan a pruebas exhaustivas de control de calidad antes de fusionarse.

### Requisitos de solicitud de extracción y formato

Todos los RP deben cumplir los siguientes requisitos antes de ser aceptados:

1.  Debe hacer referencia a al menos un problema abierto, y el cuerpo también debe incluir los `closes #XXXXX` para cada número de problema que trata (reemplazando `#XXXXX` con el número de problema)
2.  Debe ser contra la rama **`staging`**
3.  Debe provenir de una rama que no tenga un nombre apropiado, en la bifurcación personal del usuario de freeCodeCamp
4.  El título debe describir el cambio realizado.
5.  Su título NO debe tener un número de problema en él
6.  Su cuerpo debe dar detalles sobre el cambio, así como el nivel de prueba (es decir, no probado, probado localmente)
7.  _Los_ cambios _relacionados_ deben ser aplastados a un solo compromiso. Pero _los_ cambios _relevantes o notables_ pueden tener compromisos separados.
8.  Código debe pasar todas las pruebas y forro

Si el RP no cumple uno o más de estos requisitos, abra una revisión de GitHub que especifique cuál de los 8 requisitos aún no se ha cumplido. Los nuevos Contribuidores pueden ser referidos a la sala de chat de los [Contribuidores](https://gitter.im/freeCodeCamp/Contributors) . A discreción de un moderador, el problema puede ser cerrado.

### Aseguramiento de la Calidad (QA)

Suponiendo que se cumplan los requisitos básicos para el RP, todos los RP deben someterse a algún nivel de prueba de control de calidad. El proceso de control de calidad más básico es revisar el PR localmente en su computadora y probar la funcionalidad modificada.

1.  Asegúrese de que puede reproducir el problema localmente.
2.  Verifique que las relaciones públicas realmente solucionen el problema.
3.  Puedes responder al problema con **"LGTM"** , que significa "me parece bien".
4.  Si tiene alguna duda sobre si el RP debe fusionarse, deje que una segunda persona lo controle y luego ellos pueden fusionarlo.
5.  Si ya existe un "LGTM" y usted QA con éxito el PR, también debe combinarlo.

Si tiene alguna duda sobre la funcionalidad, puede mencionar **`@freeCodeCamp/moderators`** para obtener una segunda opinión.

### Requisitos especiales

Los RP que cambian la función subyacente del sitio o realizan cambios no triviales en la UI o UX del sitio deben ser aprobados por [@BerkeleyTrue](https://gitter.im/berkeleytrue) o [@QuincyLarson](https://gitter.im/quincylarson) . Si tiene alguna duda, etiquételos en un comentario y / o llame su atención al PR a través de Gitter Chat.

### Otras reglas que rigen a los moderadores

Aunque tendrás acceso de escritura al repositorio de freeCodeCamp:

*   **nunca debe insertar código directamente en el repositorio de freeCodeCamp** . Todo el código debe ingresar en el código base de freeCodeCamp en forma de una solicitud de extracción desde un fork del repositorio.
*   Nunca debes aceptar tus propias relaciones públicas. Deben ser QA-ed por otro moderador, al igual que con cualquier otro PR.

# Moderar el foro

La moderación del foro sigue los mismos principios que la moderación de Gitter. A continuación se describen las ligeras variaciones, para tener en cuenta las diferencias de Gitter en la plataforma Discourse.

Los moderadores del foro son responsables de hacer de nuestra comunidad un lugar agradable para que cualquiera pueda aprender y obtener ayuda. Los moderadores del foro se ocuparán de las publicaciones marcadas y manejarán mensajes no deseados, conversaciones fuera de tema y otras conversaciones inapropiadas.

### Eliminar mensajes del foro

Los moderadores del foro tienen la capacidad de eliminar las publicaciones de los usuarios. Solo debes hacer esto para las siguientes instancias:

1.  Alguien ha publicado una imagen pornográfica o gráficamente violenta.
2.  Alguien ha publicado un enlace o código que es de naturaleza maliciosa y podría dañar a otros campistas que hagan clic en él.
3.  Alguien ha inundado un hilo con muchos mensajes de spam.

### Tratar con el spam

Para la primera publicación de spam de un usuario, envíele un mensaje que explique el problema y elimine el enlace o la publicación según corresponda. Deje una nota en el perfil del usuario que explique la acción que ha realizado. Si el problema persiste, siga el proceso anterior. Bloquee silenciosamente al usuario de la publicación, luego envíe una advertencia con el Código de conducta. Marque la casilla en el mensaje privado que indica que su mensaje es una "advertencia formal".

No es necesario utilizar la sala de administración de Gitter para informar incidentes en el foro. Si tiene alguna pregunta, por favor pregunte en la sección del foro del [personal](https://forum.freecodecamp.com/c/staff) .

### Tratar con conversaciones fuera de tema

Las publicaciones o temas que parecen estar en el lugar equivocado, pueden ser re-categorizados o renombrados a lo que sea apropiado.

En circunstancias excepcionales, puede ser apropiado que un moderador realice una discusión en varios hilos.

Nuevamente, si tiene algún problema o pregunta, haga una publicación con sus acciones en la categoría Personal y etiquete a otro moderador si desea que revisen sus acciones de moderación.

# Cómo convertirse en moderador

¿Ha estado contribuyendo a nuestra comunidad y desea el poder / responsabilidad adicional que conlleva ser un moderador?

Reúna evidencia que demuestre su utilidad en los temas de GitHub y / o ayude a los campistas en Gitter y nuestros foros, y envíelos por PM en:

*   [@BerkeleyTrue](https://gitter.im/berkeleytrue)
*   [@CodeNonprofit](https://gitter.im/codenonprofit)
*   [@QuincyLarson](https://gitter.im/quincylarson)

Requerimientos adicionales:

*   Debe habilitar la autenticación de dos factores en su cuenta de GitHub.
*   Tu perfil de GitHub debe tener al menos tu nombre.
*   Tu foto de GitHub debe mostrar tu cara.

Si es aprobado, lo agregaremos a nuestro [Equipo de moderadores](https://github.com/orgs/freeCodeCamp/teams/moderators) .

# Cómo nos retiramos los moderadores inactivos.

Tenga en cuenta que con frecuencia eliminaremos las modificaciones de problema que consideremos inactivas. Cuando hagamos esto enviaremos el siguiente mensaje:

> Este es un mensaje estándar que le notifica que, dado que no parece haber sido un moderador activo recientemente, lo estamos eliminando de nuestro equipo de moderadores. Apreciamos profundamente su ayuda en el pasado.
> 
> Si cree que lo hicimos por error, o una vez que esté listo para regresar y contribuir más, solo responda a este mensaje y avíseme.

# Cómo funciona nuestra sala de colaboradores

Cualquiera es bienvenido en la [sala de Contribuyentes](https://gitter.im/freecodecamp/contributors) . Es la sala de chat designada para moderadores y otros campistas que contribuyen a nuestra comunidad de varias maneras, incluso a través de grupos de estudio.

Nuestra suposición es que los colaboradores leerán cualquier cosa en esta sala que los mencione directamente con un nombre de `@username` `@/all` o que se dirija a `@/all` . Todo lo demás es opcional. Pero siéntete libre de leer cualquier cosa que alguien publique allí e interactuar.

# Cómo convertirse en moderador en este foro.

Si ya es moderador, también puede solicitar el estado de moderador en este foro. Mensaje [@michaelhenderson](/users/michaelhenderson) aquí en el foro y él verificará su estado de moderador en GitHub, luego le otorgará el estado de moderador aquí.

# Tratar con los abogados

Puede ser contactado por organizaciones que quieran asociarse o compartir marcas con freeCodeCamp de alguna manera. Una vez que se dé cuenta de que esto es lo que buscan, deje de hablar con ellos y dígales que hablen directamente con Quincy Larson . Recibe propuestas como esta literalmente todos los días y está en la mejor posición para juzgar si una relación así valdrá la pena para nuestra comunidad (y rara vez lo es).

# Definiciones

> Las palabras clave "DEBE", "NO DEBE", "REQUERIDO", "DEBERÍA", "NO DEBE", "RECOMENDADO", "MAYO" y "OPCIONAL" en este documento deben interpretarse como se describe en [**RFC 2119**](https://www.ietf.org/rfc/rfc2119.txt) .