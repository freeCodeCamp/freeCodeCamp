---
title: PHP 5 Forms - Required Fields
localeTitle: PHP 5表单 - 必填字段
---
本章介绍如何使输入字段成为必需，并在需要时创建错误消息。

### PHP - 必填字段

从上一页的验证规则表中，我们看到“名称”，“电子邮件”和“性别”字段是必需的。这些字段不能为空，必须在HTML表单中填写。

|字段|验证规则| | --- | --- | |名称|必填。 +必须只包含字母和空格| |电子邮件|必填。 +必须包含有效的电子邮件地址（使用@和。）| |网站|可选。如果存在，则必须包含有效的URL | |评论|可选。多行输入字段（textarea）| |性别|必需。必须选择一个|

在上一章中，所有输入字段都是可选的。

在下面的代码中，我们添加了一些新变量：$ nameErr，$ emailErr，$ genderErr和$ websiteErr。这些错误变量将保存必填字段的错误消息。我们还为每个$ _POST变量_添加了if else语句_。这将检查$_ POST变量是否为空（使用PHP empty（）函数）。如果为空，则会在不同的错误变量中存储错误消息，如果它不为空，则通过test\_input（）函数发送用户输入数据：

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

### PHP - 显示错误消息

然后在HTML表单中，我们在每个必填字段后添加一个小脚本，如果需要，会生成正确的错误消息（即如果用户尝试提交表单而不填写必填字段）：

#### 例

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

下一步是验证输入数据，即“名称字段是否仅包含字母和空格？”和“电子邮件字段是否包含有效的电子邮件地址语法？”，如果填写完毕，“网站字段是否包含有效的URL？“