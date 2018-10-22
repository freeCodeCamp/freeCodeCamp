---
title: Basic HTML
---
## Basic HTML

All html files must start with ```<!DOCTYPE html>```

Every html element is inside ```<html></html>```

Many html structure is inside ```<body></body>```

```html
<!doctype html>
<html>

  <head>
    <title></title>
  </head>
  
  <body>
  </body>
</html>  
```
###Headings

With the tags <h1></h1>, <h2></h2>, <h3></h3>,..., <h6></h6> we define the headlines of our webpage. For example

```html
<!DOCTYPE html>
<html>
	<body>

		<h1>Very important</h1>
		<h2>Important</h2>
		<h3>Mmmmm...</h3>

	</body>
</html>

###Paragraph

With the tag <p></p> we define a new paragraph

```html
<!DOCTYPE html>
<html>
	<body>

		<p> I am nice.</p>

	</body>
</html>
```

###Images

With the tag <img> we define a new image

```html
<!DOCTYPE html>
<html>
	<body>

		<img src = "image.jpg" alt = "Ooo">

	</body>
</html>
```

In the above element the we define some attributes, such as src (source of the image) and alt (The text which will be displayed if the image does't load properly)
