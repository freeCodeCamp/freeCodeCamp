---
title: Relational Databases
localeTitle: Bases de datos relacionales
---
Como una base de datos es una forma de almacenar datos, las bases de datos relacionales son un modelo de cómo se almacenan los datos. Los datos se organizan en tablas, también conocidas como relaciones. Las tablas contienen un registro para cada instancia de los datos, conocidos como registros o tuplas. Los identificadores únicos identifican cada registro para describirlo en la base de datos.

## Mesas

Al igual que la hoja en Excel, las tablas se componen de columnas y filas. Cada fila es una instancia de datos con atributos en la columna de la tabla conocida como campos. Puede haber varias tablas para cada categoría para las entidades. Un ejemplo podría ser una tabla de usuarios. Cada fila sería un usuario y cada campo sería información sobre el usuario, como correo electrónico, contraseña y detalles de contacto para ese usuario específico. En la Figura 1 puedes ver el diagrama del ejemplo.

| | usuario | email | Teléfono | | ------------- | ------------ | ------------------ | --- ----------------------------------- | | fila 1 | Jerry | j@j.uk.za | 771447444121 | | fila 2 | Sally | batgirl@gh.co.za | 771447444121 | | fila 3 | Alex | samwis@tty.fe | 771447444121 | | fila 4 | Doug | 4sure@dam.us | 745151515152 |

Figura 1 - Ejemplo de tabla de usuario.

## Archivos

Un registro es una sola entidad de datos. Como en el ejemplo anterior, podría ser un usuario, una cuenta, un dispositivo o cualquier cosa que los datos puedan representar. Los registros necesitan un identificador único, a veces denominado clave. Esta clave debe ser única, ya que se utiliza para describir las relaciones que un registro tiene con otros registros en otras tablas. En la Figura 1, podríamos agregar claves a cada fila que identifique a cada usuario con una clave y la tabla ahora se vería como la Figura 2.

| Llave | usuario | email | Teléfono | | ----------- | ------------ | ------------------ | ----- --------------------------------- | | u1 | Jerry | j@j.uk.za | 771447444121 | | u2 | Sally | batgirl@gh.co.za | 771447444121 | | u3 | Alex | samwis@tty.fe | 771447444121 | | u4 | Doug | 4sure@dam.us | 745151515152 |

Figura 2 - Ejemplo de base de datos de usuario con campo KEY.

## Campos

Los campos describen el registro. Esto podría contener cualquier información sobre la entidad que el registro simboliza. En la Figura 3 puedes ver una tabla que muestra mascotas. Las columnas (campos) describen cada mascota (registro) con p\_name, p\_age, p\_type y p\_owner. La p es taquigrafía para mascota y la última columna se explicará en la siguiente sección sobre relaciones.

| Llave | p\_name | p\_age p\_owner | | ----------- | ------------ | ------------------ | ----- ---------- | | p1 | Suzy | j@j.uk.za | u1 | | p2 | Pequeña inmersión | batgirl@gh.co.za | u1 | | p3 | Amillë | samwis@tty.fe | u2 | | p4 | Doug | 4sure@dam.us | u3 |

Figura 3 - Ejemplo de tabla de mascotas.

## Relaciones

Las bases de datos relacionales le permiten describir las relaciones que las entidades tienen entre sí. Este es a veces el tema más difícil de entender de las bases de datos relacionales. Si tomamos nuestras tablas de ejemplo, deberíamos poder ver la relación que nuestra tabla de usuarios tiene con la tabla de mascotas. Si lees el campo p\_owner, puedes ver que también podría ser como en la Figura 4. Esto explica la relación que cada mascota tiene con un usuario. Relación podría tener diferentes tipos.

| Llave | p\_name | p\_age p\_owner | | ----------- | ------------ | ------------------ | ----- ---------- | | p1 | Suzy | j@j.uk.za | Jerry | | p2 | Pequeña inmersión | batgirl@gh.co.za | Jerry | | p3 | Amillë | samwis@tty.fe | Sally | | p4 | Doug | 4sure@dam.us | Doug |

Figura 4 - Ejemplo de tabla de mascotas con un campo de propietario vinculado.

Una relación de uno a varios es un registro vinculado a muchos otros registros, el ejemplo es que el usuario Jerry tiene dos mascotas. También podría ser una relación de muchos a muchos donde las tablas podrían ser libros y autores, ya que los autores podrían coescribir muchos libros. Finalmente, el tipo de relación más común es uno a uno, un registro que solo se puede vincular a uno, y solo a uno, otro registro.

## Conclusión

Esta es solo una breve introducción a las bases de datos relacionales. A continuación se proporcionan enlaces a recursos que podrían ayudarlo a estudiar más a fondo el tema.

#### Más información:

*   Bases de datos relacionales en [wikipedia](https://en.wikipedia.org/wiki/Relational_database)
*   Uno a muchos en [wikipedia](https://en.wikipedia.org/wiki/One-to-many_(data_model)
*   Muchos a muchos en [wikipedia](https://en.wikipedia.org/wiki/Many-to-many_(data_model)
*   Uno a uno en [wikipedia](https://en.wikipedia.org/wiki/One-to-one_(data_model)
*   Modelo de relación en [wikipedia](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)