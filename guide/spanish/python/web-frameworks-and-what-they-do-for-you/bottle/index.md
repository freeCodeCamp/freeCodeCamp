---
title: Bottle
localeTitle: Botella
---
El marco de la botella nos permite comenzar a trabajar de manera muy rápida y sencilla con una aplicación web básica.

A continuación se detalla cómo escribir y ejecutar una aplicación web de saludo simple donde podemos ingresar nuestro nombre en un formulario, presione enviar y recibir un saludo.

1.  Use `pip` para instalar el paquete de la botella.
    
    ```
    pip install bottle 
    
    ```
    
2.  Cree un archivo `html` para servir al cargar el sitio. Por ejemplo `index.html` .
    
    Agreguemos un encabezado y un formulario básico a esta página.
    
    ```html
    
    <h3>Say Hello</h3> 
     
     <form action="/hello" method="get"> 
     Name: 
        <input type="text" name="name"><br><br> 
        <input type="submit"> 
     </form> 
    
    ```
    
3.  Crea un nuevo archivo python, ejemplo `main.py`
    
4.  En la primera línea del archivo necesitamos importar las funciones de obtención, solicitud y ejecución desde el módulo de botella.
    
    ```python
    from bottle import get, request, run 
    
    ```
    
5.  Ahora definimos nuestra función para servir nuestro archivo html cuando se accede a la página raíz.
    
    Aquí usamos el decorador `@get` , que especifica que esta función debe responder a `HTTP GET` solicitudes `HTTP GET` y pasar `'/'` como la ruta por la que se invocará la función.
    
    A continuación definimos la función `index()` usando la palabra clave `def` .
    
    Para leer y devolver el archivo html que creamos en el paso 2, usamos lo que se llama un administrador de contexto. Esto se encarga de abrir y cerrar el archivo para nosotros, lo que nos permite leer los archivos y los contenidos y devolverlos con la declaración de `return` .
    
    ```python
    @get('/') 
     def index(): 
        with open('./index.html') as f: 
            return f.read() 
    
    ```
    
6.  Para que el sitio se ejecute y escuche las solicitudes, debemos agregar una llamada a la función de `run` marcos de la botella de la siguiente manera.
    
    Aquí pasamos el host en el que se ejecutará la aplicación web, en este caso `localhost` , y el puerto en el que debe escuchar las solicitudes HTTP.
    
7.  Ejecute la aplicación y cárguela en su navegador http: // localhost: 8080 /, debería ver el archivo html que creamos en el navegador.
    
    Si ingresamos nuestro nombre y presionamos enviar ahora, obtendremos un error `HTTP 404` ya que aún no hemos definido la función para responder a esta solicitud.
    
    ```python
    run(host='localhost', port=8080) 
    
    ```
    
8.  De vuelta en nuestro archivo `main.py` , ahora necesitamos definir la función para responder al sumbitting nuestro formulario.
    
    Nuevamente usamos el decorador `@get` aquí, sin embargo, esta vez pasamos en `'/.hello'` como el camino. Puede observar que esta es la misma ruta que definimos en el atributo de acción de nuestro formulario en `index.html` .
    
    A continuación, recuperamos el valor del `name` de la url. Al enviar el formulario, los datos del formulario están url codificados de esta manera http: // localhost: 8080 / hello? Name = Jon + Snow
    
    Finalmente devolvemos nuestro saludo, agregando el nombre ingresado en nuestro formulario.
    
    ```python
    @get('/hello') 
     def hello(): 
        name = request.query['name'] 
        return f'Hello {name}' 
    
    ```
    

### Fuentes

https://bottlepy.org/docs/dev/