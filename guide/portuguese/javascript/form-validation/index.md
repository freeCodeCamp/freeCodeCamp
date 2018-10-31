---
title: Form Validation
localeTitle: Validação de Formulário
---
## Validação de Formulário

Validação de formulário normalmente usada para ocorrer no servidor, após o cliente ter inserido todos os dados necessários e, em seguida, pressionado o botão Enviar. Se os dados inserido por um cliente estava incorreto ou estava simplesmente ausente, o servidor teria que enviar todos os dados de volta para o cliente e solicitar que o formulário fosse reenviada com a informação correta. Este foi realmente um processo demorado que costumava sobrecarregar o servidor.

O JavaScript fornece uma maneira de validar os dados do formulário no computador do cliente antes de enviá-lo ao servidor da web. A validação de formulários geralmente executa dois funções:

### Validação Básica

Em primeiro lugar, o formulário deve ser verificado para garantir que todos os campos obrigatórios sejam preenchidos. Isso exigiria apenas um loop em cada campo no formulário e verifique os dados.

### Validação de formato de dados

Em segundo lugar, os dados inseridos devem ser verificados quanto à forma e valor corretos. Seu código deve incluir lógica apropriada para testar a exatidão dos dados.

#### Exemplo:

```html

<html> 
 
   <head> 
      <title>Form Validation</title> 
 
      <script type="text/javascript"> 
         <!-- 
            // Form validation code will come here. 
         //--> 
      </script> 
 
   </head> 
 
   <body> 
      <form action="/cgi-bin/test.cgi" name="myForm" onsubmit="return(validate());"> 
         <table cellspacing="2" cellpadding="2" border="1"> 
 
            <tr> 
               <td align="right">Name</td> 
               <td><input type="text" name="Name" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">EMail</td> 
               <td><input type="text" name="EMail" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">Zip Code</td> 
               <td><input type="text" name="Zip" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">Country</td> 
               <td> 
                  <select name="Country"> 
                     <option value="-1" selected>[choose yours]</option> 
                     <option value="1">USA</option> 
                     <option value="2">UK</option> 
                     <option value="3">INDIA</option> 
                  </select> 
               </td> 
            </tr> 
 
            <tr> 
               <td align="right"></td> 
               <td><input type="submit" value="Submit" /></td> 
            </tr> 
 
         </table> 
      </form> 
 
   </body> 
 </html> 
```

#### Saída

Vigia [aqui](https://liveweave.com/LP9eOP)

### Validação Básica de Formulários

Primeiro, vamos ver como fazer uma validação básica de formulário. Na forma acima, estamos chamando validate () para validar os dados quando o evento onsubmit está ocorrendo. o O código a seguir mostra a implementação desta função `validate()` .

```html

<script type="text/javascript"> 
   // Form validation code will come here. 
   function validate() 
      { 
 
         if( document.myForm.Name.value == "" ) 
         { 
            alert( "Please provide your name!" ); 
            document.myForm.Name.focus() ; 
            return false; 
         } 
 
         if( document.myForm.EMail.value == "" ) 
         { 
            alert( "Please provide your Email!" ); 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
 
         if( document.myForm.Zip.value == "" || 
         isNaN( document.myForm.Zip.value ) || 
         document.myForm.Zip.value.length != 5 ) 
         { 
            alert( "Please provide a zip in the format #####." ); 
            document.myForm.Zip.focus() ; 
            return false; 
         } 
 
         if( document.myForm.Country.value == "-1" ) 
         { 
            alert( "Please provide your country!" ); 
            return false; 
         } 
         return( true ); 
      } 
 </script> 
```

#### Saída

Vigia [aqui](https://liveweave.com/pCPTnP)

### Validação de formato de dados

Agora veremos como podemos validar nossos dados de formulário inseridos antes de enviá-los ao servidor da web.

O exemplo a seguir mostra como validar um endereço de email inserido. Um endereço de e-mail deve conter pelo menos um sinal "@" e um ponto (.). Além disso, o '@' deve não é o primeiro caractere do endereço de e-mail, e o último ponto deve ser pelo menos um caractere após o sinal "@".

#### Exemplo:

```html

<script type="text/javascript"> 
    function validateEmail() 
      { 
         var emailID = document.myForm.EMail.value; 
         atpos = emailID.indexOf("@"); 
         dotpos = emailID.lastIndexOf("."); 
 
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         { 
            alert("Please enter correct email ID") 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
         return( true ); 
      } 
 </script> 
```

#### Saída

Vigia [aqui](https://liveweave.com/nznVs6)

### Restrições de Formulário HTML5

Algumas das restrições HTML5 comumente usadas para `<input>` são o atributo `type` (por exemplo, `type="password"` ), `maxlength` , `required` e `disabled` . Menos A restrição comumente usada é o attrinute `pattern` que usa a expressão regular JavaScript.

### Bibliotecas de validação

Exemplos de bibliotecas de validação incluem:

*   [Validate.js](http://rickharrison.github.com/validate.js/)
*   [Validação](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
*   [Válido8](http://unwrongest.com/projects/valid8/)

### Mais Informações

*   [Validação de dados de formulário | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
*   [Validação de restrição | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
*   [Ponto de tutoriais](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm)