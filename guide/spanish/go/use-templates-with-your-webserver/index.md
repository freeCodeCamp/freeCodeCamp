---
title: Using templates with your web server
localeTitle: Usando plantillas con su servidor web
---Cuando tenga un servidor web, es posible que desee insertar datos en sus respuestas. Veamos un código:

```go
package main 
 
 import ( 
  "net/http" 
  "html/template" 
 ) 
 
 type PAGE struct { 
  NAME string 
 } 
 
 var page PAGE 
 
 func main() { 
  page.NAME = "Mark" 
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
```

Ahora inicie este programa y navegue por su navegador para:
```
http://localhost:8080/ 
```

La respuesta será:
```
Hello Mark! 
```

Pero, ¿cómo funciona esto y qué hace el código? Bueno, en primer lugar importamos el paquete `net/http` para que podamos ejecutar un servidor web. Luego importamos el paquete `html/template` . Esto habilita una característica llamada plantillas; Y ahí es donde se trata este artículo.

También creamos un tipo llamado `PAGE` , que tiene un campo llamado `NAME` como `string` tipo. También creamos una variable global llamada `page` de tipo `PAGE` , la estructura que acabamos de crear. En la función `main` le damos al campo `NAME` de la `page` un valor de `Mark` - mi nombre, ¡pero no dude en usar su propio nombre!

La función `servePage` es un poco difícil al principio. Vamos a desarmarlo:

```go
func servePage(writer http.ResponseWriter, reqest *http.Request) { 
 
  // 1. Creating a template 
  template := template.New("sayHello") 
 
  // 2. Filling the template 
  template, _ = template.Parse("Hello {{.NAME}}!") 
 
  // 3. Executing the template 
  template.Execute(writer, page) 
 } 
```

Qué hacemos aquí? Veamos paso a paso:

1.  Creamos una _plantilla_ . Debe ingresar un nombre, pero en realidad no importa el nombre que elija. Aquí elegí decir `sayHello` .
2.  Luego llenamos la plantilla con algún texto. Por favor tome nota de la `{{.NAME}}` .
3.  Finalmente, _ejecutamos_ la plantilla. Esto significa que la plantilla se completa y se envía al cliente.

Pero, ¿cómo vamos de `{{.NAME}}` a `Mark` ? Bueno, ¿recuerdas que usamos la variable de `page` como un parámetro para el método `Execute` ? Este método mira los datos en la plantilla y ve `{{.NAME}}` . El `.NAME` indica que debe buscar un campo llamado `NAME` dentro de la variable que se especificó como un parámetro cuando se llamó a `Execute` . En este caso, encuentra ese campo y toma nota de que el valor es `Mark` . `{{` Y `}}` le dicen a `Execute` que debe reemplazar `{{.NAME}}` con el valor que encontró. Así que el resultado final se convertirá en `Hello Mark!` .

Puedes tener múltiples campos y múltiples `{{.XXX}}` . Esta es una manera realmente fácil de insertar datos en las respuestas, ¡y ahora sabe cómo crear una plantilla en Go!