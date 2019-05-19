---
title: Singleton
localeTitle: Solteirão
---
O singleton é um padrão de design que restringe a instanciação de uma classe a um objeto. É útil quando você quer dar a um único objeto a capacidade de coordenar ações em todo o seu aplicativo.

## Singleton no Android

Singleton é um padrão de design usado frequentemente no Android. É facilmente mal utilizado e por isso pode dificultar a manutenção da aplicação. É útil no Android porque eles vivem em fragmentos, atividades e rotações.

*   Singletons são frequentemente usados ​​no Android para armazenar dados temporários
*   Eles permitem que o aplicativo tenha um proprietário dos dados e fornece uma maneira fácil de passar dados entre as classes do controlador
*   Singletons são destruídos quando o Android remove seu aplicativo da memória
*   Singletons podem dificultar a unidade testar seu aplicativo

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

## Singleton em PHP

> Um construtor privado é usado para impedir a criação direta de objetos da classe. A única maneira de criar uma instância da classe é usando um método estático que cria o objeto somente se ele já não tiver sido criado.

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

## Solteirão em C

A versão mais elegante, simples e de alto desempenho do padrão usando [System.Lazy \\](http://msdn.microsoft.com/en-us/library/dd642331.aspx) tipo de .NET 4.0 ou superior.

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

## Singleton em Python3

Podemos usar metaclasse para implementar o Singleton no Python3.

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

### Testando

```python
obj_0 = MyClass() 
 obj_1 = MyClass() 
 
 In [2]: obj_0 
 Out[2]: <__main__.MyClass at 0x111130da0> 
 
 In [3]: obj_1 
 Out[3]: <__main__.MyClass at 0x111130da0> 
```

## Singleton no iOS

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

Esse código simples está todo lá para implementar um padrão de design singleton no iOS usando o Swift. Colocamos `static` porque é uma propriedade de tipo e sua funcionalidade é criar apenas uma instância de um objeto e impede que seus métodos sejam substituídos. O uso de `let` garante que o valor de sharedInstance não será alterado.

Uma coisa importante a notar é que `static` propriedades e métodos `static` são lazy initialize por padrão, o que significa que não será instanciado até que esteja sendo chamado, portanto, fornece alguma otimização.

## Mais Informações

Para mais informações, visite os seguintes links:

*   [MSDN: Implementando Singleton em C #](https://msdn.microsoft.com/en-us/library/ff650316.aspx)
*   [C # em profundidade. Implementando o padrão singleton em c #](http://csharpindepth.com/Articles/General/Singleton.aspx)