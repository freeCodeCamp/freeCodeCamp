---
title: PHP 5 Forms - Required Fields
localeTitle: Formulários PHP 5 - Campos Obrigatórios
---
Este capítulo mostra como tornar os campos de entrada necessários e criar mensagens de erro, se necessário.

### PHP - campos obrigatórios

Na tabela de regras de validação da página anterior, vemos que os campos "Nome", "E-mail" e "Sexo" são obrigatórios. Esses campos não podem estar vazios e devem ser preenchidos no formulário HTML.

| Campo | Regras de Validação | | --- | --- | Nome | Obrigatório. + Deve conter apenas letras e espaços em branco | | E-mail | Obrigatório. + Deve conter um endereço de email válido (com @ e.) | | Website | Opcional. Se presente, deve conter um URL válido | Comentário | Opcional. Campo de entrada de várias linhas (textarea) | | Gênero | Obrigatório. Deve selecionar um |

No capítulo anterior, todos os campos de entrada eram opcionais.

No código a seguir, adicionamos algumas novas variáveis: $ nameErr, $ emailErr, $ genderErr e $ websiteErr. Essas variáveis ​​de erro conterão mensagens de erro para os campos obrigatórios. Nós também adicionamos uma instrução if else para cada _variável_ $ _POST. Isso verifica se a_ variável _$_ POST está vazia (com a função PHP empty ()). Se estiver vazio, uma mensagem de erro é armazenada nas diferentes variáveis ​​de erro e, se não estiver vazia, envia os dados de entrada do usuário por meio da função test\_input ():

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

### PHP - Exibe as mensagens de erro

Em seguida, no formulário HTML, adicionamos um pequeno script após cada campo obrigatório, que gera a mensagem de erro correta, se necessário (ou seja, se o usuário tentar enviar o formulário sem preencher os campos obrigatórios):

#### Exemplo

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

A próxima etapa é validar os dados de entrada, ou seja, "O campo Nome contém apenas letras e espaços em branco?" E "O campo E-mail contém uma sintaxe de endereço de e-mail válida?" E, se preenchido, " O campo Website contém um URL válido? "