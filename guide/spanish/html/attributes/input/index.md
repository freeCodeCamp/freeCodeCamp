---
title: Input
localeTitle: Entrada
---
## Entrada

La etiqueta HTML `<input>` se usa dentro de un formulario para declarar un elemento de entrada. Permite al usuario introducir datos.

## Ejemplo

```html

<!DOCTYPE html> 
 <html> 
 
   <head> 
      <title>HTML input Tag</title> 
   </head> 
 
   <body> 
      <form action = "/cgi-bin/hello_get.cgi" method = "get"> 
         First name: 
            <input type = "text" name = "first_name" value = "" maxlength = "100" /> 
            <br /> 
 
         Last name: 
            <input type = "text" name = "last_name" value = "" maxlength = "100" /> 
         <input type = "submit" value = "Submit" /> 
      </form> 
   </body> 
 
 </html> 
```

En el ejemplo anterior, hay dos campos de entrada que le piden al usuario que ingrese su nombre y apellido de acuerdo con las etiquetas especificadas. Enviar `<button type="submit">` es otro tipo de entrada que se utiliza para incluir los datos ingresados ​​por el usuario en el formulario y enviarlos a otra ubicación especificada en el código.

#### Más información:

[Youtube](https://www.youtube.com/watch?v=qJ9ZkxmVf5s)

## Entrada

La etiqueta HTML `<input>` es de muchos tipos para ingresar datos. Algunos de ellos son: Tipo: Texto (este es el tipo más común que se utiliza para crear cuadros de texto generales) Tipo: Contraseña (este tipo se utiliza para la creación de contraseñas de contraseña) Tipo: Oculto (este es un tipo especial de entrada que no se muestra al usuario pero se usa para pasar información de una página a otra mientras se usa la etiqueta)