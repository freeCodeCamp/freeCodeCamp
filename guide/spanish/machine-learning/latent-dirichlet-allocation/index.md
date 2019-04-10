---
title: Latent Dirichlet Allocation
localeTitle: Asignación de Dirichlet latente
---
En el procesamiento del lenguaje natural, la asignación latente de Dirichlet (LDA) es un modelo estadístico generativo que permite que los grupos de observaciones no expliquen conjuntos de observaciones que explican por qué algunas partes de los datos son similares. Por ejemplo, si las observaciones son palabras recopiladas en documentos, se postula que cada documento es una mezcla de un pequeño número de temas y que la creación de cada palabra es atribuible a uno de los temas del documento. LDA es un ejemplo de un modelo de tema.

Supongamos que tiene el siguiente conjunto de oraciones:

Comí un batido de plátano y espinacas para el desayuno. Me gusta comer brócoli y plátanos. Las chinchillas y los gatitos son lindos. Mi hermana adoptó un gatito ayer. Mira este lindo hámster comiendo un pedazo de brócoli.

La asignación de Dirichlet latente es una forma de descubrir automáticamente los temas que contienen estas oraciones. Por ejemplo, dadas estas oraciones y solicitando 2 temas, LDA podría producir algo como

Oraciones 1 y 2: 100% Tema A Oraciones 3 y 4: 100% Tema B Oración 5: 60% Tema A, 40% Tema B Tema A: 30% de brócoli, 15% de plátanos, 10% de desayuno, 10% de comida, ... (en ese momento, podría interpretar que el tema A trata sobre alimentos) Tema B: 20% de chinchillas, 20% de gatitos, 20% de lindos, 15% de hámster, ... (en ese momento, puedes interpretar que el tema B trata de animales lindos)

La pregunta, por supuesto, es: ¿cómo realiza LDA este descubrimiento?

Modelo LDA

Con más detalle, LDA representa los documentos como una mezcla de temas que escupen palabras con ciertas probabilidades. Se supone que los documentos se producen de la siguiente manera: al escribir cada documento, usted

Decida el número de palabras N que tendrá el documento (por ejemplo, según una distribución de Poisson). Elija una combinación de temas para el documento (de acuerdo con una distribución de Dirichlet sobre un conjunto fijo de temas de K). Por ejemplo, suponiendo que tengamos los dos temas de alimentos y animales lindos de arriba, puede elegir que el documento conste de 1/3 de alimentos y 2/3 de animales lindos. Generar cada palabra en el documento por: ... Primero, escoge un tema (de acuerdo con la distribución multinomial que muestreaste anteriormente; por ejemplo, puedes elegir el tema de comida con 1/3 de probabilidad y el tema de animales lindos con 2/3 de probabilidad). …. Luego usar el tema para generar la palabra en sí (según la distribución multinomial del tema). Por ejemplo, el tema de los alimentos podría producir la palabra "brócoli" con un 30% de probabilidad, "plátanos" con un 15% de probabilidad, y así sucesivamente.

Asumiendo este modelo generativo para una colección de documentos, LDA luego intenta retroceder desde los documentos para encontrar un conjunto de temas que probablemente hayan generado la colección.

Ejemplo

Hagamos un ejemplo. De acuerdo con el proceso anterior, al generar un documento D particular, puede

Decide que D será 1/2 sobre comida y 1/2 sobre animales lindos. Elija 5 para que sea el número de palabras en D. Elija la primera palabra que viene del tema de la comida, que luego le da la palabra "brócoli". Elige la segunda palabra que viene del tema de los animales lindos, que te da "panda". Elige la tercera palabra que viene del tema de los animales lindos, dándote "adorable". Elija la cuarta palabra que viene del tema de los alimentos, que le da "cerezas". Elija la quinta palabra que viene del tema de la comida, que le da "comer".

Por lo tanto, el documento generado bajo el modelo LDA será "las cerezas adorables del panda de brócoli" (tenga en cuenta que LDA es un modelo de bolsa de palabras).

Aprendizaje

Así que ahora supongamos que tienes un conjunto de documentos. Ha elegido un número fijo de K temas para descubrir, y desea utilizar LDA para aprender la representación del tema de cada documento y las palabras asociadas a cada tema. ¿Cómo haces esto? Una forma (conocida como muestreo de Gibbs colapsado \*) es la siguiente:

Revise cada documento y asigne aleatoriamente cada palabra del documento a uno de los K temas. Tenga en cuenta que esta asignación aleatoria ya le brinda representaciones de todos los documentos y distribuciones de palabras de todos los temas (aunque no muy buenas). Así que para mejorarlos, para cada documento d… ... Ir a través de cada palabra w en d ... …… ..Y para cada tema t, calcule dos cosas: 1) p (tema t | documento d) = la proporción de palabras en el documento d que actualmente están asignadas al tema t, y 2) p (palabra w | tema t ) = la proporción de asignaciones al tema t sobre todos los documentos que provienen de esta palabra w. Reasigne el nuevo tema, donde elija el tema t con probabilidad p (tema t | documento d) \* p (palabra w | tema t) (según nuestro modelo generativo, esta es esencialmente la probabilidad de que el tema t generara la palabra w, por lo que tiene sentido que volvamos a muestrear el tema de la palabra actual con esta probabilidad). (También, estoy pasando por alto un par de cosas aquí, como el uso de antecedentes / pseudocuentas en estas probabilidades). …… ..En otras palabras, en este paso, asumimos que todas las asignaciones de temas, excepto la palabra actual en cuestión, son correctas, y luego actualizamos la asignación de la palabra actual utilizando nuestro modelo de cómo se generan los documentos. Después de repetir el paso anterior una gran cantidad de veces, eventualmente alcanzará un estado aproximadamente estable en el que sus asignaciones son bastante buenas. Entonces, utilice estas asignaciones para estimar las mezclas de temas de cada documento (contando la proporción de palabras asignadas a cada tema dentro de ese documento) y las palabras asociadas a cada tema (contando la proporción de palabras asignadas a cada tema en general).

Explicación de Layman

En caso de que la discusión anterior haya sido un poco deslumbrante, aquí hay otra forma de ver a LDA en un dominio diferente.

Supongamos que te acabas de mudar a una nueva ciudad. Eres un fanático de los hipsters y del anime, así que quieres saber dónde están los demás hipsters y los frikis del anime. Por supuesto, como un hipster, sabes que no puedes simplemente preguntar, entonces, ¿qué haces?

Aquí está el escenario: se extienden a varios establecimientos diferentes (documentos) a través de la ciudad, tomando nota de las personas (palabras) que cuelgan en cada uno de ellos (por ejemplo, Alice pasa el rato en el centro comercial y en el parque, Bob se junta en el El cine y el parque, y así sucesivamente). Fundamentalmente, no conoce los grupos de interés típicos (temas) de cada establecimiento, ni conoce los diferentes intereses de cada persona.

Así que elige un número K de categorías para aprender (es decir, desea aprender los tipos de categorías más importantes de K a las que pertenece la gente), y comience por adivinar por qué ve a la gente donde lo hace. Por ejemplo, al principio supones que Alice está en el centro comercial porque a las personas con intereses en X les gusta pasar el rato allí; cuando la ves en el parque, supones que es porque a sus amigos con intereses en Y les gusta pasar el rato allí; cuando ves a Bob en el cine, adivinas que es porque a la gente Z de esta ciudad realmente le gusta ver películas; y así.

Por supuesto, es muy probable que tus suposiciones aleatorias sean incorrectas (¡son adivinanzas aleatorias, después de todo!), Por lo que debes mejorarlas. Una forma de hacerlo es:

Elija un lugar y una persona (por ejemplo, Alicia en el centro comercial). ¿Por qué es probable que Alice esté en el centro comercial? Probablemente porque otras personas en el centro comercial con los mismos intereses le enviaron un mensaje diciéndole que viniera. En otras palabras, cuantas más personas con intereses en X haya en el centro comercial y más fuerte esté Alice asociada con el interés X (en todos los otros lugares a los que acude), es más probable que Alice esté en el centro comercial debido al interés. X. Así que haz una nueva conjetura sobre por qué Alice está en el centro comercial, eligiendo un interés con cierta probabilidad según la probabilidad de que lo creas.

Recorre cada lugar y persona una y otra vez. Tus conjeturas siguen mejorando y mejorando (después de todo, si te das cuenta de que muchos frikis pasan el rato en la librería y sospechas que Alice es bastante geek, entonces es una buena apuesta que Alice esté en la librería porque sus amigos geek dijeron ella debe ir allí, y ahora que tiene una mejor idea de por qué Alice probablemente está en la librería, puede utilizar este conocimiento para mejorar sus conjeturas sobre por qué todos los demás están donde están), y así, finalmente, puede parar actualizando Luego tome una instantánea (o múltiples instantáneas) de sus conjeturas y úsela para obtener toda la información que desee:

Para cada categoría, puede contar las personas asignadas a esa categoría para averiguar qué personas tienen este interés particular. Al observar a la gente en sí misma, también puede interpretar la categoría (por ejemplo, si la categoría X contiene mucha gente alta que usa camisetas y lleva pelotas de baloncesto, puede interpretar a X como el grupo de "jugadores de baloncesto"). Para cada lugar P y categoría de interés C, puede calcular las proporciones de personas en P debido a C (en el conjunto actual de asignaciones), y éstas le dan una representación de P. Por ejemplo, puede aprender que las personas que cuelgan en Barnes & Noble están compuestos por 10% de hipsters, 50% fanáticos del anime, 10% deportistas y 30% estudiantes universitarios.

Ejemplo del mundo real

Finalmente, veamos un ejemplo del mundo real. Apliqué LDA a un conjunto de correos electrónicos de Sarah Palin hace poco (vea http://blog.echen.me/2011/06/27/… para una publicación de blog, o http://sarah-palin.heroku.com / para una aplicación que le permite navegar a través de los correos electrónicos por los temas aprendidos de LDA), así que aquí están algunos de los temas que aprendió el algoritmo:

Trig / Familia / Inspiración: familia, web, correo, dios, hijo, de, felicitaciones, niños, vida, niño, abajo, trig, bebé, nacimiento, amor, tú, síndrome, muy, especial, bendito, viejo, esposo, años, gracias, mejor, ... Vida silvestre / BP Corrosión: juego, peces, alces, vida silvestre, caza, osos, polares, osos, subsistencia, manejo, área, tabla, caza, lobos, control, departamento, año, uso, lobo, hábitat, cazadores, caribú, programa , denby, pesca, ... Energía / Combustible / Petróleo / Minería: energía, combustible, costos, petróleo, Alaska, precios, costo, nome, ahora, alto, ser, hogar, público, energía, mina, crisis, precio, recurso, necesidad, comunidad, Fairbanks, rebaja, uso, minería, pueblos,… Gas: gas, petróleo, gasoducto, agia, proyecto, natural, norte, productores, empresas, impuestos, compañía, energía, desarrollo, pendiente, producción, recursos, línea, línea de gas, transcanada, dijo, miles de millones, plan, administración, millones, industria,… Educación / Residuos: escuela, residuos, educación, estudiantes, escuelas, millones, lectura, correo electrónico, mercado, política, estudiante, año, alta, noticias, estados, programa, primero, informe, negocios, administración, boletines, información, informes, 2008, trimestre,… Campaña presidencial / Elecciones: correo, web, de, gracias, usted, box, mccain, sarah, muy, bien, grande, john, esperanza, presidente, sinceramente, wasilla, trabaje, mantenga, haga, agregue, familia, republicano, apoyo , haciendo, po, ...

#### Lectura sugerida:

*   https://en.wikipedia.org/wiki/Latent _Dirichlet_ asignación
*   http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/