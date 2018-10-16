---
title: Override All Other Styles by using Important
localeTitle: Переопределите все остальные стили, используя важные
---
## Переопределите все остальные стили, используя важные

Вы можете переопределить все другие стили в CSS, используя `!important` .

Это переопределение считается самым важным и имеет приоритет над остальными.

Список наиболее важных для наименее важных выглядит следующим образом: \`\` \`

1.  важно (! важно)
2.  встроенные стили
3.  идентификационные объявления
4.  объявления класса
```
Here is an example of how to write/apply !important: 
```

CSS цвет: черный! важно;
```
To apply these in context and see `!important` take precedence, here is an example: 
```

HTML

body { font-family: Helvetica; color: purple; } #violet-text { color: violet; } .black-text { color: black !important; } .blue-text { color: blue; }

# Пример текста

\`\` \`

Этот результат завершится тем, что в `Example Text` будет черным из-за `!important` добавления в `color: black` .