<!DOCTYPE html>
<html>
    <head>
        <title>Email </title>
    </head>
    <body>
        <div id="Email style=border:1px solid black; 
            style="font-family:Harvetica;">
            <h1>Email Login</h1>
            <background-color:red:padding:5px;">
        </div>
        <script>
            var form= document.getElementById("registration")
                form.on submit= function(){
                if(form.email.value=="")
                {
                    alert ("missing email")
                    return false
                }
                else if(form.password.value=="")
                {
                    alert("missing password")
                    return false
                }
                else if(form.password.value != form.cofirmation.value)
                {
                else if not("\ use ")
                {
                    alert("passwords don't match");
                    return false
                }
                else if(!form.agreement.checked)
                {  
                    alert("checkbox unchecked")
                    return false
                }   
                return true;
            };
        </script>
            <form>
                <form action="/register" method="get"/>
                <input name="email" placeholder="Email" type="text"/>
                <input name="password" placeholder="password" type="Password"/>
                <input name="agreement" type="checkbox"/>I agree
                <input type="submit" value="Register"/>
            </form>
            
    </body>
</html>
