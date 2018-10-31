---
title: Creating a Project with Django
localeTitle: Creando un proyecto con Django
---
Ahora que sabemos cómo crear entornos virtuales y usar pip, podemos comenzar a construir nuestro proyecto. En este artículo, crearemos nuestro primer proyecto de Django, escribiremos pruebas e iniciaremos nuestro servidor de desarrollo.

## Creando el entorno virtual

Primero, vamos a crear un nuevo entorno virtual para este proyecto. (Si aún no lo ha hecho, desactive el virtualenv anterior escribiendo `deactivate` en el terminal). Para obtener más información sobre los entornos virtuales y cómo usarlos, visite esta página .

Navegue hasta el directorio donde desea el proyecto Django y escriba lo siguiente en el terminal:
```
mkvirtualenv taskplanner --python=/usr/bin/python3 
```

Es posible que tengas que cambiar la ruta de Python si se ve diferente a la anterior.

El shell de la línea de comandos ahora debería verse como abajo, lo que indica que estás en un entorno virtual.
```
(taskplanner)<a href='https://sites.google.com/a/chromium.org/chromedriver/downloads' target='_blank' rel='nofollow'>munsterberg@Lenovo ~/workspace] $ 
```

Si no se ve así, simplemente escribe:
```
workon taskplanner 
```

Ahora podemos instalar Django:
```
pip install Django 
```

## Crea nuestro proyecto Django.

Con Django instalado podemos crear nuestro proyecto:
```
django-admin.py startproject taskplanner 
```

A continuación, navegue a nuestro nuevo proyecto escribiendo:
```
cd taskplanner 
```

Antes de hacer nada, establezcamos este directorio como nuestro directorio de trabajo usando virtualenvwrapper:
```
setvirtualenvproject 
```

**Nota de inicio** : para obtener una lista de los comandos de virtualenvwrapper, escriba `virtualenvwrapper` en su terminal.

Ahora, cuando estamos en nuestro entorno virtual, podemos escribir `cdproject` para navegar directamente a nuestro directorio de trabajo.

El directorio de su proyecto debería verse así:
```
taskplanner // our main working directory 
 |--- manage.py // similar to the django-admin script, you will see this used a 
               // lot throughout our project 
 |--- taskplanner 
    |--- __init__.py // this just tells python to treat this directory as a package 
    |--- settings.py // main configuration file for our project 
    |--- urls.py // we will use this to configure urls 
    |--- wsgi.py // this is used for deploying our project to a production server 
```

## Pruebas funcionales

El desarrollo guiado por pruebas es una mejor práctica ampliamente utilizada en el desarrollo de software. Básicamente, queremos escribir primero una prueba que esté destinada a fallar, y luego escribir la menor cantidad de código posible para pasar esa prueba. Con Django, nuestro objetivo es escribir tanto pruebas funcionales (también conocidas como: pruebas de integración, pruebas de extremo a extremo, etc.) y pruebas unitarias a lo largo del desarrollo. ¡No se preocupe, las pruebas no son tan difíciles como parece!

Pero primero, necesitamos crear un nuevo entorno virtual dedicado a las pruebas. Abra una nueva pestaña en su terminal, navegue a su directorio de proyectos del planificador de tareas y escriba:
```
mkvirtualenv taskplanner_test --python=/usr/bin/python3 
```

Ahora debería tener 2 pestañas abiertas en su terminal, una en el entorno virtual (planificador de tareas) y la otra en el entorno virtual (planificador de tareas).

Si escribe `pip freeze` en nuestro nuevo entorno de prueba (taskplanner\_test), notará que no aparece nada. Esto se debe a que todavía no hemos instalado nada en nuestro nuevo entorno.

Continuemos e instalemos Django primero en nuestro entorno de prueba (taskplanner\_test):
```
pip install Django 
```

Para crear nuestras pruebas funcionales necesitaremos algunas cosas. Primero, necesitamos tener el navegador web Firefox instalado en nuestra máquina. Si no tienes Firefox, instálalo ahora.

**Nota** : Puede usar Chrome para las pruebas de integración, pero debe descargar el controlador [aquí](https://sites.google.com/a/chromium.org/chromedriver/downloads) y seguir [esta pregunta de desbordamiento de pila](http://stackoverflow.com/questions/13724778/how-to-run-selenium-webdriver-test-cases-in-chrome) . Históricamente, Firefox ha tenido un mejor rendimiento que Chrome al ejecutar pruebas de integración, lo cual es una consideración muy importante ya que en comparación con las pruebas unitarias, las pruebas de integración son extremadamente lentas.

Esto se debe a que las pruebas de integración están probando **todo el** sistema, en lugar de 'unidades' (componentes pequeños). En el mundo real, a veces es mejor evitar las pruebas de integración debido al largo tiempo de desarrollo para crearlas, el tiempo de ejecución lento, los errores ambiguos y otras razones que descubriría a tiempo.

Sin embargo, aún son dignos de nuestra consideración al desarrollar una aplicación del mundo real, y pueden ser muy útiles en términos de confiabilidad a pesar de las desventajas de rendimiento.

A continuación, necesitamos instalar un paquete llamado [Selenium](http://selenium.googlecode.com/svn/trunk/docs/api/py/index.html) . Este paquete nos proporcionará un WebDriver para que podamos controlar un navegador con nuestras pruebas. El selenio se utiliza generalmente para automatizar su navegador.
```
pip install selenium 
```

Ahora que tenemos eso instalado, necesitaremos un directorio para crear nuestras pruebas:
```
mkdir functional_tests 
```

En el directorio del `taskplanner` ahora debería ver lo siguiente:
```
taskplanner 
 |-- functional_tests 
 |--- manage.py 
 |--- taskplanner 
    ... 
```

Ahora necesitamos crear algunos archivos en nuestra carpeta `functional_tests` . Vamos a crear una `__init__.py` archivo (esto le dirá pitón para tratar `functional_tests` como un paquete), y una `test_all_users.py` archivo para contener nuestras pruebas.

Vamos a hacer eso ahora:
```
touch functional_tests/__init__.py 
 touch functional_tests/test_all_users.py 
```

**Sidenote** : `__init__.py` es casi siempre un archivo vacío. Para obtener más información sobre para qué se utiliza, consulte [esta respuesta de stackoverflow.](http://stackoverflow.com/questions/448271/what-is-init-py-for)

¡Por fin podemos empezar a escribir nuestra primera prueba funcional! Las pruebas funcionales son para probar fragmentos de funcionalidad en nuestra aplicación web. TDD con Python describe las pruebas funcionales como "cómo funciona la aplicación desde el punto de vista del usuario".

Así que abramos el archivo `test_all_users.py` en nuestro editor de texto. Primero, queremos importar el controlador web de selenio y, para que esto sea mucho más fácil, Django proporciona algo conocido como StaticLiveServerTestCase para pruebas en vivo. Importemos los dos ahora:
```
from selenium import webdriver 
 from django.contrib.staticfiles.testing import StaticLiveServerTestCase 
```

Ya que estamos probando desde la perspectiva de los usuarios, nombremos estas pruebas NewVisitorTest. Agregue lo siguiente:
```
class NewVisitorTest(StaticLiveServerTestCase): 
    def setUp(self): 
        self.browser = webdriver.Firefox() 
        self.browser.implicitly_wait(2) 
 
    def tearDown(self): 
        self.browser.quit() 
```

Primero, creamos una clase StaticLiveServerTestCase llamada NewVisitorTest, que contendrá nuestras pruebas que queremos ejecutar para un nuevo visitante. Luego, tenemos dos métodos llamados setUp y tearDown. El método de configuración se inicializa cuando ejecutamos nuestras pruebas. Entonces, para cada prueba que ejecutamos, abrimos Firefox y esperamos 2 segundos para que se cargue la página. tearDown se ejecuta después de que finaliza cada prueba, este método cierra el navegador para nosotros después de cada prueba.

Ahora podemos escribir nuestra primera prueba y hacer que Firefox se abra y cierre automáticamente para nosotros. Vamos a escribir nuestra prueba ahora debajo del método tearDown.
```
    def test_home_title(self): 
        self.browser.get('http://localhost:8000') 
        self.assertIn('Welcome to Django', self.browser.title) 
```

Nuestra primera prueba, ¡qué emocionante! Vamos a caminar a través de él. Cada prueba que queremos crear debe comenzar con 'prueba'. Por ejemplo, si quisiera crear una prueba para mi css, llamaría al método `test_h2_css` . Así que aquí, `test_home_title` la prueba `test_home_title` . Eso es bastante autoexplicativo, que es exactamente lo que queremos para nuestras pruebas. El método primero lleva a Firefox a la url `http://localhost:8000` , y luego verifica si 'Welcome to Django' está en el título de las etiquetas html head.

Hagamos esta prueba ahora y veamos que pasa:
```
python manage.py test functional_tests 
```

Primero, ¿qué es exactamente lo que estamos escribiendo aquí? El script manage.py nos proporciona algo llamado 'prueba', lo utilizaremos para ejecutar todas nuestras pruebas. Aquí lo estamos ejecutando en nuestro paquete `functional_tests` que creamos con el archivo `__init__.py` .

Después de ejecutar esto, debería ver algo como lo siguiente en su terminal:
```
F 
 ====================================================================== 
 FAIL: test_home_title (functional_tests.test_all_users.NewVisitorTest) 
 ---------------------------------------------------------------------- 
 Traceback (most recent call last): 
  File "/Users/username/url/to/project/taskplanner/functional_tests/test_all_users.py", line 15, in test_home_title 
    self.assertIn('Welcome to Django', self.browser.title) 
 AssertionError: 'Welcome to Django' not found in 'Problem loading page' 
 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.524s 
 
 FAILED (failures=1) 
```

Así que falló, pero nos dio algunos consejos útiles. Primero, el error de afirmación. 'Bienvenido a Django' no se encuentra en 'Página de carga de problemas'. Así que eso significa que el título de `http://localhost:8000` era 'Página de carga de problemas'. Si navega a la url, verá que la página web no estaba disponible.

Intentemos ejecutar nuestro servidor Django para que pase la prueba. Vuelva a la pestaña de la terminal que se encuentra en el `taskplanner` virtual del `taskplanner` y ejecute nuestro servidor.
```
python manage.py runserver 
```

Deberías ver algo como lo siguiente:
```
Performing system checks... 
 
 System check identified no issues (0 silenced). 
 
 You have unapplied migrations; your app may not work properly until they are applied. 
 Run 'python manage.py migrate' to apply them. 
 
 March 06, 2016 - 20:53:38 
 Django version 1.9.4, using settings 'taskplanner.settings' 
 Starting development server at http://127.0.0.1:8000/ 
 Quit the server with CONTROL-C. 
```

No te preocupes por el mensaje de migraciones sin aplicar todavía.

Ahora que tenemos un servidor ejecutándose en `http://localhost:8000` , ejecutemos nuestra prueba nuevamente.

Regrese a la otra pestaña de terminal que está en el `taskplanner_test` virtual `taskplanner_test` y ejecute lo siguiente una vez más:
```
python manage.py test functional_tests 
```

Deberías ver lo siguiente.
```
Creating test database for alias 'default'... 
 . 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.033s 
 
 OK 
 Destroying test database for alias 'default'... 
```

## Lo que hemos hecho hasta ahora

Nuestra primera prueba de aprobacion!

Hemos cubierto mucho en este artículo. Creamos nuestro primer proyecto, configuramos entornos virtuales para propósitos de desarrollo y prueba, escribimos nuestra primera prueba funcional, y seguimos el proceso de desarrollo basado en Pruebas al escribir una prueba fallida y luego hacerla pasar.

## Usando plantillas de inicio

Puede ahorrar mucho tiempo iniciando su proyecto con una plantilla de inicio de django. Estos proyectos utilizan las mejores prácticas que le ahorrarán dolores de cabeza más adelante cuando su proyecto crezca. Algunos de los proyectos más populares son

*   [Cortador de galletas](https://github.com/pydanny/cookiecutter-django)
*   [Arranque hackatón](https://github.com/DrkSephy/django-hackathon-starter)
*   [Borde](https://github.com/arocks/edge)