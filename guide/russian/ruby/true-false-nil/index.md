---
title: True, False, and Nil
localeTitle: Правда, ложь и ниль
---
# Правда, ложь и ниль

`true` , `false` и `nil` - специальные встроенные типы данных в Ruby. Каждое из этих ключевых слов оценивает объект, являющийся единственным экземпляром соответствующего класса.

```ruby
true.class 
 => TrueClass 
 false.class 
 => FalseClass 
 nil.class 
 => NilClass 
 ``` 
 
 `true` and `false` are Ruby's native boolean values. A boolean value is a value that can only be one of two possible values: true or not true. The object `true` represents truth, while `false` represents the opposite. You can assign variables to `true` / `false`, pass them to methods, and generally use them as you would other objects (such as numbers, Strings, Arrays, Hashes). 
 
 `nil` is a special value that indicates the absence of a value: it is Ruby's way of referring to "nothing". An example of when you will encounter the `nil` object is when you ask for something that doesn't exist or cannot be found: 
```

Рубин hats = \["beret", "sombrero", "beanie", "fez", "flatcap"\]

головные уборы \[0\] => "beret" # шляпа с индексом 0 шапки \[2\] => «beanie» # шляпа с индексом 2 головные уборы \[4\] => "flatcap" # шляпа с индексом 4 головные уборы \[5\] => nil # нет шапки в индексе 5, индекс 5 не содержит ничего (ноль)
```
Zero is not nothing (it's a number, which is something). Likewise, empty strings, arrays, and hashes are not nothing (they are objects, which happen to be empty). You can call the method `nil?` to check whether an object is nil. 
```

Рубин 0.nil? => false "" .nil? => false \[\] .nil? => false {} .nil? => false nil.nil? => true # из приведенного выше примера шапки \[5\] .nil? => true \`\` \`

Каждый объект Ruby имеет логическое значение, то есть он считается истинным или ложным в булевом контексте. Те, кто считается истинным в этом контексте, являются «правдивыми», а те, которые считаются ложными, «ложны». В Ruby _только_ `false` и `nil` «ложны», все остальное «правдиво».

### Другие источники

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean