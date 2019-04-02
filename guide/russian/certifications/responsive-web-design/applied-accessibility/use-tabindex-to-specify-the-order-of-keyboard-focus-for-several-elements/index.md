---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
localeTitle: Используйте tabindex для указания порядка фокусировки клавиатуры для нескольких элементов
---
## Используйте tabindex для указания порядка фокусировки клавиатуры для нескольких элементов

Следуя инструкциям:

Добавьте атрибут tabindex, установленный в «1», к входу поиска, и атрибут tabindex, установленный в «2», к вводу отправки.

линии 16 и 17 \`\` \`CSS  
```
become: 
 
 ```css 
    <input type="search" name="search" id="search"> 
    <input type="submit" name="submit" value="Submit" id="submit"> 
```

Таким образом, элементы ввода поиска и представления входных форм являются первыми двумя элементами в порядке вкладок.