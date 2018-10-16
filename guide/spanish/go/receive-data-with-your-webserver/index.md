---
title: Receive data with your web server
localeTitle: Recibe datos con tu servidor web
---Una vez que haya configurado su servidor web y se haya asegurado de que pueda ofrecer algún contenido útil, es posible que desee hacerlo más interactivo permitiéndole aceptar datos. Empecemos escribiendo un código:

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
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  page.NAME = request.FormValue("name") 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
```

Vamos a romper este código. En primer lugar, comenzamos importando `net/http` para el servidor web y `html/template` para las plantillas. Este artículo asume que ya sabes cómo crear una plantilla en Go. Si aún no lo sabe, primero debe leer el artículo sobre plantillas.

Luego creamos un tipo llamado `PAGE` , con una ranura llamada `NAME` (esta es una `string` ). También creamos una variable global llamada `page` que es de tipo `PAGE` : la estructura que acabamos de crear.

En la función `servePage` hay una cosa que es realmente importante para este artículo: el método `FormValue` que ejecutamos en la `request` .

Antes de continuar, primero debe saber cómo se `URL` una `URL` . Tomemos como ejemplo la siguiente `URL` :
```
https://google.com/search?q=free+code+camp 
```

Si ingresa la `URL` anterior en su navegador, realizará una búsqueda en Google para `free code camp` . La `URL` está construida de esta manera:

1.  `https://` - este es el protocolo
2.  `google.com` : este es el nombre de dominio y el puerto (en este caso no se menciona ningún puerto, por lo que el navegador usa el puerto predeterminado para el protocolo)
3.  `/search` - este es el camino
4.  `q=free+code+camp` - esta es la `query`

La consulta es la parte de la que hablamos en este artículo. El servidor de Google ve esta `URL` y debido al atributo `q` en la consulta y al valor de `q` , en este caso `free+code+camp` , sabe dónde debe buscar.

También podemos aplicar esto a nuestro servidor. Vamos a encender el programa y navegar por el navegador para:
```
http://localhost:8080/?name=world 
```

La respuesta será:
```
Hello world! 
```

¿Como funciona esto? Bueno, le dimos a `FormValue` un parámetro de `name` . De esta manera, `FormValue` sabe que queremos el valor del atributo de `name` en la consulta. En este caso eso es `world` , por lo que el método devuelve `world` . Esa cadena se coloca en la variable de `page` y la plantilla hace el resto.

Esta es, por supuesto, una implementación muy simple de esta función, pero podría hacer muchas cosas con ella. Por ejemplo: podría aceptar direcciones de correo electrónico y dejar que el programa las almacene en un archivo.