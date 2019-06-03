---
title: Singleton
localeTitle: Semifallo
---
El singleton es un patrón de diseño que restringe la creación de instancias de una clase a un objeto. Es útil cuando quiere dar a un solo objeto la capacidad de coordinar acciones en su aplicación.

## Singleton en Android

Singleton es un patrón de diseño utilizado a menudo en Android. Es fácilmente mal utilizado y, por lo tanto, puede hacer que la aplicación sea difícil de mantener. Es útil en Android porque viven a través de fragmentos, actividades y rotaciones.

*   Singletons se utilizan a menudo en Android para almacenar datos temporales
*   Permiten que la aplicación tenga un propietario de los datos y proporciona una manera fácil de pasar datos entre clases de controlador.
*   Los Singletons se destruyen cuando Android elimina tu aplicación de la memoria.
*   Singletons puede dificultar la prueba unitaria de su aplicación

```java
public class DataStore { 
  private static DataStore sDataStore; 
  private List<Data> mData; 
 
  public static DataStore get(Context context) { 
    if (sDataStore == null) { 
      sDataStore = new DataStore(context); 
    } 
    return sDataStore; 
  } 
 
  // Make constructor private to prevent other classes from creating a DataStore instance 
  private DataStore(Context context) { 
    mData = new ArrayList<>(); 
  } 
 
  // The only way for other classes to get data from DataStore 
  public List<Data> getData() { 
    return mData; 
  } 
 } 
```

## Singleton en PHP

> Se utiliza un constructor privado para evitar la creación directa de objetos de la clase. La única forma de crear una instancia de la clase es mediante el uso de un método estático que crea el objeto solo si ya no se creó.

```php
Class Singleton { 
 
  // Hold the class instance 
  private static $instance = null; 
 
  /** 
  * The constructor is private 
  * it is ensure the class can be initialized only from itself 
  */ 
  private function __construct(){} 
 
  /** 
  * Return the singleton instance of this class 
  * 
  * @return Singleton 
  */ 
  public static function getInstance() 
  { 
    if (self::$instance == null) 
    { 
      self::$instance = new Singleton(); 
    } 
 
    return self::$instance; 
  } 
 
 } 
 
 $obj1 = Singleton::getInstance(); 
 $obj2 = Singleton::getInstance(); 
```

## Singleton en C

La versión más elegante, simple y de alto rendimiento del patrón usando [System.Lazy \\](http://msdn.microsoft.com/en-us/library/dd642331.aspx) escriba desde .NET 4.0 o superior.

```csharp
public sealed class Singleton 
 { 
    private static readonly Lazy<Singleton> lazy = new Lazy<Singleton>(() => new Singleton()); 
 
    public static Singleton Instance { get { return lazy.Value; } } 
 
    private Singleton() 
    { 
    } 
 } 
```

## Singleton en Python3

Podemos usar metaclase para implementar Singleton en Python3.

```python
class Singleton(type): 
    # Mapping from a class to its singleton instance 
    _instances = {} 
 
    def __call__(cls, *args, **kwargs): 
        if cls not in Singleton._instances: 
            Singleton._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs) 
 
        return Singleton._instances[cls] 
 
 
 class MyClass(metaclass=Singleton): 
    pass 
```

### Pruebas

```python
obj_0 = MyClass() 
 obj_1 = MyClass() 
 
 In [2]: obj_0 
 Out[2]: <__main__.MyClass at 0x111130da0> 
 
 In [3]: obj_1 
 Out[3]: <__main__.MyClass at 0x111130da0> 
```

## Singleton en iOS

```swift
class Singleton { 
  static let sharedInstance = Singleton() 
 
    init() { 
        print("Singleton has been initialized") 
    } 
 
    //write your functions here 
    func sampleFunction() { 
    } 
 } 
 
 //Uses 
 Singleton.sharedInstance.sampleFunction() 
```

Este código simple es todo lo que hay para implementar un patrón de diseño de singleton en iOS usando Swift. Ponemos `static` porque es una propiedad de tipo, y su funcionalidad es crear solo una instancia de un objeto e impide que sus métodos se sobrescriban. El uso de `let` garantizará que el valor de sharedInstance no cambie.

Es importante tener en cuenta que las propiedades y los métodos `static` se inician de forma perezosa por defecto, lo que significa que no se creará una instancia hasta que se llame, por lo tanto, proporciona cierta optimización.

## Más información

Para más información, visite los siguientes enlaces:

*   [MSDN: Implementando Singleton en C #](https://msdn.microsoft.com/en-us/library/ff650316.aspx)
*   [C # en profundidad Implementando el patrón Singleton en C #](http://csharpindepth.com/Articles/General/Singleton.aspx)