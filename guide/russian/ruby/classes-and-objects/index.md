---
title: Classes and Objects
localeTitle: Классы и объекты
---
## Классы и объекты

### Объекты в Ruby

Давайте быстро перейдем к объектам Ruby. В реальном мире объекты могут быть любыми, включая автомобиль, компьютер или даже человека. Каждый из этих объектов имеет состояние и поведение.

Учитывая автомобиль, его состояние можно охарактеризовать как его модель, рисунок и цвет. Поведение автомобиля может быть поворотным, гудение или торможение.

Объект в Ruby имеет очень схожие характеристики. Объекты Ruby также имеют состояние и поведение. В Ruby Objects состояние хранится в переменных экземпляра, и поведение сохраняется в функциях.

### Классы в Ruby

Класс - это в основном шаблон программы. Этот шаблон определяет начальные `properties` с использованием `instance variables` . Опять же, есть также и `behaviors` определяемое в виде функций.

Новый экземпляр класса создается с использованием метода `initialize` класса.

Возьмем, к примеру, следующий пример кода класса:

```Ruby
class Car 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
```

Как вы видели, классы определяются с помощью `class` ключевого слова и блок кода класса заканчивается `end` keywork. Функция. `.initialize` - это конструктор. Когда мы создаем этот объект, мы определяем атрибуты `@make` , `@model` и `@color` со значениями, которые мы передаем в конструктор.

### Создание экземпляра класса

Теперь, чтобы создать экземпляр этого класса, вам нужно только вызвать функцию `.new` .

```Ruby
mazda3 = Car.new('Mazda', 'Mazda3', 'White') 
```

Это здорово, но иногда вам может понадобиться изменить некоторые из этих атрибутов! Большинство этих атрибутов в этом примере будут статическими. Все же, представьте, что вы решили получить новую краску. Как вы собираетесь обновлять состояние этого экземпляра объекта `Car` ?

### Изменение состояния экземпляра

К счастью, довольно просто обновить состояние объекта. Во-первых, нам нужен метод `setter` ! Ruby определяет настройки **getter** и **setter** как `attr_reader` и `attr_accessor` соответственно. Для параметров getter и setter для данного атрибута вы также можете просто использовать `attr_accessor` .

Чтобы продемонстрировать это, я изменил предыдущий объект Car с этими новыми настройками.

```Ruby
class Car 
    attr_accessor :color 
    attr_reader :make, :model 
 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
```

Теперь мы можем изменить состояние и прочитать состояние объекта.

```Ruby
irb(main):023:0> c = Car.new('Mazda', 'Mazda3', 'White') 
 => #<Car:0x00007fd3ca13fdd0 @make="Mazda", @model="Mazda3", @color="White", @speed=nil> 
 irb(main):024:0> c.color 
 => "White" 
 irb(main):025:0> c.make 
 => "Mazda" 
 irb(main):026:0> c.model 
 => "Mazda3" 
 irb(main):027:0> c.color = 'Brutal Blue' 
 => "Brutal Blue" 
 irb(main):028:0> c.make = 'Prius' 
 Traceback (most recent call last): 
        2: from /usr/local/bin/irb:11:in `<main>' 
        1: from (irb):28 
 NoMethodError (undefined method `make=' for #<Car:0x00007fd3ca13fdd0>) 
 Did you mean?  make 
```

Просматривая предыдущий вывод из `irb` , вы можете видеть, что каждая из переменных экземпляра читаема. Мы можем писать в `@color` , но в итоге мы `NoMethodError` исключение `NoMethodError` когда пытаемся написать `@make` . Это связано с тем, что `@make` определялся только с помощью `attr_reader` , поэтому `make=` не определен.

### Ресурсы

*   [Программирование / Синтаксис / Классы Ruby](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)