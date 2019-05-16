---
title: Singleton
localeTitle: 独生子
---
单例是一种设计模式，它将类的实例化限制为一个对象。当您只想让一个对象能够协调整个应用程序中的操作时，它非常有用。

## Android中的Singleton

Singleton是Android中常用的设计模式。它容易被滥用，因此可能导致应用程序难以维护。它在Android中很有用，因为它们存在于片段，活动和旋转中。

*   单身人士经常在Android中用来存储临时数据
*   它们允许应用程序拥有数据的所有者，并提供在控制器类之间传递数据的简便方法
*   当Android从内存中删除您的应用时，单身人士会被销毁
*   单身人士可能难以对您的应用进行单元测试

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

## PHP中的单身人士

> 私有构造函数用于防止从类中直接创建对象。 从类创建实例的唯一方法是使用静态方法，该方法仅在尚未创建对象时才创建对象。

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

## 单身在C中

使用[System.Lazy \\](http://msdn.microsoft.com/en-us/library/dd642331.aspx)的最优雅，简单和高性能的模式版本从.NET 4.0或更高版本输入。

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

## Python3中的Singleton

我们可以使用元类在Python3中实现Singleton。

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

### 测试

```python
obj_0 = MyClass() 
 obj_1 = MyClass() 
 
 In [2]: obj_0 
 Out[2]: <__main__.MyClass at 0x111130da0> 
 
 In [3]: obj_1 
 Out[3]: <__main__.MyClass at 0x111130da0> 
```

## iOS中的Singleton

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

这个简单的代码可以在iOS中使用Swift实现单例设计模式。我们把`static`因为它是一个类型属性，它的功能是只创建一个对象实例并防止其方法被覆盖。使用`let`将保证sharedInstance的值不会改变。

需要注意的一点是， `static`属性和方法默认是惰性初始化，这意味着它在被调用之前不会被实例化，因此它提供了一些优化。

## 更多信息

有关更多信息，请访问以下链接：

*   [MSDN：在C＃中实现Singleton](https://msdn.microsoft.com/en-us/library/ff650316.aspx)
*   [C＃深度。在C＃中实现Singleton模式](http://csharpindepth.com/Articles/General/Singleton.aspx)