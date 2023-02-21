---
id: 589a8eb3f9fc0f352b528e72
title: Implementación de la autentificación social III
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

La parte final de la estrategia es la gestión del perfil devuelto por GitHub. Necesitamos cargar el objeto de la base de datos del usuario si existe, o crear uno si no existe, y rellenar los campos del perfil, luego devolver el objeto del usuario. GitHub nos proporciona un *id* único dentro de cada perfil con el que podemos buscar para serializar el usuario (ya implementado). A continuación hay un ejemplo de implementación que puedes usar en tu proyecto: se incluye dentro de la función que es el segundo argumento de la nueva estrategia, justo debajo de donde está actualmente `console.log(profile);`:

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      username: profile.username,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

`findOneAndUpdate` te permite buscar un objeto y actualizarlo. Si el objeto no existe, será insertado y puesto a disposición de la función callback. En este ejemplo, siempre establecemos `last_login`, incrementamos el `login_count` por `1`, y sólo rellenamos la mayoría de los campos cuando se inserta un nuevo objeto (nuevo usuario). Ten en cuenta el uso de valores predeterminados. A veces un perfil devuelto no tendrá toda la información rellenada o el usuario la mantendrá privada. En este caso, lo gestionas para prevenir un error.

Debería poder iniciar sesión en su aplicación ahora. ¡Intentalo!

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-iii-5" target="_blank" rel="noopener noreferrer nofollow">consulta el proyecto realizado hasta este momento</a>.

# --hints--

La configuración de la estrategia de GitHub debe estar completa.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /GitHubStrategy[^]*myDataBase/gi,
    'Strategy should use now use the database to search for the user'
  );
  assert.match(
    data,
    /GitHubStrategy[^]*cb/gi,
    'Strategy should return the callback function "cb"'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
