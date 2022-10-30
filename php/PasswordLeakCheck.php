<!-- 
Name : Password Breach Checker
Authon : Devesh Singh
Description : This Script Check for Password Breaches.
If the entered Password Matched in any Leaked Password Database , then it warns about it.
-->

<html>
    <head>
        <title>Password Breach Checker | Devesh Singh </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <?php function password_check($password_check_input){$sha1_password=strtoupper(sha1($password_check_input));$sha1_password_short=substr($sha1_password,0,5);$curl=curl_init();curl_setopt_array($curl,array(CURLOPT_URL=>"https://api.pwnedpasswords.com/range/$sha1_password_short",CURLOPT_RETURNTRANSFER=>true,CURLOPT_ENCODING=>"",CURLOPT_MAXREDIRS=>10,CURLOPT_TIMEOUT=>30,CURLOPT_HTTP_VERSION=>CURL_HTTP_VERSION_1_1,CURLOPT_CUSTOMREQUEST=>"GET",CURLOPT_HTTPHEADER=>array("content-type: text/plain"),));$response=curl_exec($curl);$err=curl_error($curl);$lines=explode(PHP_EOL,$response);$hitcounter=0;foreach($lines as $line=>$row){$row=$sha1_password_short.$row;$row=explode(':',$row);$row=$row[0];if($row==$sha1_password){$hitcounter++;}}curl_close($curl);if($err){echo "Unable to connect to database !";}else{if($hitcounter>0){echo "<div class='result red'><i>".$_POST['password']."</i> &nbsp is <b>breached</b> ! </div>";}else{echo "<div class='result'><i>".$_POST['password']."</i> &nbsp is <b>Not Leaked</b></b></div>";}}} ?>

    </head>
    <body>
        <style>
            .header,.result{margin-top:30px;text-align:center}.header,.passbox,.result{text-align:center}*{font-size:larger;font-family:'Courier New',Courier,monospace}body{background:#13aba5;background:linear-gradient(90deg,#13aba5 12%,#2377b6 50%,#13aba5 100%)}.passbox{right:30%;width:max-content;height:auto;margin:auto;top:100px;padding:30px;border:1px solid #008cff;border-radius:5px;background-color:#ddecf3}.passbox input[type=text]{margin:7px;border-radius:4px;border-color:#fff;border-style:solid;padding-left:5px}.passbox input[type=submit]{border:5px beige;padding:5px 10px;border-radius:5px;background:#008cff;color:#fff;font-weight:700;margin-top:15px}.passbox input[type=text]:focus,.result{border:2px solid #008cff}.passbox input:hover{border-color:#008cff}.header{font-weight:bolder;font-size:xxx-large;color:#fff}.footer{position:fixed;margin-left:40%;bottom:0;color:#fff;font-size:medium}.result{width:fit-content;color:#000;padding:10px;background-color:#83ffbf;border-radius:5px;margin-left:30%}.result.red{background-color:#ff8686;border-color:red;color:#fff}
        </style>

        <p class="header">Password Breach Checker</p>

        <div class="passbox">
            <form method="post" action="#">
                <b> Enter Password</b>
                <br><input type="text" name ="password" placeholder="password" title="Enter your password to check" required><br>
                <input type="submit" value="Check">
            </form>
        </div>

        <?php
            if (!isset($_POST['password'])) {
            } else{
                echo password_check($_POST['password']) ;
            }
        ?>

        <p class="footer">
            &copy 2022 Made with ❤️ by Devesh Singh.
        </p>
    </body>
</html>
