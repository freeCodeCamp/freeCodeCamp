---
title: Installing Flask in Virtual Environment
localeTitle: Instalación del matraz en un entorno virtual
---
¡Si deseas usar Flask, estás en el lugar correcto! Pero instale Flask, solo porque desea explorar el desarrollo web en Flask. Siempre recomendaríamos Django sobre Flask, ya que se hace difícil construir grandes aplicaciones web en Flask; Si eres nuevo en el desarrollo web en Python.

El matraz es un micro-marco; y puede elegir la funcionalidad que desea tener sobre la funcionalidad básica de barebone que ya posee de un marco web estándar. Pero si no desea hacer toda la molestia y centrarse en construir su idea; Tal vez Django sería una mejor compañía para el camino por delante.

Voy a suponer que **no** se **ha** saltado la sección sobre la instalación de Python 3 y su uso en un entorno virtual.

Primero asegúrate de que no estés dentro de un entorno virtual ya. Luego crea un nuevo entorno virtual, llamado `py3-flask`
```
$ mkvirtualenv py3-flask --python=/usr/bin/python3 
```

Ahora, ejecute el comando `workon` para ver una lista de entornos virtuales en su máquina. Esto debería enumerar `py3-flask` en una línea.

Después de esto, active este entorno:
```
$ workon py3-flask 
```

Su entorno virtual se activaría con una copia del intérprete de Python, con las propiedades de Python 3. Deberías correr
```
$ python --version 
```

para asegurarte de estar dentro de un entorno Python 3.

Para que quede claro, si ya ha instalado Django después de la sección anterior - **no** debería ser en este entorno. Estamos utilizando el entorno virtual; Para mantener nuestra instalación de diferentes marcos separados.

Para estar seguro correr
```
pip freeze 
```

Asegúrese de que Django no esté listado en la lista de salida generada por el comando anterior.

Ahora, vamos a instalar Flask. Para su consulta, aquí está la [guía de instalación oficial](http://flask.pocoo.org/docs/0.10/installation/) . Sin embargo, muchos desarrolladores prefieren instalar algunos paquetes adicionales con Flask; Para más funcionalidad.

Para instalar solo el matraz, exeute
```
$ pip install flask 
```

Cuando ejecute `pip freeze` nuevamente, debería mostrarle `Flask` en los paquetes listados.

Es incómodo ejecutar comandos largos como este. Afortunadamente, también hay algo como `package.json` en el dominio Python: una lista de dependencias, que el administrador de paquetes puede usar para duplicar el entorno descargándolos con la versión adecuada del repositorio central.

El estándar es usar `pip freeze` y registrar la salida en un archivo local, que puede ser controlado por la fuente.
```
$ pip freeze > requirements.txt 
```

Aquí está el contenido de `requirements.txt` de mi entorno, después de instalar esos paquetes de Flask. Puedes agregar o eliminar más paquetes a medida que tu aplicación crezca; pero por ahora, simplemente copie y pegue el contenido de lo siguiente en un archivo de texto en el mismo directorio en el que se encuentra.
```
Babel==2.2.0 
 Flask==0.10.1 
 Flask-Babel==0.9 
 Flask-Login==0.3.2 
 Flask-Mail==0.9.1 
 Flask-OpenID==1.2.5 
 Flask-SQLAlchemy==2.1 
 Flask-WTF==0.12 
 Flask-WhooshAlchemy==0.56 
 Jinja2==2.8 
 MarkupSafe==0.23 
 SQLAlchemy==1.0.12 
 Tempita==0.5.2 
 WTForms==2.1 
 Werkzeug==0.11.4 
 Whoosh==2.7.2 
 blinker==1.4 
 coverage==4.0.3 
 decorator==4.0.9 
 defusedxml==0.4.1 
 flipflop==1.0 
 guess-language==0.2 
 itsdangerous==0.24 
 pbr==1.8.1 
 python3-openid==3.0.9 
 pytz==2015.7 
 six==1.10.0 
 speaklater==1.3 
 sqlalchemy-migrate==0.10.0 
 sqlparse==0.1.18 
```

Esta lista de paquetes se toma de [aquí](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) .

Una vez que haya guardado el archivo, simplemente ejecute
```
$ pip install -r requirements.txt 
```

¡El gestor de paquetes se encargará de instalar los paquetes que faltan para ti! Y debes cometer este archivo con tu sistema de control de fuente.

El conjunto de comandos anterior asume que tienes una máquina Linux o Mac OSX; o está utilizando un cuadro alojado en la nube en cloud9 o Nitrous; o quizás estás usando una caja de Vagrant.

Pero, si tiene que usar una máquina con Windows, considere usar Windows Powershell, en lugar de Windows CMD. La mayoría de los comandos serían iguales. En caso de que necesite ayuda, es posible que desee consultar [esta discusión de desbordamiento de pila](http://stackoverflow.com/questions/17917254/how-to-install-flask-on-windows) .