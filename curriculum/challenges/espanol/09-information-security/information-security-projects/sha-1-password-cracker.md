---
id: 5e46f983ac417301a38fb933
title: Cracker de contraseñas SHA-1
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

Para este proyecto, trabajarás con nuestra <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">plantilla en Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Estamos desarrollando las instrucciones interactivas del currículo de Python. Aunque puedes encontrar los siguientes videos en el canal de YouTube de freeCodeCamp.org que te enseñaran lo necesario para realizar este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Las contraseñas nunca deberían de guardarse en texto plano. Deberían de guardarse cifradas, por si alguien externo accede a la lista de contraseñas. Sin embargo no todos los cifrados son creados de la misma manera.

En este proyecto aprenderemos la importancia de tener una buena contraseña. Creando un cracker de contraseñas, para conseguir las contraseñas que fueron cifradas usando el algoritmo SHA-1.

Crea una función que toma como parametro una contraseña cifrada creada con el agoritmo SHA-1 y retornarla decifrada si es una de las 10,000 contraseñas más usadas. Si la contraseña cifrada no se encuentra en la base de datos, retorna "LA CONTRASEÑA NO SE ENCUENTRA EN LA BASE DE DATOS".

Para decifrar la contraceña la función deberá cifrar cada una de las contraseñas del archivo `top-10000-passwords.txt` (las 10,000 contrasñas más usadas) y compararlas con la contraseña cifrada introducida.

La función tomará un segundo argumento opcional llamado `use_salts`. Si su valor es verdadero, cada salt string del archivo `known-salts.txt` debera ser agregado al final de cada contrasña del archivo `top-10000-passwords.txt` antes de cifrarlas y comparlas con la contraseña cifrada pasada con la función.

Estás son algunas contraseñas cifradas para probar la función:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` should return "sammy123"
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` should return "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` should return "password"

Estás son algunas contraseñas cifradas para probar la función cuando el valor de `use_salts` es `True`:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` should return "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` should return "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` should return "bubbles1"

La librería `hashlib` ya viene importada. Deberías considerar usarla en tu código. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Aprende más sobre "hashlib" aquí</a>.

## Desarrollo

Escribe tu código en `password_cracker.py`. Para el desarrollo, puedes usar `main.py` para probar tu código. Haz clic en el botón "ejecutar" para ejecutar tu código en `main.py`.

## Pruebas

Las pruebas unitarias para este proyecto están en `test_module.py`. Por defecto las pruebas del archivo `test_module.py` ya están importadas en el archivo `main.py` para su comodidad. Las pruebas se ejecutarán automaticamente cada vez que presione el botón de "Ejecutar".

## Enviar

Copia la URL de tu proyecto y envíalo a freeCodeCamp.

# --hints--

Debería pasar todas las pruebas de Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
