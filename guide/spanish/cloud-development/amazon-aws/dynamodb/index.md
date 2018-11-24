---
title: Amazon DynamoDB
localeTitle: Amazon DynamoDB
--- ## Amazon DynamoDB

Amazon DynamoDB es un servicio de Amazon Web Services (AWS) que ofrece una base de datos NoSQL totalmente administrada. Su característica principal es la capacidad de escalar infinitamente según la carga de trabajo necesaria. Está totalmente gestionado, el usuario no tiene que preocuparse por la infraestructura subyacente, como por ejemplo, cómo aumentar o disminuir la escala según la carga de trabajo. Es compatible con el valor clave y el almacenamiento basado en documentos.

Los componentes básicos del servicio DynamoDB son:

*   **Tabla** : DynamoDB almacena los datos en tablas, que son como en las bases de datos relacionales. La principal diferencia es que no tiene esquemas, no tiene una estructura fija desde el momento de su creación.
    
*   **Artículo** : Un artículo es la información almacenada en una tabla y una tabla puede tener un número indefinido de artículos. En comparación con una base de datos relacional, un elemento sería una fila en la tabla.
    
*   **Atributo** : un elemento tiene atributos, que son como una columna en bases de datos relacionales. Sin embargo, dado que DynamoDB no tiene esquemas, un elemento no necesita tener los mismos atributos. Además, los atributos pueden ser un valor único o un documento similar a JSON con otros campos que también se pueden consultar.
    

Aunque DynamoDB no necesita una estructura fija para sus tablas, sí necesita una clave principal para cada elemento de la tabla. La clave principal, como en las bases de datos relacionales, debe ser única. La clave principal puede ser simple o compuesta. Una clave principal simple está compuesta solo por una clave de partición. La clave primaria compuesta, a su vez, está compuesta por una clave de partición y una clave de clasificación. En una clave principal simple, la clave de partición debe ser única, mientras que en una clave compuesta, la clave de partición puede ser igual, pero la clave de clasificación debe ser diferente.

El concepto de clave de partición y clave de clasificación es muy importante porque se relaciona con la forma en que DynamoDB almacena los datos. DynamoDB almacena datos en particiones y la clave de partición es la clave para la partición. DynamoDB usa el valor en la clave de partición como entrada a una función hash para saber dónde almacena los datos. En el caso de una clave compuesta, todos los elementos con la misma clave de partición se almacenan en la misma partición, pero se ordenan por la clave de clasificación.

Amazon DynamoDB también tiene alta disponibilidad. Replica los datos a muchos servidores en diferentes zonas de disponibilidad en una región. Las zonas de disponibilidad son centros de datos separados físicamente por una distancia segura. En caso de un desastre en un servidor, otros servidores tienen los datos replicados en una distancia segura y sin tocar.

Debido a su facilidad de configuración y su capacidad infinita para escalar, es bueno para muchos casos de uso. Se adapta mejor a los escenarios donde no se conoce la carga requerida o hay picos repentinos. Algunos de los casos de uso son como almacenamiento de datos para aplicaciones sin servidor, microservicios, back-end móvil, juegos, IoT y más.

### Recursos:

*   [Bases de datos de valor clave](https://guide.freecodecamp.org/computer-science/databases/key-value-databases)
*   [Bases de datos relacionales](https://guide.freecodecamp.org/computer-science/databases/relational-databases)

### Más información:

*   "¿Qué es Amazon DynamoDB?" de la [documentación de DynamoDB de AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html?shortFooter=true)
*   "Componentes principales de DynamoDB" de la [documentación de DynamoDB de AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html?shortFooter=true)