---
title: Set Up D3
---
  
## HTML Setup

For now, you will just use a text file and the web browser. You will start with with a static page of HTML. Then you will add d3.js.
Create a folder named d3js_projects. Create an HTML file in the folder named project_1.html.

Start with a basic HTML webpage:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <p>Hello!</p>
  </body>
</html>
```

Which shows up in the browser:

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

### D3.js Setup

To get the main D3.js JavaScript file go to the D3.js Website. After the first paragraph on the page, you will see a section with links to the latest version. Download the latest version d3.v5.min.js. Save this file in the d3js_projects folder.

The file d3.v5.min.js is saved in the same folder as the HTML file so that it can be referenced it easily. We reference the JavaScript file from the head of the HTML file. Our updated HTML file now looks like this:

```html
<!DOCTYPE html>
 <html>
   <head>
     <script type="text/javascript" src="d3.v5.min.js"></script>
   </head>
   <body>
     <p>Hello!</p>
   </body>
 </html>
 ```
 
 Source File Setup Test
 
 To test our D3.js setup we open the inspect element tool kit. In the Element tab of the Webkit Inspector, we open all of the elements so that we can see the whole HTML structure. We then hover over the d3.v5.min.js src.
 
 ![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)
 
 When we click on the link, it takes us to the sources tab. This will show the D3.js minified code.
 
 ![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)
 
 ### JavaScript Console Setup Test
 
 The last test will take place in the JavaScript Console. This test tells us if D3.js is loaded correctly for our use in the JavaScript Console.
 In this snapshot, locate the "Console" tab in the Webkit Inspector: 
 
 ![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)
 
 When you click on the tab, it will show you a blank screen where you can type and evaluate JavaScript.
 
 ![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)
 
 In the JavaScript console, type the following:
 
 ```javascript
 alert("hello");
 ```
 
 This will cause a popup alert to pop up and say "Hello!". This is what it looks like: 
 
 ![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)
 
 Now to test if D3.js is loaded correctly. Type a lowercase "d3" into the Console followed by a period:
 
  ```javascript
 d3
 ```
 
 If we have D3.js installed correctly, the following should appear:
 
 ![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)
 
 If all the tests passed and you were able to load D3.js correctly, you are ready to get started.
 
 ### Simple Code to get you Started
 
 Here is a simple Code with the use of D3JS library. Just copy paste it into a file and save it in html format ex. index.html or hello.html . You can name the file whatever You like but append .html at the end so that it could be rendered as a valid html file. Open it in a Web browser by double clicking it.
 
 ```
 <!DOCTYPE html>
<html>

<head>

	<script src="https://d3js.org/d3.v5.min.js"></script>

</head>

<body>

<script>
		
	d3.select("body")
		.append("p")
			.style("color","red")
				.text("A Hello using D3JS");
				
</script>

</body>

</html>
 
 ```
    
 #### More Information
