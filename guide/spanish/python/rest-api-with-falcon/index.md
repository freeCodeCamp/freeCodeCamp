---
title: REST APIs with Falcon
localeTitle: API REST con Falcon
---
## Introducción

Las API REST son un componente importante de cualquier pila bien diseñada, y Python tiene algunos marcos brillantes para componer API rápidamente. Uno de estos marcos se llama [Falcon](https://falconframework.org) , ¡y es genial! Esencialmente un microframado, se envía con una cantidad considerable de ventajas:

1.  Es rápido. Realmente rápido. Echa un vistazo a los puntos de referencia [aquí](https://falconframework.org/#sectionBenchmarks) .
    
2.  Los recursos HTTP se definen como clases, y los métodos de clase se utilizan para diferentes operaciones REST en estos recursos. Esto ayuda a mantener un código base limpio.
    
3.  Es bastante extensible: echa un vistazo a [esta sección](https://github.com/falconry/falcon/wiki/Complementary-Packages) en su wiki, para familiarizarse con ella.
    
4.  Se basa en WSGI, el estándar Pythonic para aplicaciones web, por lo que funciona con Python 2.6, 2.7 y 3.3+. Y si necesita más rendimiento, ejecútelo usando PyPy!
    

## Empezando

Primero, preparemos nuestro medio ambiente. Personalmente, siempre es bueno trabajar en entornos virtuales: puedes usar `virtualenv` , `virtualenvwrapper` o `venv` . A continuación, instale Falcon usando `pip` : `pip install falcon` .

Vamos a desarrollar una pequeña API de muestra que hace manipulaciones de zona horaria muy básicas para nosotros. Mostrará la hora actual en UTC, así como el tiempo de la época correspondiente. Para ese fin, tomaremos una biblioteca ingeniosa llamada `arrow` : `pip install arrow` .

Puede encontrar la muestra terminada en [https://github.com/rudimk/freecodecamp-guides-rest-api-falcon](https://github.com/rudimk/freecodecamp-guides-rest-api-falcon) .

## Recursos

Piense en un recurso como una entidad que su API necesita manipular. En nuestro caso, el mejor recurso sería una `Timestamp` . Nuestra ruta sería típicamente algo como esto:
```
GET /timestamp 
```

Aquí, `GET` es el verbo HTTP que se usa para llamar a este punto final, y `/timestamp` es la propia URL. Ahora que hemos eliminado este bit del camino, ¡creemos un módulo!

`$ touch timestamp.py`

Tiempo para importar la biblioteca Falcon:

```python
import json 
 
 import falcon 
 
 import arrow 
```

Tenga en cuenta que también importamos el paquete `json` y la biblioteca de `arrow` . Ahora, definamos una clase para nuestro recurso:

```python
class Timestamp(object): 
 
    def on_get(self, req, resp): 
        payload = {} 
        payload['utc'] = arrow.utcnow().format('YYYY-MM-DD HH:mm:SS') 
        payload['unix'] = arrow.utcnow().timestamp 
 
        resp.body = json.dumps(payload) 
        resp.status = falcon.HTTP_200 
```

Vamos a pasar por este fragmento. Hemos definido una clase de `Timestamp` y hemos definido un método de clase llamado `on_get` ; esta función le dice a Falcon que cuando se emita una solicitud `GET` a un punto final para este recurso, ejecute la función `on_get` y proporcione los objetos de solicitud y respuesta como parámetros. Después de eso, es fácil navegar: creamos un diccionario vacío, lo llenamos con las marcas de hora UTC y UNIX actuales, lo convertimos a JSON y lo adjuntamos al objeto de respuesta.

Bastante simple, ¿verdad? Pero lamentablemente, eso no es todo. Ahora necesitamos crear un servidor Falcon y conectar la clase de recurso que acabamos de definir a un punto final real.

`$ touch app.py`

Ahora, agregue el siguiente código:

```python
import falcon 
 
 from timestamp import Timestamp 
 
 api = application = falcon.API() 
 
 timestamp = Timestamp() 
 
 api.add_route('/timestamp', timestamp) 
```

Aquí, hemos definido una API de Falcon e inicializado una instancia de la clase de recurso que creamos anteriormente. Luego, `/timestamp` punto final `/timestamp` con la instancia de clase, ¡y ahora estamos listos! Para probar esta API, instale `gunicorn` ( `pip install gunicorn` ), y ejecute la `gunicorn app` . Use Postman o simple `cURL` para probar esto:
```
$ curl http://localhost:8000/timestamp 
 {"utc": "2017-10-20 06:03:14", "unix": 1508479437} 
```

¡Y eso lo hace!

## Seguir adelante

Una vez que haya aprendido a usar Falcon, es muy fácil componer poderosas API REST que interactúan con bases de datos o colas de mensajería. Revise los [documentos de Falcon](https://falcon.readthedocs.io/en/stable/index.html) , así como el PyPI para ver los interesantes módulos de Falcon que siguen apareciendo.