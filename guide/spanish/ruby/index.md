---
title: Ruby
localeTitle: Rubí
---
## Que es ruby

Ruby fue creado por Yukihiro "Matz" Matsumoto y es un lenguaje de script de [código abierto](https://github.com/ruby/ruby) , dinámico e interpretado para una programación rápida y fácil orientada a objetos. Lo que significa:

También se sabe que tiene una de las [comunidades más grandes y amigables](https://www.ruby-lang.org/en/community/) entre los lenguajes de programación.

*   Posibilidad de realizar llamadas al sistema operativo directamente.
*   Retroalimentación inmediata durante el desarrollo.
*   Las declaraciones de variables son innecesarias.
*   La gestión de la memoria es automática.
*   Todo es un objeto
*   Tiene funcionalidad "mixin" por módulo.
*   Iteradores y cierres.

Si no está familiarizado con algunos de los conceptos anteriores, siga leyendo y no se preocupe. Ruby se centra en la simplicidad y la productividad con una elegante sintaxis que es natural de leer y fácil de escribir, como:

```ruby
# Quick example of Ruby with Object Oriented Programming 
 class Greeter 
  def initialize(name) 
    @name = name.capitalize 
  end 
 
  def salute 
    puts "Hello #{@name}!" 
  end 
 end 
 
 # Create a new object 
 g = Greeter.new("world") 
 
 # Output "Hello World!" 
 g.salute 
```

## Versión

La versión estable actual es [2.5.1](https://www.ruby-lang.org/en/news/2018/03/28/ruby-2-5-1-released/) .

## Instalación

Mac OS X y muchas distribuciones de Linux vienen preinstaladas con Ruby. Para verificar si ruby ​​está preinstalado en su sistema, simplemente ejecute `ruby -v` en su shell. Hay varias formas de instalar Ruby:

*   Cuando tiene un sistema operativo similar a UNIX, usar el administrador de paquetes de su sistema es la forma más fácil de comenzar. Sin embargo, la versión empaquetada de Ruby generalmente no es la más nueva.
*   Los instaladores pueden utilizarse para instalar una versión específica o múltiples versiones de Ruby. También hay un instalador para Windows.
*   Los administradores lo ayudan a cambiar entre múltiples instalaciones de Ruby en su sistema.
*   Y finalmente, también puedes construir Ruby desde la fuente.

Para saber cómo instalar Ruby a través de los administradores de paquetes, instaladores y fuente, haga clic [aquí](https://www.ruby-lang.org/en/documentation/installation/) . RVM (Ruby Version Manager) y rbenv son los administradores de Ruby más populares para administrar múltiples Rubies. Si te quedas atascado en cualquier lugar, no te preocupes, solo dirígete a nuestra [sala de chat de Gitter](https://gitter.im/FreeCodeCamp/ruby) y pregúntanos algo.

## IRB

IRB son las siglas de Interactive Ruby Shell. La abreviatura irb proviene del hecho de que la extensión del nombre de archivo de Ruby es ".rb", aunque los archivos interactivos de Ruby no tienen una extensión de ".irb". El programa se inicia desde una línea de comandos y permite la ejecución de comandos de Ruby con una respuesta inmediata, experimentando en tiempo real. Presenta el historial de comandos, las capacidades de edición de línea y el control de trabajos, y puede comunicarse directamente como un script de shell a través de Internet e interactuar con un servidor en vivo. Fue desarrollado por Keiju Ishitsuka.

```shell
    irb 
    2.3.0 :001 > print "Hello World" 
    Hello World! => nil 
```

## Intérprete de rubí

El intérprete de Ruby es lo que se utiliza para ejecutar los scripts de Ruby. Si está disponible y en la ruta de búsqueda del shell de Unix, es posible iniciarlo escribiendo el comando `ruby` seguido del nombre del script, invocará al intérprete y ejecutará el script.

`hello_campers.rb`

```ruby
    if 'welcome' == 'welcome' 
        print('Hello campers!') 
    end 
```

Desde la línea de comandos:

```shell
    $ ruby hello_campers.rb 
    Hello campers! 
```

## Documentación

Ruby está bien [documentado](https://www.ruby-lang.org/en/documentation/) . Estos documentos incluyen tutoriales, guías, referencias y metainformación para el idioma.  
Otro recurso importante para la documentación es [Ruby Doc](http://ruby-doc.org/core-2.3.0/) . Debe visitar este [enlace](https://github.com/airbnb/ruby) para obtener más información sobre la guía de estilo Ruby, escrita por los desarrolladores de AirBnB.

Una lectura recomendada para principiantes en Ruby es [la Guía (importante) de Ruby de Why](https://poignant.guide/) Este libro es inusual entre los libros de programación. Con bastante humor extraño y pistas laterales narrativas que a veces no tienen ninguna relación con el tema, esta logra mantener a los lectores entretenidos mientras aprenden lo básico de Ruby.

## Depuración

Las declaraciones de `print` línea se pueden utilizar para la depuración simple:

```ruby
    print some_variable # prints to console 
```

> **... a menudo, la forma más rápida de depurar un programa es agregar algunas declaraciones de impresión a la fuente: el rápido ciclo de edición-prueba-depuración hace que este enfoque simple sea muy efectivo.**

Ruby también incluye herramientas más potentes para la depuración, como:

*   [_depurador de palanca_](https://github.com/nixme/pry-debugger)

## Hola Mundo!

Volviendo a los documentos, podemos leer sobre el método de [`print`](http://ruby-doc.org/core-2.3.0/Kernel.html#method-i-print) , uno de los métodos incorporados [del módulo Kernel](http://ruby-doc.org/core-2.3.0/Kernel.html) .

```ruby
    print(obj, ...) → nil 
```

Imprime cada objeto en $ stdout. Los objetos que no son cadenas se convertirán llamando a su método `to_s` . El valor de retorno de la impresión es `nil` . Entonces, cuando ejecute, `print "Hello World!` En su IRB. La salida es:

```shell
    2.3.0 :001 > print "Hello World!" 
    Hello World! 
     => nil 
```

## Marcos (gemas)

Ruby tiene varios marcos (gemas) para aplicaciones de andamios rápidamente. El más popular por mucho es [Rails,](http://rubyonrails.org/) que se lanzó inicialmente en 2004. Otros marcos (gemas) para Ruby incluyen [Sinatra](http://www.sinatrarb.com/) , [Lotus](http://lotusrb.org/) y [Volt](http://voltframework.com/) . Cada una de estas opciones tiene sus pros y sus contras para el desarrollo y se adaptan a una variedad de necesidades.

## Ruby Framework para desarrollo móvil

Para escribir aplicaciones nativas multiplataforma en Ruby, RUBY MOTION se utiliza para desarrollar aplicaciones nativas multiplataforma para iOS, Android y OS X utilizando el lenguaje de programación Ruby. Más recursos aquí: http://www.rubymotion.com/

## ¿Qué después de aprender Ruby?

Cada lenguaje de programación juega un papel importante. Puede contribuir a muchos proyectos de código abierto o puede solicitar algunas de las grandes empresas después de tener un buen conocimiento de Ruby. Como muchos sitios grandes de Internet como Basecamp, Airbnb, Bleacher Report, Fab.com, Scribd, Groupon, Gumroad, Hulu, Kickstarter, Pitchfork, Sendgrid, Soundcloud, Square, Yammer, Crunchbase, Slideshare, Funny or Die, Zendesk, Github, Shopify está construido en Ruby, así que hay muchas opciones para ti. Además, muchas empresas nuevas están contratando personas que tienen habilidades en RUby on Rails, ya que no hay muchos programadores que intenten aprender a Ruby. Por lo tanto, es posible que tenga un corte claro para trabajar en una empresa de nueva creación. Entonces, Ruby es amigable para los principiantes y es un conjunto de habilidades bastante difícil para encontrar que tienes un buen número de vacantes para trabajar como desarrollador.