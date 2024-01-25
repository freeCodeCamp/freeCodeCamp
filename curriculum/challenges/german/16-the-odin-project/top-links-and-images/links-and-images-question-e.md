---
id: 637f702372c65bc8e73dfe32
videoId: 0xoztJCHpbQ
title: Links and Images Question E
challengeType: 15
dashedName: links-and-images-question-e
---

# --description--

Websites would be fairly boring if they could only display text. Luckily HTML provides a wide variety of elements for displaying all sorts of different media. The most widely used of these is the image element.

To display an image in HTML you use the `<img>` element. Unlike the other elements you have encountered, the `<img>` element is self-closing. Empty, self-closing HTML elements do not need a closing tag.

Anstatt den Inhalt mit einem öffnenden und abschließenden Tag zu umschließen, wird ein Bild mit einem `src`-Attribut in die Seite eingebettet, das dem Browser mitteilt, wo sich die Bilddatei befindet. The `src` attribute works much like the `href` attribute for anchor tags. It can embed an image using both absolute and relative paths.

For example, using an absolute path you can display an image located on The Odin Project site:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/gORbExZ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=gORbExZ&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_gORbExZ"></iframe>

To use images that you have on your own websites, you can use a relative path.

- Create a new directory named `images` within the `odin-links-and-images` project.

- Next, download <a href="https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640" target="_blank">this image</a> and move it into the `images` directory you just created.

- Rename the image to `dog.jpg`.

Finally add the image to the `index.html` file:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="pages/about.html">About</a>

    <img src="images/dog.jpg">
</body>
```

Save the `index.html` file and open it in a browser to view Charles in all his glory.


## Parent Directories

What if you want to use the dog image in the `about` page? You would first have to go up one level out of the pages directory into its parent directory so you could then access the images directory.

To go to the parent directory you need to use two dots in the relative filepath like this: `../.` Let’s see this in action, within the `body` of the `about.html` file, add the following image below the heading you added earlier:

```html
<img src="../images/dog.jpg">
```

To break this down:

- First, you are going to the parent directory of the pages directory which is `odin-links-and-images`.

- Then, from the parent directory, you can go into the `images` directory.

- Finally, you can access the `dog.jpg` file.

Using the metaphor we used earlier, using `../` in a filepath is kind of like stepping out from the room you are currently in to the main hallway so you can go to another room.

## `Alt` attribute

Besides the `src` attribute, every image element should also have an `alt` (alternative text) attribute.

The `alt` attribute is used to describe an image. It will be used in place of the image if it cannot be loaded. Es wird auch bei Screenreader verwendet, um sehbehinderten Benutzern das Bild zu beschreiben.

This is how the The Odin Project logo example you used earlier looks with an `alt` attribute included:
<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/ExXjoEp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=ExXjoEp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_ExXjoEp"></iframe>

# --assignment--

Watch Kevin Powell’s HTML Images Video above.

# --question--

## --text--

Which tag is used to display an image?

## --answers--

`<link>`

---

`<a>`

---

`<img>`

## --video-solution--

3
