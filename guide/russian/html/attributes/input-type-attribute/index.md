---
title: Input Type Attribute
localeTitle: Атрибут типа ввода
---
## Атрибут типа ввода

Атрибут типа ввода определяет тип ввода, который пользователь должен ввести в вашу форму.

### текст

Одна строка текста.

```html

    <form> 
      <label for="login">Login:</label> 
      <input type="text" name="login"> 
    </form> 
```

### пароль

Одна строка текста. Текст автоматически отображается как серия точек или звездочек (зависит от браузера и ОС).

```html

    <form> 
      <label for="password">Password:</label> 
      <input type="password" name="password"> 
    </form> 
```

### Эл. адрес

HTML проверяет, соответствует ли входной адрес формату адреса электронной почты (что-то @ что-то).

```html

    <form> 
      <label for="email">E-mail address:</label> 
      <input type="email" name="email"> 
    </form> 
```

### номер

Разрешить только числовой ввод. Вы также можете указать допустимое значение min и max. В приведенном ниже примере проверьте, что входной сигнал имеет номер от 1 до 120.

```html

    <form> 
      <label for="age">Age:</label> 
      <input type="number" name="age" min="1" max="120"> 
    </form> 
```

### радио

Пользователь может выбрать только один вариант. Группа переключателей должна иметь одинаковый атрибут имени. Вы можете автоматически выбрать один вариант с помощью `checked` свойства (в примере ниже значения Blue выбрано).

```html

    <form> 
      <label><input type="radio" name="color" value="red">Red</label> 
      <label><input type="radio" name="color" value="green">Green</label> 
      <label><input type="radio" name="color" value="blue" checked>Blue</label> 
    </form> 
```

### флажок

Пользователь может выбрать ноль или более параметров из группы флажков. Вы также можете использовать `checked` свойство для одного или нескольких параметров.

```html

    <form> 
      <label><input type="checkbox" name="lang" value="english">english</label> 
      <label><input type="checkbox" name="lang" value="spanish">spanish</label> 
      <label><input type="checkbox" name="lang" value="french">french</label> 
    </form> 
```

### кнопка

Ввод отображается как кнопка, текст, который должен отображаться на кнопке, находится в атрибуте value.

```html

    <form> 
      <input type="button" value="click here"> 
    </form> 
```

### Отправить

Отображает кнопку отправки. Текст, который должен отображаться на кнопке, находится в атрибуте value. После нажатия на кнопку HTML выполняет проверку, и если она проходит, форма отправляется.

```html

    <form> 
      <input type="submit" value="SUBMIT"> 
    </form> 
```

### сброс

Отображает кнопку сброса. Текст, который должен отображаться на кнопке, находится в атрибуте value. После нажатия кнопки все значения из формы удаляются.

```html

    <form> 
      <input type="reset" value="CANCEL"> 
    </form> 
```

Есть больше типов элементов. Для получения дополнительной информации посетите MSDN или w3schools .