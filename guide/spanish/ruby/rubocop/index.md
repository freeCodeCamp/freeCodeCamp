---
title: Rubocop
localeTitle: Rubocop
---
[Rubocop](https://github.com/bbatsov/rubocop) es una herramienta de análisis estático para [Ruby](https://www.ruby-lang.org/en/) ¿Qué significa esto? Significa rubocop desea "leer" su código (en lugar de ejecutarlo, de ahí la parte "estática" del nombre), y analizarlo. Las reglas de análisis que utiliza Rubocop son de la [Guía de Ruby estilo comunidad](https://github.com/bbatsov/ruby-style-guide) .

La guía de estilo es un conjunto de sugerencias específicas sobre cómo escribir código que Es más legible, más expresivo y más convencional. Como comunidad, sería fantástico si pudiéramos leer el código de otra persona fácilmente, y ellos podrían Lee el nuestro fácilmente. Esto es lo que Rubocop nos ayuda a hacer. Este tipo de herramienta es siempre es valioso, pero es particularmente útil cuando estás aprendiendo Ruby, y puede codificar qué es _correcto_ , pero que no se adhiere a las convenciones de Ruby, o no aprovecha algunas de las características más poderosas de Ruby.

Lo más útil es que Rubocop puede reparar automáticamente muchas de las advertencias menores, como espaciado incorrecto. Esto es muy útil antes de revisar el código, ya que significa que los desarrolladores pueden enfocarse en preocupaciones de alto nivel, y no tener que perder tiempo en cuestiones de sintaxis.

## Utilizando Rubocop

### Instalación

Rubocop se entrega como una gema, por lo que en un proyecto típico que utiliza Bundler, lo agregaría a la sección de desarrollo de su `Gemfile` :
```
group :development do 
  gem rubocop 
 end 
```

Esto significa que cualquier persona que use su proyecto tendrá la misma versión de Rubocop, y todos estarán de acuerdo en cuál es la mejor práctica actual.

### Uso

Antes de cada confirmación, me gusta comprobar que mi código recién modificado cumple con El estándar de la comunidad, simplemente ejecutando:
```
rubocop 
```

Esto generará una lista de advertencias acerca de su código.

Puede ser útil pedirle más ayuda a Rubocop:
```
rubocop --extra-details --display-cop-names 
```

(Puede agregarlos a un archivo `.rubocop` para que sean predeterminados).

Muchos editores le permitirán integrar Rubocop, lo que le puede dar retroalimentación cuando estás escribiendo código.

### Problemas de fijación

Digamos que he escrito un nuevo código; Antes de que lo cometa, podría decidir Compruebe que se adhiere a las directrices:

```shell
rubocop <my new file> 
```

Puedo editar los cambios sugeridos manualmente, o puedo pedirle a Rubocop que corrija problemas menores de forma automática:
```
rubocop --auto-correct 
```

### Corriendo solo ciertos Cops

Cada directriz de la comunidad se implementa en un "policía" de Rubocop. Cuando se trabaja en un la base de código heredada puede que te encuentres inundado de advertencias cuando introduzcas Rubocop. En este caso, a menudo puede ser útil ejecutar un solo policía a través de la codebase, y verifique esos cambios antes de pasar a la siguiente guía, para ejemplo:
```
rubocop --auto-correct --only 'Layout/EmptyLineAfterMagicComment' 
```

### Integración del editor de texto

Rubocop se puede integrar con Vim, Visual Studio Code, Atom y otros editores de texto. Una lista completa se puede encontrar [aquí](https://rubocop.readthedocs.io/en/latest/integration_with_other_tools/) .