---
title: Normal Form
localeTitle: Forma normal
---
## Forma normal

La normalización se introdujo por primera vez como parte del modelo relacional. Es el proceso de organizar tablas y columnas de datos de manera que se reduzcan las redundancias y se mejore la integridad. Esto se puede hacer a través de:

*   síntesis: crea un diseño de base de datos normalizado basado en un conjunto conocido de dependencias.
*   descomposición: toma un diseño de base de datos existente (insuficientemente normalizado) y lo mejora en función del conjunto conocido de dependencias

Hay tres formas normales comunes (1ª, 2ª y 3ª) más una forma bastante avanzada llamada BCNF. Son progresivos: para obtener la tercera forma normal, un esquema de base de datos debe cumplir con las reglas de la segunda forma normal, y así sucesivamente para la primera forma normal.

*   **1ª forma normal** : la información se almacena en una tabla, cada columna contiene valores atómicos y no se repiten grupos de columnas. Esta :

1.  Elimina la repetición de grupos en tablas individuales.
2.  Crea una tabla separada para cada conjunto de datos relacionados.
3.  Identifica cada conjunto de datos relacionados con una clave primaria

##### Ejemplo

Un diseño que viola la primera forma normal, la columna "teléfono" no contiene valores atómicos

| ID de cliente | Nombre | Apellido | Teléfono | | ------------- | ------------ | ----------- | ---------- ---------------------------- | | 123 | Pooja | Singh | 555-861-2025, 192-122-1111 | | 789 | John | Doe | 555-808-9633 | | 456 | San | Zhang | (555) 403-1659 ext. 53; 182-929-2929 |

Una solución sería tener una columna adicional para cada número de teléfono. Pero entonces, esto repetirá conceptualmente el mismo atributo (número de teléfono). Además, agregar un número de teléfono adicional requerirá reorganizar la tabla agregando más columnas. Esto definitivamente no es práctico.

Otra solución es tener una tabla separada para el teléfono de la asociación cliente <->: esto respeta la primera forma normal y puede haber tantas filas por cliente como sea necesario.

| ID de cliente | Nombre | Apellido | | ------------- | ------------ | ----------- | | 123 | Pooja | Singh | | 789 | John | Doe | | 456 | San | Zhang |

| ID de cliente | Teléfono | | ------------- | ------------------------ | | 123 | 555-861-2025 | | 123 | 192-122-1111 | | 789 | 555-808-9633 | | 456 | (555) 403-1659 ext. 53 | | 456 | 182-929-2929 |

*   **Segunda forma normal** : la tabla está en la primera forma normal y todas las columnas no clave dependen de la clave principal de la tabla. Esto reduce el propósito de la mesa.

##### Ejemplo

Un diseño que viola la 2da forma normal. El nombre completo del modelo es la clave principal, hay otras claves candidatas como {fabricante, modelo}. La columna "País del fabricante" depende de una columna no clave (el fabricante).

| Fabricante | Modelo | Nombre completo del modelo | País fabricante | | --------------------- | -------------- | ------------ ---------- | ---------------------- | | Forte | X-Prime | Forte X-Prime | Italia | | Forte | Ultraclean | Forte Ultraclean | Italia | | Dent-o-Fresh | EZbrush | Dent-o-Fresh EZbrush | Estados Unidos | | Kobayashi | ST-60 | Kobayashi ST-60 | Japon | | Hoch | Maestro de dientes | Hoch maestro de dientes | Alemania | | Hoch | X-Prime | Hoch X-Prime | Alemania |

El diseño normalizado sería dividir en dos tablas como la siguiente:

| Fabricante | País fabricante | | --------------------- | ---------------------- | | Forte | Italia | | Dent-o-Fresh | Estados Unidos | | Kobayashi | Japon | | Hoch | Alemania |

| Fabricante | Modelo | Nombre completo del modelo | | --------------------- | -------------- | ------------ ---------- | | Forte | X-Prime | Forte X-Prime | | Forte | Ultraclean | Forte Ultraclean | | Dent-o-Fresh | EZbrush | Dent-o-Fresh EZbrush | | Kobayashi | ST-60 | Kobayashi ST-60 | | Hoch | Maestro de dientes | Hoch maestro de dientes | | Hoch | X-Prime | Hoch X-Prime |

*   **Tercera forma normal** : la tabla se encuentra en la segunda forma normal y todas sus columnas no dependen de la clave primaria. Se dice que una columna depende de otra columna si se puede derivar de ella, por ejemplo, la edad se puede derivar del cumpleaños. La transitividad significa que esta dependencia podría involucrar otras columnas. por ejemplo, si consideramos tres columnas, `PersonID BodyMassIndex IsOverweight` , `PersonID BodyMassIndex IsOverweight` , `PersonID BodyMassIndex IsOverweight` , la columna 'IsOverweight' depende de forma pasiva de 'personID' a 'BodyMassIndex'.

##### Ejemplo

Un diseño que viola la 3ª forma normal. {Torneo, Año} es la clave principal de la tabla y la columna "Fecha de nacimiento del ganador" depende de ella.

| Torneo | Año | Ganador | Ganador Fecha de nacimiento | | ---------------------- | ------------- | ------------ ---- | ---------------------- | | Indiana Invitational | 1998 | Al Fredrickson | 21 de julio de 1975 | | Abierto de Cleveland | 1999 | Bob Albertson | 28 de septiembre de 1968 | | Maestros de Des Moines | 1999 | Al Fredrickson | 21 de julio de 1975 | | Indiana Invitational | 1999 | Chip Masterson | 14 de marzo de 1977 |

Un diseño compatible con la tercera forma normal sería:

| Torneo | Año | Ganador |  
| ---------------------- | ------------- | ------------ ---- | | Indiana Invitational | 1998 | Al Fredrickson | | Abierto de Cleveland | 1999 | Bob Albertson | | Maestros de Des Moines | 1999 | Al Fredrickson | | Indiana Invitational | 1999 | Chip Masterson |

| Ganador | Fecha de nacimiento | | ---------------- | ------------------- | | Chip Masterson | 14 de marzo de 1977 | | Al Fredrickson | 21 de julio de 1975 | | Bob Albertson | 28 de septiembre de 1968 |

#### Más información:

*   Normalización de la base de datos en [wikipedia](https://en.wikipedia.org/wiki/Database_normalization)
*   primera forma normal en [wikipedia](https://en.wikipedia.org/wiki/First_normal_form)
*   segunda forma normal en [wikipedia](https://en.wikipedia.org/wiki/Second_normal_form)
*   tercera forma normal en [wikipedia](https://en.wikipedia.org/wiki/Third_normal_form)