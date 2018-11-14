---
title: Photoshop
---
## Photoshop

Adobe Photoshop is a raster(pixel) based image editing software that is used by a wide arrange of content creators for graphic/photograph creation and editing. Developers or designers typically use Photoshop to create or modify assets and photographs for websites.  Some developers also use photoshop for website designs and mockups, but other tools such as Adobe Experience Design and Sketch are becoming more commonly used.  Adobe Photoshop is available for both Windows and Mac, but currently not Linux.

A common thing a developer could do in photoshop, is modify the pixel size and resolution (72dpi for web) of an image for proper web use and modify images to have transparent backgrounds (using filetypes .gif, and .png). It is a common practice to reduce the size of an image to be the largest that it will need to be used for on a website.  This reduces server space and loading times and Photoshop is a tool to achieve this.  

### Summary
* Raster based image editing software
* A Photoshop file is a .psd, can export to most image filetypes.
* Photoshop uses pixels. Make sure to create assets large enough, as scaling larger isn't possible without degradation.
* Downloads available for Windows and Mac through Adobe subscriptions.
* Becoming less commonly used for website/ User Interface mockups.
* Many advanced tools and features for photo editing that might not be needed for developers.  

Photoshop was created in 1988 and is the industry standard for various image manipulation tasks such as:

* Photo manipulation such as cropping images, quickly changing colors
* Designing <a href='https://en.wikipedia.org/wiki/Mockup' target='_blank' rel='nofollow'>mock-ups</a> for websites or apps
* Designing logos<sup>1</sup>
* Creating <a href='http://styletil.es/' target='_blank' rel='nofollow'>style tiles</a>
* Designing icons

Photoshop is used by web designers, mobile app designers, UX designers, and photographers, among other industry professionals.

### How is Photoshop different than other tools?

Designers starting out usually want to know the difference between Photoshop and Illustrator to understand which tool to use:

Photoshop creates raster images, meaning you are able to see the pixels on the image if you zoom in closely. 

Illustrator, on the other hand, creates vector graphics. Vector graphics are able to be resized into any shape without any pixelation.

For example:

![vector vs raster example](https://raw.githubusercontent.com/cecyc/textures/master/vector-vs-raster.jpg)

A photograph is a raster image, an illustration is a vector image.

Choose Photoshop when you need to work with a combination of media formats (photographs, text), or when you do not care about resizing without pixelation.

### Installation

Adobe Photoshop is part of the Creative Cloud suite of programs. You can install a free, 7-day trial of Photoshop <a href='https://www.adobe.com/products/photoshop/free-trial-download.html' target='_blank' rel='nofollow'>via the Adobe website</a>. After the trial, you will need to select a price option that works for you.

If all you need is Photoshop, you can choose the Single Application option, which is $19.99/month, and it includes access to TypeKit (a good source for fonts) and 20GB of storage.

Students and teachers can get an <a href='http://www.adobe-students.com/creativecloud/buy/students.html' target='_blank' rel='nofollow'>educational discount here</a>.

### Basics

#### Starting a new document

When you first open Photoshop, you will likely see a dialog box that will ask if you want to:

* Open an existing document
* Create a new document

If you do not see this, you can go to `File` > `New...` or use the `CMD` / `ctrl` + `N`keyboard shortcut.

For web projects, you will want to choose a lower resolution or dpi (dots per pixel). The standard is 72 dpi.

For print projects, you should choose a higher resolution. At least 300 dpi is recommended.

#### Overview

![Photoshop window view](https://raw.githubusercontent.com/cecyc/textures/master/photoshop-view.png)

When you open Photoshop, you will see a couple major components.

The tools palette on the left and the palette section on the right.

The tools palette has all of the tools you need to manipulate or edit an image (see Tools section below).

Some tools have a palette of their own, which you will see on the palettes section on the right. You can control which palettes you see on your palette view by going to `Window` and toggling the various palettes available. 

The canvas is the workspace for your project. You can move elements around the canvas, and resize the canvas. Anything not on the canvas will not be viewable.

#### Tools

![Photoshop Tools palette](https://raw.githubusercontent.com/cecyc/textures/master/tools-palette.png)

1. Move tool: move elements around the canvas.

2. Marquee tool: mark and edit a rectangular or circular selection on a layer.

3. Lasso tool: free-form selection tool you can use to draw a selection area.

4. Magic wand tool: make a selection from a specific color in an image.

5. Crop tool: crop the size of your canvas.

6. Eye dropper tool: select a color from an image and load it into you color palette.

7. Spot healing brush tool: clone an area from an image, and blend it into a different part of the image. Use it to retouch and blend.

8. Brush tool: free form drawing.

9. Clone stamp tool: copy and paste certain pixels from an image. Use it to retouch.

10. History brush: restores color and other properties to an image based on history. Use it to correct mistakes.

11. Eraser tool: free-form erasing.

12. Paint bucket tool: fill a selection with color (default foreground color).

13. Blur tool: free-form blurring of an image.

14. Dodge tool: lighten a section of an image.

15. Pen tool: use to draw a path or make a selection with finer precision.

16. Horizontal type tool: type text on a horizontal line (default foreground color).

17. Path selection tool: select a drawn path.

18. Custom shape tool: select from a variety of shape presets to draw onto the canvas.

19. Hand tool: move around the canvas.

20. Magnifying glass tool: Zoom in or out of the canvas.

At the very bottom, you can set the foreground and background colors. You can quickly toggle foreground and background colors by pressing the `x` key.

#### Layers

The layers palette is accessible from the right side of the window on the palettes section.

A project is made up of multiple layers. Each element on the project is its own layer. Layers are stackable.

In the example below, the "circle" layer is on top of the "A" layer on the layers palette. This means the circle is rendered on top of the letter "A" on the canvas.

Every time you want to prevent a layer from casual adjustments you can lock it by selecting it from the layers window and pressing the lock button.

You can also give a title to each layer. This is a good practice in particular when you work with complex compositions. Simply double-click on the layer title in the layers window to re-name it. Which is a good segway into using folders, which you should also do for good practices in big projects.

![Layers palette](https://raw.githubusercontent.com/cecyc/textures/master/layers.png)

#### Importing fonts

A Photoshop Creative Cloud license comes with a free <a href='https://typekit.com/' target='_blank' rel='nofollow'>Typekit</a> account. Typekit is a font foundry where you can find fonts for digital or print use. 

To add fonts from Typekit: 

1. Select the Horizontal Type Tool from the Tools palette.
2. Click on the font selector drop down on the upper left-hand corner. 
3. Click on `add fonts from Typekit`

![Add fonts from Typekit](https://raw.githubusercontent.com/cecyc/textures/master/add-from-typekit.png)

This will open a browser window and take you to the Typekit website, where you can add fonts to your Photoshop Creative Cloud account (make sure you are logged in with your Adobe account credentials). Once added to your account, these fonts will be available to you when using the Type tool.

#### Exporting files

Click on `File` > `Export`. 

You can then select `Quick export to PNG`, which in most cases is fine for web use.

If you need another format, select `File` > `Export` > `Export as...`. There, you can select from `PNG`, `JPG`, or `GIF`.

### Photoshop Keyboard Shortcuts

| Tools Shortcuts          | MAC  | WIN  |
|--------------------------|------|------|
|  Move tool               |   V  |   V  |  
| Rectangular Marquee tool |   M  |   M  |   
| Elliptical Marquee tool  |   M  |   M  |
| Lasso tool               |   L  |   L  |
| Polygonal Lasso tool     |   L  |   L  |
| Magnetic Lasso tool      |   L  |   L  |
| Magic Wand tool          |   W  |   W  |
| Quick Selection tool     |   W  |   W  |
| Crop tool                |   C  |   C  |
| Slice tool               |   C  |   C  |
| Slice Select tool        |   C  |   C  |
| Eyedropper tool          |   I  |   I  |
| Color Sampler tool       |   I  |   I  |
| Ruler tool               |   I  |   I  |
| Note tool                |   I  |   I  |
| Count tool               |   I  |   I  |
| Spot Healing Brush tool  |   J  |   J  |
| Healing Brush tool       |   J  |   J  |
| Patch tool               |   J  |   J  |
| Red Eye tool             |   J  |   J  |
| Brush tool               |   B  |   B  |
| Pencil tool              |   B  |   B  |
| Color Replacement tool   |   B  |   B  |
| Mixer Brush tool         |   B  |   B  |
| Clone Stamp tool         |   S  |   S  |
| Pattern Stamp tool       |   S  |   S  |

### Alternatives to Photoshop

* <a href='http://www.pixelmator.com/mac/' target='_blank' rel='nofollow'>Pixelmator</a> (Mac only)
* <a href='https://www.gimp.org/' target='_blank' rel='nofollow'>GIMP</a> (Mac and PC)

### Online Alternatives to Photoshop

* [Pixlr](https://pixlr.com/)
* [Photopea](https://www.photopea.com/) (The only online tool to edit .psd files)

#### Footnotes

1. While you can design logos in Photoshop, most designers chose to use Illustrator for logos, as Illustrator creates vector images that can make it easier to resize logos for multiple uses, such as small logos for business cards, or large logos for banner signs.
2. You can create your own brushes in Photoshop, using Brush Preset option. You can also import brushes. This allows you to not limit yourself to given default brushes. 
3. It is easier and better to use Photoshop in case you are making artworks using graphic tablets, since you have multiple options for brushes, something which isn't there in Illustrator.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* <a href='https://www.adobe.com/products/photoshop.html' target='_blank' rel='nofollow'>Official Website</a>
* <a href='https://www.psprint.com/resources/difference-between-raster-vector/' target='_blank' rel='nofollow'>Raster vs. Vector graphics</a>
* <a href='https://helpx.adobe.com/support/photoshop.html?promoid=5NHJ8FD2&mv=other' target='_blank' rel='nofollow'>Learn and Support</a>

Alternatives: Gimp (available on Linux and free)
[Link to Gimp Website for Download](https://www.gimp.org/)

