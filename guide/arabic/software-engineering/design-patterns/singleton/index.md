---
title: Singleton
localeTitle: الورقة المفردة
---
المفرد هو نمط تصميم يقيد إنشاء مثيل لفئة إلى كائن واحد. من المفيد عندما تريد إعطاء كائن واحد فقط القدرة على تنسيق الإجراءات عبر التطبيق الخاص بك.

## سينجلتون في Android

Singleton هو نمط تصميم غالبًا ما يستخدم في Android. يمكن إساءة استخدامه بسهولة وبالتالي يمكن أن يصعب الحفاظ على التطبيق. وهي مفيدة في Android لأنها تعيش عبر الأجزاء والأنشطة والدوران.

*   غالبًا ما يتم استخدام Singletons في Android لتخزين البيانات المؤقتة
*   أنها تسمح للتطبيق أن يكون لديك مالك واحد للبيانات ويوفر طريقة سهلة لتمرير البيانات بين فئات وحدة التحكم
*   يتم إتلاف Singletons عندما يزيل Android تطبيقك من الذاكرة
*   يمكن أن تجعل Singletons من الصعب اختبار وحدة تطبيقك

 `public class DataStore { 
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
` 

## سينجلتون في PHP

> يتم استخدام منشئ خاص لمنع الإنشاء المباشر للكائنات من الفئة. الطريقة الوحيدة لإنشاء مثيل من الفئة هي باستخدام أسلوب ثابت يقوم بإنشاء الكائن فقط إذا لم يكن قد تم إنشاؤه بالفعل.

 `Class Singleton { 
 
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
` 

## سينجلتون في C

النسخة الأكثر أناقة وبسيطة وعالية الأداء من النمط باستخدام [System.Lazy \\](http://msdn.microsoft.com/en-us/library/dd642331.aspx) اكتب من .NET 4.0 أو أعلى.

 `public sealed class Singleton 
 { 
    private static readonly Lazy<Singleton> lazy = new Lazy<Singleton>(() => new Singleton()); 
 
    public static Singleton Instance { get { return lazy.Value; } } 
 
    private Singleton() 
    { 
    } 
 } 
` 

## سينجلتون في Python3

يمكننا استخدام metaclass لتطبيق Singleton في Python3.

 `class Singleton(type): 
    # Mapping from a class to its singleton instance 
    _instances = {} 
 
    def __call__(cls, *args, **kwargs): 
        if cls not in Singleton._instances: 
            Singleton._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs) 
 
        return Singleton._instances[cls] 
 
 
 class MyClass(metaclass=Singleton): 
    pass 
` 

### اختبارات

 `obj_0 = MyClass() 
 obj_1 = MyClass() 
 
 In [2]: obj_0 
 Out[2]: <__main__.MyClass at 0x111130da0> 
 
 In [3]: obj_1 
 Out[3]: <__main__.MyClass at 0x111130da0> 
` 

## سينجلتون في دائرة الرقابة الداخلية

 `class Singleton { 
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
` 

هذا الرمز البسيط موجود بالكامل لتنفيذ نمط تصميم مفرد في نظام iOS باستخدام Swift. نضع `static` نظرًا لأنه خاصية كتابة ، وتتمثل وظيفته في إنشاء مثيل واحد فقط لكائن ما ومنع طريقته من التجاوز. استخدام `let` سوف يضمن أن قيمة sharedInstance لن تتغير.

من المهم ملاحظة أن الخصائص والأساليب `static` هي تهيئة بطيئة افتراضياً بمعنى أنه لن يتم إنشاء مثيل لها حتى يتم استدعاؤها ، وبالتالي توفر بعض التحسين.

## معلومات اكثر

لمزيد من المعلومات ، قم بزيارة الروابط التالية:

*   [MSDN: تطبيق Singleton في C #](https://msdn.microsoft.com/en-us/library/ff650316.aspx)
*   [C # في العمق. تنفيذ نمط Singleton في C #](http://csharpindepth.com/Articles/General/Singleton.aspx)