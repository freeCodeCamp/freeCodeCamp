---
title: Singleton
localeTitle: одиночка
---
Синглтон - это шаблон проектирования, который ограничивает экземпляр класса одним объектом. Это полезно, когда вы хотите дать только одному объекту возможность координировать действия в вашем приложении.

## Синглтон в Android

Синглтон - шаблон дизайна, часто используемый в Android. Это легко использовать неправильно, и поэтому приложение может быть трудно поддерживать. Это полезно в Android, потому что они живут через фрагменты, действия и вращения.

*   Синглтоны часто используются в Android для хранения временных данных
*   Они позволяют приложению иметь одного владельца данных и обеспечивают простой способ передачи данных между классами контроллера
*   Синглтоны уничтожаются, когда Android удаляет ваше приложение из памяти
*   Синглтоны могут затруднить модульное тестирование вашего приложения

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

## Синглтон в PHP

> Частный конструктор используется для предотвращения прямого создания объектов из класса. Единственный способ создать экземпляр из класса - использовать статический метод, который создает объект, только если он еще не был создан.

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

## Синглтон в C

Самая элегантная, простая и высокоэффективная версия шаблона с использованием [System.Lazy \\](http://msdn.microsoft.com/en-us/library/dd642331.aspx) типа от .NET 4.0 или выше.

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

## Синглтон в Python3

Мы можем использовать метакласс для реализации Singleton в Python3.

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

### тестирование

```python
obj_0 = MyClass() 
 obj_1 = MyClass() 
 
 In [2]: obj_0 
 Out[2]: <__main__.MyClass at 0x111130da0> 
 
 In [3]: obj_1 
 Out[3]: <__main__.MyClass at 0x111130da0> 
```

## Синглтон в iOS

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

Этот простой код предназначен для реализации одноэлементного дизайна в iOS с использованием Swift. Мы ставим `static` потому что это свойство типа, и его функциональность заключается в создании только одного экземпляра объекта и предотвращении его переопределения. Использование `let` гарантирует, что значение sharedInstance не изменится.

Важно отметить, что `static` свойства и методы инициализируются по умолчанию, что означает, что он не будет создан до его вызова, поэтому он обеспечивает некоторую оптимизацию.

## Больше информации

Для получения дополнительной информации посетите следующие ссылки:

*   [MSDN: реализация Singleton в C #](https://msdn.microsoft.com/en-us/library/ff650316.aspx)
*   [C # в глубину. Внедрение шаблона Singleton в C #](http://csharpindepth.com/Articles/General/Singleton.aspx)