---
title: Generics
localeTitle: Genéricos
---
# Genéricos

Java Generics es una forma de usar de forma práctica colecciones y clases para tipos de datos específicos sin tener que volver a convertir los datos en el tipo de datos original. Esto evita muchos dolores de cabeza en forma de errores de tiempo de compilación y tiempo de ejecución.

En pocas palabras, Generics le permite decir explícitamente que, por ejemplo, un objeto ArrayList contiene enteros, de modo que cuando llama al método get no necesita convertir entre Object y Integer. A continuación se muestra un ejemplo de cómo habría usado un ArrayList antes de Generics.

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList classNames; 
 
  public Example() { 
    classNames = new ArrayList(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return (String) classNames.get(index); 
  } 
 } 
```

El principal problema con lo anterior es que si de algún modo un Objeto que no es de tipo Cadena se agregó a ArrayList, entonces el `getNameAtIndex(int index)` resultaría en un error de tiempo de ejecución. Para resolver esto utilizamos Genéricos.

La sintaxis para genéricos es muy simple. A continuación se muestra un ejemplo de creación de una instancia de ArrayList.

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList<String> classNames; 
 
  public Example() { 
    classNames = new ArrayList<String>(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

La sintaxis para crear su propia clase genérica sería la siguiente.

```java
import java.util.ArrayList; 
 
 public class Example <T> { 
  private ArrayList<T> classNames; 
 
  public Example() { 
    classNames = new ArrayList<T>(); 
  } 
 
  public void addName(T name) { 
    classNames.add(name); 
  } 
 
  public T getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

Tenga en cuenta que dentro de los corchetes angulares al nombrar la clase, puede asegurarse de que el tipo Genérico sea algo que usted quiere. Por ejemplo, si desea asegurarse de que el tipo pueda leerse como una forma de cadena, debería ir `<T extends String>` .

Tenga en cuenta que la letra `T` es un marcador de posición, se podría utilizar el nombre que se quiera, siempre y cuando se use el mismo durante toda la clase.

