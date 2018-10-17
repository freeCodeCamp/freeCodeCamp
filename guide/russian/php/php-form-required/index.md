---
title: PHP 5 Forms - Required Fields
localeTitle: Формы PHP 5 - обязательные поля
---
В этой главе показано, как внести необходимые поля ввода и при необходимости создать сообщения об ошибках.

### PHP - обязательные поля

Из таблицы правил проверки на предыдущей странице мы видим, что необходимы поля «Имя», «Электронная почта» и «Пол». Эти поля не могут быть пустыми и должны быть заполнены в HTML-форме.

| Поле | Правила валидации | | --- | --- | | Имя | Требуется. + Должен содержать только буквы и пробелы | | E-mail | Требуется. + Должен содержать действительный адрес электронной почты (с @ и.) | | Веб-сайт | Дополнительно. Если он присутствует, он должен содержать действительный URL | | Комментарий | Необязательно. Многострочное поле ввода (textarea) | | Пол. Требуется. Должен выбрать один |

В предыдущей главе все поля ввода были необязательными.

В следующем коде мы добавили несколько новых переменных: $ nameErr, $ emailErr, $ genderErr и $ websiteErr. Эти переменные ошибки будут содержать сообщения об ошибках для необходимых полей. Мы также добавили инструкцию if else для каждой _переменной POST. Это проверяет, является ли_ переменная _$_ POST пустой (с функцией пустого () PHP). Если он пуст, сообщение об ошибке сохраняется в разных переменных ошибки, и если оно не пустое, оно отправляет пользовательские входные данные через функцию test\_input ():

```php
<?php 
 // define variables and set to empty values 
 $nameErr = $emailErr = $genderErr = $websiteErr = ""; 
 $name = $email = $gender = $comment = $website = ""; 
 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  if (empty($_POST["name"])) { 
    $nameErr = "Name is required"; 
  } else { 
    $name = test_input($_POST["name"]); 
  } 
 
  if (empty($_POST["email"])) { 
    $emailErr = "Email is required"; 
  } else { 
    $email = test_input($_POST["email"]); 
  } 
 
  if (empty($_POST["website"])) { 
    $website = ""; 
  } else { 
    $website = test_input($_POST["website"]); 
  } 
 
  if (empty($_POST["comment"])) { 
    $comment = ""; 
  } else { 
    $comment = test_input($_POST["comment"]); 
  } 
 
  if (empty($_POST["gender"])) { 
    $genderErr = "Gender is required"; 
  } else { 
    $gender = test_input($_POST["gender"]); 
  } 
 } 
 ?> 
```

### PHP - отображение сообщений об ошибках

Затем в форме HTML мы добавляем небольшой скрипт после каждого обязательного поля, которое при необходимости генерирует правильное сообщение об ошибке (то есть, если пользователь пытается отправить форму без заполнения необходимых полей):

#### пример

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
 
 Name: <input type="text" name="name"> 
 <span class="error">* <?php echo $nameErr;?></span> 
 <br><br> 
 E-mail: 
 <input type="text" name="email"> 
 <span class="error">* <?php echo $emailErr;?></span> 
 <br><br> 
 Website: 
 <input type="text" name="website"> 
 <span class="error"><?php echo $websiteErr;?></span> 
 <br><br> 
 Comment: <textarea name="comment" rows="5" cols="40"></textarea> 
 <br><br> 
 Gender: 
 <input type="radio" name="gender" value="female">Female 
 <input type="radio" name="gender" value="male">Male 
 <span class="error">* <?php echo $genderErr;?></span> 
 <br><br> 
 <input type="submit" name="submit" value="Submit"> 
 
 </form> 
```

Следующим шагом является проверка входных данных, а именно: «В поле« Имя »содержатся только буквы и пробелы?» И «Поле электронной почты содержит правильный синтаксис адреса электронной почты?», И если он заполнен, Имеется ли в поле «Веб-сайт» действительный URL-адрес? ».