---
title: Managing Ruby versions
localeTitle: Manejando versiones de ruby
---
## Ruby ha cambiado con el tiempo

Ruby ha estado en constante desarrollo desde la década de 1990, y como muchos otros idiomas, ha habido cambios de sintaxis en las versiones, por lo que es importante ser claro sobre qué versión de Ruby espera tu código.

Probablemente el cambio más visible vino con Ruby 1.9; previamente escribimos hashes como este:

```ruby
  { :one => 1, :two => 2, :three => 3 } 
```

Este uso del operador 'hashrocket' ( `=>` ) era tan común, que Ruby 1.9 proporcionó una taquigrafía:
```
  { one: 1, two: 2, three: 3 } 
```

Este código anterior se ejecuta en cualquier versión, pero la sintaxis más reciente solo se ejecutará en Ruby 1.9+.

## ¿Cómo causa esto problemas?

Por ejemplo, podría haber decidido usar una gema que se basa internamente en Ruby 1.9 características; esto significa que su proyecto ahora también se basa en Ruby 1.9 caracteristicas.

Si no especifica qué versión de Ruby necesita su proyecto, puede ser muy confuso cuando el código funciona en una máquina, pero no en otra.

Como con la mayoría de los idiomas, se considera una buena práctica especificar la versión de Ruby que tu código espera. Esto hace que sea mucho más fácil gestionar múltiples proyectos en su máquina de desarrollo, cada uno esperando una versión diferente de Rubí.

## ¿Cómo especifico mi versión de Ruby?

Hay un par de herramientas que son populares para esto, pero ambas han acordado compartir un archivo común. Muchos proyectos de Ruby (o Rails) incluirán un simple `.ruby-version` , que simplemente especifica un número de versión, _por ejemplo_ :
```
2.4.2 
```

Las herramientas más populares para ayudarte a administrar tu versión de Ruby son:

*   [Ruby Version Manager (RVM)](https://rvm.io)
*   [rbenv](https://github.com/rbenv/rbenv)

Echemos un vistazo a RVM.

### Utilizando RVM

RVM se instala normalmente ( [enlace](https://rvm.io) ) en un Linux, Unix o MacOS máquina, y es muy conveniente ya que se engancha en el `cd` ( `c` hange `d` irectory) comando para que cuando te mueves a un nuevo proyecto, se `.ruby-version` tu `.ruby-version` automáticamente, y eres cambiado automáticamente a la versión correcta de Ruby antes de empezar a trabajar

Por ejemplo, podría tener esta secuencia:

```shell
% cd ~/projects/older-project 
 % ruby --version 
 
 ruby 2.3.5p376 (2017-09-14 revision 59905) [x86_64-darwin16] 
 
 % cd ~/projects/newer-project 
 % ruby --version 
 
 ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin16] 
```

(Estos ejemplos son de una máquina MacOS)