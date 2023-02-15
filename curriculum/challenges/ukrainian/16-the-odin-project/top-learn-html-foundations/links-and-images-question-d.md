---
id: 637f702872c65bc8e73dfe33
videoId: ta3Oxx7Yqbo
title: Links and Images Question D
challengeType: 15
dashedName: links-and-images-question-d
---

# --description--


Generally, there are two kinds of links you will create:

- Links to pages on other websites on the internet

- Links to pages located on your own websites


## Absolute Links
Links to pages on other websites on the internet are called absolute links. A typical absolute link will be made up of the following parts: `protocol://domain/path`. An absolute link will always contain the protocol and domain of the destination.

You’ve already seen an absolute link in action. The link you created to The Odin Project’s About page earlier was an absolute link as it contains the protocol and domain.

`https://www.theodinproject.com/about`

## Relative Links
Links to other pages within your own website are called relative links. Relative links do not include the domain name, since it is another page on the same site, it assumes the domain name will be the same as the page you created the link on.

Relative links only include the file path to the other page, relative to the page you are creating the link on. This is quite abstract, let’s see this in action using an example.

Within the `odin-links-and-images` directory, create another HTML file named `about.html` and paste the following code into it:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
```

Back in the `index` page, add the following anchor element to create a link to the `about` page:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="about.html">About</a>
</body>
```

Open the `index.html` file in a browser and click on the about link to make sure it is all wired together correctly. Clicking the link should go to the `about` page you just created.

This works because the `index` and `about` page are in the same directory. That means you can simply use its name (`about.html`) as the link’s `href` value.

But you will usually want to organize your website directories a little better. Normally you would only have the `index.html` at the root directory and all other HTML files in their own directory.

Create a directory named `pages` within the `odin-links-and-images` directory and move the `about.html` file into this new directory.

Refresh the `index` page in the browser and then click on the `about` link. It will now be broken. This is because the location of the `about` page file has changed.

To fix this, you just need to update the `about` link `href` value to include the `pages/` directory since that is the new location of the `about.html` file relative to the `index.html` file.

```html
<body>
  <h1>Homepage</h1>
  <a href="pages/about.html">About</a>
</body>
```

Refresh the `index` page in the browser and try clicking the `about` link again, it should now be back in working order.

In many cases, this will work just fine; however, you can still run into unexpected issues with this approach. Prepending `./` before the link will in most cases prevent such issues. By adding `./` you are specifying to your code that it should start looking for the file/directory relative to the **current** directory.

```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```

# --question--

## --assignment--

Watch Kevin Powell’s HTML File Structure video above.

## --text--

What is the difference between an absolute and a relative link?

## --answers--

An absolute link is a link to another page on the current website. A relative link is a link to another website.

---

An absolute link is a link to another website. A relative link is a link another page on the current website.

---

There is no difference between absolute and relative links.

## --video-solution--

2
