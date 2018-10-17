---
title: nameof Expressions
localeTitle: nombre de Expresiones
---
# nombre de Expresiones

A veces, se necesita el nombre de cadena de una variable, tipo o miembro para cosas como generar una excepción, registrar o activar eventos modificados de propiedad. Antes de C # 6.0, puede usar un literal de cadena para tales propósitos.

# #
```
public void ProcessStudent(Student student) 
 { 
    if (student == null) throw new ArgumentNullException("student"); 
 } 
```

Sin embargo, si se cambia el nombre del parámetro de estudiante, debe recordar modificar también la cadena literal. Ahora, con el nombre de las expresiones, no tiene que usar literales de cadena y el compilador podrá advertirle si está usando un nombre incorrecto.

# #
```
public void ProcessStudent(Student student) 
 { 
    if (student == null) throw new ArgumentNullException(nameof(student)); 
 } 
```

Algunos ejemplos de dónde pueden ser útiles las expresiones de nombres incluyen:

*   Lanzar excepciones durante la validación de parámetros.
*   Pasar un nombre de acción al configurar enlaces de acción MVC
*   Necesidad de pasar el nombre de una propiedad al activar un evento de propiedad modificada en una clase que implementa INotifyPropertyChanged
*   Pasar el nombre de una propiedad al registrar una propiedad de dependencia XAML
*   Incluyendo una variable, tipo o nombre de miembro al registrar

Se debe tener en cuenta que si proporciona nameof con un nombre calificado, el compilador generará una cadena para el nombre más a la derecha.