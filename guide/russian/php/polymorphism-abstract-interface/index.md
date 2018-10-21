---
title: Polymorphism with Abstract and Interface
localeTitle: Полиморфизм с абстрактным и интерфейсом
---
## Полиморфизм с абстрактным и интерфейсом

_Совместное использование и принудительное исполнение кода с помощью полиморфизма с использованием абстрактного класса и интерфейса_

Мы погрузимся глубже в объектно-ориентированное программирование и попытаемся подумать с точки зрения шаблонов проектирования для совместного использования и обеспечения соблюдения нашего кода с помощью полиморфизма.

### Абстрактный класс

Предположим, у нас есть класс Man с некоторыми свойствами ( `name` , `age` , `height` , `fav_drinks` и `fav_sports` ) и методы ( `giveFirmHandshakes` , `beStubborn` и `notPutToiletPaper` ).

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 } 
```

Нам нужно указать имя, возраст и высоту, чтобы создать экземпляр этого класса, как требуется конструктору.

```php
<?php 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 
 echo sprintf('%s - %s - %s', $jack->name, $jack->age, $jack->height); 
 // => Jack - 26 - 5 Feet 6 Inches 
```

Теперь предположим, что мы хотим добавить новый метод в этот класс, называемый isActive.

Этот метод проверяет свойство активным и возвращает соответствующее сообщение в зависимости от значения active со значением по умолчанию false. Мы можем утверждать, что это верно для тех людей, которые активны.

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
    public $active = false; 
 
    ..... 
    ..... 
 
    public function isActive() 
    { 
        if ($this->active == true) { 
            return "I am an active man."; 
        } else { 
            return "I am an idle man."; 
        } 
    } 
 } 
 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 $jack->active = true; 
 echo $jack->isActive(); 
 // => I am an active man. 
 
 $jake = new Man('Jake', '30', '6 Feet'); 
 echo "\n" . $jake->isActive(); 
 // => I am an idle man. 
```

Что делать, если человек не просто активен или не работает?

Что, если есть шкала от 1 до 4, которая измеряет, насколько активен человек (1 - холостой, 2 - слегка активный, 3 - умеренно активный, 4 - очень активный)?

У нас могут быть утверждения if..elseif ... такие как:

```php
<?php 
 
 public function isActive() 
 { 
    if ($this->active == 1) { 
        return "I am an idle man."; 
    } elseif ($this->active == 2) { 
        return "I am a lightly active man."; 
    } elseif ($this->active == 3) { 
        return "I am a moderately active man."; 
    } else { 
        return "I am a very active man."; 
    } 
 } 
```

Теперь давайте сделаем еще один шаг.

Что, если активное свойство человека - это не просто целое число (1, 2, 3, 4 и т. Д.)?

Что, если значение активного «атлетическое» или «ленивое»?

Разве мы не должны добавлять другие инструкции elseif, которые ищут совпадение с этими строками?

Для такого сценария могут использоваться абстрактные классы.

С абстрактными классами вы в основном определяете класс как абстрактный и методы, которые вы хотите применять как абстрактные, без фактического ввода кода внутри этих методов.

Затем вы создаете дочерний класс, расширяющий родительский абстрактный класс и реализующий абстрактные методы в этом дочернем классе.

Таким образом, вы будете применять все дочерние классы для определения собственной версии абстрактных методов. Давайте посмотрим, как мы можем установить наш `isActive()` как абстрактный.

# 1: Определите класс как абстрактный.

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 } 
```

# 2: Создайте абстрактный метод для метода, который вы хотите применить внутри абстрактного класса.

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 abstract public function isActive(); 
 } 
```

# 3: Создайте дочерний класс, расширяющий абстрактный класс.

```php
<?php 
 
 class AthleticMan extends Man 
 { 
 ..... 
 ..... 
 } 
```

# 4: Внедрить абстрактный метод внутри дочернего класса.

```php
<?php 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
```

# 5: Создайте дочерний класс (НЕ абстрактный класс).

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

Полное описание и код реализации абстрактного класса:

```php
<?php 
 
 abstract class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 
    abstract public function isActive(); 
 } 
 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

В этом коде вы заметите, что абстрактный абстрактный метод `isActive()` определен внутри абстрактного класса `Man` и реализуется внутри дочернего класса `AthleticMan` .

Теперь класс `Man` не может быть создан непосредственно для создания объекта.

```php
<?php 
 $ted = new Man('Ted', '30', '6 feet'); 
 echo $ted->isActive(); 
 // => Fatal error:  Uncaught Error: Cannot instantiate abstract class Man 
```

Кроме того, каждый дочерний класс абстрактного класса (класс `Man` ) должен реализовать все абстрактные методы. Отсутствие такой реализации приведет к фатальной ошибке.

```php
<?php 
 class LazyMan extends Man 
 { 
 
 } 
 
 $robert = new LazyMan('Robert', '40', '5 feet 10 inches'); 
 echo $robert->isActive(); 
 // => Fatal error:  Class LazyMan contains 1 abstract method 
 // => and must therefore be declared abstract or implement 
 // => the remaining methods (Man::isActive) 
```

Используя абстрактные классы, вы можете применять определенные методы, которые будут реализованы индивидуально дочерними классами.

### Интерфейс

Существует еще одна концепция объектно-ориентированного программирования, которая тесно связана с абстрактными классами, называемыми интерфейсом.

Единственная разница между абстрактными классами и интерфейсами заключается в том, что в абстрактных классах вы можете иметь сочетание определенных методов ( `giveFirmHandshakes()` , `isStubborn()` и т. Д.) И абстрактных методов ( `isActive()` ) внутри родительского класса, тогда как в интерфейсах, вы можете определять методы (не реализуйте) внутри родительского класса.

Давайте посмотрим, как мы можем преобразовать абстрактный класс Man выше в интерфейс.

# 1: Определите интерфейс со всеми методами (используйте интерфейс вместо класса).

```php
<?php 
 interface Man 
 { 
    public function __construct($name, $age, $height); 
 
    public function giveFirmHandshakes(); 
 
    public function beStubborn(); 
 
    public function notPutToiletPaper(); 
 
    public function isActive(); 
 } 
```

# 2: Создайте класс, реализующий интерфейс (используйте инструменты вместо расширений). Этот класс должен реализовать ВСЕ методы, определенные внутри интерфейса, включая метод конструктора.

```php
<?php 
 class AthleticMan implements Man 
 { 
    public $name; 
    public $age; 
    public $height; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
```

# 3: Создайте исполняемый класс (AthleticMan)

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

С интерфейсами вам нужно иметь в виду, что:

*   Методы не могут быть реализованы внутри интерфейса.
    
*   Переменные (свойства) не могут быть определены внутри интерфейса.
    
*   Все методы, определенные внутри интерфейса, должны быть реализованы в классе child (implementation).
    
*   Все необходимые переменные должны быть определены внутри дочернего класса.
    
*   Интерфейс Man наставляет свои классы реализации для реализации всех методов в интерфейсе.
    

Итак, что такое использование интерфейсов?

Разве мы не можем просто создать новый класс AthleticMan и создать все методы вместо реализации интерфейса?

Именно здесь _разрабатываются шаблоны проектирования_ .

Интерфейсы используются, когда есть базовый класс ( `Man` ), который хочет заставить вас делать что-либо (создайте объект, giveFirmHandshakes, beStubborn, notPutToiletPaper и проверьте, активны ли вы), но не хочет точно сказать вам, как это сделать ,

Вы можете просто начать реализацию классов с реализацией, как вы сочтете нужным.

Пока все методы реализованы, интерфейсу `Man` все равно, как это сделать.

Мы рассмотрели, как и когда использовать абстрактные классы и интерфейсы в PHP. Использование этих концепций ООП для классов с разной функциональностью, использующих один и тот же базовый «план» (абстрактный класс или интерфейс), называется полиморфизмом.