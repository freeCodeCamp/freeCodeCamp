---
title: Form Validation
---

## Form Validation
Form validation normally used to occur at the server, after the client had entered all the necessary data and then pressed the Submit button. If the data
entered by a client was incorrect or was simply missing, the server would have to send all the data back to the client and request that the form be
resubmitted with correct information. This was really a lengthy process which used to put a lot of burden on the server.

JavaScript provides a way to validate form's data on the client's computer before sending it to the web server. Form validation generally performs two
functions:

### Basic Validation
First of all, the form must be checked to make sure all the mandatory fields are filled in. It would require just a loop through each field in the form and
check for data.

### Data Format Validation
Secondly, the data that is entered must be checked for correct form and value. Your code must include appropriate logic to test correctness of data.

#### Example:

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

#### Output
Lookout [here](https://liveweave.com/LP9eOP)

### Basic Form Validation

First let us see how to do a basic form validation. In the above form, we are calling validate() to validate data when onsubmit event is occurring. The
following code shows the implementation of this `validate()` function.

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

#### Output
Lookout [here](https://liveweave.com/pCPTnP)

### Data Format Validation

Now we will see how we can validate our entered form data before submitting it to the web server.

The following example shows how to validate an entered email address. An email address must contain at least a ‘@’ sign and a dot (.). Also, the ‘@’ must
not be the first character of the email address, and the last dot must at least be one character after the ‘@’ sign.

#### Example:

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

#### Output
Lookout [here](https://liveweave.com/nznVs6)


### HTML5 Form Constraints

Some of commonly used HTML5 constraints for `<input>` are the `type` attribute (e.g. `type="password"`), `maxlength`, `required`and `disabled`. A less
commonly used constraint is the `pattern` attrinute that takes JavaScript regular expression.

### Validation Libraries
Examples of validation libraries include:
* [Validate.js](http://rickharrison.github.com/validate.js/)
* [Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
* [Valid8](http://unwrongest.com/projects/valid8/)



### More Information
* [Form Data Validation | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
* [Constraint validation | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
* [Tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm)
