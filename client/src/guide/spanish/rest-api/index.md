---
title: Rest API Design
localeTitle: Diseño API de descanso
---### Historia

RESTO significa **Re** protocolo **T** ransferencia **S** tate de presentación. Roy Fielding definió a REST en su tesis doctoral en el año 2000.

### ¿Qué es?

REST fue desarrollado para proporcionar una interfaz uniforme para

*   Identificando recursos
*   Manipulación de recursos.
*   Mensajes auto descriptivos
*   Uso de Hypermedia como el motor del estado de la aplicación (HATEOS)

### Mejores prácticas

*   \#### Fundamentos

| Método | http://api.co/v2/cars | http://api.co/v2/cars/1234 |  
| --- | --- | --- | | GET | Listar todos los coches | Recuperar un coche individual | | POST | Crear un coche nuevo | Error | | PUT | Reemplazar colecciones de autos con una nueva | Reemplazar el coche con id 1234 | | BORRAR | Borrar todos los coches | Eliminar coche con id 1234 |

_Tenga en cuenta que mientras que las operaciones PUT, el cliente o el servidor pueden generar ID_

*   #### Los sustantivos son buenos Los verbos son malos
    
*   Usa sustantivos para referir recursos como `cars` , `fruits` , etc.
    
*   Use verbos para declaraciones de acciones `convertMilesToKms` , `getNutritionalValues`
    
*   #### ¿Singular o plural?
    
    Usa la gramática correcta para la declaración.
    
    **Evitar** `/person/145`
    
    **Prefiero** `/people/154` Supongamos que se devuelve 154a persona de la lista de personas
    
*   #### Usar carcasa
    
    ¡Usa cualquiera de los siguientes patrones y sé **consistente!**
    
    | Estilos de caja | Ejemplo | | ------------- | ------------- | | **UpperCamelCase** | `http://api.fintech.cp/DailyTransactions/Today` | | **lowerCamelCase** | `http://api.fintech.cp/dailyTransactions/today` |  
    | **snake\_case** | `http://api.fintech.cp/daily_transactions/today` |
    
*   #### **Relaciones y recursos**
    
*   Los recursos pueden tener relaciones de `one-to-many` , de `many-to-many` , de `many-to-one` , etc. El mapearlos correctamente es crucial.
    
*   Mapeo **uno a muchos**
    
    Por ejemplo, `Tickets/145/messages/4` sugiere una relación de uno a varios entre `tickets` y `messages` . Significado de `1` ticket tiene `N` mensajes. El mensaje no es un recurso independiente. No puedes tener `/messages/4` .
    
*   **Muchos a muchos** mapeos
    
    Por ejemplo, `/usergroups/345/users/56` sugiere seleccionar 345o grupo de usuarios y obtener usuario con id 56. Sin embargo, un usuario puede estar en varios `usergroups` es decir, `/usergroups/209/users/56` también es válido. En tal caso, para separar a los `users` recursos dependientes en un punto final separado como `/users/56` y proporcionar enlaces de recursos en `/usergroups/209/users/56`
    
*   #### **Parámetros API**
    
*   **RUTA** : _requerida_ para acceder al recurso Ej. `/cars` , `/fruits`
    
*   **Parámetros de consulta** : _opcional_ filtrar la lista Ej. `/cars?type=SUV&year=2010`
    
*   **Cuerpo** : Lógica específica del recurso. Consulta de búsqueda avanzada. A veces puede tener tanto consulta como cuerpo.
    
*   **Encabezado** : Debe contener datos globales o de plataforma amplia. Por ejemplo, parámetros de clave API, claves encriptadas para autenticación, información de tipo de dispositivo, por ejemplo, dispositivo móvil o de escritorio o punto final, tipo de datos del dispositivo, por ejemplo, xml o json. Utilice el encabezado para comunicar estos parámetros.
    
*   #### Códigos de estado HTTP
    
    Usa códigos de estado correctos
    
    | Codigos Significado | | ------------- |: -------------: | | 1xx | Solicitud recibida y entendida. | | 2xx | Acción solicitada por el cliente fue recibida, entendida y solicitada. | | 3xx | El cliente debe tomar medidas adicionales para completar la solicitud. La mayoría de estos códigos de estado se utilizan en la redirección de URL. | | 4xx | Destinado a situaciones donde parece que el error fue causado por el cliente. | | 5xx | El servidor no pudo completar una solicitud. |
    
    ¡Poco más en **2xx** !
    
*   **201 Recurso creado.** POST `/cars` debe devolver HTTP 201 creado con el encabezado de `location` indica cómo acceder al recurso Por ejemplo, `location` : `api.com/cars/124` en el encabezado
    
*   **202 - Aceptado**
    
    Use esto si la tarea es enorme para ejecutar. Dígale al cliente, ha aceptado la solicitud y será / es proceso / procesamiento No se devuelve ninguna carga
    
*   **204 - Sin contenido**
    
    Se usa cuando se eliminan los `DELETE cars/124` No devuelve contenido. Pero también puede devolver `200 OK` si la API intenta enviar el recurso eliminado para su posterior procesamiento.
    
    ¡Los peligrosos recursos **5xx** !
    
*   Error interno del servidor **500**
    
*   **504** Tiempo de espera de puerta de enlace. El servidor no recibió una respuesta oportuna
    
    Menos conocido **4xx** sugiere que está pasando un parámetro incorrecto. También puede pasar información que es incorrecta. P.ej
    
    `DELETE /cars/MH09234`
    
    devuelve `4xx` o mensaje `Expecting int car id /car/id got string car/MH09234`
    

### **Otras lecturas**

[Cómo diseñar excelentes APIs - Parse Developer Day 2013](https://www.youtube.com/watch?v=qCdpTji8nxo)

[El interminable debate sobre el diseño de la API REST por Guillaume Laforge](https://www.youtube.com/watch?v=48azd2VqtP0)

[Códigos de estado HTTP](https://httpstatuses.com/)