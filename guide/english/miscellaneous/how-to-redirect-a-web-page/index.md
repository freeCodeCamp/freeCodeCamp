---
title: How to Redirect a Web Page
---
## How to Redirect a Web Page

To redirect your site visitors to a new page, add a line in your head section as follows:
```html 
<html>
   <head>
      
      <script type="text/javascript">
         <!--
            function Redirect() {
               window.location="http://www.tutorialspoint.com";
            }
         //-->
      </script>
      
   </head>
   
   <body>
      <p>Click the following button, you will be redirected to home page.</p>
      
      <form>
         <input type="button" value="Redirect Me" onclick="Redirect();" />
      </form>
      
   </body>
</html>
```

There is another option if you just want to change the page as soon as they reach that page:

```javascript
window.location.assign("https://www.yournewwebsite.fakewebsite");
```
Replacing the website with your website. The one should go inside of a JavaScript file.